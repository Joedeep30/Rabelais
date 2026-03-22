const fs = require('fs');
let c = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

const regex = /{([^}]+pdfUrl:\s*["']\/pdfs\/([^"']+)["'][^}]+)}/g;

c = c.replace(regex, (match, innerProps, pdfName) => {
    // Check if the thumb exists
    const thumbPath = `public/images/publications/thumb_${pdfName}.png`;
    if (fs.existsSync(thumbPath)) {
        // Replace existing imageUrl
        innerProps = innerProps.replace(/imageUrl:\s*["'][^"']+["']/, `imageUrl: "/images/publications/thumb_${pdfName}.png"`);
        return `{${innerProps}}`;
    }
    return match;
});

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', c);
console.log('Update complete.');
