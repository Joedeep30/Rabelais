const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const allFiles = walk(srcDir);
let changedCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Equipement Medicale
  content = content.replace(/url\(['"]?(https:\/\/centrerabelaislyon\.fr)?\/wp-content\/uploads\/2015\/09\/slider4\.jpg['"]?\)/g, "url('/images/hero/equipe-medicale-ophtalmologiste-lyon.webp')");
  
  // Offre de soins
  content = content.replace(/url\(['"]?(https:\/\/centrerabelaislyon\.fr)?\/wp-content\/uploads\/2015\/10\/banner9\.jpg['"]?\)/g, "url('/images/hero/traitements-maladies-retine-lyon.webp')");

  // Plateau Technique
  content = content.replace(/url\(['"]?(https:\/\/centrerabelaislyon\.fr)?\/wp-content\/uploads\/2015\/10\/banner11\.jpg['"]?\)/g, "url('/images/hero/equipement-imagerie-oculaire.webp')");

  // Replace any remaining generic WP ones
  content = content.replace(/url\(['"]?(https:\/\/centrerabelaislyon\.fr)?\/wp-content\/uploads\/2015\/09\/slider[1-35]\.jpg['"]?\)/g, "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')");
  content = content.replace(/url\(['"]?(https:\/\/centrerabelaislyon\.fr)?\/wp-content\/uploads\/2015\/10\/banner8\.jpg['"]?\)/g, "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')");
  
  // Publications Content 
  content = content.replace(/url\(['"]?\/thumbs\/banner10\.jpg['"]?\)/g, "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated backgrouhd image -> ${path.relative(srcDir, file)}`);
    changedCount++;
  }
});

console.log(`Updated ${changedCount} files.`);
