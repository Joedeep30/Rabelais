const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/pathologies-retiniennes/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const anatomies = [
    "oeil.webp", "cornee.webp", "iris.webp", "cristallin.webp", "vitre.webp", "retine.webp"
];

let changed = false;
anatomies.forEach(file => {
    // Regex to match <img src="/images/pathologies/FILE" ... >
    const regex = new RegExp(`<img\\s+src="/images/pathologies/${file.replace('.', '\\.')}"[^>]*>`, 'g');
    
    content = content.replace(regex, (match) => {
        if (!match.includes('pointer-events')) {
            changed = true;
            let newMatch = match.replace('<img ', '<img oncontextmenu="return false;" draggable="false" ');
            if (newMatch.includes('style="')) {
                newMatch = newMatch.replace('style="', 'style="pointer-events: none; user-select: none; -webkit-user-drag: none; ');
            } else {
                newMatch = newMatch.replace('/>', ' style="pointer-events: none; user-select: none; -webkit-user-drag: none;" />')
                                 .replace('>', ' style="pointer-events: none; user-select: none; -webkit-user-drag: none;">');
            }
            return newMatch;
        }
        return match;
    });
});

if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("✅ Updated page.tsx with right-click and drag CSS protection for anatomy images!");
} else {
    console.log("No changes made or already protected.");
}
