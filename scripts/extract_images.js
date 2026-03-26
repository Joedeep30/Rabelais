const https = require('https');

https.get('https://centrerabelaislyon.fr/publications/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const rows = data.split('<div class="row tt-event-list');
    rows.slice(1).forEach(row => {
        const titleMatch = row.match(/<h4[^>]*>(.*?)<\/h4>/s);
        const imgMatch = row.match(/<img[^>]*src="([^"]+)"/s);
        if (titleMatch) {
            const title = titleMatch[1].replace(/<[^>]*>?/gm, '').trim();
            const img = imgMatch ? imgMatch[1] : 'NO_IMAGE';
            console.log('TITLE: ' + title + ' ||| IMG: ' + img);
        }
    });
  });
}).on('error', err => console.error(err));
