const fs = require('fs');
const data = fs.readFileSync('ouvrages.html', 'utf8');

const titleRegex = /<a href="javascript:void\(0\)" class="title-team">(.*?)<\/a>/gs;
let match;
while ((match = titleRegex.exec(data)) !== null) {
  let titleHtml = match[1];
  let titleText = titleHtml.replace(/<img[^>]*>/g, '').trim();
  let imgMatch = titleHtml.match(/<img[^>]*src="([^"]+)"/);
  let imgUrl = imgMatch ? imgMatch[1] : 'NONE';
  console.log('TITLE: ' + titleText);
  console.log('IMAGE: ' + imgUrl);
  console.log('---');
}
