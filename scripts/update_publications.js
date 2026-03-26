const fs = require('fs');
let content = fs.readFileSync('src/app/publications/page.tsx', 'utf8');

content = content.replace(
  /title: "Angio-OCT In Everyday Ophthalmic Practice",\s+authors: "Dr Maddalena Quaranta-El Maftouhi",\s+journal: "Jaypee \(Book\)",\s+date: "2016",\s+year: 2016,\s+type: "book",/g,
  `title: "Angio-OCT In Everyday Ophthalmic Practice",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2016",
    year: 2016,
    type: "book",
    imageUrl: "/images/publications/Angio-OCT-sm.jpg",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Practical Handbook of OCT Angiography",\s+authors: "Dr Maddalena Quaranta-El Maftouhi",\s+journal: "Jaypee \(Book\)",\s+date: "2016",\s+year: 2016,\s+type: "book",/g,
  `title: "Practical Handbook of OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2016",
    year: 2016,
    type: "book",
    imageUrl: "/images/publications/Practical-Handbook-of-OCT-Angiography.jpg",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Nouvel ouvrage en Italien sur l'Angio-OCT",\s+authors: "Dr Maddalena Quaranta-El Maftouhi",\s+journal: "Fabiano Group \(Libro\)",\s+date: "2015",\s+year: 2015,\s+type: "book",/g,
  `title: "Nouvel ouvrage en Italien sur l'Angio-OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Fabiano Group (Libro)",
    date: "2015",
    year: 2015,
    type: "book",
    imageUrl: "/images/publications/manuale_corretto1.png",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "L'angio-OCT en pratique",\s+authors: "Dr Maddalena Quaranta-El Maftouhi",\s+journal: "Elsevier Masson \(Livre\)",\s+date: "2015",\s+year: 2015,\s+type: "book",/g,
  `title: "L'angio-OCT en pratique",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier Masson (Livre)",
    date: "2015",
    year: 2015,
    type: "book",
    imageUrl: "/images/publications/Angio-OCT-Pratique.png",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",\s+authors: "Dr Maddalena Quaranta-El Maftouhi",\s+journal: "Jaypee \(Book\)",\s+date: "2014",\s+year: 2014,\s+type: "book",/g,
  `title: "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2014",
    year: 2014,
    type: "book",
    imageUrl: "/images/publications/IMG-Clinical-Guide-to-Angio-OCT.png",
    authorDetails: defaultAuthor,`
);

// We'll also change "Imagerie en Ophtalmologie" to have authors since she wrote it.
content = content.replace(
  /title: "Imagerie en Ophtalmologie",\s+authors: "Dr Maddalena Quaranta-El Maftouhi",\s+journal: "Elsevier Masson \(Livre\)",\s+date: "2014",\s+year: 2014,\s+type: "book",/g,
  `title: "Imagerie en Ophtalmologie",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier Masson (Livre)",
    date: "2014",
    year: 2014,
    type: "book",
    authorDetails: defaultAuthor,`
);

fs.writeFileSync('src/app/publications/page.tsx', content);
console.log('Update complete!');
