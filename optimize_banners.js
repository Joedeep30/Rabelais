const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const imagesToProcess = [
  // Equipe Medicale
  { url: 'https://centrerabelaislyon.fr/wp-content/themes/Placeholder/images/ims.jpg', dest: 'equipe-medicale-ophtalmologiste-lyon.webp' }, 
  // Plateau Technique
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner11.jpg', dest: 'equipement-imagerie-oculaire.webp' }, 
  // Offre de Soins
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner9.jpg', dest: 'traitements-maladies-retine-lyon.webp' },
  // Generic / GEO pages / RDV / Directions
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg', dest: 'cabinet-ophtalmologie-lyon-centre.webp' }
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
