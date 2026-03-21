const fs = require("fs");

const target = "c:/Users/jeffo/Downloads/Rabelais-/src/app/publications/page.tsx";
let content = fs.readFileSync(target, "utf-8");

// Replace the 3 we know
content = content.replace(
  'imageUrl: "/images/publications/art-oct-refractif-2020.png"',
  'imageUrl: "/images/publications/art-oct-refractif-2020.jpg"'
);
content = content.replace(
  'imageUrl: "/images/publications/art-glaucome-2019.png"',
  'imageUrl: "/images/publications/art-glaucome-2019.jpg"'
);
content = content.replace(
  'imageUrl: "/images/publications/art-secheresse-2019.png"',
  'imageUrl: "/images/publications/art-secheresse-2019.jpg"'
);

const missing = [
  "art-pdgf-2017.png",
  "book-angio-oct.png",
  "art-diabetic-2016.png",
  "book-practical-handbook.png",
  "art-csc-2015.png",
  "book-angio-oct-pratique.png",
  "art-switch-2014.png",
  "book-imagerie.png",
  "book-clinical-guide.png",
  "book-retine.png",
  "book-manuale.png",
];

missing.forEach((m) => {
  const regex = new RegExp(`[ \\t]*imageUrl:\\s*"\\/images\\/publications\\/${m}",?\\r?\\n?`, "g");
  content = content.replace(regex, "");
});

fs.writeFileSync(target, content);
