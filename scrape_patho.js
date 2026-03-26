const https = require('https');
const fs = require('fs');

https.get('https://centrerabelaislyon.fr/pathologies-retiniennes/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || data.match(/<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\!-- \.content -->/i);
    if (match) {
      fs.writeFileSync('tmp_patho.html', match[1]);
      console.log('Saved to tmp_patho.html');
    } else {
      fs.writeFileSync('tmp_patho.html', data);
      console.log('Saved full HTML to tmp_patho.html (no main tag found)');
    }
  });
});
