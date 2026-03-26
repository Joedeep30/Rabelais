const fs = require('fs');
const html = fs.readFileSync('.planning/raw_plateau.html', 'utf8');

// The caption is often right after the image or in a figcaption or div.
// Let's just regex all `<img src="...">` and capture the next 100 characters to see the text.

const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
let match;
while ((match = imgRegex.exec(html)) !== null) {
  if (match[1].includes('logo') || match[1].includes('icon')) continue;
  
  // get next 150 chars after the <img> tag
  let context = html.substring(match.index + match[0].length, match.index + match[0].length + 150);
  // strip HTML tags to get pure text
  context = context.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  console.log('IMG:', match[1]);
  console.log('CTX:', context.substring(0, 60));
  console.log('---');
}
