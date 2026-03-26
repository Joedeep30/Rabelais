const fs = require('fs');
fetch('https://centrerabelaislyon.fr/plateau-technique/')
  .then(r => r.text())
  .then(html => {
     let matches = html.match(/<img[^>]+src="([^"]+)"[^>]*>/gi);
     // Filter out logos and WP icons
     matches = matches.filter(m => !m.includes('logo') && !m.includes('icon'));
     fs.writeFileSync('.planning/plateau_images.json', JSON.stringify(matches, null, 2));
     console.log('Saved to .planning/plateau_images.json');
  });
