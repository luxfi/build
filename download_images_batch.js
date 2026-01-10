#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const IMAGE_DIR = 'public/images/external';
const BATCH_SIZE = 5; // Download 5 images at a time to avoid timeouts

// Ensure image directory exists
if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  console.log(`Created directory: ${IMAGE_DIR}`);
}

// Read the list of external image URLs
const externalUrlsFile = 'external_image_urls.txt';
if (!fs.existsSync(externalUrlsFile)) {
  console.error('❌ external_image_urls.txt not found. Run the analysis script first.');
  process.exit(1);
}

const allUrls = fs.readFileSync(externalUrlsFile, 'utf8')
  .split('\n')
  .filter(url => url.trim() !== '');

console.log(`📋 Found ${allUrls.length} external image URLs to process`);

// Function to download an image
function downloadImage(url, destination) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Downloading: ${url}`);
    
    const file = fs.createWriteStream(destination);
    const request = https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Saved: ${destination}`);
        resolve(destination);
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {}); // Delete the file if it exists
      reject(new Error(`Error downloading ${url}: ${err.message}`));
    });
  });
}

// Function to get filename from URL
function getFilenameFromUrl(url) {
  // Remove query parameters
  const cleanUrl = url.split('?')[0];
  
  // Extract filename from path
  const pathParts = cleanUrl.split('/');
  let filename = pathParts[pathParts.length - 1];
  
  // Ensure filename has extension
  if (!filename.includes('.')) {
    filename += '.png'; // Default extension
  }
  
  // Sanitize filename and add hash to avoid conflicts
  const hash = Math.abs(url.split('').reduce((a, b) => a + b.charCodeAt(0), 0)).toString(16).substring(0, 6);
  return `${hash}_${filename.replace(/[^a-zA-Z0-9.\-]/g, '_')}`;
}

// Function to process a batch of URLs
async function processBatch(urls) {
  const results = [];
  
  for (const url of urls) {
    try {
      const filename = getFilenameFromUrl(url);
      const destination = path.join(IMAGE_DIR, filename);
      
      // Skip if already downloaded
      if (fs.existsSync(destination)) {
        console.log(`⏭️  Already exists: ${filename}`);
        results.push({ url, localPath: `/images/external/${filename}`, status: 'exists' });
        continue;
      }
      
      await downloadImage(url, destination);
      results.push({ url, localPath: `/images/external/${filename}`, status: 'downloaded' });
      
    } catch (error) {
      console.error(`❌ Failed to download ${url}: ${error.message}`);
      results.push({ url, status: 'failed', error: error.message });
    }
  }
  
  return results;
}

// Main function
async function main() {
  try {
    let processedCount = 0;
    const allResults = [];
    
    // Process URLs in batches
    for (let i = 0; i < allUrls.length; i += BATCH_SIZE) {
      const batch = allUrls.slice(i, i + BATCH_SIZE);
      console.log(`\n🚀 Processing batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} images)...`);
      
      const batchResults = await processBatch(batch);
      allResults.push(...batchResults);
      processedCount += batch.length;
      
      console.log(`📊 Progress: ${processedCount}/${allUrls.length} images processed`);
      
      // Break after first batch for now to avoid timeout
      if (processedCount >= BATCH_SIZE) {
        console.log('⏸️  Paused after first batch to avoid timeout. Run again to continue.');
        break;
      }
    }
    
    // Save results
    const mapping = {};
    allResults.forEach(result => {
      if (result.localPath) {
        mapping[result.url] = result.localPath;
      }
    });
    
    fs.writeFileSync('image-url-mapping.json', JSON.stringify(mapping, null, 2));
    console.log('📝 Saved URL mapping to image-url-mapping.json');
    
    console.log('\n📊 Summary:');
    const downloaded = allResults.filter(r => r.status === 'downloaded').length;
    const existed = allResults.filter(r => r.status === 'exists').length;
    const failed = allResults.filter(r => r.status === 'failed').length;
    
    console.log(`✅ Downloaded: ${downloaded}`);
    console.log(`⏭️  Already existed: ${existed}`);
    console.log(`❌ Failed: ${failed}`);
    
    if (processedCount < allUrls.length) {
      console.log(`\n🔄 To continue processing, run this script again.`);
    }
    
  } catch (error) {
    console.error('❌ Error in batch processing:', error.message);
    process.exit(1);
  }
}

// Run the script
main();