const fs = require('fs');
const { execSync } = require('child_process');

let pristine = execSync('git show 478164043420752ddca47b8506ab1566d1b956cf:src/app/publications/page.tsx', { encoding: 'utf-8' });
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
    if (titleM) {
        let t = titleM[1].trim();
        
        let targetImg = map[t];
        if (!targetImg) {
            // Try fuzzy match
            for (let k in map) {
                if (k.toLowerCase() === t.toLowerCase() || (k.length > 20 && k.substring(0, 20).toLowerCase() === t.substring(0, 20).toLowerCase())) {
                    targetImg = map[k];
                    break;
                }
            }
        }
        
        if (targetImg) {
            cParts[i] = cParts[i].replace(/imageUrl:\s*"[^"]+"/, `imageUrl: "${targetImg}"`);
            replaced++;
        }
    }
}

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', cParts.join('  },'), 'utf8');
console.log("Restored " + replaced + " pristine images.");
