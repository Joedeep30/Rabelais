const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'images', 'publications');

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = 'https://centrerabelaislyon.fr' + loc;
        downloadFile(loc, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error('HTTP ' + res.statusCode)); return; }
      const ws = fs.createWriteStream(filepath);
      res.pipe(ws);
      ws.on('finish', () => { ws.close(); resolve(); });
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

// Map of unique original-site images to download with their local filenames
// These are the meaningful, publication-specific images from the scrape
const downloads = [
  // Page 1:
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2021/06/glaucoma.jpg', file: 'art-cystic-2021-alt.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2020/01/PUBLICATION012020.png', file: 'art-oct-refractif-2020-alt.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2019/07/Publication-1.png', file: 'art-publication-2019.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2019/05/EL-MAFTOUHI_RG-kystes.jpg', file: 'art-glaucome-2019-alt.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2019/02/Flag.jpg', file: 'art-secheresse-2019-alt.jpg' },
  // Page 2:
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2018/10/Front.jpg', file: 'book-rapport-sfo-2019.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/e.png', file: 'thumb-article-en.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2016/01/RETINAL-TIMES.png', file: 'art-retinal-times-2016.png' },
  // Page 3:
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2016/01/TUBULATIONS-e1452549210350.png', file: 'art-tubulations-2016.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/i.png', file: 'thumb-article-it.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/f.png', file: 'thumb-article-fr.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IMG-Angio-OCT-aspects-techniques.png', file: 'art-angio-oct-aspects-2015.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/08/Publications1.jpg', file: 'art-publications-generic.jpg' },
  // Page 4:
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/AmericanJournal.jpg', file: 'art-american-journal.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IO3-EL-MAFTOUHI-2904.png', file: 'art-oct-nouveautes-2015.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IMG-Imagerie-en-ophtalmologie.jpg', file: 'book-imagerie-ophtalmologie-2014.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IOVS-Current-and-Past-Issues-2015-11-18-20-11-25.png', file: 'art-iovs-2014.png' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IMG-Clinical-OCT-Angiography-Atlas.png', file: 'book-clinical-en-face-oct-2013.png' },
  // Page 5:
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/journal-francais-dophtalmologie.jpg', file: 'art-journal-fr-ophtal.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/encyclopedie.jpg', file: 'book-encyclopedie-retine-2012.jpg' },
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IMG-Nouvelle-Imagerie-OCT.jpg', file: 'book-nouvelle-imagerie-2009.jpg' },
  // Page 6 - mostly generic images already captured
  // Specific ARTICLE image:
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ARTICLE.png', file: 'art-article-generic.png' },
  // CDO secheresse article (alt high-res version)
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2019/02/CDO225_P0_Dossier-Secheresse-A.ElMaftouhi-v2_Page_1.jpg', file: 'art-secheresse-full-2019.jpg' },
  // The art-oct-angiographie image
  { url: 'https://centrerabelaislyon.fr/wp-content/uploads/2017/03/Capture-decran-2016-01-12-a-15.18.05.png', file: 'art-oct-angiographie-2017-alt.png' },
];

async function main() {
  let downloaded = 0;
  let failed = 0;
  
  for (const item of downloads) {
    const filepath = path.join(outDir, item.file);
    if (fs.existsSync(filepath)) {
      console.log(`SKIP: ${item.file} (already exists)`);
      continue;
    }
    try {
      console.log(`Downloading ${item.file}...`);
      await downloadFile(item.url, filepath);
      const stat = fs.statSync(filepath);
      console.log(`  OK: ${(stat.size/1024).toFixed(1)} KB`);
      downloaded++;
    } catch (e) {
      console.log(`  FAIL: ${e.message}`);
      failed++;
    }
  }
  
  console.log(`\nDone: ${downloaded} downloaded, ${failed} failed`);
}

main();
