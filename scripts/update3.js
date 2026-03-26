const fs = require('fs');

let c = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');
const thumbs = fs.readdirSync('public/images/publications').filter(x => x.startsWith('thumb_') && x.endsWith('.png'));

let replaced = 0;
for (const thumb of thumbs) {
  const t = thumb.replace('thumb_', '').replace('.png', '');
  const searchStr = `pdfUrl: "/pdfs/${t}.pdf"`;
  const idx = c.indexOf(searchStr);
  if (idx > -1) {
    const st = c.lastIndexOf('{', idx);
    const en = c.indexOf('}', idx);
    if (st !== -1 && en !== -1) {
      let block = c.substring(st, en);
      block = block.replace(/imageUrl:\s*"[^"]+"/, `imageUrl: "/images/publications/thumb_${t}.png"`);
      c = c.substring(0, st) + block + c.substring(en);
      replaced++;
    }
  }
}
fs.writeFileSync('src/app/publications/PublicationsContent.tsx', c);
console.log('Replaced ' + replaced + ' thumbnails.');
