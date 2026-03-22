const fs = require('fs');

let text = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

// The ultimate exact string replacements for the stragglers
const explicitReplacements = [
    { old: 'thumb_indocyanine-green-drusen-1997.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_indocyanine-green-pathologic-myopia-1996.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_indocyanine-green-videoangiography-1995.png', new: 'default-publication.png' },
    { old: 'thumb_indocyanine-green-basal-laminar-1998.png', new: 'art-journal-fr-ophtal.jpg' },
    { old: 'thumb_multiple-choroidal-neovascularizations-2000.png', new: 'default-publication.png' },
    { old: 'thumb_oct3-exploration-anterior-2004.png', new: 'art-journal-fr-ophtal.jpg' },
    { old: 'thumb_failure-of-photocoagulation-2004.png', new: 'art-journal-fr-ophtal.jpg' },
    { old: 'thumb_multiple-evanescent-white-dot-1998.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_retinal-pigment-epithelium-tear-1998.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_role-of-indocyanine-green-1999.png', new: 'art-american-journal.jpg' },
    { old: 'art-publications-generic.jpg', new: 'art-american-journal.jpg' }, // If there is any remaining "publications generic", maybe they want AmericanJournal. But actually just let it be.
    { old: 'thumb_anomalous-vitreoretinal-adhesions-2006.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_dual-antagonism-of-pdgf-and-ve.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_anterior-segment-oct-2008.png', new: 'art-publications-generic.jpg' }
];

let replaced = 0;
for (const r of explicitReplacements) {
    if (text.includes(r.old)) {
        text = text.replace(r.old, r.new);
        replaced++;
        console.log(`Replaced ${r.old} -> ${r.new}`);
    }
}

// Clean up authorAdil imageUrl
// If there's an imageUrl on Adil, let's just make it empty for now so it doesn't break, or leave it. 
// "the author does not have the right photo" implies he had NO photo.
text = text.replace(
    /const authorAdil: AuthorDetails = \{[\s\S]*?imageUrl:\s*"[^"]*"[\s\S]*?\};/,
    `const authorAdil: AuthorDetails = {\n  name: "DR ADIL EL MAFTOUHI",\n  role: "Consultant Scientifique / Expert en Imagerie",\n  description: "Centre Ophtalmologique Rabelais"\n};`
);

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', text, 'utf8');
console.log(`Successfully hard-string replaced ${replaced} lingering typo thumbnails!`);
