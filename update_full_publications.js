const fs = require('fs');

let code = fs.readFileSync('src/app/publications/page.tsx', 'utf8');

// Build the complete publications array with ALL entries from the original site
// PDFs now point to local /pdfs/ paths
const fullPublications = `const publications: Publication[] = [
  // ===== 2021 =====
  {
    title: "Cystic maculopathy in the internal nuclear layer in glaucoma patients",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefe's Archive for Clinical and Experimental Ophthalmology",
    date: "Juin 2021",
    year: 2021,
    pdfUrl: "/pdfs/cystic-maculopathy-glaucoma-2021.pdf",
    imageUrl: "/images/publications/art-cystic-2021.jpg",
    authorDetails: defaultAuthor
  },
  // ===== 2020 =====
  {
    title: "The long-term effects of anti-VEGF therapy on the OCT angiographic appearance of neovascularization in AMD",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "International Journal of Retina and Vitreous",
    date: "Août 2020",
    year: 2020,
    pdfUrl: "/pdfs/anti-vegf-oct-angiography-2020.pdf",
    imageUrl: "/images/publications/art-vegf-2020.jpg",
    authorDetails: defaultAuthor
  },
  {
    title: "Place de l'OCT dans le bilan de chirurgie réfractive",
    authors: "Dr Adil El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Janvier 2020",
    year: 2020,
    pdfUrl: "/pdfs/oct-chirurgie-refractive-2020.pdf",
    imageUrl: "/images/publications/art-oct-refractif-2020.jpg",
    authorDetails: authorAdil
  },
  // ===== 2019 =====
  {
    title: "Dégénérescence kystique de la couche nucléaire interne chez les patients glaucomateux",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Mai 2019",
    year: 2019,
    pdfUrl: "/pdfs/degenerescence-kystique-glaucome-2019.pdf",
    imageUrl: "/images/publications/art-glaucome-2019.jpg",
    authorDetails: defaultAuthor
  },
  {
    title: "Intérêt de l'OCT dans la quantification de la sécheresse oculaire",
    authors: "Dr Adil El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie",
    date: "Février 2019",
    year: 2019,
    pdfUrl: "/pdfs/oct-secheresse-oculaire-2019.pdf",
    imageUrl: "/images/publications/art-secheresse-2019.jpg",
    authorDetails: authorAdil
  },
  // ===== 2017 =====
  {
    title: "Dual Antagonism of PDGF and VEGF in Neovascular Age-Related Macular Degeneration",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Ophthalmology",
    date: "2017",
    year: 2017,
    authorDetails: defaultAuthor
  },
  {
    title: "Angio-OCT In Everyday Ophthalmic Practice",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "Jaypee Brothers Medical Publishers",
    date: "Juillet 2017",
    year: 2017,
    imageUrl: "/images/publications/Angio-OCT-sm.jpg",
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Optimiser son acquisition en OCT-angiographie",
    authors: "Dr Adil El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie",
    date: "Février 2017",
    year: 2017,
    pdfUrl: "/pdfs/optimiser-oct-angiographie-2017.pdf",
    imageUrl: "/images/publications/art-oct-angiographie-2017.jpg",
    authorDetails: authorAdil
  },
  // ===== 2016 =====
  {
    title: "Comparison between OCT-A and fluorescein angiography for the imaging of Type 1 Neovascularization",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Investigative Ophthalmology & Visual Science",
    date: "Mai 2016",
    year: 2016,
    pdfUrl: "/pdfs/oct-a-vs-fluorescein-2016.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Practical Handbook of OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "Jaypee Brothers Medical Publishers",
    date: "2016",
    year: 2016,
    imageUrl: "/images/publications/Practical-Handbook-of-OCT-Angiography.jpg",
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Global Trends in Retina Survey",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Retina Times",
    date: "2016",
    year: 2016,
    pdfUrl: "/pdfs/global-trends-retina-2016.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "L'imagerie multimodale dans la DMLA : ne pas se limiter à l'OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Janvier 2016",
    year: 2016,
    authorDetails: defaultAuthor
  },
  // ===== 2015 =====
  {
    title: "Manuale pratico di Angiografia OCT - Angiografia OCT non invasiva, senza coloranti",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "FGE Editore",
    date: "2015",
    year: 2015,
    imageUrl: "/images/publications/manuale_corretto1.png",
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "L'angio-OCT en pratique",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "Novartis Pharmaceuticals",
    date: "2015",
    year: 2015,
    imageUrl: "/images/publications/Angio-OCT-Pratique.png",
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "ANGIO-OCT : Premier retour d'expérience",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie n°188",
    date: "2015",
    year: 2015,
    pdfUrl: "/pdfs/angio-oct-premier-retour-2015.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "ANGIO-OCT : aspects techniques et appareils disponibles en 2015",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques #225",
    date: "2015",
    year: 2015,
    pdfUrl: "/pdfs/angio-oct-aspects-techniques-2015.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Chronic Central Serous Chorioretinopathy Imaged by Optical Coherence Tomographic Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "2015",
    year: 2015,
    authorDetails: defaultAuthor
  },
  {
    title: "OCT : Quelles Nouveautés en 2015",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Congrès SFO",
    date: "2015",
    year: 2015,
    pdfUrl: "/pdfs/oct-nouveautes-2015.pdf",
    authorDetails: defaultAuthor
  },
  // ===== 2014 =====
  {
    title: "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "JP Medical Ltd",
    date: "2014",
    year: 2014,
    imageUrl: "/images/publications/IMG-Clinical-Guide-to-Angio-OCT.png",
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Imagerie en ophtalmologie",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier",
    date: "2014",
    year: 2014,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Switch from aflibercept to ranibizumab: Up to 2 years follow-up post View2 study",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Investigative Ophthalmology & Visual Science",
    date: "2014",
    year: 2014,
    authorDetails: defaultAuthor
  },
  // ===== 2013 =====
  {
    title: "Inner nuclear layer cystic degeneration, in macular area of glaucomatous patients, on 'en face' and B-scan OCT scanning",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Clinical En Face OCT Atlas - Jaypee",
    date: "2013",
    year: 2013,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Molteno implant and the vicryl tie technique: role of Visante anterior segment OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2013",
    year: 2013,
    authorDetails: defaultAuthor
  },
  // ===== 2012 =====
  {
    title: "Co Auteur de l'Encyclopédie RÉTINE",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Ed LAVOISIER",
    date: "2012",
    year: 2012,
    type: "book",
    authorDetails: defaultAuthor
  },
  // ===== 2010 =====
  {
    title: "Outer retinal cysts in exudative age-related macular degeneration: a spectral domain OCT study",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2010",
    year: 2010,
    authorDetails: defaultAuthor
  },
  // ===== 2009 =====
  {
    title: "La Nouvelle Imagerie du Segment Antérieur BSOF 2009",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Édition L / Groupe CIEL",
    date: "2009",
    year: 2009,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "New diagnosis approaches: iridocorneal angle in optical coherence tomography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2009",
    year: 2009,
    pdfUrl: "/pdfs/gonioscopy-oct-2009.pdf",
    authorDetails: defaultAuthor
  },
  // ===== 2008 =====
  {
    title: "Application of anterior segment OCT in glaucoma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2008",
    year: 2008,
    pdfUrl: "/pdfs/anterior-segment-oct-2008.pdf",
    authorDetails: defaultAuthor
  },
  // ===== 2007 =====
  {
    title: "Visante OCT and the Ahmed valve: from the anterior chamber to the posterior chamber",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2007",
    year: 2007,
    authorDetails: defaultAuthor
  },
  {
    title: "Tear meniscus in Visante OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2007",
    year: 2007,
    authorDetails: defaultAuthor
  },
  {
    title: "Co Auteur du rapport sur la DMLA de la SFO",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier / Masson - Rapport SFO",
    date: "2007",
    year: 2007,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Nonpenetrating deep sclerectomy with Aquaflow drain",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2007",
    year: 2007,
    authorDetails: defaultAuthor
  },
  // ===== 2006 =====
  {
    title: "Optical coherence tomography in tamoxifen retinopathy",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Breast Cancer Res Treat",
    date: "2006",
    year: 2006,
    pdfUrl: "/pdfs/oct-tamoxifen-retinopathy-2006.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Anomalous vitreoretinal adhesions in patients with exudative age-related macular degeneration: an OCT study",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Invest Ophthalmol Vis Sci",
    date: "2006",
    year: 2006,
    authorDetails: defaultAuthor
  },
  {
    title: "Exudative idiopathic polypoidal choroidal vasculopathy and photodynamic therapy with verteporfin",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Eur J Ophthalmol",
    date: "2006",
    year: 2006,
    authorDetails: defaultAuthor
  },
  // ===== 2004 =====
  {
    title: "Failure of photocoagulation therapy for diabetic macular edema",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2004",
    year: 2004,
    authorDetails: defaultAuthor
  },
  {
    title: "OCT3 exploration of anterior segment",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2004",
    year: 2004,
    authorDetails: defaultAuthor
  },
  // ===== 2002 =====
  {
    title: "Exudative idiopathic polypoidal choroidal vasculopathy and photodynamic therapy with verteporfin",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "2002",
    year: 2002,
    authorDetails: defaultAuthor
  },
  // ===== 2000 =====
  {
    title: "Multiple choroidal neovascularizations at the border of a myopic posterior macular staphyloma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefes Arch Clin Exp Ophthalmol",
    date: "2000",
    year: 2000,
    authorDetails: defaultAuthor
  },
  // ===== 1998 =====
  {
    title: "Indocyanine green angiography of basal laminar drusen associated with vitelliform macular degeneration",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "1998",
    year: 1998,
    authorDetails: defaultAuthor
  },
  // ===== 1997 =====
  {
    title: "Indocyanine green angiography of drusen",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "1997",
    year: 1997,
    authorDetails: defaultAuthor
  },
  // ===== 1996 =====
  {
    title: "Indocyanine green angiographic features of pathologic myopia",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "1996",
    year: 1996,
    authorDetails: defaultAuthor
  },
  // ===== 1995 =====
  {
    title: "Indocyanine green videoangiography of angioid streaks",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "British Journal of Ophthalmology",
    date: "1995",
    year: 1995,
    authorDetails: defaultAuthor
  }
];`;

// Replace the array
code = code.replace(/const publications: Publication\[\] = \[[\s\S]*?\];/, fullPublications);

fs.writeFileSync('src/app/publications/page.tsx', code);
console.log('Successfully updated publications array with ALL ' + (fullPublications.match(/title:/g) || []).length + ' entries and local PDF paths!');
