#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Configuration
const IMAGE_DIR = 'public/images/external';
const DOMAINS_TO_LOCALIZE = [
  'qizat5l3bwvomkny.public.blob.vercel-storage.com',
  'images.ctfassets.net',
  'mintcdn.com',
  'github.com'
];

// Ensure image directory exists
if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
  console.log(`Created directory: ${IMAGE_DIR}`);
}

// Function to extract URLs from content
function extractImageUrlsFromContent() {
  console.log('🔍 Scanning for external image URLs...');
  
  const contentDir = 'content';
  const imageUrls = new Set();
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (file.endsWith('.mdx') || file.endsWith('.tsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Find all image URLs
        const urlRegex = /(https?:\/\/[^\s"']+\.(png|jpg|jpeg|gif|svg|webp))(\?[^\s"']*)?/gi;
        let match;
        
        while ((match = urlRegex.exec(content)) !== null) {
          const fullUrl = match[0];
          const baseUrl = match[1];
          
          // Check if URL is from a domain we want to localize
          const isExternal = DOMAINS_TO_LOCALIZE.some(domain => 
            baseUrl.includes(domain)
          );
          
          if (isExternal) {
            imageUrls.add(baseUrl);
          }
        }
      }
    }
  }
  
  scanDirectory(contentDir);
  console.log(`📊 Found ${imageUrls.size} external image URLs to localize`);
  
  return Array.from(imageUrls);
}

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
  
  // Sanitize filename
  return filename.replace(/[^a-zA-Z0-9.\-]/g, '_');
}

// Main function
async function main() {
  try {
    // Step 1: Extract all external image URLs
    const imageUrls = extractImageUrlsFromContent();
    
    if (imageUrls.length === 0) {
      console.log('🎉 No external images found to localize!');
      return;
    }
    
    console.log('\n📋 Found the following external images:');
    imageUrls.slice(0, 10).forEach(url => console.log(`  - ${url}`));
    if (imageUrls.length > 10) {
      console.log(`  ... and ${imageUrls.length - 10} more`);
    }
    
    // Step 2: Download images
    console.log('\n🚀 Starting download process...');
    
    const downloadResults = [];
    
    for (const url of imageUrls) {
      try {
        const filename = getFilenameFromUrl(url);
        const destination = path.join(IMAGE_DIR, filename);
        
        // Skip if already downloaded
        if (fs.existsSync(destination)) {
          console.log(`⏭️  Already exists: ${filename}`);
          downloadResults.push({ url, localPath: `/images/external/${filename}` });
          continue;
        }
        
        await downloadImage(url, destination);
        downloadResults.push({ url, localPath: `/images/external/${filename}` });
        
      } catch (error) {
        console.error(`❌ Failed to download ${url}: ${error.message}`);
      }
    }
    
    console.log(`\n📊 Download complete: ${downloadResults.length} images downloaded`);
    
    // Step 3: Create mapping for replacement
    const urlMapping = {};
    downloadResults.forEach(({ url, localPath }) => {
      urlMapping[url] = localPath;
    });
    
    // Save mapping for manual review
    fs.writeFileSync('image-url-mapping.json', JSON.stringify(urlMapping, null, 2));
    console.log('📝 Saved URL mapping to image-url-mapping.json');
    
    console.log('\n🎉 Image localization process completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Review the image-url-mapping.json file');
    console.log('2. Manually update content files to use local image paths');
    console.log('3. Test the build to ensure all images load correctly');
    
  } catch (error) {
    console.error('❌ Error in image localization process:', error.message);
    process.exit(1);
  }
}

// Run the script
main();