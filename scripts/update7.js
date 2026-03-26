const fs = require('fs');

let c = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');
let parts = c.split('  },');

const pdfs = [
    'angio-oct-aspects-techniques-2015',
    'angio-oct-premier-retour-2015',
    'anterior-segment-oct-2008',
    'anti-vegf-oct-angiography-2020',
    'cystic-maculopathy-glaucoma-2021',
    'degenerescence-kystique-glaucome-2019',
    'global-trends-retina-2016',
    'oct-a-vs-fluorescein-2016',
    'oct-chirurgie-refractive-2020',
    'oct-nouveautes-2015',
    'oct-secheresse-oculaire-2019',
    'oct-tamoxifen-retinopathy-2006',
    'optimiser-oct-angiographie-2017'
];

const pubs = {
    "Inner nuclear layer": "book-clinical-en-face-oct-2013",
    "Molteno implant and the vicryl": "molteno-implant-2013",
    "Outer retinal cysts in exudative": "outer-retinal-cysts-2010",
    "Visante OCT and the Ahmed valve": "visante-oct-ahmed-valve-2007",
    "Tear meniscus in Visante OCT": "tear-meniscus-visante-oct-2007",
    "Nonpenetrating deep sclerectomy with": "nonpenetrating-deep-sclerectomy-2007",
    "Anomalous vitreoretinal adhesions": "anomalous-vitreoretinal-adhesions-2006",
    "Exudative idiopathic polypoidal": "exudative-idiopathic-polypoidal-2006",
    "A new technique for sutureless": "new-technique-sutureless-2005",
    "Role of indocyanine green": "indocyanine-green-chorioretinopathy-2004",
    "Retinal pigment epithelium tear induced": "retinal-pigment-epithelium-tear-2004",
    "Multiple evanescent white dot": "multiple-evanescent-white-dot-2004",
    "Indocyanine green angiography features": "indocyanine-green-geographic-atrophy-2001",
    "Late-phase indocyanine green angiography allows": "late-phase-indocyanine-green-2000",
    "Indocyanine green angiography of drusen": "indocyanine-green-drusen-1997",
    "Indocyanine green angiographic features": "indocyanine-green-pathologic-myopia-1996",
    '"dark rim"': "dark-rim-classic-choroidal-1995"
};

let replaced = 0;

for (let i = 0; i < parts.length; i++) {
    let replacedInPart = false;
    // Check PDFs
    for (const p of pdfs) {
        if (parts[i].includes(`pdfUrl: "/pdfs/${p}.pdf"`)) {
            parts[i] = parts[i].replace(/imageUrl:\s*"[^"]+"/, `imageUrl: "/images/publications/thumb_${p}.png"`);
            replaced++;
            replacedInPart = true;
            break;
        }
    }
    
    if (replacedInPart) continue;
    
    // Check Titles
    for (const [t, f] of Object.entries(pubs)) {
        if (parts[i].includes(`title: "${t}`) || parts[i].includes(`title: ${t}`) || parts[i].includes(t)) {
            parts[i] = parts[i].replace(/imageUrl:\s*"[^"]+"/, `imageUrl: "/images/publications/thumb_${f}.png"`);
            replaced++;
            break;
        }
    }
}

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', parts.join('  },'));
console.log('Replaced ' + replaced + ' images via object chunking.');
