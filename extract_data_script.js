const fs = require('fs');
let content = fs.readFileSync('update_books_with_authors2.js', 'utf8');
content = content.split('// Now update the Grid rendering logic')[0];
content += "\nfs.writeFileSync('src/app/publications/page.tsx', content);\nconsole.log('Update Data Complete Done!');\n"
fs.writeFileSync('update_books_data.js', content);
