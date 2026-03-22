const fs = require('fs');
const execSync = require('child_process').execSync;

const genericUrls = [
    '/images/publications/art-publications-generic.jpg',
    '/images/publications/art-american-journal.jpg',
    '/images/publications/art-iovs-2014.png',
    '/images/publications/art-journal-fr-ophtal.jpg',
    '/images/publications/default-publication.png'
];

let c = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');
let parts = c.split('  },');

let missingPubs = [];

for (let i = 0; i < parts.length; i++) {
    for (const g of genericUrls) {
        if (parts[i].includes(`imageUrl: "${g}"`)) {
            const titleM = parts[i].match(/title:\\s*"([^"]+)"/);
            const authorM = parts[i].match(/authors?\\s*:\\s*"([^"]+)"/);
            const journalM = parts[i].match(/journal:\\s*"([^"]+)"/);
            const yearM = parts[i].match(/year:\\s*([0-9]+)/);
            
            if (titleM) {
                const title = titleM[1];
                const author = authorM ? authorM[1] : "Dr Maddalena Quaranta-El Maftouhi";
                const journal = journalM ? journalM[1] : "Scientific Publication";
                const year = yearM ? yearM[1] : "2000";
                
                const safeFileBase = title.substring(0, 30).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                
                missingPubs.push({ title, author, journal, year, file: safeFileBase });
                
                parts[i] = parts[i].replace(`imageUrl: "${g}"`, `imageUrl: "/images/publications/thumb_${safeFileBase}.png"`);
            }
        }
    }
}

let pyContent = `
from PIL import Image, ImageDraw, ImageFont
import textwrap
import os

pubs = ${JSON.stringify(missingPubs)}

width = 600
height = 800
out_dir = "public/images/publications"

try:
    font_title = ImageFont.truetype("arialbd.ttf", 36)
    font_journal = ImageFont.truetype("arial.ttf", 24)
    font_author = ImageFont.truetype("ariali.ttf", 20)
except:
    font_title = ImageFont.load_default()
    font_journal = font_title
    font_author = font_title

for p in pubs:
    img = Image.new('RGB', (width, height), color=(245, 247, 250))
    d = ImageDraw.Draw(img)
    
    d.rectangle([(0, 0), (width, 25)], fill=(26, 54, 93))
    d.rectangle([(0, height-25), (width, height)], fill=(161, 136, 108))

    d.text((40, 60), str(p['journal']).upper()[:30], font=font_journal, fill=(26, 54, 93))
    
    lines = textwrap.wrap(p['title'], width=28)
    y_text = 120
    for line in lines:
        d.text((40, y_text), line, font=font_title, fill=(45, 55, 72))
        y_text += 45
        
    y_text += 20
    d.text((40, y_text), "... " + str(p['author'])[:35], font=font_author, fill=(74, 85, 104))
    
    d.text((40, height - 80), "SCIENTIFIC PUBLICATION  |  " + str(p['year']), font=font_journal, fill=(160, 174, 192))
    
    img.save(os.path.join(out_dir, "thumb_" + p['file'] + ".png"))
    print(f"Generated {p['file']}")
`;

fs.writeFileSync('generate_missing.py', pyContent);

console.log("Running python thumbnail generator...");
execSync('python generate_missing.py');

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', parts.join('  },'));
console.log("Successfully replaced " + missingPubs.length + " remaining generic covers.");
