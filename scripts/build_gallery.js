const fs = require('fs');
const path = require('path');
const list = require('c:/Users/jeffo/Downloads/Rabelais-/thumbs_list.json');

let html = '<html><body style="display:flex; flex-wrap:wrap; gap:10px;">';
list.filter(f => !f.includes('-150x') && !f.includes('-300x') && !f.includes('-768x') && !f.includes('-1024x') && (f.endsWith('.png') || f.endsWith('.jpg'))).forEach(f => {
  html += `<div><h4>${f}</h4><img src="file:///c:/Users/jeffo/Downloads/Rabelais-/thumbs/${f}" style="max-width:200px; max-height:200px;" /></div>\n`;
});
html += '</body></html>';

fs.writeFileSync('c:/Users/jeffo/Downloads/Rabelais-/public/gallery.html', html);
