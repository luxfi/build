# 🎨 Image Localization Plan

## 📊 Current Situation

The codebase contains **49 external image URLs** that should be localized to avoid dependency on external services like:
- `qizat5l3bwvomkny.public.blob.vercel-storage.com` (Vercel storage)
- `images.ctfassets.net` (Contentful)
- `mintcdn.com` (Mintlify)
- `github.com` (GitHub assets)

## 🚀 Action Plan

### Step 1: Create Local Image Directory
```bash
mkdir -p public/images/external
```

### Step 2: Download Images Manually

Here are the first 10 images that need to be downloaded:

1. `https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/lux-lux-logo.svg`
2. `https://github.com/codespaces/badge.svg`
3. `https://qizat5l3bwvomkny.public.blob.vercel-storage.com/lux-build/course-images/l1-validator-management/primary-network-3Xv3evd1fOAVXXEZ69mmrBI5AFt7AX.png`
4. `https://images.ctfassets.net/voq4a5ue459o/1f3582ac2c0c7e3dc5ba7b3175a67746/fbba1b9d2db4e6f5d28f4f1915627bfe/642610015bdc6509dbf97bbf_1_54JcPIBMZNU1_bkmOapOrQ.png`
5. `https://images.ctfassets.net/voq4a5ue459o/3d4db985173559c8152c66d947eaa8c6/a55abcafa1a6a4fc0d82719ce5185ea9/6426100118a8ff0a95f40712_1_2zL1ZrQY8vKffH9fVcy4Ig.png`
6. `https://images.ctfassets.net/voq4a5ue459o/4f048dc2a414c1a60bb67c7b299581b3/fe273d73529d1bbff8a3390e37f4eb7c/65bc12b118fad82932fc4693_KLrCXnfqjgHu9ltWr39vbTzOEfiYVFWu4O6GUGiVXll3XMCnAFVROeKf2q625pV0h0YSo7G2UywgsS9cocU3V6gRsoIOrdxoIC3.png`
7. `https://images.ctfassets.net/voq4a5ue459o/1f3582ac2c0c7e3dc5ba7b3175a67746/fbba1b9d2db4e6f5d28f4f1915627bfe/642610015bdc6509dbf97bbf_1_54JcPIBMZNU1_bkmOapOrQ.png`
8. `https://images.ctfassets.net/voq4a5ue459o/3d4db985173559c8152c66d947eaa8c6/a55abcafa1a6a4fc0d82719ce5185ea9/6426100118a8ff0a95f40712_1_2zL1ZrQY8vKffH9fVcy4Ig.png`
9. `https://mintcdn.com/avalabs-47ea3976/0zR1yC86HIu3y3oi/images/webhooks.png`
10. `https://mintcdn.com/avalabs-47ea3976/0zR1yC86HIu3y3oi/images/why_webhooks.png`

### Step 3: Manual Download Process

For each image URL:

1. **Open the URL in your browser**
2. **Right-click the image** and select "Save Image As..."
3. **Save to** `public/images/external/` directory
4. **Use the original filename** or create a descriptive one

### Step 4: Update Content Files

After downloading images, update the content files to use local paths:

**Before:**
```mdx
<img src="https://images.ctfassets.net/gcj8jwzm6086/5VHupNKwnDYJvqMENeV7iJ/fdd6326b7a82c8388e4ee9d4be7062d4/lux-lux-logo.svg" alt="Lux Logo" />
```

**After:**
```mdx
<img src="/images/external/lux-lux-logo.svg" alt="Lux Logo" />
```

### Step 5: Files That Need Updates

The main files containing external image references:

- `content/common/intro/instructors.tsx` - 12 instructor images
- `content/blog/cortina-x-chain-linearization.mdx` - 2 images
- `content/blog/durango-avalanche-warp-messaging.mdx` - 1 image
- `content/docs/api-reference/webhook-api/index.mdx` - 2 images
- `content/docs/api-reference/metrics-api/index.mdx` - 8 images
- `content/docs/api-reference/data-api/getting-started.mdx` - 2 images
- `content/docs/api-reference/data-api/data-vs-rpc.mdx` - 1 image + logos
- `content/academy/avalanche-l1/avacloudapis/02-overview/02-apis-vs-rpc.mdx` - 1 logo
- `content/academy/avalanche-l1/avacloudapis/03-environment-setup/02-setup-starter-kit.mdx` - 1 badge
- `content/academy/avalanche-l1/avacloudapis/04-erc20-token-balance-app/01-overview.mdx` - 1 badge
- `content/academy/avalanche-l1/avacloudapis/05-wallet-portfolio-app/01-overview.mdx` - 1 badge
- `content/academy/avalanche-l1/avacloudapis/06-block-explorer-app/01-overview.mdx` - 1 badge
- `content/academy/avalanche-l1/avalanche-fundamentals/04-creating-an-l1/03-network-architecture.mdx` - 1 image
- `content/academy/avalanche-l1/permissioned-l1s/01-introduction/02-multi-chain-review.mdx` - 1 image
- `content/docs/tooling/avalanche-sdk/index.mdx` - 1 image
- `content/docs/tooling/avalanche-sdk/chainkit/getting-started.mdx` - 1 image

### Step 6: Complete URL List

All 49 external image URLs are listed in `external_image_urls.txt`.

### Step 7: Verification

After updating all references:

```bash
# Test that no external image URLs remain
grep -r "https://.*\.(png|jpg|jpeg|gif|svg|webp)" content/ | grep -E "(ctfassets|vercel-storage|mintcdn|github)" | wc -l
# Should return 0
```

## 🎯 Benefits of Localization

1. **🚀 Faster page loads** - No external HTTP requests
2. **🔒 More reliable** - No dependency on external services
3. **📦 Self-contained** - Build works offline
4. **🔍 Better SEO** - Local images are easier to optimize
5. **🛡️ Privacy compliant** - No third-party tracking

## ⚠️ Important Notes

- **Backup original files** before making changes
- **Test locally** before committing
- **Use descriptive filenames** for better maintainability
- **Consider image optimization** (compression, proper formats)
- **Update alt text** while you're at it for better accessibility