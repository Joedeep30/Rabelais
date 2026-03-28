const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const destJpg = path.join(__dirname, 'public/images/hero/banner7.jpg');
const destWebp = path.join(__dirname, 'public/images/hero/publications.webp');

const file = fs.createWriteStream(destJpg);
https.get('https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner7.jpg', (response) => {
    response.pipe(file);
    file.on('finish', () => {
        file.close(() => {
            console.log('Downloaded banner7.jpg');
            const sharpCode = `
const sharp = require('sharp');
sharp('${destJpg.replace(/\\/g, '/')}').webp({quality: 85}).toFile('${destWebp.replace(/\\/g, '/')}').then(() => {
    console.log('Banner converted to WebP');
    require('fs').unlinkSync('${destJpg.replace(/\\/g, '/')}');
});
            `;
            fs.writeFileSync('temp_sharp.js', sharpCode);
            try {
                execSync('node temp_sharp.js', {stdio: 'inherit'});
                fs.unlinkSync('temp_sharp.js');
            } catch(e) {
                console.error("Sharp conversion failed");
            }
        });
    });
});

const brainDir = "C:\\Users\\jeffo\\.gemini\\antigravity\\brain\\c800707c-520d-42b7-9307-0383dd04682d";
const files = fs.readdirSync(brainDir).filter(f => f.startsWith('patho_') && f.endsWith('.png'));
const targetDir = path.join(__dirname, 'public/images/pathologies');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, {recursive: true});

const processCode = `
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const files = ${JSON.stringify(files)};
const brainDir = "${brainDir.replace(/\\/g, '/')}";
const targetDir = "${targetDir.replace(/\\/g, '/')}";

async function run() {
    for (const file of files) {
        const src = path.join(brainDir, file);
        let baseName = file.replace('patho_', '').split('_')[0];
        // Handle parts like 'trou', 'mer', 'secheresse'
        if (file.includes('patho_mer')) baseName = 'mer';
        else if (file.includes('patho_trou')) baseName = 'trou';
        else if (file.includes('patho_secheresse')) baseName = 'secheresse';
        else if (file.includes('patho_glaucome')) baseName = 'glaucome';
        else if (file.includes('patho_keratocone')) baseName = 'keratocone';
        
        const dest = path.join(targetDir, baseName + '.webp');
        
        await sharp(src)
            .resize(800, 800, { fit: 'cover' })
            .webp({ quality: 85 })
            .toFile(dest);
        console.log('Processed', dest);
    }
}
run();
`;
fs.writeFileSync('process_patho.js', processCode);
