const fs = require('fs');

let pristine = fs.readFileSync('pristine_page.tsx', 'utf16le');
let current = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

// Build map: title -> imageUrl from pristine
const map = {};
const blocks = pristine.split('  },');
for (let b of blocks) {
    const titleM = b.match(/title:\s*"([^"]+)"/);
    const imgM = b.match(/imageUrl:\s*"([^"]+)"/);
    if (titleM && imgM) {
        map[titleM[1].trim()] = imgM[1].trim();
    }
}

console.log("Found " + Object.keys(map).length + " pristine mappings.");

// Apply to current
let cParts = current.split('  },');
let replaced = 0;
for (let i = 0; i < cParts.length; i++) {
    const titleM = cParts[i].match(/title:\s*"([^"]+)"/);
    if (titleM && map[titleM[1].trim()]) {
        cParts[i] = cParts[i].replace(/imageUrl:\s*"[^"]+"/, `imageUrl: "${map[titleM[1].trim()]}"`);
        replaced++;
    }
}

// Remove any lingering thumb_ artifacts that weren't mapped from pristine, just in case
// Actually, if the pristine map covers everything (33 pubs), it should be 100% fine!

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', cParts.join('  },'), 'utf8');
console.log("Restored " + replaced + " pristine images.");
