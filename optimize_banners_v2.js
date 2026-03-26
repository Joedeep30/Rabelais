const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const imagesToProcess = [
  // Correct Equipe Medicale
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner9.jpg', dest: 'equipe-medicale-ophtalmologiste-lyon.webp' }, 
  // Correct Offre de Soins
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner8.jpg', dest: 'offre-de-soins-ophtalmologie.webp' }, 
  // Correct Etudes Cliniques
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner2.jpg', dest: 'etudes-cliniques-recherche.webp' }
];

const dir = path.join(__dirname, 'public', 'images', 'hero');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function processImages() {
  for (const item of imagesToProcess) {
    const destPath = path.join(dir, item.dest);
    console.log(`Downloading ${item.url}...`);
    
    await new Promise((resolve, reject) => {
      https.get(item.url, (res) => {
        if (res.statusCode !== 200) {
          console.log(`Failed to get ${item.url}: ${res.statusCode}`);
          return resolve();
        }
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
            console.error(`Error processing ${item.url}:`, e);
          }
          resolve();
        });
      }).on('error', reject);
    });
  }
}

processImages().then(() => console.log('Done'));
