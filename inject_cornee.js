const fs = require('fs');
let content = fs.readFileSync('src/app/pathologies-retiniennes/page.tsx', 'utf8');

const corneeTarget = '<u>1. La Cornée</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
const corneeInjection = '<u>1. La Cornée</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><img class="aligncenter size-full rounded shadow-sm" src="/images/pathologies/illustration-cornee-anatomie.webp" alt="Illustration anatomique détaillee de la cornee de l\'oeil" /></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';

if(content.includes(corneeTarget)) {
    content = content.replace(corneeTarget, corneeInjection);
    fs.writeFileSync('src/app/pathologies-retiniennes/page.tsx', content);
    console.log("Injected Cornee image");
} else {
    console.log("Cornee target not found");
}
