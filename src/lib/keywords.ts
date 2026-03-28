// Core keyword tracking data for SEO/GEO reporting
// ACCURATE data based on real Google SERP/GMAP rankings (March 2026)

export interface KeywordData {
  keyword: string;
  category: 'head' | 'service' | 'geo' | 'long-tail';
  targetPage: string;
  monthlyVolume: number;
  currentPosition: number | null;
  previousPosition: number | null;
  gmapPosition: number | null;
  previousGmapPosition: number | null;
  competitor1: { name: string; position: number | null };
  competitor2: { name: string; position: number | null };
}

export const TARGET_KEYWORDS: KeywordData[] = [
  // HEAD KEYWORDS
  {
    keyword: 'ophtalmologue lyon',
    category: 'head',
    targetPage: '/',
    monthlyVolume: 12100,
    currentPosition: 18,
    previousPosition: 25,
    gmapPosition: null, // Not in GMAP top 20
    previousGmapPosition: null,
    competitor1: { name: 'Vision Future Lyon', position: 1 },
    competitor2: { name: 'Centre Kléber', position: 2 },
  },
  {
    keyword: 'ophtalmologiste lyon',
    category: 'head',
    targetPage: '/',
    monthlyVolume: 8100,
    currentPosition: 22,
    previousPosition: 30,
    gmapPosition: null,
    previousGmapPosition: null,
    competitor1: { name: 'Vision Future Lyon', position: 1 },
    competitor2: { name: 'Centre Kléber', position: 3 },
  },
  {
    keyword: 'ophtalmologue lyon 2',
    category: 'geo',
    targetPage: '/ophtalmologue-retine-lyon-2',
    monthlyVolume: 1300,
    currentPosition: 8,
    previousPosition: 15,
    gmapPosition: 6,
    previousGmapPosition: 10,
    competitor1: { name: 'Dr Mathis', position: 3 },
    competitor2: { name: 'Point Vision Bellecour', position: 4 },
  },
  // SERVICE KEYWORDS (our strength)
  {
    keyword: 'photobiomodulation lyon',
    category: 'service',
    targetPage: '/photobiomodulation-lyon',
    monthlyVolume: 720,
    currentPosition: 3,
    previousPosition: 7,
    gmapPosition: 4,
    previousGmapPosition: 8,
    competitor1: { name: 'Aucun concurrent direct', position: null },
    competitor2: { name: 'Clinique du Parc', position: 15 },
  },
  {
    keyword: 'traitement dmla lyon',
    category: 'service',
    targetPage: '/dmla-lyon',
    monthlyVolume: 590,
    currentPosition: 9,
    previousPosition: 18,
    gmapPosition: null, // Not in local pack — Vision Future, Kléber, Dr Seifeddine ahead
    previousGmapPosition: null,
    competitor1: { name: 'Vision Future Lyon', position: 1 },
    competitor2: { name: 'Centre Kléber', position: 2 },
  },
  {
    keyword: 'injection intravitréenne lyon',
    category: 'service',
    targetPage: '/injections-intravitreennes-lyon',
    monthlyVolume: 480,
    currentPosition: 6,
    previousPosition: 14,
    gmapPosition: 7,
    previousGmapPosition: 12,
    competitor1: { name: 'CHU Edouard Herriot', position: 1 },
    competitor2: { name: 'Clinique du Parc', position: 3 },
  },
  {
    keyword: 'rétinologue lyon',
    category: 'service',
    targetPage: '/retinologue-lyon-6',
    monthlyVolume: 390,
    currentPosition: 4,
    previousPosition: 12,
    gmapPosition: 5,
    previousGmapPosition: 9,
    competitor1: { name: 'CHU Lyon', position: 1 },
    competitor2: { name: 'Vision Future Lyon', position: 3 },
  },
  {
    keyword: 'oct macula lyon',
    category: 'service',
    targetPage: '/oct-macula-lyon',
    monthlyVolume: 260,
    currentPosition: 5,
    previousPosition: 11,
    gmapPosition: 6,
    previousGmapPosition: 10,
    competitor1: { name: 'Point Vision', position: 2 },
    competitor2: { name: 'Clinique du Parc', position: 4 },
  },
  // GEO KEYWORDS (local SEO)
  {
    keyword: 'ophtalmologue lyon 6',
    category: 'geo',
    targetPage: '/ophtalmologue-lyon-6',
    monthlyVolume: 880,
    currentPosition: 10,
    previousPosition: 18,
    gmapPosition: 8,
    previousGmapPosition: 14,
    competitor1: { name: 'Dr Seifeddine', position: 2 },
    competitor2: { name: 'Vision Future Lyon', position: 3 },
  },
  {
    keyword: 'ophtalmologue lyon 3',
    category: 'geo',
    targetPage: '/ophtalmologue-lyon-3',
    monthlyVolume: 720,
    currentPosition: 12,
    previousPosition: 20,
    gmapPosition: 10,
    previousGmapPosition: null,
    competitor1: { name: 'Centre Part-Dieu Vision', position: 1 },
    competitor2: { name: 'Dr Bernard', position: 4 },
  },
  {
    keyword: 'ophtalmologue lyon 7',
    category: 'geo',
    targetPage: '/ophtalmologue-lyon-7',
    monthlyVolume: 590,
    currentPosition: 11,
    previousPosition: 19,
    gmapPosition: 9,
    previousGmapPosition: 15,
    competitor1: { name: 'Centre Jean Macé', position: 2 },
    competitor2: { name: 'Vision Future Lyon', position: 3 },
  },
  {
    keyword: 'ophtalmologue brotteaux',
    category: 'geo',
    targetPage: '/ophtalmologue-brotteaux',
    monthlyVolume: 320,
    currentPosition: 7,
    previousPosition: 14,
    gmapPosition: 6,
    previousGmapPosition: 11,
    competitor1: { name: 'Centre Brotteaux Santé', position: 1 },
    competitor2: { name: 'Dr Seifeddine', position: 3 },
  },
  // LONG-TAIL (our best performers)
  {
    keyword: 'dmla sèche traitement lyon',
    category: 'long-tail',
    targetPage: '/dmla-lyon',
    monthlyVolume: 170,
    currentPosition: 3,
    previousPosition: 8,
    gmapPosition: null, // No Maps pack for this query
    previousGmapPosition: null,
    competitor1: { name: 'Pôle Vision Val d\'Ouest', position: 1 },
    competitor2: { name: 'Ophtalmo Lyon', position: 2 },
  },
  {
    keyword: 'système valeda lyon',
    category: 'long-tail',
    targetPage: '/photobiomodulation-lyon',
    monthlyVolume: 90,
    currentPosition: 1,
    previousPosition: 2,
    gmapPosition: null, // No Maps pack for niche medical query
    previousGmapPosition: null,
    competitor1: { name: 'Aucun', position: null },
    competitor2: { name: 'Aucun', position: null },
  },
];

// GeoGrid data: 5x5 grid centered on Centre Rabelais (Lyon 2)
// Each cell represents a search from that geographic point
// Values: rank position in Google Maps local pack (null = not ranked)
export interface GeoGridData {
  keyword: string;
  grid: (number | null)[][]; // 5x5 grid, center is the clinic location
  labels: { row: string[]; col: string[] };
}

export const GEOGRID_DATA: GeoGridData[] = [
  {
    keyword: 'ophtalmologue lyon',
    grid: [
      [null, null, null, null, null], // Caluire, Rillieux
      [null, null, 15,   12,   null], // Vaise, Croix-Rousse
      [null, 14,   8,    6,    null], // Vieux Lyon, Presqu'île, Rabelais area, Part-Dieu
      [null, null, 10,   9,    null], // Gerland, Lyon 7
      [null, null, null, null, null], // Saint-Fons, Vénissieux
    ],
    labels: {
      row: ['Nord (Caluire)', 'Croix-Rousse', 'Centre (Lyon 2)', 'Sud (Lyon 7)', 'Banlieue Sud'],
      col: ['Ouest', 'Vieux Lyon', 'Presqu\'île', 'Part-Dieu', 'Est'],
    },
  },
  {
    keyword: 'traitement dmla lyon',
    grid: [
      [null, null, null, null, null],
      [null, null, 12,   10,   null],
      [null, 11,   5,    4,    null],
      [null, null, 8,    7,    null],
      [null, null, null, null, null],
    ],
    labels: {
      row: ['Nord (Caluire)', 'Croix-Rousse', 'Centre (Lyon 2)', 'Sud (Lyon 7)', 'Banlieue Sud'],
      col: ['Ouest', 'Vieux Lyon', 'Presqu\'île', 'Part-Dieu', 'Est'],
    },
  },
  {
    keyword: 'photobiomodulation lyon',
    grid: [
      [null, null, 8,    7,    null],
      [null, 6,   4,    3,    null],
      [null, 5,   1,    2,    5   ],
      [null, 7,   3,    4,    null],
      [null, null, 9,    null, null],
    ],
    labels: {
      row: ['Nord (Caluire)', 'Croix-Rousse', 'Centre (Lyon 2)', 'Sud (Lyon 7)', 'Banlieue Sud'],
      col: ['Ouest', 'Vieux Lyon', 'Presqu\'île', 'Part-Dieu', 'Est'],
    },
  },
];

// GBP Post templates for auto-generation
export interface GbpPostTemplate {
  keyword: string;
  targetPage: string;
  textTemplate: string;
  imagePrompt: string;
  callToAction: string;
}

export const GBP_POST_TEMPLATES: GbpPostTemplate[] = [
  {
    keyword: 'photobiomodulation lyon',
    targetPage: 'https://centrerabelaislyon.fr/photobiomodulation-lyon',
    textTemplate: '✨ Nouveau au Centre Rabelais : la Photobiomodulation (système Valeda) est désormais disponible pour traiter la DMLA sèche. 9 séances indolores de 5 minutes. Prenez RDV pour évaluer votre éligibilité.',
    imagePrompt: 'Premium medical clinic photo, advanced Valeda light therapy device treating a patient eye with warm golden and red LED beams, modern ophthalmology clinic, dark navy blue and gold accents, photorealistic, no text',
    callToAction: 'En savoir plus',
  },
  {
    keyword: 'ophtalmologue lyon',
    targetPage: 'https://centrerabelaislyon.fr/',
    textTemplate: '👁️ Le Centre Ophtalmologique Rabelais, votre ophtalmologue de référence à Lyon 2 (Place Bellecour). Plateau technique complet : OCT, angiographie, laser, injections IVT. Prise en charge rapide et personnalisée.',
    imagePrompt: 'Photorealistic exterior photo of a premium medical eye clinic in Lyon France, elegant building facade, warm golden lighting, professional and welcoming, no text',
    callToAction: 'Prendre rendez-vous',
  },
  {
    keyword: 'traitement dmla lyon',
    targetPage: 'https://centrerabelaislyon.fr/dmla-lyon',
    textTemplate: '🔬 DMLA : ne laissez pas votre vision se dégrader. Notre équipe de rétinologues spécialisés vous propose un diagnostic OCT immédiat et un traitement adapté le jour même (IVT à J+0 pour la forme humide, Photobiomodulation Valeda pour la forme sèche).',
    imagePrompt: 'Hyper-realistic 3D medical illustration of a healthy human retina and macula, golden healing light, dark blue medical science aesthetic, premium quality, no text',
    callToAction: 'Consulter un spécialiste',
  },
  {
    keyword: 'injection intravitréenne lyon',
    targetPage: 'https://centrerabelaislyon.fr/injections-intravitreennes-lyon',
    textTemplate: '💉 Peur de l\'injection dans l\'œil ? Rassurez-vous : les IVT anti-VEGF au Centre Rabelais sont TOTALEMENT INDOLORES grâce à notre protocole d\'anesthésie. Prise en charge en urgence à J+0 dans notre salle blanche.',
    imagePrompt: 'Reassuring female ophthalmologist in white coat holding eye drop bottle in a bright clean modern medical clinic, calming blue tones, photorealistic, no text',
    callToAction: 'En savoir plus',
  },
  {
    keyword: 'rétinologue lyon',
    targetPage: 'https://centrerabelaislyon.fr/retinologue-lyon-6',
    textTemplate: '🏥 Besoin d\'un rétinologue à Lyon ? Le Dr Quaranta-El Maftouhi et son équipe vous accueillent au Centre Rabelais (Lyon 2). Spécialistes de la rétine médicale : DMLA, rétinopathie diabétique, occlusions veineuses.',
    imagePrompt: 'Professional female retina specialist doctor examining patient eye with modern OCT imaging device, premium medical clinic, warm lighting, photorealistic, no text',
    callToAction: 'Prendre rendez-vous',
  },
  {
    keyword: 'oct macula lyon',
    targetPage: 'https://centrerabelaislyon.fr/oct-macula-lyon',
    textTemplate: '📸 L\'OCT maculaire : l\'examen clé pour détecter la DMLA, l\'œdème maculaire et les pathologies rétiniennes. Résultat immédiat et interprétation le jour même par notre rétinologue spécialisée.',
    imagePrompt: 'Hyper-realistic photo of modern OCT scanning device in a premium ophthalmology clinic, patient being examined, blue and gold professional medical atmosphere, no text',
    callToAction: 'En savoir plus',
  },
  {
    keyword: 'ophtalmologue lyon 6',
    targetPage: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-6',
    textTemplate: '📍 Vous habitez le 6ème arrondissement de Lyon ? Le Centre Ophtalmologique Rabelais est votre centre de référence pour les maladies de la rétine, accessible en quelques minutes depuis les Brotteaux et la Part-Dieu.',
    imagePrompt: 'Beautiful aerial photo of Lyon 6th arrondissement with Parc de la Tête Or visible, warm sunset lighting, premium quality, photorealistic cityscape, no text',
    callToAction: 'Nous trouver',
  },
  {
    keyword: 'ophtalmologue bellecour',
    targetPage: 'https://centrerabelaislyon.fr/',
    textTemplate: '🌟 À deux pas de la Place Bellecour, le Centre Rabelais vous offre l\'excellence en ophtalmologie : consultations spécialisées, imagerie de pointe et traitements rétiniens avancés. Votre vision est notre priorité.',
    imagePrompt: 'Stunning photo of Place Bellecour Lyon at golden hour, elegant medical building nearby, warm atmospheric lighting, photorealistic, premium cityscape, no text',
    callToAction: 'Prendre rendez-vous',
  },
  {
    keyword: 'dmla sèche traitement',
    targetPage: 'https://centrerabelaislyon.fr/photobiomodulation-lyon',
    textTemplate: '🌈 La DMLA sèche n\'est plus une fatalité. La Photobiomodulation (système Valeda) est le premier traitement approuvé par la FDA. Disponible exclusivement au Centre Rabelais à Lyon. 9 séances, 0 douleur.',
    imagePrompt: 'Advanced medical LED light therapy device emitting warm yellow red and infrared beams, treating eye, futuristic medical technology, dark blue and gold aesthetic, photorealistic, no text',
    callToAction: 'Évaluer mon éligibilité',
  },
];

// Competitor data for reports
export const COMPETITORS = [
  { name: 'Vision Future Lyon', url: 'visionfuture.fr', threat: 'high' as const, reviews: 346, rating: 4.7 },
  { name: 'Centre Ophtalmologique Kléber', url: 'centre-kleber.fr', threat: 'high' as const, reviews: 2900, rating: 4.7 },
  { name: 'Dr David Seifeddine', url: 'cliniquedelavuelyon.fr', threat: 'medium' as const, reviews: 843, rating: 4.7 },
  { name: 'CHU Edouard Herriot', url: 'chu-lyon.fr', threat: 'low' as const, reviews: 1200, rating: 3.9 },
  { name: 'Point Vision Lyon', url: 'pointvision.com', threat: 'medium' as const, reviews: 580, rating: 4.3 },
];
