const fs = require('fs');

let content = fs.readFileSync('src/app/pathologies-retiniennes/page.tsx', 'utf8');

// 1. Fix the stretched images issue
content = content.replace(
  '[&_img]:rounded-lg [&_img]:shadow-sm"',
  '[&_img]:rounded-lg [&_img]:shadow-sm [&_img]:mx-auto [&_img]:w-auto [&_img]:max-w-full"'
);

// 2. Inject Iris Image
const irisTarget = '<u>2.L’iris</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
const irisInjection = '<u>2.L’iris</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><img class="aligncenter size-full rounded shadow-sm" src="/images/pathologies/illustration-iris-anatomie.webp" alt="Illustration détaillée de l\'anatomie de l\'iris de l\'oeil" /></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
if(content.includes(irisTarget)) {
    content = content.replace(irisTarget, irisInjection);
    console.log("Injected Iris image");
}

// 3. Inject Cristallin Image
const cristallinTarget = '<u>3.Cristallin</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
const cristallinInjection = '<u>3.Cristallin</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><img class="aligncenter size-full rounded shadow-sm" src="/images/pathologies/illustration-cristallin-anatomie.webp" alt="Illustration détaillée de l\'anatomie du cristallin de l\'oeil" /></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
if(content.includes(cristallinTarget)) {
    content = content.replace(cristallinTarget, cristallinInjection);
    console.log("Injected Cristallin image");
}

// 4. Inject Vitré Image
const vitreTarget = '<u>4.Le vitré</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
const vitreInjection = '<u>4.Le vitré</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><img class="aligncenter size-full rounded shadow-sm" src="/images/pathologies/illustration-corps-vitre-anatomie.webp" alt="Illustration détaillée de l\'anatomie du corps vitré de l\'oeil" /></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
if(content.includes(vitreTarget)) {
    content = content.replace(vitreTarget, vitreInjection);
    console.log("Injected Vitre image");
}

// 5. Inject Rétine Image
const retineTarget = '<u>5. La rétine</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
const retineInjection = '<u>5. La rétine</u></h3></b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><img class="aligncenter size-full rounded shadow-sm" src="/images/pathologies/illustration-retine-anatomie.webp" alt="Illustration détaillée de l\'anatomie de la rétine de l\'oeil" /></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p><p><strong>•';
if(content.includes(retineTarget)) {
    content = content.replace(retineTarget, retineInjection);
    console.log("Injected Retine image");
}

fs.writeFileSync('src/app/pathologies-retiniennes/page.tsx', content);
console.log("Done making modifications.");
