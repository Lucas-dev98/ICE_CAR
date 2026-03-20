const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  console.log('🖼️  Compressing images...');
  
  const files = await imagemin(['src/assets/*.png'], {
    destination: 'src/assets',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
        speed: 4,
      })
    ]
  });

  console.log(`✅ Compressed ${files.length} image(s)`);
  files.forEach(file => {
    console.log(`   - ${file}`);
  });
})();
