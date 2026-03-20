const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets');
const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  console.log('🖼️  Optimizing images...\n');

  // Optimize logo in src/assets
  const logoPath = path.join(assetsDir, 'logo-icecar.png');
  if (fs.existsSync(logoPath)) {
    const originalSize = fs.statSync(logoPath).size;
    
    await sharp(logoPath)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(logoPath + '.tmp');
    
    fs.renameSync(logoPath + '.tmp', logoPath);
    
    const newSize = fs.statSync(logoPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`✅ src/assets/logo-icecar.png`);
    console.log(`   ${(originalSize / 1024).toFixed(1)} kB → ${(newSize / 1024).toFixed(1)} kB (-${savings}%)\n`);
  }

  // Optimize favicon in public
  const faviconPath = path.join(publicDir, 'favicon.png');
  if (fs.existsSync(faviconPath)) {
    const originalSize = fs.statSync(faviconPath).size;
    
    await sharp(faviconPath)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(faviconPath + '.tmp');
    
    fs.renameSync(faviconPath + '.tmp', faviconPath);
    
    const newSize = fs.statSync(faviconPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`✅ public/favicon.png`);
    console.log(`   ${(originalSize / 1024).toFixed(1)} kB → ${(newSize / 1024).toFixed(1)} kB (-${savings}%)\n`);
  }

  console.log('🚀 Image optimization complete!');
}

optimizeImages().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
