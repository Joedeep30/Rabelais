'use client';
import { useState } from 'react';
import PublicationImage from '@/components/PublicationImage';
type AuthorDetails = {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
};
type Publication = {
  title: string;
  authors: string;
  journal?: string;
  date: string;
  year: number;
  pdfUrl?: string;
  externalLink?: string;
  imageUrl?: string;
  description?: string;
  type?: 'article' | 'book';
  authorDetails?: AuthorDetails;
};
const defaultAuthor: AuthorDetails = {
  name: "DR MADDALENA QUARANTA",
  role: "Ophtalmologiste Rétine médicale",
  description: "Fondatrice et Gérante du Centre Rabelais",
  imageUrl: "/images/team/maddalena-quaranta-thumb.jpg",
  linkedinUrl: "https://fr.linkedin.com/pub/maddalena-quaranta-el-maftouhi/58/586/604"
};
const authorAdil: AuthorDetails = {
  name: "DR ADIL EL MAFTOUHI",
  role: "Consultant Scientifique / Expert en Imagerie",
  description: "Centre Ophtalmologique Rabelais"
};
const publications: Publication[] = [
  // ===== 2021 =====
  {
    title: "Cystic maculopathy in the internal nuclear layer in glaucoma patients 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefe's Archive for Clinical and Experimental Ophthalmology",
    date: "Juin 2021",
    year: 2021,
    pdfUrl: "/pdfs/cystic-maculopathy-glaucoma-2021.pdf",
    imageUrl: "/thumbs/glaucoma.webp",
    authorDetails: defaultAuthor
  },
  // ===== 2020 =====
  {
    title: "The long-term effects of anti-vascular endothelial growth factor therapy on the optical coherence tomography angiographic appearance of neovascularization in age-related macular degeneration",
    description: "Notre équipe a collaboré avec d'autres équipes américaines pour cette publication dans le journal International Journal of Retina and Vitreous sur le comportement des néovaisseaux observé en OCT-Angiographie durant le traitement par injections intravitréennes.",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "International Journal of Retina and Vitreous",
    date: "Août 2020",
    year: 2020,
    pdfUrl: "/pdfs/anti-vegf-oct-angiography-2020.pdf",
    imageUrl: "/thumbs/The-long-term-effects-of-anti-vascular-endothelial-growth-factor-therapy-on-the-optical-coherence-tomography-angiographic-appearance-of-neovascularization-in-age-related-macular-degeneration-pdf-1024x1024.jpg",
    authorDetails: defaultAuthor
  },
  {
    title: "Place de l'OCT dans le bilan de chirurgie réfractive 🇫🇷",
    description: "OCT dans le bilan de chirurgie réfractive",
    authors: "Dr Adil El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Janvier 2020",
    year: 2020,
    pdfUrl: "/pdfs/oct-chirurgie-refractive-2020.pdf",
    imageUrl: "/images/publications/chirurgie-refractive-flat.png",
    authorDetails: authorAdil
  },
  // ===== 2019 =====
  {
    title: "Le rapport de la société Française d'ophtalmologie sur le thème de l'imagerie par OCT 🇫🇷",
    authors: "Dr Adil El Maftouhi",
    journal: "Rapport SFO",
    date: "2019",
    year: 2019,
    imageUrl: "/images/publications/book-rapport-sfo-2019.jpg",
    type: "book",
    externalLink: "https://scholar.google.com/scholar?q=Le%20rapport%20de%20la%20soci%C3%A9t%C3%A9%20Fran%C3%A7aise%20d'ophtalmologie%20sur%20le%20th%C3%A8me%20de%20l'imagerie%20par%20OCT",
    authorDetails: authorAdil
  },
  {
    title: "Dégénérescence kystique de la couche nucléaire interne chez les patients glaucomateux 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Mai 2019",
    year: 2019,
    pdfUrl: "/pdfs/degenerescence-kystique-glaucome-2019.pdf",
    imageUrl: "/images/publications/thumb_degenerescence-kystique-glaucome-2019.png",
    authorDetails: defaultAuthor
  },
  {
    title: "Intérêt de l'OCT dans la quantification de la sécheresse oculaire 🇫🇷",
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
    imageUrl: "/images/publications/pdgf_vegf_dual_antagonism.png",
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2018/10/PIIS0161642016316360.pdf",
    externalLink: "https://centrerabelaislyon.fr/wp-content/uploads/2018/10/PIIS0161642016316360.pdf",
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
    externalLink: "https://scholar.google.com/scholar?q=Angio-OCT%20In%20Everyday%20Ophthalmic%20Practice",
    authorDetails: defaultAuthor
  },
  {
    title: "Optimiser son acquisition en OCT-angiographie 🇫🇷",
    description: "L'OCT-A (OCT-angiographie) représente une évolution de l'OCT dit «en face» constitué de nombreux B-scans avec des temps d'acquisition plus longs que le simple B-scan et donc plus propices aux artéfacts liés aux mouvements du patient, aux microsaccades de fixation ou...",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie",
    date: "Février 2017",
    year: 2017,
    pdfUrl: "/pdfs/optimiser-oct-angiographie-2017.pdf",
    imageUrl: "/images/publications/oct-angiographie-acquisition-placeholder.png",
    authorDetails: defaultAuthor
  },
  // ===== 2016 =====
  {
    title: "Comparison between OCT-A and fluorescein angiography for the imaging of Type 1 Neovascularization",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Investigative Ophthalmology & Visual Science",
    date: "Mai 2016",
    year: 2016,
    pdfUrl: "/pdfs/oct-a-vs-fluorescein-2016.pdf",
    imageUrl: "/images/publications/oct-a-vs-fluorescein-v2.png",
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
    externalLink: "https://scholar.google.com/scholar?q=Practical%20Handbook%20of%20OCT%20Angiography",
    authorDetails: defaultAuthor
  },
  {
    title: "Global Trends in Retina Survey",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Retina Times",
    date: "2016",
    year: 2016,
    pdfUrl: "/pdfs/global-trends-retina-2016.pdf",
    imageUrl: "/images/publications/thumb_global-trends-retina-2016.png",
    authorDetails: defaultAuthor
  },
  {
    title: "L'imagerie multimodale dans la DMLA : ne pas se limiter à l'OCT 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Janvier 2016",
    year: 2016,
    imageUrl: "/images/publications/art-tubulations-2016.png",
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/03/imagerie-multimodale-DMLA-2016.pdf",
    externalLink: "https://centrerabelaislyon.fr/wp-content/uploads/2016/03/imagerie-multimodale-DMLA-2016.pdf",
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
    externalLink: "https://scholar.google.com/scholar?q=Manuale%20pratico%20di%20Angiografia%20OCT%20-%20Angiografia%20OCT%20non%20invasiva%2C%20senza%20coloranti",
    authorDetails: defaultAuthor
  },
  {
    title: "L'angio-OCT en pratique 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "Novartis Pharmaceuticals",
    date: "2015",
    year: 2015,
    imageUrl: "/images/publications/Angio-OCT-Pratique.png",
    type: "book",
    externalLink: "https://scholar.google.com/scholar?q=L'angio-OCT%20en%20pratique",
    authorDetails: defaultAuthor
  },
  {
    title: "ANGIO-OCT : Premier retour d'expérience 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie n°188",
    date: "2015",
    year: 2015,
    pdfUrl: "/pdfs/angio-oct-premier-retour-2015.pdf",
    imageUrl: "/images/publications/thumb_angio-oct-premier-retour-2015.png",
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "ANGIO-OCT : aspects techniques et appareils disponibles en 2015 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques #225",
    date: "2015",
    year: 2015,
    pdfUrl: "/pdfs/angio-oct-aspects-techniques-2015.pdf",
    imageUrl: "/images/publications/thumb_angio-oct-aspects-techniques-2015.png",
    authorDetails: defaultAuthor
  },
  {
    title: "Chronic Central Serous Chorioretinopathy Imaged by Optical Coherence Tomographic Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "2015",
    year: 2015,
    imageUrl: "/images/publications/chronic-csc-oct-a.png",
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Am-J-Ophthalmol.-2015-Sep-Chronic-Central-Serous-Chorioretinopathy-Imaged-by-Optical-Coherence-Tomographic-Angiography.pdf",
    externalLink: "https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Am-J-Ophthalmol.-2015-Sep-Chronic-Central-Serous-Chorioretinopathy-Imaged-by-Optical-Coherence-Tomographic-Angiography.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "OCT : Quelles Nouveautés en 2015 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Congrès SFO",
    date: "2015",
    year: 2015,
    pdfUrl: "/pdfs/oct-nouveautes-2015.pdf",
    imageUrl: "/images/publications/thumb_oct-nouveautes-2015.png",
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
    externalLink: "https://scholar.google.com/scholar?q=Clinical%20Guide%20to%20Angio-OCT%3A%20Non%20Invasive%2C%20Dyeless%20OCT%20Angiography",
    authorDetails: defaultAuthor
  },
  {
    title: "Imagerie en ophtalmologie 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier",
    date: "2014",
    year: 2014,
    imageUrl: "/images/publications/book-imagerie-ophtalmologie-2014.jpg",
    type: "book",
    externalLink: "https://scholar.google.com/scholar?q=Imagerie%20en%20ophtalmologie",
    authorDetails: defaultAuthor
  },
  {
    title: "Switch from aflibercept to ranibizumab: Up to 2 years follow-up post View2 study 🇫🇷",
    description: "Purpose: Outcomes of patients treated solely with aflibercept A2 mg or ranibizumab R0.5 mg, after the end of the VIEW2 study, over a period of up to 2 years.",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Investigative Ophthalmology & Visual Science",
    date: "2014",
    year: 2014,
    imageUrl: "/images/publications/switch-aflibercept-v3.png",
    externalLink: "https://scholar.google.com/scholar?q=Switch%20from%20aflibercept%20to%20ranibizumab%3A%20Up%20to%202%20years%20follow-up%20post%20View2%20study",
    authorDetails: defaultAuthor
  },
  // ===== 2013 =====
  {
    title: "Inner nuclear layer cystic degeneration, in macular area of glaucomatous patients, on 'en face' and B-scan OCT scanning",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Clinical En Face OCT Atlas - Jaypee",
    date: "2013",
    year: 2013,
    imageUrl: "/images/publications/book-clinical-en-face-oct-2013.png",
    type: "book",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/23283744/",
    authorDetails: defaultAuthor
  },
  {
    title: "Molteno implant and the vicryl tie technique: role of Visante anterior segment OCT 🇫🇷",
    description: "L'implant de Molteno est un dispositif de drainage de l'humeur aqueuse qui n'est pas muni de système régulateur de flux. Pour limiter les risques d'hypotonie oculaire dans les semaines qui suivent la chirurgie, on peut placer une ou deux sutures...",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "Mai 2013",
    year: 2013,
    imageUrl: "/images/publications/art-journal-fr-ophtal.jpg",
    externalLink: "https://scholar.google.com/scholar?q=Molteno%20implant%20and%20the%20vicryl%20tie%20technique%3A%20role%20of%20Visante%20anterior%20segment%20OCT",
    authorDetails: defaultAuthor
  },
  // ===== 2012 =====
  {
    title: "Co Auteur de l'Encyclopédie RÉTINE 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Ed LAVOISIER",
    date: "2012",
    year: 2012,
    imageUrl: "/images/publications/book-encyclopedie-retine-2012.jpg",
    type: "book",
    externalLink: "https://scholar.google.com/scholar?q=Co%20Auteur%20de%20l'Encyclop%C3%A9die%20R%C3%89TINE",
    authorDetails: defaultAuthor
  },
  // ===== 2010 =====
  {
    title: "Outer retinal cysts in exudative age-related macular degeneration: a spectral domain OCT study",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2010",
    year: 2010,
    imageUrl: "/images/publications/outer_retinal_cysts.png",
    externalLink: "https://scholar.google.com/scholar?q=Outer%20retinal%20cysts%20in%20exudative%20age-related%20macular%20degeneration%3A%20a%20spectral%20domain%20OCT%20study",
    authorDetails: defaultAuthor
  },
  // ===== 2009 =====
  {
    title: "La Nouvelle Imagerie du Segment Antérieur BSOF 2009 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Édition L / Groupe CIEL",
    date: "2009",
    year: 2009,
    imageUrl: "/images/publications/book-nouvelle-imagerie-2009.jpg",
    type: "book",
    externalLink: "https://scholar.google.com/scholar?q=La%20Nouvelle%20Imagerie%20du%20Segment%20Ant%C3%A9rieur%20BSOF%202009",
    authorDetails: defaultAuthor
  },
  {
    title: "New diagnosis approaches: iridocorneal angle in optical coherence tomography 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2009",
    year: 2009,
    imageUrl: "/images/publications/iridocorneal_angle_oct.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/19515327/",
    authorDetails: defaultAuthor
  },
  // ===== 2008 =====
  {
    title: "Application of anterior segment OCT in glaucoma 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2008",
    year: 2008,

    imageUrl: "/images/publications/anterior_segment_glaucoma.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/18957906/",
    authorDetails: defaultAuthor
  },
  // ===== 2007 =====
  {
    title: "Visante OCT and the Ahmed valve: from the anterior chamber to the posterior chamber 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2007",
    year: 2007,
    imageUrl: "/images/publications/visante_ahmed_valve.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/18268451/",
    authorDetails: defaultAuthor
  },
  {
    title: "Tear meniscus in Visante OCT 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2007",
    year: 2007,
    imageUrl: "/images/publications/tear_meniscus_oct.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/17568352/",
    authorDetails: defaultAuthor
  },
  {
    title: "Co Auteur du rapport sur la DMLA de la SFO 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier / Masson - Rapport SFO",
    date: "2007",
    year: 2007,
    imageUrl: "/images/publications/book-rapport-dmla-sfo-2007.png",
    type: "book",
    externalLink: "https://scholar.google.com/scholar?q=Co%20Auteur%20du%20rapport%20sur%20la%20DMLA%20de%20la%20SFO",
    authorDetails: defaultAuthor
  },
  {
    title: "Nonpenetrating deep sclerectomy with Aquaflow drain 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2007",
    year: 2007,
    imageUrl: "/images/publications/deep_sclerectomy.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/17318110/",
    authorDetails: defaultAuthor
  },
  // ===== 2006 =====
  {
    title: "Optical coherence tomography in tamoxifen retinopathy",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Breast Cancer Res Treat",
    date: "2006",
    year: 2006,
    imageUrl: "/images/publications/tamoxifen_retinopathy.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/16541311/",
    authorDetails: defaultAuthor
  },
  {
    title: "Anomalous vitreoretinal adhesions in patients with exudative age-related macular degeneration: an OCT study",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Invest Ophthalmol Vis Sci",
    date: "2006",
    year: 2006,
    imageUrl: "/images/publications/vitreoretinal_adhesions.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/16496257/",
    authorDetails: defaultAuthor
  },
  {
    title: "Exudative idiopathic polypoidal choroidal vasculopathy and photodynamic therapy with verteporfin",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Eur J Ophthalmol",
    date: "2006",
    year: 2006,
    imageUrl: "/images/publications/verteporfin_pdt_2006.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/12140043/",
    authorDetails: defaultAuthor
  },
  // ===== 2004 =====
  {
    title: "Failure of photocoagulation therapy for diabetic macular edema 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2004",
    year: 2004,
    imageUrl: "/images/publications/photocoagulation_failure.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/15343118/",
    authorDetails: defaultAuthor
  },
  {
    title: "OCT3 exploration of anterior segment 🇫🇷",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "2004",
    year: 2004,
    imageUrl: "/images/publications/anterior_segment_oct3.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/15179301/",
    authorDetails: defaultAuthor
  },
  // ===== 2002 =====
  {
    title: "Exudative idiopathic polypoidal choroidal vasculopathy and photodynamic therapy with verteporfin",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "2002",
    year: 2002,
    imageUrl: "/images/publications/polypoidal_choroidal_2002.png",
    externalLink: "https://www.sciencedirect.com/science/article/abs/pii/S0002939402015167",
    authorDetails: defaultAuthor
  },
  // ===== 2000 =====
  {
    title: "Multiple choroidal neovascularizations at the border of a myopic posterior macular staphyloma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefes Arch Clin Exp Ophthalmol",
    date: "2000",
    year: 2000,
    imageUrl: "/images/publications/multiple_cnv.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/10664062/",
    authorDetails: defaultAuthor
  },
  // ===== 1998 =====
  {
    title: "Indocyanine green angiography of basal laminar drusen associated with vitelliform macular degeneration",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "J Fr Ophtalmol",
    date: "1998",
    year: 1998,
    imageUrl: "/images/publications/icg_basal_laminar_drusen.png",
    externalLink: "https://pubmed.ncbi.nlm.nih.gov/9759404/",
    authorDetails: defaultAuthor
  },
  // ===== 1997 =====
  {
    title: "Indocyanine green angiography of drusen",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "1997",
    year: 1997,
    imageUrl: "/images/publications/icg_drusen.png",
    externalLink: "https://www.sciencedirect.com/science/article/abs/pii/S0002939414708268",
    authorDetails: defaultAuthor
  },
  // ===== 1996 =====
  {
    title: "Indocyanine green angiographic features of pathologic myopia",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Am J Ophthalmol",
    date: "1996",
    year: 1996,
    imageUrl: "/images/publications/icg_pathologic_myopia.png",
    externalLink: "https://www.sciencedirect.com/science/article/abs/pii/S0002939414704842",
    authorDetails: defaultAuthor
  },
  // ===== 1995 =====
  {
    title: "Indocyanine green videoangiography of angioid streaks",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "British Journal of Ophthalmology",
    date: "1995",
    year: 1995,
    imageUrl: "/images/publications/icg_angioid_streaks.png",
    externalLink: "https://www.sciencedirect.com/science/article/abs/pii/S0002939414738656",
    authorDetails: defaultAuthor
  }
];
const ITEMS_PER_PAGE = 6;
export default function PublicationsContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const books = publications.filter(p => p.type === 'book');
  const articles = publications.filter(p => p.type !== 'book');
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = articles.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to articles section
    const el = document.getElementById('articles-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden mt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/publications.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-32 h-full w-full">
          <h1 className="text-white text-[32px] md:text-[52px] font-[Gotham] font-light leading-[1.1] tracking-[2px] mb-[20px] uppercase">
            Nos <strong className="font-bold">Publications</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>
      {/* Intro Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <p className="text-[#888888] text-[16px] md:text-[18px] font-light leading-[1.8] mb-4">
          Afin d&apos;apporter la meilleure prise en charge à ses patients, l&apos;équipe médicale du Centre Ophtalmologique Rabelais est impliquée dans une forte activité scientifique, faisant l&apos;objet de nombreuses publications dans des journaux ophtalmologiques nationaux et internationaux.
        </p>
      </section>
      {/* Publications Grid */}
      <section className="pb-24 px-4 max-w-6xl mx-auto w-full">
        {/* Books Section */}
        <div className="mb-16">
          <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-10 pb-[15px] text-center relative">
            Ouvrages &amp; Livres
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {books.map((pub, i) => (
              <div key={`book-${i}`} className="group bg-[#f8f8f8] border border-[#e8e8e8] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ffffff] border-b border-[#e8e8e8] flex items-center justify-center p-2">
                  {pub.imageUrl ? (
                    <PublicationImage 
                      src={pub.imageUrl} 
                      alt={pub.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#003399]/10 to-[#003399]/5 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#003399" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-3 opacity-40">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                      </svg>
                      <p className="text-[10px] text-[#003399]/60 text-center font-medium leading-tight">{pub.title}</p>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <span className="text-[11px] font-bold text-[#003399] uppercase tracking-[1px] mb-2">{pub.date} {pub.journal && `- ${pub.journal}`}</span>
                  <h3 className="text-[13px] md:text-[14px] font-bold text-slate-800 leading-[1.3] mb-4">{pub.title}</h3>
                  {/* Author Details - Anchored to bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <h4 className="text-[#c2aa84] text-[12px] font-[Gotham] font-bold uppercase tracking-wider">Authors</h4>
                    {pub.authorDetails && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          {pub.authorDetails.imageUrl && (
                            <div className="w-[45px] h-[45px] shrink-0 bg-gray-100 overflow-hidden rounded-full border border-gray-200">
                              <img src={pub.authorDetails.imageUrl} alt={pub.authorDetails.name} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex flex-col">
                            <a href={pub.authorDetails.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-slate-700 hover:text-[#003399] transition-colors flex items-center gap-1 leading-tight">
                              {pub.authorDetails.name}
                            </a>
                            <p className="text-[9px] md:text-[10px] text-[#aaa] font-light leading-[1.3] mt-1">
                              {pub.authorDetails.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Articles Section */}
        <div id="articles-section">
          <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-4 pb-[15px] text-center relative">
            Publications Scientifiques
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
          </h2>
          {/* Page counter */}
          <p className="text-center text-[13px] text-[#aaa] mb-8">
            Page {currentPage} sur {totalPages} — {articles.length} publications
          </p>
          <div className="space-y-6">
            {paginatedArticles.map((pub, i) => {
              const globalIdx = startIdx + i;
              return (
                <div 
                  key={`article-${globalIdx}`} 
                  className={`flex flex-col md:flex-row gap-6 p-6 transition-all duration-300 hover:shadow-md ${
                    globalIdx % 2 === 0 ? 'bg-[#f8f8f8] border-l-4 border-[#003399]' : 'bg-white border border-gray-100 border-l-4 border-[#c2aa84]'
                  }`}
                >
                  {/* Left Column (Image & Button) */}
                  <div className="flex flex-col w-full md:w-[240px] shrink-0">
                    {/* Preview Image or Icon Placeholder */}
                  {pub.imageUrl ? (
                    <div className="relative w-full md:w-[240px] h-[200px] md:h-auto md:aspect-[3/4] shrink-0 overflow-hidden bg-[#ffffff] border border-gray-200 group flex items-center justify-center p-2">
                      <PublicationImage 
                        src={pub.imageUrl} 
                        alt={pub.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full md:w-[240px] h-[120px] md:h-auto md:aspect-[3/4] shrink-0 overflow-hidden bg-gradient-to-br from-[#003399]/5 to-[#c2aa84]/10 border border-gray-200 flex flex-col items-center justify-center p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#003399" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-2 opacity-30">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                      <span className="text-[10px] text-[#003399]/40 font-medium uppercase tracking-wider">Publication</span>
                    </div>
                  )}

                  {/* Plus d'infos Button */}
                  {(pub.externalLink || pub.pdfUrl) && (
                    <a 
                      href={pub.externalLink || pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-4 bg-[#0033a0] text-white text-[11px] font-bold uppercase tracking-[1px] py-2.5 px-4 rounded-full hover:bg-[#002277] transition-colors text-center inline-block"
                    >
                      Plus d'infos
                    </a>
                  )}
                </div>
                {/* Text Content */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-[12px] font-bold text-[#c2aa84] uppercase tracking-[2px]">{pub.date}</span>
                      {pub.journal && (
                        <span className="text-[11px] text-[#aaa] italic hidden md:inline">— {pub.journal}</span>
                      )}
                    </div>
                    <h3 className="text-[16px] md:text-[18px] font-bold text-slate-800 leading-[1.4] mb-2">{pub.title}</h3>
                    {pub.description && (
                      <p className="text-[13px] text-[#888] font-light leading-[1.6] mb-3">{pub.description}</p>
                    )}
                    <p className="text-[13px] text-[#666] font-light mb-2">
                      <span className="text-[#003399] font-medium">{pub.authors}</span>
                    </p>
                    {pub.journal && (
                      <p className="text-[12px] text-[#aaa] italic md:hidden mb-3">{pub.journal}</p>
                    )}
                    {pub.pdfUrl && (
                      <a 
                        href={pub.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-[#003399] font-bold text-[11px] uppercase tracking-[1px] hover:text-[#c2aa84] transition-colors mb-4"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                        Voir la publication PDF
                      </a>
                    )}
                    {/* Author Details - Anchored to bottom */}
                    {pub.authorDetails && (
                      <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                        <h4 className="text-[#c2aa84] text-[13px] font-[Gotham] font-bold uppercase tracking-wider">Authors</h4>
                        <div className="flex items-start gap-4">
                          {pub.authorDetails.imageUrl && (
                            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] shrink-0 bg-gray-100 overflow-hidden rounded-full border border-gray-200">
                              <img src={pub.authorDetails.imageUrl} alt={pub.authorDetails.name} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex flex-col mt-1">
                            <a href={pub.authorDetails.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[12px] md:text-[13px] font-bold text-slate-700 hover:text-[#003399] transition-colors flex items-center gap-2">
                              {pub.authorDetails.name}
                            </a>
                            <p className="text-[11px] md:text-[12px] text-[#888] font-light leading-[1.4] mt-1">
                              {pub.authorDetails.role}<br/>
                              {pub.authorDetails.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
              {/* Prev button */}
              <button
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-[13px] font-bold uppercase tracking-wider border border-[#c2aa84] text-[#c2aa84] hover:bg-[#c2aa84] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Page précédente"
              >
                ← Préc.
              </button>
              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-[40px] h-[40px] flex items-center justify-center text-[14px] font-bold border transition-all duration-300 ${
                    page === currentPage
                      ? 'bg-[#003399] text-white border-[#003399]'
                      : 'border-[#e8e8e8] text-[#888] hover:border-[#c2aa84] hover:text-[#c2aa84]'
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              {/* Next button */}
              <button
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-[13px] font-bold uppercase tracking-wider border border-[#c2aa84] text-[#c2aa84] hover:bg-[#c2aa84] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Page suivante"
              >
                Suiv. →
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}
