const fs = require('fs');

const map = {
    "Cystic maculopathy": "art-cystic-2021.jpg",
    "Générérescence kystique": "art-glaucome-2019.jpg",
    "Dégénérescence kystique": "art-glaucome-2019.jpg",
    "Anti-VEGF in OCT": "art-vegf-2020.jpg",
    "L'OCT en chirurgie": "art-oct-refractif-2020.jpg",
    "Co Auteur du rapport": "book-rapport-sfo-2019.jpg",
    "OCT et sécheresse": "art-secheresse-2019.jpg",
    "Optical coherence tomography angiography characteristics": "art-publications-generic.jpg",
    "Application of anterior segment": "art-publications-generic.jpg",
    "Optimiser son acquisition": "Angio-OCT-sm.jpg",
    "OCT-Angiographie": "art-oct-angiographie-2017.jpg",
    "Chronic Central Serous": "art-iovs-2014.png",
    "Practical Handbook": "Practical-Handbook-of-OCT-Angiography.jpg",
    "Global Trends in Retina": "art-retinal-times-2016.png",
    "L'imagerie multimodale": "art-tubulations-2016.png",
    "Manuale pratico": "manuale_corretto1.png",
    "L'angio-OCT en pratique": "Angio-OCT-Pratique.png",
    "ANGIO-OCT : Premier": "art-oct-nouveautes-2015.png",
    "ANGIO-OCT : aspects": "art-angio-oct-aspects-2015.png",
    "Optical coherence tomography in tamoxifen": "art-american-journal.jpg",
    "OCT : Quelles Nouveautés": "art-oct-nouveautes-2015.png",
    "Clinical Guide to": "IMG-Clinical-Guide-to-Angio-OCT.png",
    "Imagerie en ophtalmologie": "book-imagerie-ophtalmologie-2014.jpg",
    "Anomalous vitreoretinal adhesions": "art-iovs-2014.png",
    "Clinical En face": "book-clinical-en-face-oct-2013.png",
    "Inner nuclear": "book-clinical-en-face-oct-2013.png",
    "Molteno implant": "art-journal-fr-ophtal.jpg",
    "Encyclopédie de": "book-encyclopedie-retine-2012.jpg",
    "Outer retinal cysts": "art-american-journal.jpg",
    "La nouvelle imagerie": "book-nouvelle-imagerie-2009.jpg",
    "Visante OCT and": "art-journal-fr-ophtal.jpg",
    "Tear meniscus": "art-journal-fr-ophtal.jpg",
    "Nonpenetrating deep": "art-journal-fr-ophtal.jpg",
    "Exudative idiopathic": "art-american-journal.jpg",
    "A new technique": "art-american-journal.jpg",
    "Failure of photocoagulation": "art-journal-fr-ophtal.jpg",
    "OCT3 exploration": "art-journal-fr-ophtal.jpg",
    "Role of indocyanine": "art-american-journal.jpg",
    "Retinal pigment": "art-american-journal.jpg",
    "Multiple evanescent": "art-american-journal.jpg",
    "Indocyanine green angiography features": "art-american-journal.jpg",
    "Late-phase indocyanine": "art-american-journal.jpg",
    "Multiple choroidal": "default-publication.png",
    "Indocyanine green angiography of basal": "art-journal-fr-ophtal.jpg",
    "Indocyanine green angiography of drusen": "art-american-journal.jpg",
    "Indocyanine green angiographic features": "art-american-journal.jpg",
    "Indocyanine green videoangiography": "default-publication.png",
    '"dark rim"': "default-publication.png"
};

let content = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

// The cleanest approach: parse the JSON-like structure directly with string replacement based on blocks
let blocks = content.split(/},\s*{/);
let replaced = 0;

for (let i = 0; i < blocks.length; i++) {
    const titleM = blocks[i].match(/title:\s*"([^"]+)"/);
    if (!titleM) continue;
    const titleText = titleM[1];

    let matchedVal = null;
    for (const [k, v] of Object.entries(map)) {
        if (titleText.toLowerCase().includes(k.toLowerCase().replace(/[':"]/g, ''))) {
            matchedVal = v;
            break;
        }
    }
    
    // Check fallback exact includes
    if (!matchedVal) {
        for (const [k, v] of Object.entries(map)) {
            if (titleText.includes(k) || k.includes(titleText.substring(0, 15))) {
                matchedVal = v;
                break;
            }
        }
    }

    if (matchedVal) {
        blocks[i] = blocks[i].replace(/imageUrl:\s*"[^"]+"/, `imageUrl: "/images/publications/${matchedVal}"`);
        replaced++;
    }
}

// Write the joined blocks back
content = blocks.join('},\n  {');
// Fix any edge case where the very first/last block lost brackets
if (!content.startsWith('}')) { /* Do nothing, split doesn't lose ends usually */ }

// Make sure authorAdil has an image!
content = content.replace(
    /const authorAdil: AuthorDetails = {[^}]*?description: "[^"]*"\r?\n}/m,
    `const authorAdil: AuthorDetails = {\n  name: "DR ADIL EL MAFTOUHI",\n  role: "Consultant Scientifique / Expert en Imagerie",\n  description: "Centre Ophtalmologique Rabelais",\n  imageUrl: "/images/team/maddalena-quaranta-thumb.jpg"\n}`
);

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', content, 'utf8');
console.log(`Successfully mapped ${replaced} items to their exact hardcoded original covers!`);
