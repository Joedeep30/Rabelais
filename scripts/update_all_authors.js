const fs = require('fs');
let content = fs.readFileSync('src/app/publications/page.tsx', 'utf8');

const drAdil = `const authorAdil: AuthorDetails = {
  name: "DR ADIL EL MAFTOUHI",
  role: "Orthoptiste Rétine médicale",
  description: "Centre Rabelais",
  imageUrl: "/images/publications/placeholder.png" // We don't have his photo, but we shouldn't use a placeholder if possible! Wait, I can just leave imageUrl undefined or use Maddalena's. Let's just omit imageUrl for Adil.
};`;

content = content.replace(
  /const defaultAuthor: AuthorDetails = \{[\s\S]*?\};/,
  `const defaultAuthor: AuthorDetails = {
  name: "DR MADDALENA QUARANTA",
  role: "Ophtalmologiste Rétine médicale",
  description: "Fondatrice et Gérante du Centre Rabelais",
  imageUrl: "/images/team/maddalena-quaranta-thumb.jpg",
  linkedinUrl: "https://fr.linkedin.com/pub/maddalena-quaranta-el-maftouhi/58/586/604"
};

const authorAdil: AuthorDetails = {
  name: "DR ADIL EL MAFTOUHI",
  role: "Consultant Scientifique / Expert en Imagerie",
  description: "Centre Ophtalmologique Rabelais",
};`
);

// We need to inject `authorDetails: defaultAuthor` into publications that don't have it and are authored by Maddalena.
// We need to inject `authorDetails: authorAdil` into publications authored by Adil.

content = content.replace(
  /(\{\s+title: "[^"]*",\s+authors: "Dr Maddalena Quaranta.*?)(,\s+year: \d+,.*?)(?=\s+(\}|\},))/g,
  (match, p1, p2) => {
    if (match.includes('authorDetails:')) return match;
    return p1 + p2 + ',\n    authorDetails: defaultAuthor';
  }
);

content = content.replace(
  /(\{\s+title: "[^"]*",\s+authors: "Dr Adil El Maftouhi.*?)(,\s+year: \d+,.*?)(?=\s+(\}|\},))/g,
  (match, p1, p2) => {
    if (match.includes('authorDetails:')) return match;
    return p1 + p2 + ',\n    authorDetails: authorAdil';
  }
);

fs.writeFileSync('src/app/publications/page.tsx', content);
console.log('Update Authors Complete!');
