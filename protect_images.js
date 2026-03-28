const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/pathologies-retiniennes/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const pathologies = [
    "diabetique.webp", "vasculaire.webp", "coats.webp", "crsc.webp", "best.webp",
    "retinite.webp", "dpv.webp", "traction.webp", "dechirure.webp", "decollement.webp",
    "trou.webp", "mer.webp", "secheresse.webp", "glaucome.webp", "keratocone.webp"
];

let changed = false;
pathologies.forEach(file => {
    // The previous injected style was: style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
    // We add pointer-events: none; -webkit-user-select: none; user-select: none; -webkit-user-drag: none; to prevent right-click and dragging.
    // However, some might have differences. This regex replaces styles containing box-shadow... with the new locked down styles.
    
    // Better way: Find `<img src="/images/pathologies/${file}"` and inject `oncontextmenu` and `draggable`.
    // And also add pointer-events: none to their style attribute if possible.
    const searchString1 = `<img src="/images/pathologies/${file}"`;
    const searchString2 = `alt="`;
    
    // We will use a regex to replace exactly the specific imgs.
    const regex = new RegExp(`<img\\s+src="/images/pathologies/${file.replace('.', '\\.')}"[^>]*>`, 'g');
    
    content = content.replace(regex, (match) => {
        if (!match.includes('pointer-events')) {
            changed = true;
            // Add oncontextmenu="return false;" draggable="false" 
            let newMatch = match.replace('<img ', '<img oncontextmenu="return false;" draggable="false" ');
            // Append pointer-events securely
            if (newMatch.includes('style="')) {
                newMatch = newMatch.replace('style="', 'style="pointer-events: none; user-select: none; -webkit-user-drag: none; ');
            } else {
                // if it doesn't have a style tag
                newMatch = newMatch.replace('/>', ' style="pointer-events: none; user-select: none; -webkit-user-drag: none;" />');
            }
            return newMatch;
        }
        return match;
    });
});

if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("✅ Updated page.tsx with right-click and drag CSS protection!");
} else {
    console.log("No changes made or already protected.");
}
