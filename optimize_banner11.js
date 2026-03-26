const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const url = 'https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner11.jpg';
const dest = 'equipement-imagerie-oculaire.webp';
const dir = path.join(__dirname, 'public', 'images', 'hero');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function processImage() {
  const destPath = path.join(dir, dest);
  console.log(`Downloading ${url}...`);
  
  await new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', async () => {
        try {
          const buffer = Buffer.concat(data);
          await sharp(buffer)
            .webp({ quality: 80 })
            .toFile(destPath);
          console.log(`Saved ${destPath}`);
        } catch(e) {
          console.error(e);
        }
        resolve();
      });
    }).on('error', reject);
  });
}

processImage();
