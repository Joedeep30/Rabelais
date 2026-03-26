const fs = require('fs');
let content = fs.readFileSync('src/app/pathologies-retiniennes/page.tsx', 'utf8');

const regex = /<img class=\"wp-image-866 size-full aligncenter\".*?COUPE-DE-L-OEIL-AEM-e1452168784959_0\.webp.*? \/>/g;
const newImgStr = '<img class="aligncenter size-full rounded shadow-sm" src="/images/pathologies/illustration-de-loeil-normal.webp" alt="Illustration anatomique globale de l\'oeil" />';

if(regex.test(content)) {
    content = content.replace(regex, newImgStr);
    fs.writeFileSync('src/app/pathologies-retiniennes/page.tsx', content);
    console.log("Injected Main Eye image");
} else {
    console.log("Main Eye target not found! Check HTML format.");
}
