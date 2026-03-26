const fs = require('fs');
let content = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

const titlesToCheck = [
    "Indocyanine green angiography of drusen",
    "Indocyanine green angiographic features of pathologic myopia",
    "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",
    "Optimiser son acquisition en OCT-angiographie"
];

const blocks = content.split('},');
for (const b of blocks) {
    for (const t of titlesToCheck) {
        if (b.includes(t)) {
            const imgMatch = b.match(/imageUrl:\s*"([^"]+)"/);
            console.log(`Title: ${t}`);
            console.log(`Image: ${imgMatch ? imgMatch[1] : 'NOT FOUND'}`);
            console.log('---');
        }
    }
}
