import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = 'F:/Salman Memon/Downloads/portfolio logos';
const outputDir = path.resolve('public/assets/img/marquee/portfolio-logos');

await fs.mkdir(outputDir, { recursive: true });

const files = (await fs.readdir(sourceDir))
  .filter((file) => /\.(avif|jpe?g|png|svg|webp)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

for (const [index, file] of files.entries()) {
  const outputName = `logo-${String(index + 1).padStart(2, '0')}.png`;
  const inputPath = path.join(sourceDir, file);
  const outputPath = path.join(outputDir, outputName);

  await sharp(inputPath, { density: 300 })
    .rotate()
    .trim({ threshold: 8 })
    .resize(240, 76, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .extend({
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`${outputName}\t${file}`);
}
