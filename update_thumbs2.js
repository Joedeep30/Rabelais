const fs = require('fs');
let c = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

const thumbs = fs.readdirSync('public/images/publications').filter(f => f.startsWith('thumb_') && f.endsWith('.png'));

for (const thumb of thumbs) {
    const pdfName = thumb.replace('thumb_', '').replace('.png', '');
    const pdfUrlStr = `pdfUrl: "/pdfs/${pdfName}.pdf"`;
    
    // Find the object block containing this pdfUrlStr
    const index = c.indexOf(pdfUrlStr);
    if (index !== -1) {
        // Find the boundary of this object
        const startIdx = c.lastIndexOf('{', index);
        const endIdx = c.indexOf('}', index);
        if (startIdx !== -1 && endIdx !== -1) {
            let block = c.substring(startIdx, endIdx + 1);
            block = block.replace(/imageUrl:\s*["'][^"']+["']/, `imageUrl: "/images/publications/${thumb}"`);
            c = c.substring(0, startIdx) + block + c.substring(endIdx + 1);
        }
    }
}

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', c);
console.log('Update complete.');
