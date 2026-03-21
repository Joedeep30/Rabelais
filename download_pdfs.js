const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const pdfs = [
  // Existing publications PDFs
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2021/06/1-s2.0-S0181551221001789-main.pdf", name: "cystic-maculopathy-glaucoma-2021.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2020/08/The-long-term-effects-of-anti-vascular-endothelial-growth-factor-therapy-on-the-optical-coherence-tomography-angiographic-appearance-of-neovascularization-in-age-related-macular-degeneration.pdf", name: "anti-vegf-oct-angiography-2020.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2020/01/RO-231-Adil-El-Maftouhi.pdf", name: "oct-chirurgie-refractive-2020.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2019/05/EL-MAFTOUHI_RG-kystes.pdf", name: "degenerescence-kystique-glaucome-2019.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2019/02/CDO225_P0_Dossier-Secheresse-A.ElMaftouhi-v2.pdf", name: "oct-secheresse-oculaire-2019.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2017/02/CDO207last_DossierOCT-A-hd_El-Maftouhi-v3-.pdf", name: "optimiser-oct-angiographie-2017.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2016/08/i1552-5783-57-9-OCT314.pdf", name: "oct-a-vs-fluorescein-2016.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/International-Corner-Winter-2015-Retina-Times-Global-Trend.pdf", name: "global-trends-retina-2016.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Angiographie-OCT-Premier-retour-exp%C3%A9rience-CDO188.pdf", name: "angio-oct-premier-retour-2015.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2015/11/ANGIO-OCT-aspects-techniques.pdf.pdf", name: "angio-oct-aspects-techniques-2015.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2015/11/IO3-EL-MAFTOUHI-2904.pdf", name: "oct-nouveautes-2015.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Gonioscopy-remains-a-standard-technique.pdf", name: "gonioscopy-oct-2009.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Application-of-anterior-segment-OCT.pdf", name: "anterior-segment-oct-2008.pdf" },
  { url: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/OCT-in-tamoxifen-retinopathy.pdf", name: "oct-tamoxifen-retinopathy-2006.pdf" },
];

const outDir = path.join(__dirname, 'public', 'pdfs');

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(outDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const makeRequest = (reqUrl) => {
      https.get(reqUrl, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          makeRequest(response.headers.location);
          return;
        }
        if (response.statusCode !== 200) {
          console.log(`  FAIL [${response.statusCode}]: ${filename}`);
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filePath);
          console.log(`  OK: ${filename} (${(stats.size / 1024).toFixed(0)} KB)`);
          resolve();
        });
      }).on('error', (err) => {
        console.log(`  ERR: ${filename} - ${err.message}`);
        reject(err);
      });
    };
    
    makeRequest(url);
  });
}

async function downloadAll() {
  console.log(`Downloading ${pdfs.length} PDFs to ${outDir}...`);
  let success = 0, fail = 0;
  
  for (const pdf of pdfs) {
    try {
      await downloadFile(pdf.url, pdf.name);
      success++;
    } catch (e) {
      fail++;
    }
  }
  
  console.log(`\nDone! ${success} downloaded, ${fail} failed.`);
}

downloadAll();
