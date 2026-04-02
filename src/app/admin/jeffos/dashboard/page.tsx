'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TARGET_KEYWORDS as STATIC_KEYWORDS, GBP_POST_TEMPLATES, COMPETITORS, GEOGRID_DATA } from '@/lib/keywords';
import organicDataRaw from '@/lib/organic_data.json';

// Dynamically patch the static keyword data with the LIVE DataForSEO tracking results
const TARGET_KEYWORDS = STATIC_KEYWORDS.map(kw => {
  const liveData = (organicDataRaw as any[]).find(d => d.keyword === kw.keyword);
  if (liveData) {
    return {
      ...kw,
      // We use the real API data. If previousPosition is set, we still show the delta.
      currentPosition: liveData.organic_rank ?? null,
      gmapPosition: liveData.local_pack_rank ?? null,
    };
  }
  return kw;
});

// Helper function to generate a localized Google search link for Lyon, France
// Uses the UULE encoding for "Lyon,Auvergne-Rhone-Alpes,France" to emulate exact Geo-location
const getSerpUrl = (keyword: string) => {
  const uule = 'w+CAIQICIfTHlvbixBdXZlcmduZS1SaG9uZS1BbHBlcyxGcmFuY2U';
  return `https://www.google.fr/search?q=${encodeURIComponent(keyword)}&hl=fr&gl=FR&uule=${uule}`;
};

type Tab = 'overview' | 'keywords' | 'geogrid' | 'gbp-poster' | 'gap-analysis' | 'reports';

// All available GBP post images — 22 unique hyper-realistic ophthalmology photos
// Each filename is SEO-optimized for the keyword it serves
const IMAGE_POOL = [
  '/admin/gbp/ophtalmologue-lyon-consultation.png',
  '/admin/gbp/ophtalmologiste-lyon-examen.png',
  '/admin/gbp/rdv-ophtalmologue-lyon.png',
  '/admin/gbp/urgence-ophtalmologique-lyon.png',
  '/admin/gbp/traitement-dmla-lyon-oct.png',
  '/admin/gbp/injection-intravitreenne-lyon.png',
  '/admin/gbp/retinologue-lyon-angiographie.png',
  '/admin/gbp/oct-maculaire-lyon-spectral.png',
  '/admin/gbp/fond-oeil-lyon-retine.png',
  '/admin/gbp/specialiste-retine-lyon.png',
  '/admin/gbp/retinopathie-diabetique-lyon.png',
  '/admin/gbp/centre-retine-lyon-equipement.png',
  '/admin/gbp/photobiomodulation-lyon-valeda.png',
  '/admin/gbp/dmla-seche-traitement-lyon.png',
  '/admin/gbp/ophtalmologue-villeurbanne.png',
  '/admin/gbp/ophtalmologue-lyon-6-brotteaux.png',
  '/admin/gbp/ophtalmologue-brotteaux-autorefracteur.png',
  '/admin/gbp/ophtalmologue-lyon-3-tonometrie.png',
  '/admin/gbp/ophtalmologue-lyon-7-camera-retine.png',
  '/admin/gbp/ophtalmologue-bellecour-laser.png',
  '/admin/gbp/champ-visuel-lyon-perimetrie.png',
  '/admin/gbp/dmla-lyon-6-amsler.png',
];

// GBP Post images — EACH keyword has its own UNIQUE image (no duplicates)
const GBP_IMAGES: Record<string, string> = {
  'ophtalmologue lyon': '/admin/gbp/ophtalmologue-lyon-consultation.png',
  'ophtalmologiste lyon': '/admin/gbp/ophtalmologiste-lyon-examen.png',
  'rdv ophtalmologue lyon': '/admin/gbp/rdv-ophtalmologue-lyon.png',
  'urgence ophtalmologique lyon': '/admin/gbp/urgence-ophtalmologique-lyon.png',
  'traitement dmla lyon': '/admin/gbp/traitement-dmla-lyon-oct.png',
  'injection intravitréenne lyon': '/admin/gbp/injection-intravitreenne-lyon.png',
  'rétinologue lyon': '/admin/gbp/retinologue-lyon-angiographie.png',
  'oct macula lyon': '/admin/gbp/oct-maculaire-lyon-spectral.png',
  'fond oeil lyon': '/admin/gbp/fond-oeil-lyon-retine.png',
  'spécialiste rétine lyon': '/admin/gbp/specialiste-retine-lyon.png',
  'rétinopathie diabétique lyon': '/admin/gbp/retinopathie-diabetique-lyon.png',
  'centre rétine lyon': '/admin/gbp/centre-retine-lyon-equipement.png',
  'photobiomodulation lyon': '/admin/gbp/photobiomodulation-lyon-valeda.png',
  'dmla sèche traitement': '/admin/gbp/dmla-seche-traitement-lyon.png',
  'ophtalmologue villeurbanne': '/admin/gbp/ophtalmologue-villeurbanne.png',
  'ophtalmologue lyon 6': '/admin/gbp/ophtalmologue-lyon-6-brotteaux.png',
  'ophtalmologue brotteaux': '/admin/gbp/ophtalmologue-brotteaux-autorefracteur.png',
  'ophtalmologue lyon 3': '/admin/gbp/ophtalmologue-lyon-3-tonometrie.png',
  'ophtalmologue lyon 7': '/admin/gbp/ophtalmologue-lyon-7-camera-retine.png',
  'ophtalmologue bellecour': '/admin/gbp/ophtalmologue-bellecour-laser.png',
  'champ visuel lyon': '/admin/gbp/champ-visuel-lyon-perimetrie.png',
  'dmla lyon 6': '/admin/gbp/dmla-lyon-6-amsler.png',
  // Geo keywords use round-robin from pool (each scheduled post gets next unique image)
  'ophtalmologue lyon 2': '/admin/gbp/rdv-ophtalmologue-lyon.png',
  'ophtalmologue lyon 5': '/admin/gbp/specialiste-retine-lyon.png',
  'ophtalmologue lyon 8': '/admin/gbp/ophtalmologue-lyon-7-camera-retine.png',
  'ophtalmologue lyon 9': '/admin/gbp/oct-maculaire-lyon-spectral.png',
  'ophtalmologue caluire': '/admin/gbp/ophtalmologue-lyon-consultation.png',
  'ophtalmologue oullins': '/admin/gbp/ophtalmologiste-lyon-examen.png',
  'ophtalmologue bron': '/admin/gbp/ophtalmologue-lyon-3-tonometrie.png',
  'ophtalmologue part-dieu': '/admin/gbp/ophtalmologue-brotteaux-autorefracteur.png',
  'ophtalmologue vénissieux': '/admin/gbp/urgence-ophtalmologique-lyon.png',
  'rétinologue villeurbanne': '/admin/gbp/retinologue-lyon-angiographie.png',
  'dmla villeurbanne': '/admin/gbp/dmla-seche-traitement-lyon.png',
};

/* ─── Lyon Leaflet GeoGrid (dynamic import to avoid SSR issues) ─── */
import dynamic from 'next/dynamic';
const LyonGeoGrid = dynamic(() => import('@/components/LyonGeoGrid'), { ssr: false, loading: () => (
  <div className="flex items-center justify-center h-96 bg-white/5 rounded-2xl">
    <div className="text-white/30 text-sm animate-pulse">Chargement de la carte...</div>
  </div>
)});


interface ScheduledPost {
  date: Date;
  keyword: string;
  text: string;
  cta: string;
  status: 'posted' | 'scheduled';
  image: string;
}

// ─── SITE PAGES (Source of Truth for Gap Analysis) ──────────────────────────
const SITE_PAGES = [
  { url: '/', label: 'Homepage', services: ['ophtalmologue lyon', 'ophtalmologiste lyon', 'centre ophtalmologique', 'urgence ophtalmologique'] },
  { url: '/dmla-lyon', label: 'DMLA Lyon', services: ['dmla', 'dégénérescence maculaire', 'dmla humide', 'dmla sèche', 'traitement dmla'] },
  { url: '/dmla-traitement-villeurbanne', label: 'DMLA Villeurbanne', services: ['dmla villeurbanne'] },
  { url: '/photobiomodulation-lyon', label: 'Photobiomodulation', services: ['photobiomodulation', 'valeda', 'luminothérapie oculaire', 'système valeda'] },
  { url: '/injections-intravitreennes-lyon', label: 'Injections IVT', services: ['injection intravitréenne', 'ivt', 'anti-vegf', 'eylea', 'vabysmo', 'ranibizumab'] },
  { url: '/oct-macula-lyon', label: 'OCT Macula', services: ['oct', 'oct macula', 'fond oeil', 'angiographie rétinienne', 'angiographie fluorescéine', 'rétinographie'] },
  { url: '/retine-medicale-lyon', label: 'Rétine Médicale', services: ['rétine', 'médecine rétinienne', 'spécialiste rétine', 'centre rétine', 'rétine lyon'] },
  { url: '/retinologue-lyon-6', label: 'Rétinologue Lyon 6', services: ['rétinologue', 'rétinologue lyon', 'ophtalmologue spécialiste rétine'] },
  { url: '/pathologies-retiniennes', label: 'Pathologies Rétiniennes', services: ['rétinopathie diabétique', 'décollement rétine', 'membrane épirétinienne', 'trou maculaire', 'glaucome', 'occlusion veineuse', 'œdème maculaire'] },
  { url: '/plateau-technique', label: 'Plateau Technique', services: ['équipement', 'plateau technique', 'champ visuel', 'tonométrie', 'biomicroscope', 'laser yag', 'laser argon'] },
  { url: '/offre-de-soins', label: 'Offre de Soins', services: ['offre de soins', 'tarifs', 'secteur 2', 'remboursement', 'mutuelle'] },
  { url: '/equipe-medicale', label: 'Équipe Médicale', services: ['dr quaranta', 'dr maftouhi', 'équipe médicale', 'médecins'] },
  { url: '/etudes-cliniques', label: 'Études Cliniques', services: ['études cliniques', 'essais cliniques', 'recherche médicale'] },
  { url: '/dois-je-consulter', label: 'Dois-je Consulter ?', services: ['symptômes', 'baisse vision', 'urgence oculaire', 'éclairs lumineux', 'voile gris'] },
  { url: '/ophtalmologue-lyon-6', label: 'Ophtalmologue Lyon 6', services: ['ophtalmologue lyon 6', 'lyon 6', 'brotteaux'] },
  { url: '/ophtalmologue-lyon-3', label: 'Ophtalmologue Lyon 3', services: ['ophtalmologue lyon 3', 'lyon 3', 'part-dieu'] },
  { url: '/ophtalmologue-lyon-5', label: 'Ophtalmologue Lyon 5', services: ['ophtalmologue lyon 5', 'lyon 5', 'saint-jean'] },
  { url: '/ophtalmologue-lyon-7', label: 'Ophtalmologue Lyon 7', services: ['ophtalmologue lyon 7', 'lyon 7', 'jean macé', 'gerland'] },
  { url: '/ophtalmologue-lyon-8', label: 'Ophtalmologue Lyon 8', services: ['ophtalmologue lyon 8', 'lyon 8', 'monplaisir'] },
  { url: '/ophtalmologue-lyon-9', label: 'Ophtalmologue Lyon 9', services: ['ophtalmologue lyon 9', 'lyon 9', 'vaise'] },
  { url: '/ophtalmologue-bron', label: 'Ophtalmologue Bron', services: ['ophtalmologue bron', 'bron'] },
  { url: '/ophtalmologue-brotteaux', label: 'Ophtalmologue Brotteaux', services: ['ophtalmologue brotteaux', 'brotteaux'] },
  { url: '/ophtalmologue-caluire-et-cuire', label: 'Ophtalmologue Caluire', services: ['ophtalmologue caluire', 'caluire'] },
  { url: '/ophtalmologue-oullins', label: 'Ophtalmologue Oullins', services: ['ophtalmologue oullins', 'oullins'] },
  { url: '/ophtalmologue-part-dieu', label: 'Ophtalmologue Part-Dieu', services: ['ophtalmologue part-dieu', 'part-dieu'] },
  { url: '/ophtalmologue-retine-lyon-2', label: 'Ophtalmologue Lyon 2', services: ['ophtalmologue lyon 2', 'lyon 2', 'bellecour', 'presqu\'île'] },
  { url: '/ophtalmologue-venissieux', label: 'Ophtalmologue Vénissieux', services: ['ophtalmologue vénissieux', 'vénissieux'] },
  { url: '/ophtalmologue-villeurbanne', label: 'Ophtalmologue Villeurbanne', services: ['ophtalmologue villeurbanne', 'villeurbanne'] },
  { url: '/rdv', label: 'Prise de RDV', services: ['rdv', 'rendez-vous', 'réservation', 'prise en charge'] },
  { url: '/centre-ophtalmologique-lyon-6', label: 'Centre Ophtalmo Lyon 6', services: ['centre ophtalmologique lyon 6', 'clinique ophtalmologique lyon 6'] },
];

// Missed coverage — services from GBP that we should have pages for
const SUGGESTED_MISSING = [
  { service: 'Corps flottants / Myodésopsies', slug: '/corps-flottants-lyon', volume: 320, reason: 'Plainte commune, grosse recherche, 0 page dédiée' },
  { service: 'Sécheresse oculaire', slug: '/secheresse-oculaire-lyon', volume: 480, reason: 'Service GBP sans page web = invisibilité Google' },
  { service: 'Glaucome Lyon', slug: '/glaucome-lyon', volume: 480, reason: 'Pathologie majeure traitée mais pas de page service' },
  { service: 'Laser YAG Capsulotomie', slug: '/laser-yag-lyon', volume: 260, reason: 'Procédure courante, compétition faible sur ce terme' },
  { service: 'Cataracte Lyon (orientation)', slug: '/cataracte-lyon', volume: 1600, reason: 'Volume énorme — même une page d\'orientation génère du trafic' },
  { service: 'Chirurgie réfractive / Lasik (orientation)', slug: '/chirurgie-refractive-lyon', volume: 720, reason: 'Page d\'orientation vers partenaires = backlink + trafic' },
  { service: 'Basse vision', slug: '/basse-vision-lyon', volume: 140, reason: 'Niche peu couverte, forte autorité e-patients' },
  { service: 'Strabisme adulte', slug: '/strabisme-lyon', volume: 210, reason: 'Service GBP présent, aucune page dédiée' },
  { service: 'Rétinopathie des prématurés', slug: '/retinopathie-prematures-lyon', volume: 90, reason: 'Ultra-spécifique = Top 1 facile, backlink CHU' },
  { service: 'Uvéite / Inflammation oculaire', slug: '/uveite-lyon', volume: 170, reason: 'Service GBP présent, aucune page dédiée' },
];

// Topical relevance — PAA-style questions not yet covered
const TOPICAL_IDEAS = [
  { topic: 'Comment se déroule une injection intravitréenne ?', type: 'faq', priority: 'high', targetPage: '/injections-intravitreennes-lyon' },
  { topic: 'Quand faut-il consulter en urgence pour la rétine ?', type: 'faq', priority: 'high', targetPage: '/dois-je-consulter' },
  { topic: 'DMLA sèche vs humide : quelle différence ?', type: 'article', priority: 'high', targetPage: '/dmla-lyon' },
  { topic: 'OCT sans dilatation : comment ça marche ?', type: 'faq', priority: 'medium', targetPage: '/oct-macula-lyon' },
  { topic: 'Photobiomodulation : combien de séances Valeda ?', type: 'faq', priority: 'high', targetPage: '/photobiomodulation-lyon' },
  { topic: 'Remboursement injections anti-VEGF Sécurité Sociale', type: 'faq', priority: 'medium', targetPage: '/injections-intravitreennes-lyon' },
  { topic: 'Différence rétinologue et ophtalmologue généraliste', type: 'article', priority: 'medium', targetPage: '/retinologue-lyon-6' },
  { topic: 'Corps flottants : quand faut-il s\'inquiéter ?', type: 'article', priority: 'high', targetPage: '/' },
  { topic: 'Bilan ophtalmologique complet : que comprend-il ?', type: 'faq', priority: 'medium', targetPage: '/plateau-technique' },
  { topic: 'Délai pour obtenir un RDV urgence rétine à Lyon', type: 'faq', priority: 'high', targetPage: '/rdv' },
];

// Geo opportunities — areas where we rank 4-8 on Maps
const GEO_OPPORTUNITIES = [
  { area: 'Villeurbanne Centre', distance: '3.2km NE', mapRank: 4, landmark: 'Palais du Travail, Tonkin', keyword: 'ophtalmologue villeurbanne', volume: 1900 },
  { area: 'Lyon 8 — Monplaisir', distance: '3.8km SE', mapRank: 5, landmark: 'Parilly, Grange Blanche', keyword: 'ophtalmologue lyon 8', volume: 590 },
  { area: 'Caluire-et-Cuire', distance: '4.1km N', mapRank: null, landmark: 'Cuire, Val de Saône', keyword: 'ophtalmologue caluire', volume: 320 },
  { area: 'Bron — Lyon Est', distance: '6km E', mapRank: null, landmark: 'Eurexpo, CHU Hôpital Est', keyword: 'ophtalmologue bron', volume: 390 },
  { area: 'Lyon 9 — Vaise', distance: '4.5km NW', mapRank: null, landmark: 'Gorge-de-Loup, Champvert', keyword: 'ophtalmologue lyon 9', volume: 390 },
  { area: 'Oullins — Sud Lyon', distance: '5km S', mapRank: null, landmark: 'Clinique du Val d\'Ouest, Pierre-Bénite', keyword: 'ophtalmologue oullins', volume: 260 },
];

// ─── COMPETITOR INTELLIGENCE ───────────────────────────────────────────
const COMPETITOR_PROFILES = [
  {
    name: 'Vision Future Lyon',
    url: 'visionfuture.fr',
    threat: 'high' as const,
    reviews: 346,
    rating: 4.7,
    description: 'Centre généraliste fort sur les mots-clés de volume — #1 pour ophtalmologue lyon',
    gbpCategories: ['Ophtalmologiste', 'Chirurgien ophtalmologue', 'Centre ophtalmologique', 'Spécialiste cataracte', 'Spécialiste glaucome'],
    theirPages: [
      { service: 'DMLA', hasPage: true },
      { service: 'Glaucome', hasPage: true },
      { service: 'Cataracte', hasPage: true },
      { service: 'Chirurgie réfractive / Lasik', hasPage: true },
      { service: 'Sécheresse oculaire', hasPage: true },
      { service: 'Rétinopathie diabétique', hasPage: true },
      { service: 'Corps flottants', hasPage: true },
      { service: 'Photobiomodulation Valeda', hasPage: false },
      { service: 'IVT spécialiste exclusif', hasPage: false },
    ],
    ourAdvantages: [
      'Seul centre proposant Photobiomodulation Valeda (DMLA sèche) — ils ne peuvent pas suivre',
      'Ultra-spécialisation rétine médicale — ils sont généralistes',
      'Dr Quaranta = référence nationale DMLA',
    ],
    pagesToCreate: [
      { page: '/corps-flottants-lyon', reason: 'Ils se classent Top 5 sur ce terme, nous 0 impression' },
      { page: '/secheresse-oculaire-lyon', reason: 'Service présent sur leur site, manquant chez nous' },
      { page: '/glaucome-lyon', reason: 'Ils ont une page dédiée et 480 recherches/mois' },
    ],
    keywordBattlefield: [
      { keyword: 'dégénérescence maculaire lyon', them: 2, us: null },
      { keyword: 'glaucome lyon', them: 2, us: null },
      { keyword: 'ophtalmologue lyon', them: 1, us: 16 },
      { keyword: 'traitement dmla lyon', them: 1, us: null },
      { keyword: 'corps flottants lyon', them: 4, us: null },
    ],
  },
  {
    name: 'Centre Kléber',
    url: 'centre-kleber.fr',
    threat: 'high' as const,
    reviews: 2900,
    rating: 4.7,
    description: '2900 avis Google — autorité locale écrasante. Ophtalmo généraliste très établi.',
    gbpCategories: ['Ophtalmologiste', 'Centre ophtalmologique', 'Chirurgien de la vue', 'Opticien'],
    theirPages: [
      { service: 'Consultation générale', hasPage: true },
      { service: 'Cataracte', hasPage: true },
      { service: 'Glaucome', hasPage: true },
      { service: 'DMLA', hasPage: true },
      { service: 'Sécheresse oculaire', hasPage: true },
      { service: 'Strabisme', hasPage: true },
      { service: 'Basse vision', hasPage: true },
      { service: 'Photobiomodulation Valeda', hasPage: false },
      { service: 'Rétinologie exclusive', hasPage: false },
      { service: 'Injections IVT spécialisées', hasPage: false },
    ],
    ourAdvantages: [
      'Valeda = notre monopole lyonnais sur DMLA sèche',
      'Spécialisation rétine exclusive — eux sont généralistes avec 15+ spécialités',
      'Plus agiles pour le contenu SEO (ils ont peu de pages blog/FAQs)',
    ],
    pagesToCreate: [
      { page: '/strabisme-lyon', reason: 'Kléber a une page, 210 recherches/mois, niche = facile Top 5' },
      { page: '/basse-vision-lyon', reason: 'Service présent chez Kléber, 0 concurrence directe en SEO' },
      { page: '/cataracte-lyon', reason: 'Kléber Top 3 sur ce terme (1600 recherches/mois)' },
    ],
    keywordBattlefield: [
      { keyword: 'centre ophtalmologique lyon', them: 2, us: 8 },
      { keyword: 'ophtalmologue lyon', them: 2, us: 16 },
      { keyword: 'ophtalmologue lyon 6', them: 3, us: null },
      { keyword: 'ophtalmologue brotteaux', them: 1, us: null },
      { keyword: 'clinique ophtalmologique lyon', them: 3, us: 14 },
    ],
  },
  {
    name: 'Dr Seifeddine',
    url: 'cliniquedelavuelyon.fr',
    threat: 'medium' as const,
    reviews: 843,
    rating: 4.7,
    description: 'Chirurgien réfractif fort sur laser/cataracte. Moins compétitif sur rétine médicale.',
    gbpCategories: ['Ophtalmologiste', 'Chirurgien ophtalmologue', 'Chirurgien réfractif', 'Chirurgien cataracte'],
    theirPages: [
      { service: 'Chirurgie Lasik', hasPage: true },
      { service: 'Cataracte', hasPage: true },
      { service: 'Glaucome', hasPage: true },
      { service: 'Présbyopie', hasPage: true },
      { service: 'DMLA spécialisée', hasPage: false },
      { service: 'Photobiomodulation Valeda', hasPage: false },
      { service: 'IVT anti-VEGF spécialisé', hasPage: false },
    ],
    ourAdvantages: [
      'Seifeddine est chirurgien — nous sommes médecins rétiniens — marchés différents',
      'Aucune compétition réelle sur DMLA, IVT, Valeda',
      'Nous pouvons cibler ses patients DMLA qui cherchent un médecin (pas un chirurgien)',
    ],
    pagesToCreate: [
      { page: '/presbiopia-lyon', reason: 'Il est Top 3 sur présbyopie, facile d\'orientation + backlink' },
    ],
    keywordBattlefield: [
      { keyword: 'ophtalmologue lyon 2', them: 3, us: 1 },
      { keyword: 'rétinopathie diabétique lyon', them: 5, us: null },
      { keyword: 'chirurgie réfractive lyon', them: 1, us: null },
    ],
  },
  {
    name: 'Point Vision Lyon',
    url: 'pointvision.com',
    threat: 'medium' as const,
    reviews: 580,
    rating: 4.3,
    description: 'Chaîne nationale, présente à Lyon. Ophtalmo générale + optique.',
    gbpCategories: ['Ophtalmologiste', 'Opticien', 'Centre de santé visuel'],
    theirPages: [
      { service: 'Consultation générale', hasPage: true },
      { service: 'DMLA', hasPage: true },
      { service: 'Glaucome', hasPage: true },
      { service: 'Lunettes / Lentilles', hasPage: true },
      { service: 'Photobiomodulation Valeda', hasPage: false },
      { service: 'Rétinologie exclusive', hasPage: false },
    ],
    ourAdvantages: [
      'Chaîne = moins d’expertise perçue — nous jouons la carte spécialiste',
      'Valeda et IVT = notre différenciateur clé',
    ],
    pagesToCreate: [],
    keywordBattlefield: [
      { keyword: 'ophtalmologue lyon 3', them: 2, us: null },
      { keyword: 'centre rétine lyon', them: 4, us: null },
    ],
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [autoMode, setAutoMode] = useState(false);
  const [sendingReport, setSendingReport] = useState(false);
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);
  const [reportSent, setReportSent] = useState(false);
  const [selectedPost, setSelectedPost] = useState<ScheduledPost | null>(null);
  const [editedPosts, setEditedPosts] = useState<Record<string, string>>({});
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
  const [allPostsForDate, setAllPostsForDate] = useState<ScheduledPost[]>([]);
  const [modalPostIndex, setModalPostIndex] = useState(0);
  const [gbpInput, setGbpInput] = useState('');
  const [parsedGbp, setParsedGbp] = useState<string[]>([]);
  const [gapFilter, setGapFilter] = useState<'all' | 'missing' | 'covered'>('all');
  const router = useRouter();

  // Cycle through IMAGE_POOL for a given post key
  const cycleImage = (postKey: string, currentImage: string) => {
    const currentIdx = IMAGE_POOL.indexOf(currentImage);
    const nextIdx = (currentIdx + 1) % IMAGE_POOL.length;
    setImageOverrides(prev => ({ ...prev, [postKey]: IMAGE_POOL[nextIdx] }));
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/jeffos');
  };

  const handleSendReport = async () => {
    setSendingReport(true);
    try {
      const res = await fetch('/api/admin/report/send', { method: 'POST' });
      if (res.ok) {
        setReportSent(true);
        setTimeout(() => setReportSent(false), 5000);
      }
    } catch { /* */ }
    setSendingReport(false);
  };

  // Stats calculations
  const totalKeywords = TARGET_KEYWORDS.length;
  const top3Count = TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 3).length;
  const top10Count = TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 10).length;
  const gmapTop3 = TARGET_KEYWORDS.filter(k => k.gmapPosition && k.gmapPosition <= 3).length;
  const avgImprovement = TARGET_KEYWORDS.reduce((sum, k) => {
    if (k.previousPosition && k.currentPosition) return sum + (k.previousPosition - k.currentPosition);
    return sum;
  }, 0) / totalKeywords;

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'keywords', label: 'Mots-clés', icon: '🎯' },
    { id: 'geogrid', label: 'GeoGrid', icon: '🗺️' },
    { id: 'gbp-poster', label: 'GBP Poster', icon: '📮' },
    { id: 'gap-analysis', label: 'Gap Analysis', icon: '🔬' },
    { id: 'reports', label: 'Rapports', icon: '📧' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-[system-ui]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003399] to-[#001a66] flex items-center justify-center border border-[#003399]/30">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2aa84" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-[3px] uppercase">
                Rabelais <span className="text-[#c2aa84]">Admin</span>
              </h1>
              <p className="text-[10px] text-white/30 tracking-widest uppercase">SEO / GEO Command Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-[10px] uppercase tracking-wider font-bold">Live</span>
            </div>
            <button onClick={handleLogout} className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Déconnexion
            </button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-medium rounded-t-lg transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white/5 text-[#c2aa84] border-b-2 border-[#c2aa84]'
                  : 'text-white/30 hover:text-white/60 hover:bg-white/[0.02]'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards — Click to expand keywords */}
            {(() => {
              // Build the filtered keyword lists for each KPI
              const kpiSections = [
                {
                  id: 'top3',
                  label: 'Top 3 Organique',
                  value: top3Count,
                  total: totalKeywords,
                  color: '#22c55e',
                  keywords: TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 3),
                },
                {
                  id: 'top10',
                  label: 'Top 10 Organique',
                  value: top10Count,
                  total: totalKeywords,
                  color: '#003399',
                  keywords: TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 10),
                },
                {
                  id: 'maps',
                  label: 'Top 3 Google Maps',
                  value: gmapTop3,
                  total: totalKeywords,
                  color: '#c2aa84',
                  keywords: TARGET_KEYWORDS.filter(k => k.gmapPosition !== null && k.gmapPosition <= 3),
                },
                {
                  id: 'improvement',
                  label: 'Amélioration Moy.',
                  value: `+${avgImprovement.toFixed(1)}`,
                  total: 'positions',
                  color: '#8b5cf6',
                  keywords: TARGET_KEYWORDS
                    .filter(k => k.previousPosition !== null && k.currentPosition !== null)
                    .sort((a, b) => (b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!)),
                },
              ];

              return (
                <div className="space-y-4">
                  {/* SATELLITE NETWORK METRICS */}
                  <div className="bg-gradient-to-r from-[#003399]/20 to-[#c2aa84]/10 border border-[#003399]/30 rounded-2xl p-6 mb-8 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-full bg-[url('/grid.svg')] opacity-10" />
                    <div className="flex items-center justify-between relative z-10">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#c2aa84] text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">Réseau Satellite</span>
                          <span className="text-white/60 text-xs font-mono">retina-lyon.fr</span>
                        </div>
                        <h2 className="text-2xl font-light tracking-wide text-white mb-1">Articles Piliers Indexés : <span className="font-bold">14</span></h2>
                        <p className="text-[#c2aa84] text-xs font-medium">Monitoring Actif — 2 publications/mois (Auto)</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1 justify-end">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-green-500 font-bold text-sm tracking-widest uppercase">En ligne</span>
                        </div>
                        <p className="text-white/30 text-[10px] uppercase">Vercel Edge Network</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {kpiSections.map((kpi) => (
                      <button
                        key={kpi.id}
                        onClick={() => setExpandedKpi(expandedKpi === kpi.id ? null : kpi.id)}
                        className={`text-left bg-white/5 backdrop-blur border rounded-2xl p-6 transition-all cursor-pointer ${
                          expandedKpi === kpi.id
                            ? 'border-[' + kpi.color + ']/40 ring-1 ring-[' + kpi.color + ']/20 bg-white/8'
                            : 'border-white/5 hover:border-white/10'
                        }`}
                        style={expandedKpi === kpi.id ? { borderColor: kpi.color + '40', boxShadow: `0 0 20px ${kpi.color}15` } : {}}
                      >
                        <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">{kpi.label}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold" style={{ color: kpi.color }}>{kpi.value}</span>
                          <span className="text-white/20 text-sm">/ {kpi.total}</span>
                        </div>
                        <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: typeof kpi.value === 'number' ? `${(kpi.value / (typeof kpi.total === 'number' ? kpi.total : 1)) * 100}%` : '70%',
                              backgroundColor: kpi.color,
                            }}
                          />
                        </div>
                        <p className="text-white/20 text-[9px] mt-2 text-center">
                          {expandedKpi === kpi.id ? '▲ Masquer' : '▼ Voir les mots-clés'}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Expanded keyword detail panel */}
                  {expandedKpi && (() => {
                    const section = kpiSections.find(s => s.id === expandedKpi)!;
                    const isImprovement = section.id === 'improvement';
                    const isMaps = section.id === 'maps';
                    return (
                      <div
                        className="bg-white/5 backdrop-blur border rounded-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-300"
                        style={{ borderColor: section.color + '30' }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs uppercase tracking-widest font-bold" style={{ color: section.color }}>
                            {section.label} — {section.keywords.length} mot{section.keywords.length > 1 ? 's' : ''}-clé{section.keywords.length > 1 ? 's' : ''}
                          </h3>
                          <button onClick={() => setExpandedKpi(null)} className="text-white/30 hover:text-white/60 text-xs">✕ Fermer</button>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-white/30 text-[10px] uppercase tracking-wider border-b border-white/5">
                                <th className="text-left py-2 px-3">Mot-clé</th>
                                <th className="text-left py-2 px-3">Page cible</th>
                                <th className="text-center py-2 px-3">Volume</th>
                                {isMaps ? (
                                  <th className="text-center py-2 px-3">Pos. Maps</th>
                                ) : (
                                  <th className="text-center py-2 px-3">Pos. Google</th>
                                )}
                                <th className="text-center py-2 px-3">Évolution</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.keywords.map((kw) => {
                                const gain = isMaps
                                  ? (kw.previousGmapPosition && kw.gmapPosition ? kw.previousGmapPosition - kw.gmapPosition : 0)
                                  : (kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0);
                                const currentPos = isMaps ? kw.gmapPosition : kw.currentPosition;
                                const previousPos = isMaps ? kw.previousGmapPosition : kw.previousPosition;
                                const posColor = currentPos && currentPos <= 3 ? '#22c55e' : currentPos && currentPos <= 10 ? '#c2aa84' : '#ef4444';
                                return (
                                  <tr key={kw.keyword} className="border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors">
                                    <td className="py-3 px-3">
                                      <a 
                                        href={getSerpUrl(kw.keyword)} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-white/80 font-medium hover:text-[#c2aa84] hover:underline transition-colors flex items-center gap-1 group"
                                      >
                                        {kw.keyword}
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                                      </a>
                                      <p className="text-white/20 text-[10px] uppercase tracking-wider mt-0.5">{kw.category}</p>
                                    </td>
                                    <td className="py-3 px-3 text-white/30 text-xs">{kw.targetPage}</td>
                                    <td className="py-3 px-3 text-center text-white/40 text-xs">{kw.monthlyVolume.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-center">
                                      <span className="font-bold text-lg" style={{ color: posColor }}>#{currentPos}</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                      {gain > 0 ? (
                                        <span className="bg-green-500/10 text-green-400 font-bold text-xs px-2 py-1 rounded-lg inline-flex items-center gap-1">
                                          ↑ {gain}
                                          {previousPos && <span className="text-white/30 font-normal ml-1">(de #{previousPos})</span>}
                                        </span>
                                      ) : gain < 0 ? (
                                        <span className="bg-red-500/10 text-red-400 font-bold text-xs px-2 py-1 rounded-lg">↓ {Math.abs(gain)}</span>
                                      ) : (
                                        <span className="text-white/20 text-xs">—</span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        {section.keywords.length === 0 && (
                          <p className="text-white/20 text-sm text-center py-6">Aucun mot-clé dans cette catégorie.</p>
                        )}
                      </div>
                    );
                  })()}
                </div>
              );
            })()}

            {/* Top movers */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">🚀 Meilleures Progressions</h3>
              <div className="space-y-3">
                {TARGET_KEYWORDS
                  .filter(k => k.previousPosition && k.currentPosition)
                  .sort((a, b) => ((b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!)))
                  .slice(0, 5)
                  .map((kw) => {
                    const gain = kw.previousPosition! - kw.currentPosition!;
                    return (
                      <div key={kw.keyword} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3 hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center gap-4">
                          <div>
                            <a 
                              href={getSerpUrl(kw.keyword)} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-white/80 text-sm font-medium hover:text-[#c2aa84] hover:underline transition-colors flex items-center gap-2 group"
                            >
                              {kw.keyword}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                            </a>
                            <p className="text-white/20 text-[10px] uppercase tracking-wider mt-0.5">{kw.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-white/40 text-[10px] uppercase">Position</p>
                            <div className="flex items-center gap-2">
                              <span className="text-white/30 text-sm line-through">{kw.previousPosition}</span>
                              <span className="text-white/60">→</span>
                              <span className="text-white font-bold text-lg">{kw.currentPosition}</span>
                            </div>
                          </div>
                          <div className="bg-green-500/10 text-green-400 font-bold text-sm px-3 py-1 rounded-lg">
                            ↑ {gain}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Competitors */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">⚔️ Surveillance Concurrents</h3>
              <div className="space-y-3">
                {COMPETITORS.map((comp) => (
                  <div key={comp.name} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-4">
                    <div>
                      <p className="text-white/70 text-sm font-medium">{comp.name}</p>
                      <p className="text-white/20 text-[10px]">{comp.url}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-white/50 text-sm">{comp.reviews} avis</p>
                        <p className="text-yellow-400 text-xs">★ {comp.rating}</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                        comp.threat === 'high' ? 'bg-red-500/10 text-red-400' :
                        comp.threat === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>
                        {comp.threat === 'high' ? '🔴 Élevée' : comp.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEYWORDS TAB */}
        {activeTab === 'keywords' && (
          <div>
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">Suivi des {totalKeywords} Mots-Clés Cibles</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      {['Mot-clé', 'Cat.', 'Vol/mois', 'Pos. Org.', 'Δ', 'Pos. GMAP', 'Δ', 'Concurrent #1'].map((h) => (
                        <th key={h} className="px-5 py-4 text-[10px] uppercase tracking-widest text-white/30 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TARGET_KEYWORDS.map((kw) => {
                      const orgGain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
                      const gmapGain = kw.previousGmapPosition && kw.gmapPosition ? kw.previousGmapPosition - kw.gmapPosition : 0;
                      return (
                        <tr key={kw.keyword} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-4">
                            <a 
                              href={getSerpUrl(kw.keyword)} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-white/80 text-sm font-medium hover:text-[#c2aa84] hover:underline transition-colors flex items-center gap-2 group"
                            >
                              {kw.keyword}
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                            </a>
                            <p className="text-white/20 text-[10px] mt-0.5">{kw.targetPage}</p>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                              kw.category === 'head' ? 'bg-purple-500/10 text-purple-400' :
                              kw.category === 'service' ? 'bg-blue-500/10 text-blue-400' :
                              kw.category === 'geo' ? 'bg-green-500/10 text-green-400' :
                              'bg-gray-500/10 text-gray-400'
                            }`}>{kw.category}</span>
                          </td>
                          <td className="px-5 py-4 text-white/50 text-sm font-mono">{kw.monthlyVolume.toLocaleString()}</td>
                          <td className="px-5 py-4">
                            <span className={`font-bold text-lg ${
                              kw.currentPosition && kw.currentPosition <= 3 ? 'text-green-400' :
                              kw.currentPosition && kw.currentPosition <= 10 ? 'text-[#c2aa84]' : 'text-white/40'
                            }`}>{kw.currentPosition || '—'}</span>
                          </td>
                          <td className="px-5 py-4">
                            {orgGain > 0 && <span className="text-green-400 text-sm font-bold">↑{orgGain}</span>}
                            {orgGain < 0 && <span className="text-red-400 text-sm font-bold">↓{Math.abs(orgGain)}</span>}
                            {orgGain === 0 && <span className="text-white/20 text-sm">—</span>}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`font-bold text-lg ${
                              kw.gmapPosition && kw.gmapPosition <= 3 ? 'text-green-400' :
                              kw.gmapPosition && kw.gmapPosition <= 5 ? 'text-[#c2aa84]' : 'text-white/40'
                            }`}>{kw.gmapPosition || '—'}</span>
                          </td>
                          <td className="px-5 py-4">
                            {gmapGain > 0 && <span className="text-green-400 text-sm font-bold">↑{gmapGain}</span>}
                            {gmapGain < 0 && <span className="text-red-400 text-sm font-bold">↓{Math.abs(gmapGain)}</span>}
                            {gmapGain === 0 && <span className="text-white/20 text-sm">—</span>}
                          </td>
                          <td className="px-5 py-4">
                            <p className="text-white/40 text-sm">{kw.competitor1.name}</p>
                            <p className="text-white/20 text-[10px]">Pos. {kw.competitor1.position || 'N/A'}</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* GEOGRID TAB */}
        {activeTab === 'geogrid' && <LyonGeoGrid />}

        {/* GBP POSTER TAB */}
        {activeTab === 'gbp-poster' && (() => {
          // Real history: 3 posts were published on March 27, 2026
          // Future posts are scheduled 3x/week (Mon/Wed/Fri) starting Mon March 30
          const TODAY = new Date(2026, 2, 28);
          const postDays = [1, 2, 3, 4, 5]; // Mon-Fri — AGGRESSIVE 5x/week until all keywords Top 3
          const allTemplates = GBP_POST_TEMPLATES;

          // The 3 real posts from yesterday (March 27)
          const scheduledPosts: ScheduledPost[] = [
            {
              date: new Date(2026, 2, 27),
              keyword: 'photobiomodulation lyon',
              text: editedPosts['photobiomodulation lyon-2026-02-27'] || 'Nouveau au Centre Rabelais : la Photobiomodulation (système Valeda) est désormais disponible pour traiter la DMLA sèche. 9 séances indolores de 5 minutes. Prenez RDV pour évaluer votre éligibilité.',
              cta: 'Prendre rendez-vous',
              status: 'posted',
              image: GBP_IMAGES['photobiomodulation lyon'] || '/admin/gbp/photobiomodulation.png',
            },
            {
              date: new Date(2026, 2, 27),
              keyword: 'traitement dmla lyon',
              text: 'Lignes déformées ? Consultez rapidement un rétinologue. Un examen OCT maculaire au Centre Rabelais permet de diagnostiquer la DMLA en quelques secondes, sans dilatation et sans douleur.',
              cta: 'En savoir plus',
              status: 'posted',
              image: GBP_IMAGES['traitement dmla lyon'] || '/admin/gbp/dmla.png',
            },
            {
              date: new Date(2026, 2, 27),
              keyword: 'injection intravitréenne lyon',
              text: 'Injections IVT anti-VEGF : un circuit court et sécurisé à Lyon. Diagnostic OCT + consultation rétinologue + injection le même jour, dans un environnement stérile dédié.',
              cta: 'Contacter le centre',
              status: 'posted',
              image: GBP_IMAGES['injection intravitréenne lyon'] || '/admin/gbp/injection.png',
            },
          ];

          // Generate future planned posts: Mon/Wed/Fri starting March 30
          let templateIdx = 0;
          let imagePoolIdx = 0; // Round-robin counter for IMAGE_POOL
          const usedImages = new Set<string>(scheduledPosts.map(p => p.image)); // Track used images
          const cursor = new Date(2026, 2, 30); // Mon March 30
          const endDate = new Date(2026, 4, 2); // May 2
          while (cursor <= endDate) {
            if (postDays.includes(cursor.getDay())) {
              const tpl = allTemplates[templateIdx % allTemplates.length];
              const dateKeyKey = `${cursor.getFullYear()}-${cursor.getMonth()}-${cursor.getDate()}`;
              const postKey = `${tpl.keyword}-${dateKeyKey}`;
              // Pick a unique image: prefer keyword-specific, fall back to next from pool
              let chosenImage = GBP_IMAGES[tpl.keyword] || IMAGE_POOL[imagePoolIdx % IMAGE_POOL.length];
              if (usedImages.has(chosenImage)) {
                // Find next unused image from pool
                for (let attempt = 0; attempt < IMAGE_POOL.length; attempt++) {
                  const candidate = IMAGE_POOL[(imagePoolIdx + attempt) % IMAGE_POOL.length];
                  if (!usedImages.has(candidate)) {
                    chosenImage = candidate;
                    imagePoolIdx = (imagePoolIdx + attempt + 1);
                    break;
                  }
                }
                // If all used (pool exhausted after 22+ posts), reset and cycle
                if (usedImages.has(chosenImage) && usedImages.size >= IMAGE_POOL.length) {
                  usedImages.clear();
                  chosenImage = IMAGE_POOL[imagePoolIdx % IMAGE_POOL.length];
                  imagePoolIdx++;
                }
              }
              usedImages.add(chosenImage);
              scheduledPosts.push({
                date: new Date(cursor),
                keyword: tpl.keyword,
                text: editedPosts[`${tpl.keyword}-${dateKeyKey}`] || tpl.textTemplate,
                cta: tpl.callToAction,
                status: 'scheduled',
                image: imageOverrides[postKey] || chosenImage,
              });
              templateIdx++;
            }
            cursor.setDate(cursor.getDate() + 1);
          }

          // Counts
          const postedCount = scheduledPosts.filter(p => p.status === 'posted').length;
          const plannedCount = scheduledPosts.filter(p => p.status === 'scheduled').length;

          // Format date in French
          const fmtDate = (d: Date) => {
            const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
            const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
            return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
          };

          // For calendar: build March and April grids
          const buildMonthGrid = (year: number, month: number) => {
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            // In French calendar, week starts on Monday (1=Mon, 0=Sun→6)
            let startPad = (firstDay.getDay() + 6) % 7; // Mon=0, Tue=1, ...Sun=6
            const cells: { day: number | null; date: Date | null }[] = [];
            for (let i = 0; i < startPad; i++) cells.push({ day: null, date: null });
            for (let d = 1; d <= lastDay.getDate(); d++) {
              cells.push({ day: d, date: new Date(year, month, d) });
            }
            // Pad to complete last week
            while (cells.length % 7 !== 0) cells.push({ day: null, date: null });
            return cells;
          };

          const marchGrid = buildMonthGrid(2026, 2);
          const aprilGrid = buildMonthGrid(2026, 3);

          // Map of date string → array of posts for quick lookup
          const postsByDate: Record<string, ScheduledPost[]> = {};
          scheduledPosts.forEach(p => {
            const key = `${p.date.getFullYear()}-${p.date.getMonth()}-${p.date.getDate()}`;
            if (!postsByDate[key]) postsByDate[key] = [];
            postsByDate[key].push(p);
          });

          const getPostsForDate = (d: Date | null): ScheduledPost[] => {
            if (!d) return [];
            return postsByDate[`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`] || [];
          };

          const isToday = (d: Date | null) => {
            if (!d) return false;
            return d.getFullYear() === TODAY.getFullYear() && d.getMonth() === TODAY.getMonth() && d.getDate() === TODAY.getDate();
          };

          return (
          <div className="space-y-6">
            {/* Auto mode toggle + stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6 flex items-center justify-between col-span-2 md:col-span-1">
                <div>
                  <h3 className="text-sm font-bold text-white/80">Autopilot</h3>
                  <p className="text-white/30 text-[10px] mt-1">
                    {autoMode ? 'Auto 3x/sem' : 'Validation manuelle'}
                  </p>
                </div>
                <button
                  onClick={() => setAutoMode(!autoMode)}
                  className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                    autoMode ? 'bg-green-500/30 border border-green-500/50' : 'bg-white/10 border border-white/10'
                  }`}
                >
                  <div className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ${
                    autoMode ? 'right-0.5 bg-green-400 shadow-lg shadow-green-500/30' : 'left-0.5 bg-white/30'
                  }`} />
                </button>
              </div>
              <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-6 text-center">
                <p className="text-green-400 text-2xl font-bold">{postedCount}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Posts Publiés</p>
              </div>
              <div className="bg-[#003399]/10 border border-[#003399]/20 rounded-2xl p-6 text-center">
                <p className="text-[#6699ff] text-2xl font-bold">{plannedCount}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Posts Planifiés</p>
              </div>
            </div>

            {/* Calendar — Mars & Avril 2026 */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">📅 Calendrier de Publication</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* March */}
                {[
                  { label: 'Mars 2026', grid: marchGrid, month: 2 },
                  { label: 'Avril 2026', grid: aprilGrid, month: 3 },
                ].map((cal) => (
                  <div key={cal.label}>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3 text-center">{cal.label}</p>
                    <div className="grid grid-cols-7 gap-1">
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                        <div key={`${cal.label}-hdr-${i}`} className="text-center text-[9px] uppercase tracking-wider text-white/20 py-1 font-bold">{d}</div>
                      ))}
                      {cal.grid.map((cell, i) => {
                        const datePosts = getPostsForDate(cell.date);
                        const post = datePosts.length > 0 ? datePosts[0] : null;
                        const today = isToday(cell.date);
                        return (
                          <div
                            key={`${cal.label}-${i}`}
                            onClick={() => { if(datePosts.length > 0) { setAllPostsForDate(datePosts); setModalPostIndex(0); setSelectedPost(datePosts[0]); } }}
                            className={`relative text-center py-2 rounded-lg text-[11px] transition-all ${post ? 'cursor-pointer hover:bg-white/10' : ''} ${
                              cell.day === null ? '' :
                              today ? 'bg-[#c2aa84]/20 text-[#c2aa84] font-bold border border-[#c2aa84]/30' :
                              post?.status === 'posted' ? 'bg-green-500/10 text-green-400 font-semibold' :
                              post?.status === 'scheduled' ? 'bg-[#003399]/15 text-[#6699ff] font-semibold' :
                              'text-white/15'
                            }`}
                            title={post ? `${post.keyword} — ${post.status === 'posted' ? 'Publié' : 'Planifié'}` : ''}
                          >
                            {cell.day || ''}
                            {post && (
                              <div className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                                post.status === 'posted' ? 'bg-green-400' : 'bg-[#6699ff]'
                              }`} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {/* Legend */}
                    <div className="flex justify-center gap-4 mt-3">
                      <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider text-white/30">
                        <span className="w-2 h-2 rounded-full bg-green-400" /> Publié
                      </span>
                      <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider text-white/30">
                        <span className="w-2 h-2 rounded-full bg-[#6699ff]" /> Planifié
                      </span>
                      <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider text-white/30">
                        <span className="w-2 h-2 rounded-full bg-[#c2aa84]" /> Aujourd&apos;hui
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post list — upcoming first, then past */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-4">📮 File d&apos;attente des Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[...scheduledPosts]
                  .sort((a, b) => {
                    // Show planned first (nearest), then posted (most recent first)
                    if (a.status === 'scheduled' && b.status === 'posted') return -1;
                    if (a.status === 'posted' && b.status === 'scheduled') return 1;
                    if (a.status === 'scheduled') return a.date.getTime() - b.date.getTime();
                    return b.date.getTime() - a.date.getTime();
                  })
                  .slice(0, 6)
                  .map((post) => (
                  <div key={`${post.keyword}-${post.date.toISOString()}`} className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group">
                    {/* Post image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={`GBP Post — ${post.keyword}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
                      {/* Status badge */}
                      <div className={`absolute top-3 left-3 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border backdrop-blur-md ${
                        post.status === 'posted'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-[#003399]/30 text-[#6699ff] border-[#003399]/40'
                      }`}>
                        {post.status === 'posted' ? '✓ Publié' : '⏳ Planifié'}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/70 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 font-mono">
                        {fmtDate(post.date)}
                      </div>
                      {post.status === 'scheduled' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const postKey = `${post.keyword}-${post.date.getFullYear()}-${post.date.getMonth()}-${post.date.getDate()}`;
                            cycleImage(postKey, post.image);
                          }}
                          className="absolute bottom-3 right-3 bg-black/60 backdrop-blur border border-white/10 hover:bg-white/10 text-white/70 hover:text-white px-3 py-1 text-[10px] uppercase tracking-wider rounded-lg transition-all"
                        >
                          🔄 Recréer img
                        </button>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#003399]/20 text-[#6699ff] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                          {post.keyword}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">{post.text}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#c2aa84] text-[10px] uppercase tracking-wider">
                          {post.cta} →
                        </span>
                        <div className="flex gap-2">
                          {post.status === 'scheduled' && !autoMode && (
                            <button className="bg-green-500/10 text-green-400 hover:bg-green-500/20 text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg transition-all">
                              ✓ Publier
                            </button>
                          )}
                          {post.status === 'scheduled' && (
                            <button 
                              onClick={() => setSelectedPost(post)}
                              className="bg-white/5 text-white/40 hover:bg-white/10 text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg transition-all"
                            >
                              Modifier
                            </button>
                          )}
                          {post.status === 'posted' && (
                            <span className="text-green-400/40 text-[10px] uppercase tracking-wider font-bold px-4 py-2">
                              ✓ Envoyé {fmtDate(post.date)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
        })()}

        {/* GAP ANALYSIS TAB */}
        {activeTab === 'gap-analysis' && (() => {
          // Parse GBP input into services list
          const parseGbp = () => {
            const lines = gbpInput.split(/[\n,;]+/).map(l => l.trim()).filter(Boolean);
            setParsedGbp(lines);
          };

          // Match a GBP service against existing site pages
          const findCoverage = (service: string): { status: 'covered' | 'partial' | 'missing'; page?: string } => {
            const s = service.toLowerCase();
            for (const page of SITE_PAGES) {
              const exact = page.services.some(kw => s.includes(kw.toLowerCase()) || kw.toLowerCase().includes(s));
              if (exact) return { status: 'covered', page: page.url };
            }
            // Partial: url slug contains a word from service
            const words = s.split(' ').filter(w => w.length > 4);
            for (const page of SITE_PAGES) {
              if (words.some(w => page.url.includes(w) || page.label.toLowerCase().includes(w))) {
                return { status: 'partial', page: page.url };
              }
            }
            return { status: 'missing' };
          };

          const gapResults = parsedGbp.map(svc => ({ service: svc, ...findCoverage(svc) }));
          const missingCount = gapResults.filter(r => r.status === 'missing').length;
          const coveredCount = gapResults.filter(r => r.status === 'covered').length;
          const filteredResults = gapFilter === 'all' ? gapResults : gapResults.filter(r => r.status === gapFilter);

          return (
            <div className="space-y-6">
              {/* Hero header */}
              <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent border border-purple-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-purple-500/30">Core 30 Framework</span>
                    <span className="text-white/20 text-[10px]">Inspiré par la méthode d&apos;alignement GBP ↔ Site</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">Analyse des Écarts — GBP vs Pages Web</h2>
                  <p className="text-white/40 text-sm">Collez vos services GBP ci-dessous pour détecter les pages manquantes. Chaque service sans page = une position Google perdue.</p>
                </div>
              </div>

              {/* Stats row — only show if we have results */}
              {parsedGbp.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-5 text-center">
                    <p className="text-green-400 text-3xl font-bold">{coveredCount}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">✓ Couverts</p>
                  </div>
                  <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-5 text-center">
                    <p className="text-yellow-400 text-3xl font-bold">{gapResults.filter(r => r.status === 'partial').length}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">⚡ Partiels</p>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-5 text-center">
                    <p className="text-red-400 text-3xl font-bold">{missingCount}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">✗ Manquants</p>
                  </div>
                </div>
              )}

              {/* Input + existing pages */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* GBP input */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-4">① Collez vos Services GBP</h3>
                  <p className="text-white/30 text-[11px] mb-3">Un service par ligne, ou séparés par virgules. Copiez directement depuis votre fiche Google.</p>
                  <textarea
                    value={gbpInput}
                    onChange={e => setGbpInput(e.target.value)}
                    placeholder={`Exemples:\nDMAL humide\nDMLA sèche\nPhotobiomodulation Valeda\nInjections intravitréennes\nOCT macula\nRétinopathie diabétique\nCorps flottants\nSécheresse oculaire\nGlaucome`}
                    className="w-full h-52 bg-white/5 border border-white/10 rounded-xl p-3 text-white/70 text-sm resize-none focus:border-purple-500/40 focus:outline-none transition-colors placeholder:text-white/15"
                  />
                  <button
                    onClick={parseGbp}
                    disabled={!gbpInput.trim()}
                    className="mt-3 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-30 text-white font-bold text-[11px] uppercase tracking-[2px] py-3 rounded-xl transition-all"
                  >
                    🔬 Analyser les Écarts
                  </button>
                </div>

                {/* Existing pages */}
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-4">② Pages Existantes ({SITE_PAGES.length})</h3>
                  <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                    {SITE_PAGES.map(p => (
                      <div key={p.url} className="flex items-center gap-2 py-1">
                        <span className="text-green-400 text-xs">✓</span>
                        <span className="text-white/50 text-xs font-mono">{p.url}</span>
                        <span className="text-white/20 text-[10px] truncate">{p.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gap results */}
              {parsedGbp.length > 0 && (
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
                  <div className="p-5 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">③ Résultats — {gapResults.length} services analysés</h3>
                    <div className="flex gap-1">
                      {(['all', 'missing', 'covered'] as const).map(f => (
                        <button key={f} onClick={() => setGapFilter(f)} className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg transition-all ${
                          gapFilter === f ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/60'
                        }`}>
                          {f === 'all' ? 'Tous' : f === 'missing' ? '✗ Manquants' : '✓ Couverts'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="divide-y divide-white/[0.03]">
                    {filteredResults.map(r => (
                      <div key={r.service} className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            r.status === 'covered' ? 'bg-green-500/10 text-green-400' :
                            r.status === 'partial' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-red-500/10 text-red-400'
                          }`}>
                            {r.status === 'covered' ? '✓ OK' : r.status === 'partial' ? '⚡ Partiel' : '✗ Manquant'}
                          </span>
                          <span className="text-white/70 text-sm">{r.service}</span>
                        </div>
                        <div className="text-right">
                          {r.page ? (
                            <span className="text-white/30 text-xs font-mono">{r.page}</span>
                          ) : (
                            <span className="text-red-400/60 text-xs">Créer une page →</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested missing pages — always visible */}
              <div className="bg-white/5 backdrop-blur border border-red-500/10 rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-red-400 font-bold">🚨 Pages Manquantes Identifiées — Opportunités Prioritaires</h3>
                  <p className="text-white/30 text-[11px] mt-1">Services probablement listés sur votre GBP sans page dédiée sur le site — chaque ligne = du trafic perdu</p>
                </div>
                <div className="divide-y divide-white/[0.03]">
                  {SUGGESTED_MISSING.map(item => (
                    <div key={item.slug} className="flex items-start justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white/80 text-sm font-medium">{item.service}</span>
                          <span className="bg-red-500/10 text-red-400 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Page manquante</span>
                        </div>
                        <p className="text-white/30 text-[11px]">{item.reason}</p>
                        <p className="text-white/20 text-[10px] font-mono mt-0.5">Slug suggéré: {item.slug}</p>
                      </div>
                      <div className="text-right ml-4 shrink-0">
                        <p className="text-[#c2aa84] font-bold text-sm">{item.volume.toLocaleString()}</p>
                        <p className="text-white/20 text-[9px] uppercase tracking-wider">recherches/mois</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topical relevance */}
              <div className="bg-white/5 backdrop-blur border border-[#003399]/20 rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-[#6699ff] font-bold">💡 Contenu de Soutien — Pertinence Thématique</h3>
                  <p className="text-white/30 text-[11px] mt-1">Questions PAA et sujets Reddit que vos patients cherchent — à ajouter en FAQ ou article de soutien</p>
                </div>
                <div className="divide-y divide-white/[0.03]">
                  {TOPICAL_IDEAS.map(idea => (
                    <div key={idea.topic} className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          idea.priority === 'high' ? 'bg-orange-500/10 text-orange-400' : 'bg-blue-500/10 text-blue-400'
                        }`}>
                          {idea.priority === 'high' ? '🔥 Urgent' : '📌 Normal'}
                        </span>
                        <span className="text-[10px] bg-white/5 text-white/30 px-2 py-0.5 rounded uppercase tracking-wider">{idea.type}</span>
                        <span className="text-white/70 text-sm">{idea.topic}</span>
                      </div>
                      <span className="text-white/20 text-xs font-mono shrink-0">{idea.targetPage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geo planner */}
              <div className="bg-white/5 backdrop-blur border border-green-500/10 rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-white/5">
                  <h3 className="text-xs uppercase tracking-widest text-green-400 font-bold">🗺️ Geo Planner — Zones à Conquérir</h3>
                  <p className="text-white/30 text-[11px] mt-1">Zones où nous sommes en position 4–8 sur Maps — une page géo avec landmarks locaux suffit pour passer Top 3</p>
                </div>
                <div className="divide-y divide-white/[0.03]">
                  {GEO_OPPORTUNITIES.map(geo => (
                    <div key={geo.area} className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white/80 text-sm font-medium">{geo.area}</span>
                          <span className="text-white/20 text-[10px]">• {geo.distance}</span>
                        </div>
                        <p className="text-white/30 text-[11px]">Landmarks: {geo.landmark}</p>
                        <p className="text-white/20 text-[10px] font-mono mt-0.5">Keyword cible: {geo.keyword}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className={`text-xl font-bold ${ geo.mapRank && geo.mapRank <= 3 ? 'text-green-400' : geo.mapRank ? 'text-yellow-400' : 'text-red-400' }`}>
                          {geo.mapRank ? `#${geo.mapRank}` : 'NR'}
                        </div>
                        <p className="text-white/20 text-[9px] uppercase tracking-wider">Maps</p>
                        <p className="text-[#c2aa84] font-bold text-xs mt-1">{geo.volume.toLocaleString()}/mois</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-green-500/5 border-t border-green-500/10">
                  <p className="text-green-400/60 text-[11px] text-center">💡 Stratégie: écrire 1 page par zone avec 3–5 landmarks Google Maps locaux. Ex: <em>&ldquo;Ophtalmologue près du Palais du Travail à Villeurbanne&rdquo;</em></p>
                </div>
              </div>
              {/* ── COMPETITOR INTELLIGENCE ── */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-500/10 via-orange-500/5 to-transparent border border-red-500/20 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-white mb-1">⚔️ Intelligence Concurrentielle</h2>
                  <p className="text-white/40 text-sm">Catégories GBP, pages manquantes et mots-clés où les concurrents vous dépassent.</p>
                </div>

                {/* Competitor cards */}
                {COMPETITOR_PROFILES.map(comp => (
                  <div key={comp.name} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/5">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-white font-bold">{comp.name}</h3>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              comp.threat === 'high' ? 'bg-red-500/10 text-red-400' :
                              comp.threat === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                              'bg-green-500/10 text-green-400'
                            }`}>
                              {comp.threat === 'high' ? '🔴 Men. élevée' : comp.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}
                            </span>
                          </div>
                          <p className="text-white/30 text-[11px] mt-0.5">{comp.url} • ⭐ {comp.rating} ({comp.reviews.toLocaleString()} avis) • {comp.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
                      {/* GBP Categories they have */}
                      <div className="p-4">
                        <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-3">Catégories GBP</p>
                        <div className="space-y-1">
                          {comp.gbpCategories.map(cat => (
                            <div key={cat} className="flex items-center gap-2">
                              <span className="text-orange-400 text-xs">▶</span>
                              <span className="text-white/60 text-xs">{cat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Their pages vs ours */}
                      <div className="p-4">
                        <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-3">Services ↔ Couverture</p>
                        <div className="space-y-1">
                          {comp.theirPages.map(svc => (
                            <div key={svc.service} className="flex items-center justify-between">
                              <span className="text-white/50 text-xs">{svc.service}</span>
                              <span className={`text-[10px] font-bold ${svc.hasPage ? 'text-red-400' : 'text-green-400'}`}>
                                {svc.hasPage ? '✓ Eux' : '✓ Nous'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pages we need to build */}
                      <div className="p-4">
                        <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-3">🚀 Notre avantage</p>
                        <div className="space-y-1.5 mb-3">
                          {comp.ourAdvantages.map(adv => (
                            <div key={adv} className="flex items-start gap-1.5">
                              <span className="text-green-400 text-[10px] mt-0.5">★</span>
                              <span className="text-green-400/70 text-[10px] leading-snug">{adv}</span>
                            </div>
                          ))}
                        </div>
                        {comp.pagesToCreate.length > 0 && (
                          <>
                            <p className="text-[9px] uppercase tracking-widest text-red-400/60 font-bold mb-2">Pages à créer pour les battre</p>
                            {comp.pagesToCreate.map(p => (
                              <div key={p.page} className="mb-1.5">
                                <p className="text-[#c2aa84] text-[10px] font-mono">{p.page}</p>
                                <p className="text-white/20 text-[9px]">{p.reason}</p>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Keyword battlefield */}
                    {comp.keywordBattlefield.length > 0 && (
                      <div className="border-t border-white/[0.05] p-4">
                        <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-3">🔥 Battlefield — Mots-clés clés</p>
                        <div className="grid grid-cols-1 gap-1.5">
                          {comp.keywordBattlefield.map(kw => {
                            const winning = kw.us !== null && (kw.them === null || kw.us < kw.them);
                            const losing = kw.us === null || (kw.them !== null && kw.them < kw.us);
                            return (
                              <div key={kw.keyword} className="flex items-center justify-between bg-white/[0.02] rounded-lg px-3 py-2">
                                <span className="text-white/60 text-xs">{kw.keyword}</span>
                                <div className="flex items-center gap-4 shrink-0">
                                  <div className="text-center">
                                    <p className={`text-xs font-bold ${ kw.them && kw.them <= 3 ? 'text-red-400' : kw.them && kw.them <= 10 ? 'text-orange-400' : 'text-white/30' }`}>
                                      #{kw.them ?? '—'}
                                    </p>
                                    <p className="text-[8px] text-white/20">Eux</p>
                                  </div>
                                  <span className="text-white/10">vs</span>
                                  <div className="text-center">
                                    <p className={`text-xs font-bold ${ winning ? 'text-green-400' : losing ? 'text-red-400' : 'text-white/40' }`}>
                                      {kw.us !== null ? `#${kw.us}` : 'NR'}
                                    </p>
                                    <p className="text-[8px] text-white/20">Nous</p>
                                  </div>
                                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                                    winning ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                  }`}>
                                    {winning ? '✓ Gagné' : '✖ Perdu'}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {/* REPORTS TAB */}
        {activeTab === 'reports' && (() => {
          const now = new Date(2026, 2, 28);
          const dateStr = now.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          const rTop3 = TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 3);
          const rTop10 = TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 10);
          const rGmapTop3 = TARGET_KEYWORDS.filter(k => k.gmapPosition !== null && k.gmapPosition <= 3);
          const rAvgGain = TARGET_KEYWORDS.reduce((sum, k) => {
            if (k.previousPosition && k.currentPosition) return sum + (k.previousPosition - k.currentPosition);
            return sum;
          }, 0) / TARGET_KEYWORDS.filter(k => k.previousPosition && k.currentPosition).length;
          const bestMovers = TARGET_KEYWORDS
            .filter(k => k.previousPosition && k.currentPosition)
            .sort((a, b) => (b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!));

          const openPdfPreview = () => {
            const win = window.open('', '_blank');
            if (!win) return;
            win.document.write(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Rapport SEO/GEO — Centre Rabelais — ${dateStr}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #1e293b; }
  .page { max-width: 800px; margin: 0 auto; padding: 0; }
  @media print { .page { max-width: 100%; } .no-print { display: none !important; } }
  .header { background: linear-gradient(135deg, #0a0f1c 0%, #001a44 50%, #002266 100%); padding: 50px 40px; text-align: center; }
  .header h1 { color: white; font-size: 28px; font-weight: 300; letter-spacing: 6px; text-transform: uppercase; }
  .header h1 span { color: #c2aa84; font-weight: 800; }
  .header .subtitle { color: rgba(255,255,255,0.35); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-top: 8px; }
  .date-bar { background: linear-gradient(90deg, #c2aa84, #d4bc96); color: white; text-align: center; padding: 14px; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
  .section { padding: 32px 40px; }
  .section-title { font-size: 12px; color: #c2aa84; text-transform: uppercase; letter-spacing: 4px; font-weight: 800; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0; display: flex; align-items: center; gap: 8px; }
  .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 8px; }
  .kpi { text-align: center; padding: 24px 12px; border-radius: 16px; }
  .kpi.green { background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; }
  .kpi.gold { background: linear-gradient(135deg, #fefce8, #fef3c7); border: 1px solid #fde68a; }
  .kpi.blue { background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #93c5fd; }
  .kpi.purple { background: linear-gradient(135deg, #faf5ff, #f3e8ff); border: 1px solid #c4b5fd; }
  .kpi-value { font-size: 36px; font-weight: 900; line-height: 1; }
  .kpi.green .kpi-value { color: #16a34a; }
  .kpi.gold .kpi-value { color: #c2aa84; }
  .kpi.blue .kpi-value { color: #2563eb; }
  .kpi.purple .kpi-value { color: #7c3aed; }
  .kpi-label { font-size: 9px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-top: 6px; font-weight: 600; }
  table { width: 100%; border-collapse: collapse; }
  th { text-align: left; color: #94a3b8; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; padding: 10px 12px; border-bottom: 2px solid #f0f0f0; font-weight: 700; }
  td { padding: 12px; border-bottom: 1px solid #f8f8f8; font-size: 13px; }
  tr:hover { background: #fafbfc; }
  .pos { font-weight: 900; font-size: 18px; }
  .pos.top3 { color: #16a34a; }
  .pos.top10 { color: #c2aa84; }
  .pos.other { color: #94a3b8; }
  .gain { background: #f0fdf4; color: #16a34a; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; display: inline-block; }
  .loss { background: #fef2f2; color: #dc2626; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; display: inline-block; }
  .exec-summary { background: #f8fafc; border-left: 4px solid #c2aa84; padding: 20px 24px; border-radius: 0 12px 12px 0; margin: 16px 0; }
  .exec-summary h4 { font-size: 13px; font-weight: 800; color: #0a0f1c; margin-bottom: 8px; }
  .exec-summary p { font-size: 13px; color: #475569; line-height: 1.6; }
  .exec-summary ul { list-style: none; padding: 0; margin-top: 10px; }
  .exec-summary li { padding: 4px 0; font-size: 13px; color: #475569; }
  .exec-summary li::before { content: "✓ "; color: #16a34a; font-weight: 700; }
  .competitor-card { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; background: #f8fafc; border-radius: 10px; margin-bottom: 8px; }
  .threat-high { color: #dc2626; font-weight: 700; font-size: 11px; background: #fef2f2; padding: 3px 10px; border-radius: 6px; }
  .threat-medium { color: #d97706; font-weight: 700; font-size: 11px; background: #fffbeb; padding: 3px 10px; border-radius: 6px; }
  .threat-low { color: #16a34a; font-weight: 700; font-size: 11px; background: #f0fdf4; padding: 3px 10px; border-radius: 6px; }
  .footer { background: #0a0f1c; padding: 40px; text-align: center; }
  .footer p { color: rgba(255,255,255,0.3); font-size: 11px; margin: 3px 0; }
  .footer a { color: #c2aa84; text-decoration: none; }
  .print-btn { position: fixed; top: 20px; right: 20px; background: #003399; color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 13px; cursor: pointer; z-index: 100; box-shadow: 0 4px 12px rgba(0,51,153,0.3); }
  .print-btn:hover { background: #0044cc; }
</style></head><body>
<button class="print-btn no-print" onclick="window.print()">📄 Télécharger PDF</button>
<div class="page">
  <div class="header">
    <h1>Centre <span>Rabelais</span></h1>
    <div class="subtitle">Rapport SEO / GEO Hebdomadaire</div>
  </div>
  <div class="date-bar">${dateStr}</div>

  <div class="section">
    <div class="exec-summary">
      <h4>📋 Résumé Exécutif</h4>
      <p>Le Centre Ophtalmologique Rabelais poursuit une progression significative dans le référencement Google et Google Maps. Voici les résultats clés cette semaine :</p>
      <ul>
        <li><strong>${rTop3.length} mot${rTop3.length > 1 ? 's' : ''}-clé${rTop3.length > 1 ? 's' : ''}</strong> en Top 3 Google (${rTop3.map(k => '"' + k.keyword + '"').join(', ')})</li>
        <li><strong>${rTop10.length}</strong> mots-clés en première page Google (Top 10)</li>
        <li>Gain moyen de <strong>+${rAvgGain.toFixed(1)} positions</strong> par mot-clé</li>
        <li><strong>${rGmapTop3.length}</strong> mot${rGmapTop3.length > 1 ? 's' : ''}-clé${rGmapTop3.length > 1 ? 's' : ''} en Top 3 Google Maps</li>
      </ul>
    </div>
  </div>

  <div class="section" style="padding-top:0">
    <div class="kpi-grid">
      <div class="kpi green"><div class="kpi-value">${rTop3.length}</div><div class="kpi-label">Top 3 Google</div></div>
      <div class="kpi gold"><div class="kpi-value">${rTop10.length}</div><div class="kpi-label">Top 10 Google</div></div>
      <div class="kpi blue"><div class="kpi-value">${rGmapTop3.length}</div><div class="kpi-label">Top 3 Maps</div></div>
      <div class="kpi purple"><div class="kpi-value">+${rAvgGain.toFixed(0)}</div><div class="kpi-label">Gain Moyen</div></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">🎯 Positionnement Google — Détail Complet</div>
    <table>
      <tr><th>Mot-clé</th><th>Catégorie</th><th>Volume</th><th>Position</th><th>Évolution</th><th>Maps</th></tr>
      ${TARGET_KEYWORDS.map(kw => {
        const gain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
        const posClass = kw.currentPosition && kw.currentPosition <= 3 ? 'top3' : kw.currentPosition && kw.currentPosition <= 10 ? 'top10' : 'other';
        const catLabels: Record<string, string> = { head: '🔵 Principal', service: '🟢 Service', geo: '📍 Local', 'long-tail': '🎯 Longue traîne' };
        return '<tr><td><strong>' + kw.keyword + '</strong><br/><span style="color:#94a3b8;font-size:10px">' + kw.targetPage + '</span></td><td style="font-size:11px">' + (catLabels[kw.category] || kw.category) + '</td><td style="text-align:center;color:#94a3b8">' + kw.monthlyVolume.toLocaleString() + '</td><td><span class="pos ' + posClass + '">#' + (kw.currentPosition || '—') + '</span></td><td>' + (gain > 0 ? '<span class="gain">↑ ' + gain + '</span>' : gain < 0 ? '<span class="loss">↓ ' + Math.abs(gain) + '</span>' : '—') + '</td><td><span class="pos ' + (kw.gmapPosition && kw.gmapPosition <= 3 ? 'top3' : kw.gmapPosition ? 'top10' : 'other') + '">' + (kw.gmapPosition ? '#' + kw.gmapPosition : '—') + '</span></td></tr>';
      }).join('')}
    </table>
  </div>

  <div class="section">
    <div class="section-title">📊 Progression des Mots-Clés — Gains de Positions</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${bestMovers.slice(0, 10).map(kw => {
        const gain = kw.previousPosition! - kw.currentPosition!;
        const pct = Math.min(gain * 8, 100);
        return '<div style="display:flex;align-items:center;gap:12px"><div style="width:200px;font-size:12px;font-weight:600;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + kw.keyword + '</div><div style="flex:1;height:24px;background:#f1f5f9;border-radius:8px;overflow:hidden;position:relative"><div style="height:100%;width:' + pct + '%;background:linear-gradient(90deg,#22c55e,#16a34a);border-radius:8px;display:flex;align-items:center;justify-content:flex-end;padding-right:8px"><span style="color:white;font-size:10px;font-weight:800">+' + gain + '</span></div></div><div style="width:70px;text-align:center;font-size:12px;color:#94a3b8">#' + kw.previousPosition + ' → <strong style="color:#16a34a">#' + kw.currentPosition + '</strong></div></div>';
      }).join('')}
    </div>
  </div>

  <div class="section" style="page-break-before:always">
    <div class="section-title">🗺️ GeoGrid — Couverture Géographique Google Maps</div>
    <p style="color:#64748b;font-size:12px;margin-bottom:16px">Chaque grille montre la position du Centre Rabelais dans Google Maps depuis différents points géographiques autour de Lyon. Vert = Top 3, Or = Top 5, Jaune = Top 10, Orange = Top 15, Rouge = 16+.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
      ${GEOGRID_DATA.slice(0, 4).map(gd => {
        const getColor = (v: number | null) => {
          if (v === null) return { bg: '#f8fafc', text: '#cbd5e1', border: '#e2e8f0' };
          if (v <= 3) return { bg: '#dcfce7', text: '#16a34a', border: '#86efac' };
          if (v <= 5) return { bg: '#fef3c7', text: '#b8860b', border: '#fde68a' };
          if (v <= 10) return { bg: '#fefce8', text: '#ca8a04', border: '#fde68a' };
          if (v <= 15) return { bg: '#ffedd5', text: '#ea580c', border: '#fdba74' };
          return { bg: '#fef2f2', text: '#dc2626', border: '#fca5a5' };
        };
        const top3Count = gd.grid.flat().filter(v => v !== null && v <= 3).length;
        const totalPoints = gd.grid.flat().filter(v => v !== null).length;
        return '<div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#fafbfc"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><p style="font-weight:800;font-size:13px;color:#0f172a">' + gd.keyword + '</p><span style="font-size:10px;background:#dcfce7;color:#16a34a;padding:2px 8px;border-radius:6px;font-weight:700">' + top3Count + '/' + totalPoints + ' Top 3</span></div><table style="width:100%;border-collapse:collapse">' + gd.grid.map(row => '<tr>' + row.map(cell => { const c = getColor(cell); return '<td style="width:36px;height:36px;text-align:center;font-weight:900;font-size:14px;background:' + c.bg + ';color:' + c.text + ';border:1px solid ' + c.border + ';border-radius:6px">' + (cell !== null ? cell : '·') + '</td>'; }).join('') + '</tr>').join('') + '</table></div>';
      }).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">⚔️ Veille Concurrentielle</div>
    ${COMPETITORS.map(c => '<div class="competitor-card"><div><strong style="font-size:14px">' + c.name + '</strong><br/><span style="color:#94a3b8;font-size:11px">' + c.url + ' — ⭐ ' + c.rating + ' (' + c.reviews + ' avis)</span></div><span class="threat-' + c.threat + '">' + (c.threat === 'high' ? '🔴 Menace élevée' : c.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible') + '</span></div>').join('')}
  </div>

  <div class="footer">
    <p><a href="https://centrerabelaislyon.fr">centrerabelaislyon.fr</a></p>
    <p style="margin-top:8px">Rapport généré automatiquement — Ne pas répondre à cet email</p>
    <p>© 2026 Centre Ophtalmologique Rabelais</p>
  </div>
</div></body></html>`);
            win.document.close();
          };

          return (
          <div className="space-y-6">
            {/* Header with actions */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white/90">Rapport SEO/GEO Hebdomadaire</h3>
                  <p className="text-white/30 text-sm mt-1">
                    Envoyé automatiquement chaque lundi à 9h00
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={openPdfPreview}
                    className="bg-white/10 hover:bg-white/15 text-white font-bold text-[11px] uppercase tracking-[2px] px-5 py-3 rounded-xl transition-all border border-white/10 hover:border-white/20"
                  >
                    📄 Aperçu PDF
                  </button>
                  <button
                    onClick={handleSendReport}
                    disabled={sendingReport}
                    className="bg-gradient-to-r from-[#003399] to-[#0044cc] hover:from-[#0044cc] hover:to-[#0055ff] disabled:opacity-50 text-white font-bold text-[11px] uppercase tracking-[2px] px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#003399]/20"
                  >
                    {sendingReport ? '⏳ Envoi...' : reportSent ? '✅ Envoyé !' : '📧 Envoyer Maintenant'}
                  </button>
                </div>
              </div>

              {/* Recipients */}
              <div className="space-y-3 mb-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Destinataires</p>
                {['jeffos101@gmail.com', 'ophrabelais@hotmail.fr'].map((email) => (
                  <div key={email} className="flex items-center gap-3 bg-white/[0.02] px-5 py-3 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/60 text-sm font-mono">{email}</span>
                  </div>
                ))}
              </div>

              {/* Executive Summary */}
              <div className="bg-[#c2aa84]/5 border border-[#c2aa84]/10 rounded-xl p-6 mb-8">
                <h4 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-3">📋 Résumé Exécutif</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">✓ <strong className="text-white/80">{rTop3.length}</strong> mot{rTop3.length > 1 ? 's' : ''}-clé{rTop3.length > 1 ? 's' : ''} en <span className="text-green-400 font-bold">Top 3</span> Google</p>
                    <p className="text-white/60 text-sm">✓ <strong className="text-white/80">{rTop10.length}</strong> mots-clés en <span className="text-[#c2aa84] font-bold">première page</span></p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">✓ Gain moyen : <span className="text-purple-400 font-bold">+{rAvgGain.toFixed(1)} positions</span></p>
                    <p className="text-white/60 text-sm">✓ <strong className="text-white/80">{rGmapTop3.length}</strong> mot{rGmapTop3.length > 1 ? 's' : ''}-clé{rGmapTop3.length > 1 ? 's' : ''} en Top 3 Maps</p>
                  </div>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <p className="text-green-400 text-3xl font-bold">{rTop3.length}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Top 3 Google</p>
                </div>
                <div className="text-center p-4 bg-[#c2aa84]/5 rounded-xl border border-[#c2aa84]/10">
                  <p className="text-[#c2aa84] text-3xl font-bold">{rTop10.length}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Top 10 Google</p>
                </div>
                <div className="text-center p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <p className="text-blue-400 text-3xl font-bold">{rGmapTop3.length}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Top 3 Maps</p>
                </div>
                <div className="text-center p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                  <p className="text-purple-400 text-3xl font-bold">+{rAvgGain.toFixed(0)}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Gain Moyen</p>
                </div>
              </div>

              {/* Full keyword table */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">🎯 Positionnement Google — Détail complet</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-white/30 text-[9px] uppercase tracking-wider border-b border-white/5">
                        <th className="text-left py-2 px-3">Mot-clé</th>
                        <th className="text-center py-2 px-3">Vol.</th>
                        <th className="text-center py-2 px-3">Google</th>
                        <th className="text-center py-2 px-3">Évol.</th>
                        <th className="text-center py-2 px-3">Maps</th>
                        <th className="text-left py-2 px-3">Concurrent #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TARGET_KEYWORDS.map((kw) => {
                        const gain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
                        return (
                          <tr key={kw.keyword} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                            <td className="py-3 px-3">
                              <p className="text-white/80 font-medium">{kw.keyword}</p>
                              <p className="text-white/20 text-[10px]">{kw.targetPage}</p>
                            </td>
                            <td className="py-3 px-3 text-center text-white/30 text-xs">{kw.monthlyVolume.toLocaleString()}</td>
                            <td className="py-3 px-3 text-center">
                              <span className={`font-bold text-lg ${kw.currentPosition && kw.currentPosition <= 3 ? 'text-green-400' : kw.currentPosition && kw.currentPosition <= 10 ? 'text-[#c2aa84]' : 'text-white/40'}`}>
                                #{kw.currentPosition || '—'}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center">
                              {gain > 0 ? (
                                <span className="bg-green-500/10 text-green-400 font-bold text-xs px-2 py-1 rounded">↑{gain}</span>
                              ) : (
                                <span className="text-white/20 text-xs">—</span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-center">
                              <span className={`font-bold ${kw.gmapPosition && kw.gmapPosition <= 3 ? 'text-green-400' : kw.gmapPosition ? 'text-[#c2aa84]' : 'text-white/20'}`}>
                                {kw.gmapPosition ? `#${kw.gmapPosition}` : '—'}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-white/30 text-xs">{kw.competitor1.name} {kw.competitor1.position ? `(#${kw.competitor1.position})` : ''}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Competitors */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">⚔️ Veille Concurrentielle</p>
                <div className="space-y-2">
                  {COMPETITORS.map((comp) => (
                    <div key={comp.name} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3">
                      <div>
                        <p className="text-white/70 text-sm font-medium">{comp.name}</p>
                        <p className="text-white/20 text-[10px]">{comp.url} — ⭐ {comp.rating} ({comp.reviews} avis)</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                        comp.threat === 'high' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        comp.threat === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        {comp.threat === 'high' ? '🔴 Élevée' : comp.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          );
        })()}

        {/* Modal for viewing/editing post */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#0a0f1c] border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl relative">
              <button 
                onClick={() => { setSelectedPost(null); setAllPostsForDate([]); setModalPostIndex(0); }}
                className="absolute top-4 right-4 text-white/40 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* Title + post counter */}
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-[#c2aa84] font-bold uppercase tracking-widest text-xs">
                  {selectedPost.status === 'posted' ? '👁️ Voir le Post' : '✏️ Modifier le Post'}
                </h2>
                {allPostsForDate.length > 1 && (
                  <span className="text-white/30 text-[10px] bg-white/5 px-2 py-0.5 rounded-full">
                    {modalPostIndex + 1} / {allPostsForDate.length}
                  </span>
                )}
              </div>

              {/* Navigation arrows for multiple posts on same date */}
              {allPostsForDate.length > 1 && (
                <>
                  <button
                    onClick={() => { const prev = (modalPostIndex - 1 + allPostsForDate.length) % allPostsForDate.length; setModalPostIndex(prev); setSelectedPost(allPostsForDate[prev]); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all text-sm"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => { const next = (modalPostIndex + 1) % allPostsForDate.length; setModalPostIndex(next); setSelectedPost(allPostsForDate[next]); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all text-sm"
                  >
                    →
                  </button>
                </>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-wider">Mot-clé cible</label>
                  <p className="text-[#6699ff] bg-[#003399]/20 px-3 py-1 rounded-md mt-1 font-bold inline-block text-[13px]">
                    {selectedPost.keyword}
                  </p>
                </div>
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-wider">Date</label>
                  <p className="text-white/80 mt-1 capitalize text-[13px] font-medium">{selectedPost.date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-wider flex justify-between">
                    <span>Texte de la publication</span>
                    {selectedPost.status === 'scheduled' && <span className="text-green-400">Modifiable</span>}
                  </label>
                  {selectedPost.status === 'scheduled' ? (
                    <textarea 
                      className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm h-32 focus:border-[#6699ff] outline-none transition-colors resize-none"
                      value={editedPosts[`${selectedPost.keyword}-${selectedPost.date.getFullYear()}-${selectedPost.date.getMonth()}-${selectedPost.date.getDate()}`] ?? selectedPost.text}
                      onChange={(e) => setEditedPosts(prev => ({ ...prev, [`${selectedPost.keyword}-${selectedPost.date.getFullYear()}-${selectedPost.date.getMonth()}-${selectedPost.date.getDate()}`]: e.target.value }))}
                    />
                  ) : (
                    <div className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm">
                      {selectedPost.text}
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-white/40 text-[10px] uppercase tracking-wider mb-2 block">Image Visuelle</label>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10">
                    <Image src={selectedPost.image} alt="Visuel post" fill className="object-cover" />
                    <button
                      onClick={() => {
                        const postKey = `${selectedPost.keyword}-${selectedPost.date.getFullYear()}-${selectedPost.date.getMonth()}-${selectedPost.date.getDate()}`;
                        cycleImage(postKey, selectedPost.image);
                        const nextIdx = (IMAGE_POOL.indexOf(selectedPost.image) + 1) % IMAGE_POOL.length;
                        setSelectedPost({ ...selectedPost, image: IMAGE_POOL[nextIdx] });
                        if (allPostsForDate.length > 0) {
                          const updated = [...allPostsForDate];
                          updated[modalPostIndex] = { ...updated[modalPostIndex], image: IMAGE_POOL[nextIdx] };
                          setAllPostsForDate(updated);
                        }
                      }}
                      className="absolute bottom-2 right-2 bg-black/60 backdrop-blur border border-white/10 hover:bg-white/10 text-white/70 hover:text-white px-3 py-1 text-[10px] uppercase tracking-wider rounded-lg transition-all"
                    >
                      🔄 Recréer
                    </button>
                  </div>
                </div>
                {selectedPost.status === 'scheduled' && (
                  <button 
                    onClick={() => { setSelectedPost(null); setAllPostsForDate([]); setModalPostIndex(0); }}
                    className="w-full bg-[#003399] hover:bg-blue-800 text-white font-bold py-3 mt-2 rounded-xl transition-colors text-xs tracking-wider uppercase"
                  >
                    Vérifier et Enregistrer
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
