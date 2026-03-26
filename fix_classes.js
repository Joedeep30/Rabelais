const fs = require('fs');
let content = fs.readFileSync('src/app/pathologies-retiniennes/page.tsx', 'utf8');
const search = 'className="';
const replace = 'class="';

const startIdx = content.indexOf('const customHtml = `');
const endIdx = content.lastIndexOf('`;');

if (startIdx !== -1 && endIdx !== -1) {
    let before = content.substring(0, startIdx);
    let htmlPart = content.substring(startIdx, endIdx);
    let after = content.substring(endIdx);
    
    htmlPart = htmlPart.split(search).join(replace);
    
    fs.writeFileSync('src/app/pathologies-retiniennes/page.tsx', before + htmlPart + after);
    console.log("Replaced successfully.");
} else {
    console.log("Could not find start/end.");
}
