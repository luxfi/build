#!/bin/bash
# Rebrand Avalanche -> Lux

cd /Users/z/work/lux/build

# Text replacements (case-sensitive)
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.mdx" -o -name "*.md" -o -name "*.json" -o -name "*.css" -o -name "*.mjs" \) \
  ! -path "./node_modules/*" ! -path "./.next/*" ! -path "./.git/*" \
  -exec sed -i '' \
    -e 's/Avalanche/Lux/g' \
    -e 's/avalanche/lux/g' \
    -e 's/AVALANCHE/LUX/g' \
    -e 's/AVAX/LUX/g' \
    -e 's/avax/lux/g' \
    -e 's/Avax/Lux/g' \
    -e 's/Ava Labs/Lux Network/g' \
    -e 's/ava-labs/luxfi/g' \
    -e 's/@avalabs/@luxfi/g' \
    -e 's/@avalanche-sdk/@luxfi/g' \
    -e 's/avalanchego/luxd/g' \
    -e 's/Fuji/Testnet/g' \
    -e 's/fuji/testnet/g' \
    -e 's/C-Chain/LUX-Chain/g' \
    -e 's/P-Chain/Platform-Chain/g' \
    -e 's/X-Chain/Exchange-Chain/g' \
    -e 's/#e84142/#ffffff/g' \
    -e 's/#E84142/#FFFFFF/g' \
    -e 's/rgb(232, 65, 66)/rgb(255, 255, 255)/g' \
    {} \;

echo "Rebranding complete!"
