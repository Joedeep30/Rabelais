const fs = require('fs');
const data = fs.readFileSync('ouvrages.html', 'utf8');
const boxes = data.split('<div class="box-publications">');
boxes.slice(1).forEach(box => {
  const titleMatch = box.match(/<a href="javascript:void\(0\)" class="title-team">(.*?)</);
  let title = titleMatch ? titleMatch[1].replace(/<img[^>]*>/g, '').trim() : 'NO TITLE';
  const leftPubMatch = box.match(/<div class="left-publications">(.*?)<\/div>/s);
  let imgUrl = 'NONE';
  if (leftPubMatch) {
    const imgMatch = leftPubMatch[1].match(/<img[^>]*src="([^"]+)"/);
    if (imgMatch) {
      imgUrl = imgMatch[1];
    }
  }
  console.log('TITLE: ' + title + ' ||| IMAGE: ' + imgUrl);
});
