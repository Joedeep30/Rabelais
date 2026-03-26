const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(dirPath);
  });
}

let updatedCount = 0;
console.log('--- Pages with missing banners ---');

walkDir('src/app', function(filePath) {
  if (!filePath.endsWith('page.tsx')) return;
  if (filePath.replace(/\\/g, '/') === 'src/app/page.tsx') return; // Skip homepage

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Change bg-[something]/something mix-blend to bg-black/40
  content = content.replace(/className="((?:.*?)absolute inset-0(?:.*?))bg-\[[^\]]+\]\/[0-9]+ mix-blend-multiply([^"]*)"/g, 'className="$1bg-black/40$2"');
  content = content.replace(/className="absolute inset-0 bg-\[[^\]]+\]\/[0-9]+ mix-blend-multiply"/g, 'className="absolute inset-0 bg-black/40"');

  // Change bg-black/[anything] to bg-black/40
  content = content.replace(/className="absolute inset-0 bg-black\/[0-9]+"/g, 'className="absolute inset-0 bg-black/40"');
  content = content.replace(/className="absolute inset-0 bg-black\/[0-9]+ mix-blend-multiply"/g, 'className="absolute inset-0 bg-black/40"');

  // One more catch-all
  content = content.replace(/<div className="absolute inset-0 bg-black\/[0-9]+ mix-blend-multiply"><\/div>/g, '<div className="absolute inset-0 bg-black/40"></div>');
  content = content.replace(/<div className="absolute inset-0 bg-\[[^\]]+\]\/[0-9]+ mix-blend-multiply"><\/div>/g, '<div className="absolute inset-0 bg-black/40"></div>');

  // Check if it has a banner
  const hasImg = content.includes('<img') && (content.includes('banner') || content.includes('slider'));
  const hasBgImg = content.includes('backgroundImage:') && (content.includes('banner') || content.includes('slider') || content.includes('bg-') || content.includes('header') || content.includes('http'));
  
  if (!hasImg && !hasBgImg) {
    if (!content.includes('bg-white font-[')) { // Quick check to avoid api routes or weird files
      console.log(filePath);
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    updatedCount++;
  }
});

console.log('--- Done ---');
console.log('Updated opacity in files:', updatedCount);
