const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const htmlFile = 'tmp_patho.html';
if(!fs.existsSync(htmlFile)) {
    console.error("tmp_patho.html not found");
    process.exit(1);
}

let html = fs.readFileSync(htmlFile, 'utf-8');

const startIdx = html.indexOf('<div class="content-page">');
let contentPage = '';
if (startIdx !== -1) {
    const endIdx = html.indexOf('<div class="box-footer social-ft">');
    if (endIdx !== -1) {
        let block = html.substring(startIdx, endIdx);
        const footerStart = html.indexOf('<footer');
        if (footerStart !== -1) block = html.substring(startIdx, footerStart);
        
        // Remove scripts easily without Regex parsing issues
        while(block.indexOf('<script') !== -1) {
            let sStart = block.indexOf('<script');
            let sEnd = block.indexOf('</script>', sStart);
            if(sEnd !== -1) block = block.substring(0, sStart) + block.substring(sEnd + 9);
            else break;
        }
        
        while(block.indexOf('<style') !== -1) {
            let sStart = block.indexOf('<style');
            let sEnd = block.indexOf('</style>', sStart);
            if(sEnd !== -1) block = block.substring(0, sStart) + block.substring(sEnd + 8);
            else break;
        }
        
        contentPage = block;
    }
}

const imgDir = path.join(__dirname, 'public', 'images', 'pathologies');
const heroDir = path.join(__dirname, 'public', 'images', 'hero');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(heroDir)) fs.mkdirSync(heroDir, { recursive: true });

async function downloadAndConvert(url, destPath) {
    console.log("Downloading " + url + "...");
    return new Promise((resolve, reject) => {
        let reqUrl = url;
        if (url.startsWith('//')) reqUrl = 'https:' + url;
        
        https.get(reqUrl, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return downloadAndConvert(res.headers.location, destPath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                console.error("Failed to download " + url + ": " + res.statusCode);
                return resolve(false);
            }
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', async () => {
                try {
                    const buffer = Buffer.concat(data);
                    await sharp(buffer).webp({ quality: 80 }).toFile(destPath);
                    console.log("Saved " + destPath);
                    resolve(true);
                } catch(e) {
                    console.error("Sharp error for " + url + ":", e);
                    resolve(false);
                }
            });
        }).on('error', (err) => {
            console.error("Request error for " + url + ":", err);
            resolve(false);
        });
    });
}

function processContent(content) {
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/style="[^"]*"/g, '');
    content = content.replace(/style='[^']*'/g, '');
    return content;
}

async function processAll() {
    await downloadAndConvert('https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner7.jpg', path.join(heroDir, 'pathologies-oculaires.webp'));

    const regex = /<img[^>]*src=["']([^"']+)["'][^>]*>/gi;
    let match;
    const imagesToProcess = [];
    
    while ((match = regex.exec(contentPage)) !== null) {
        imagesToProcess.push(match[1]);
    }

    for (let i = 0; i < imagesToProcess.length; i++) {
        const originalUrl = imagesToProcess[i];
        if (!originalUrl.startsWith('http')) continue;
        
        let filename = path.basename(originalUrl.split('?')[0]);
        let nameWithoutExt = filename.substring(0, filename.lastIndexOf('.'));
        if (!nameWithoutExt) nameWithoutExt = "img";
        let newHeroName = nameWithoutExt + '_' + i + '.webp';
        let dest = path.join(imgDir, newHeroName);
        
        let success = await downloadAndConvert(originalUrl, dest);
        if (success) {
            contentPage = contentPage.replace(originalUrl, '/images/pathologies/' + newHeroName);
        }
    }

    contentPage = processContent(contentPage);

    let pageTsx = "import { Metadata } from 'next';\\n";
    pageTsx += "import Image from 'next/image';\\n\\n";
    pageTsx += "export const metadata: Metadata = {\\n";
    pageTsx += "  title: 'Pathologies Oculaires | Centre Ophtalmologique Rabelais Lyon',\\n";
    pageTsx += "  description: 'Le centre Ophtalmologique Rabelais prend en charge les différentes pathologies.',\\n";
    pageTsx += "  alternates: { canonical: 'https://centrerabelaislyon.fr/pathologies-retiniennes' }\\n";
    pageTsx += "};\\n\\n";
    pageTsx += "export default function PathologiesOculairesPage() {\\n";
    pageTsx += "  return (\\n";
    pageTsx += "    <main className=\\"flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white\\">\\n";
    pageTsx += "      <section className=\\"relative h-[400px] md:h-[500px] w-full flex items-center justify-start overflow-hidden mt-0\\">\\n";
    pageTsx += "        <div className=\\"absolute inset-0 bg-cover bg-center bg-no-repeat z-0\\" style={{ backgroundImage: \\"url('/images/hero/pathologies-oculaires.webp')\\" }}>\\n";
    pageTsx += "          <div className=\\"absolute inset-0 bg-black/40\\"></div>\\n";
    pageTsx += "        </div>\\n";
    pageTsx += "        <div className=\\"relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-16 lg:px-24\\">\\n";
    pageTsx += "          <h1 className=\\"text-white text-[42px] md:text-[56px] font-[Gotham] font-light leading-tight mb-4\\">Pathologies Oculaires</h1>\\n";
    pageTsx += "          <p className=\\"text-white/90 text-[18px] md:text-[22px] font-light max-w-2xl leading-relaxed\\">Le centre Ophtalmologique Rabelais prend en charge les différentes pathologies de la rétine dont le diagnostic fait appel à de nombreux examens spécifiques permettant d\\'orienter le traitement.</p>\\n";
    pageTsx += "        </div>\\n";
    pageTsx += "      </section>\\n\\n";
    pageTsx += "      <div className=\\"bg-white\\">\\n";
    pageTsx += "        <div \\n";
    pageTsx += "          className=\\"py-16 px-4 md:px-16 lg:px-24 mx-auto w-full max-w-[1280px] prose prose-lg prose-blue max-w-none text-[#888888] leading-relaxed [&>div>h1]:text-[#003399] [&>div>h3]:text-[#003399] [&_img]:rounded-lg [&_img]:shadow-sm\\"\\n";
    pageTsx += "          dangerouslySetInnerHTML={{ __html: \`" + contentPage.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$') + "\` }}\\n";
    pageTsx += "        />\\n";
    pageTsx += "      </div>\\n";
    pageTsx += "    </main>\\n";
    pageTsx += "  );\\n";
    pageTsx += "}\\n";

    const pagePath = path.join(__dirname, 'src', 'app', 'pathologies-retiniennes', 'page.tsx');
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    fs.writeFileSync(pagePath, pageTsx);
    console.log('Successfully generated ', pagePath);
}

processAll().catch(console.error);
