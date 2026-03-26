const fs = require('fs');

const pubs = [
    {"title": "Inner nuclear layer cystic degeneration, in macular area of glaucomatous patients", "file": "book-clinical-en-face-oct-2013"},
    {"title": "Molteno implant and the vicryl tie technique: role of Visante anterior segment OCT", "file": "molteno-implant-2013"},
    {"title": "Outer retinal cysts in exudative age-related macular degeneration: a spectral domain OCT study", "file": "outer-retinal-cysts-2010"},
    {"title": "Visante OCT and the Ahmed valve: from the anterior chamber to the posterior chamber", "file": "visante-oct-ahmed-valve-2007"},
    {"title": "Tear meniscus in Visante OCT", "file": "tear-meniscus-visante-oct-2007"},
    {"title": "Nonpenetrating deep sclerectomy with Aquaflow drain", "file": "nonpenetrating-deep-sclerectomy-2007"},
    {"title": "Anomalous vitreoretinal adhesions in patients with exudative age-related macular degeneration: an OCT study", "file": "anomalous-vitreoretinal-adhesions-2006"},
    {"title": "Exudative idiopathic polypoidal choroidal vasculopathy and photodynamic therapy with verteporfin", "file": "exudative-idiopathic-polypoidal-2006"},
    {"title": "A new technique for sutureless, clear-corneal, 20-gauge incisions", "file": "new-technique-sutureless-2005"},
    {"title": "Role of indocyanine green angiography in the treatment of chronic central serous chorioretinopathy", "file": "indocyanine-green-chorioretinopathy-2004"},
    {"title": "Retinal pigment epithelium tear induced by photodynamic therapy for occult subfoveal choroidal neovascularization", "file": "retinal-pigment-epithelium-tear-2004"},
    {"title": "Multiple evanescent white dot syndrome with drusen-like appearance", "file": "multiple-evanescent-white-dot-2004"},
    {"title": "Indocyanine green angiography features of geographic atrophy in macular degeneration", "file": "indocyanine-green-geographic-atrophy-2001"},
    {"title": "Late-phase indocyanine green angiography allows differentiating between typical geographic atrophy and primary subretinal fibrosis", "file": "late-phase-indocyanine-green-2000"},
    {"title": "Indocyanine green angiography of drusen", "file": "indocyanine-green-drusen-1997"},
    {"title": "Indocyanine green angiographic features of pathologic myopia", "file": "indocyanine-green-pathologic-myopia-1996"},
    {"title": "Is the", "file": "dark-rim-classic-choroidal-1995"}
];

let c = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');
let replaced = 0;

for (const p of pubs) {
  const partial = p.title.substring(0, 20).replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
  const rxP = new RegExp(`title:\\s*["']${partial}[^"']*["'][\\\\s\\\\S]*?imageUrl:\\s*["']([^"']+)["']`);
  const partMatch = c.match(rxP);
  if(partMatch) {
    const oldUrl = partMatch[1];
    const newUrl = `/images/publications/thumb_${p.file}.png`;
    c = c.replace(partMatch[0], partMatch[0].replace(oldUrl, newUrl));
    replaced++;
  } else {
    console.log("Could not match: " + p.title);
  }
}

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', c);
console.log('Replaced ' + replaced + ' typographical covers.');
