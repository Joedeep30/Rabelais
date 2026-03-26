const fs = require('fs');
let text = fs.readFileSync('src/app/publications/PublicationsContent.tsx', 'utf8');

// The exact string replacements to remove ANY procedural placeholders and lock the original thumbnails.
const exactReplace = [
    // 1. Fix defaultAuthor
    {
        old: 'imageUrl: "/images/publications/thumb_cystic-maculopathy-glaucoma-2021.png",',
        new: 'imageUrl: "/images/team/maddalena-quaranta-thumb.jpg",'
    },
    {
        old: 'imageUrl: "/images/publications/art-cystic-2021.jpg",',
        new: 'imageUrl: "/images/team/maddalena-quaranta-thumb.jpg",'
    },
    // 2. Fix placeholders back to generic original site UI variants
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
    { old: 'art-publications-generic.jpg', new: 'art-american-journal.jpg' }, 
    { old: 'thumb_anomalous-vitreoretinal-adhesions-2006.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_dual-antagonism-of-pdgf-and-ve.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_anterior-segment-oct-2008.png', new: 'art-publications-generic.jpg' },
    // 3. Fix the newly broken specific thumbs 
    { old: 'thumb_optimiser-oct-angiographie-2017.png', new: 'Angio-OCT-sm.jpg' },
    { old: 'thumb_oct-tamoxifen-retinopathy-2006.png', new: 'art-american-journal.jpg' },
    { old: 'thumb_nonpenetrating-deep-sclerectomy-2007.png', new: 'art-journal-fr-ophtal.jpg' }
];

for (const r of exactReplace) {
    if (text.includes(r.old)) {
        text = text.replace(r.old, r.new);
        console.log("Successfully substituted: " + r.old);
    }
}

// Write the file back cleanly
fs.writeFileSync('src/app/publications/PublicationsContent.tsx', text, 'utf8');

// Ensure authorAdil gets NO image url, as he has no picture!
let lines = text.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const authorAdil:')) {
        for (let j = i; j < i + 10; j++) {
            if (lines[j].includes('imageUrl:')) {
                lines[j] = ''; // remove entirely!
            }
        }
        break;
    }
}

// Wait! Ensure defaultAuthor actually got the patch if it wasn't art-cystic
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const defaultAuthor:')) {
        for (let j = i; j < i + 10; j++) {
            if (lines[j].includes('imageUrl:')) {
                lines[j] = '  imageUrl: "/images/team/maddalena-quaranta-thumb.jpg",';
                console.log("Forced defaultAuthor imageUrl to maddalena-quaranta-thumb.jpg");
            }
        }
        break;
    }
}

fs.writeFileSync('src/app/publications/PublicationsContent.tsx', lines.join('\n').replace(/\n\s*\n/g, '\n'), 'utf8');
console.log("Master replacement script 6 completely executed locally.");
