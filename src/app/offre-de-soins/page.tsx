import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offre de Soins - Traitement Rétine Lyon | Centre Ophtalmologique Rabelais',
  description: 'Découvrez les traitements spécialisés du Centre Ophtalmologique Rabelais à Lyon : Photobiomodulation (PBM), Photothérapie dynamique (PDT), Injections intra-vitréennes, OCT, Lasers maculaires et bien plus.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/offre-de-soins'
  }
};

export default function OffreDeSoinsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels types de pathologies sont pris en charge au Centre Ophtalmologique Rabelais ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Centre Ophtalmologique Rabelais à Lyon est spécialisé en rétine médicale et prend en charge la DMLA (dégénérescence maculaire liée à l'âge) sèche et humide, la rétinopathie diabétique, les occlusions veineuses rétiniennes, la choriorétinopathie séreuse centrale (CSC), les maladies inflammatoires de la rétine, le glaucome, la cataracte secondaire, ainsi que les pathologies de la surface oculaire comme la sécheresse oculaire évaporative."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la photobiomodulation (PBM) et pour qui est-elle indiquée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La photobiomodulation (PBM) est un traitement non invasif de la DMLA sèche débutante et intermédiaire utilisant le système VALEDA® de LumiThera, approuvé par la FDA. Il utilise des longueurs d'onde lumineuses spécifiques (jaune, rouge, proche infrarouge) pour stimuler la régénération des cellules de l'épithélium pigmentaire rétinien. Le protocole comprend 9 séances de 5 minutes sur 3 semaines. Le Centre Ophtalmologique Rabelais est l'un des rares centres en France à proposer cette thérapie innovante."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se déroule une injection intravitréenne (IVT) au Centre Rabelais ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'injection intravitréenne est un geste médical réalisé dans notre salle blanche stérile dédiée, sous anesthésie locale par collyre. Le médecin injecte un médicament anti-VEGF (Lucentis, Eylea ou Vabysmo) ou un corticoïde directement dans le vitré de l'œil. L'ensemble de la procédure dure environ 15 minutes. L'avantage du Centre Rabelais est la possibilité de réaliser l'injection le jour même du diagnostic, évitant les délais d'attente hospitaliers. Le patient peut repartir immédiatement après."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce qu'un OCT maculaire et pourquoi est-il important ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'OCT (Tomographie en Cohérence Optique) maculaire est un examen d'imagerie non invasif et indolore qui produit des coupes microscopiques de la rétine avec une résolution de l'ordre du micron. Il permet de visualiser et mesurer chaque couche rétinienne, de détecter précocement les drüsen, l'œdème maculaire, les néovaisseaux et l'atrophie. C'est l'examen de référence pour le diagnostic et le suivi de la DMLA, du diabète rétinien et du glaucome. Le Centre Rabelais dispose d'OCT Spectral-Domain de dernière génération et d'un OCT-Angiographie permettant une cartographie vasculaire sans injection de colorant."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre l'angiographie et l'OCT-Angiographie ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'angiographie conventionnelle nécessite l'injection intraveineuse d'un colorant (fluorescéine ou vert d'indocyanine) pour visualiser les vaisseaux rétiniens et choroïdiens. L'OCT-Angiographie (OCT-A) est une technique plus récente qui cartographie la vascularisation rétinienne sans injection de colorant, en analysant le déplacement des globules rouges à partir de la technologie OCT. Le Centre Rabelais dispose des deux modalités et a participé activement au développement de l'OCT-A depuis son état prototype. L'OCT-A est privilégiée pour le suivi régulier, tandis que l'angiographie conventionnelle reste indiquée pour certains diagnostics complexes."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la photothérapie dynamique (PDT) à la Visudyne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La PDT à la Visudyne (vertéporfine) est un traitement ophtalmologique combinant l'injection intraveineuse d'un photosensibilisant avec l'activation par laser diode à lumière froide (689 nm) au niveau de la rétine. Elle est indiquée principalement pour la choriorétinopathie séreuse centrale (CSC) chronique, certains néovaisseaux choroïdiens atypiques et la choroïdopathie polypoïdale. La PDT permet de détruire sélectivement les vaisseaux anormaux tout en préservant la rétine saine environnante."
        }
      },
      {
        "@type": "Question",
        "name": "Comment traite-t-on le glaucome au Centre Rabelais ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Centre Rabelais propose deux approches laser pour le glaucome. Le SLT (Selective Laser Trabeculoplasty) pour le glaucome à angle ouvert : un laser sélectif non invasif qui cible les cellules pigmentées du trabéculum pour améliorer l'écoulement de l'humeur aqueuse, réduisant la pression intraoculaire de 20 à 30%. L'iridotomie périphérique au laser YAG pour le glaucome par fermeture de l'angle : une micro-ouverture dans l'iris pour rétablir la circulation du liquide intraoculaire. Ces deux procédures sont réalisées en consultation, en 5 à 10 minutes, sans hospitalisation."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les équipements d'imagerie disponibles au Centre Rabelais ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Centre Ophtalmologique Rabelais dispose d'un plateau technique complet comprenant : des OCT Spectral-Domain de dernière génération pour l'imagerie maculaire et du nerf optique, un OCT-Angiographie pour la cartographie vasculaire sans colorant, un rétinographe confocal 65° et un système Optos grand champ 200° pour la visualisation de la périphérie rétinienne, un angiographe numérisé (fluorescéine et ICG), des lasers spécialisés (SLT, YAG, photocoagulateur, laser micropulsé), un système de photobiomodulation VALEDA, un dispositif Eyelight pour la sécheresse oculaire, et une salle blanche dédiée aux injections intravitréennes."
        }
      }
    ]
  };

  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner8.jpg"
            alt="Traitements de la macula et urgences ophtalmologiques Au Centre Ophtalmologique Rabelais de Lyon"
            title="Offre de Soins - Centre Ophtalmologique Rabelais"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Notre <strong className="font-bold">Offre de Soins</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-0 max-w-4xl mx-auto text-center">
        <p className="text-[#888888] text-[16px] md:text-[20px] font-light leading-[1.8]">
          Le <strong className="font-bold text-[#003399]">Centre Ophtalmologique Rabelais</strong> est une structure de soins spécialisée dans l&apos;imagerie Ophtalmologique et dans la prise en charge médicale experte des maladies rétiniennes (DMLA, rétinopathie diabétique, occlusions veineuses).
        </p>
      </section>

      {/* ======= 1. PHOTOBIOMODULATION (PBM) ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              La Photobiomodulation (PBM)
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              <strong className="font-bold text-[#003399]">Traitement pour la dégénérescence maculaire liée à l&apos;âge débutante et intermédiaire.</strong>
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              La photobiomodulation (PBM) aussi appelée luminothérapie, est une approche thérapeutique pour le traitement de différentes maladies rétiniennes et notamment la dégénérescence maculaire liée à l&apos;âge débutante ou intermédiaire. Cette procédure thérapeutique a récemment obtenu l&apos;approbation de la FDA (Food and Drug Administration) aux Etats Unis.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Elle consiste à l&apos;utilisation d&apos;une lumière diffuse proche de l&apos;infra-rouge, de faible puissance, capable de « régénérer » les cellules de la rétine et notamment de l&apos;épithélium pigmentaire, conduisant éventuellement à une amélioration du tableau clinique.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Le système utilisé Au Centre Ophtalmologique Rabelais est le <strong className="font-bold text-[#003399]">VALEDA Air Light Delivery System</strong>. Le traitement est adressé aux patients présentant des drüsen séreux confluents, des décollements de l&apos;épithélium pigmentaire drusénoïdes et des drüsen réticulés.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              La procédure thérapeutique consiste en 3 séances sur 3 semaines réalisées à 1 jour d&apos;intervalle. Les patients doivent avoir au moins 50 ans. La durée du traitement ne dépasse pas les 5 minutes.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Les résultats de la PBM consistent en un ralentissement de la formation de l&apos;atrophie, une augmentation de l&apos;acuité visuelle, une augmentation de la sensibilité aux contrastes ainsi qu&apos;une réduction du volume occupé par les amas dégénératifs (drüsen).
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Effets secondaires :</strong> aucun effet secondaire majeur n&apos;a été enregistré, fait exception pour une vision floue et des troubles visuels temporaires essentiellement liés à l&apos;éblouissement. Les troubles visuels sont normalement de courte durée et temporaires.
            </p>
            <Link prefetch={true} 
              href="/rdv" 
              className="bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2017/06/c044114a-6cb7-42c0-9a37-b37841d4e8c4-300x300.jpg"
              alt="Système Valeda Air Light Delivery pour Photobiomodulation Au Centre Ophtalmologique Rabelais"
              title="Dispositif Valeda - Photobiomodulation"
              loading="lazy"
              className="w-full max-w-[400px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Dr. Quaranta — Système Valeda</p>
          </div>
        </div>
      </section>

      {/* ======= 2. PDT ======= */}
      <section className="flex flex-col md:flex-row-reverse w-full bg-white">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Photothérapie Dynamique (PDT)
              <span className="block w-[40px] h-[2px] bg-[#003399] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              La Photothérapie Dynamique (PDT) à la Visudyne (vertéporfine) est un traitement oculaire consistant à administrer par voie intraveineuse un médicament photosensibilisant, puis à activer ce produit au niveau de la rétine grâce à un laser diode à lumière froide (689 nm).
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold">Objectif :</strong> détruire sélectivement des néovaisseaux ou des zones d&apos;hyperperméabilité choroïdienne, stabiliser l&apos;acuité visuelle, et réduire l&apos;œdème maculaire tout en préservant la rétine saine.
            </p>
            <div className="bg-[#f8f8f8] p-6 border-l-4 border-[#c2aa84] mb-[20px]">
              <h4 className="font-bold text-[#c2aa84] mb-2">Principales indications :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6]">
                <li>Choroïdopathie séreuse centrale (CSC) chronique</li>
                <li>Certains néovaisseaux choroïdiens (NVC atypiques)</li>
                <li>Choroïdopathie polypoïdale dans la pachychoroïde</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold">Pour quels patients ?</strong> Patients présentant une CSC chronique persistante, un épanchement maculaire supérieur à 3 mois, une néovascularisation choroïdienne atypique, ou une intolérance / réponse insuffisante aux anti-VEGF.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Résultats attendus :</strong> Dans la CSC chronique, résorption du liquide sous-rétinien, gain ou stabilisation visuelle. Dans la néovascularisation choroïdienne, stabilisation de l&apos;acuité visuelle et réduction de l&apos;exsudation, avec possibilité de potentialisation par association aux anti-VEGF.
            </p>
            <Link prefetch={true} 
              href="/rdv" 
              className="bg-[#c2aa84] hover:bg-[#b09a74] text-white text-[11px] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/7.jpg"
              alt="Salle de laser diode pour Photothérapie Dynamique PDT à la Visudyne"
              title="Salle de PDT - Centre Ophtalmologique Rabelais"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Imagerie rétinienne — PDT</p>
          </div>
        </div>
      </section>

      {/* ======= 3. IVT ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              L&apos;injection intra-vitréenne (IVT)
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              L&apos;injection intra-vitréenne (IVT) est un geste médical ophtalmologique qui consiste à injecter un médicament directement dans le vitré, la substance gélatineuse qui remplit l&apos;intérieur de l&apos;œil. Ce geste permet au traitement d&apos;agir rapidement et efficacement sur la rétine.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              L&apos;IVT est utilisée pour traiter la dégénérescence maculaire liée à l&apos;âge (DMLA) humide, l&apos;œdème maculaire (diabète, occlusion veineuse), la rétinopathie diabétique, certaines infections intraoculaires et certains troubles inflammatoires de la rétine.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Les médicaments les plus couramment administrés sont les <strong className="font-bold text-[#003399]">anti-VEGF</strong> et certains <strong className="font-bold text-[#003399]">corticoïdes intraoculaires</strong>.
            </p>
            <div className="bg-white p-6 border-l-4 border-[#003399] mb-[20px]">
              <h4 className="font-bold text-[#003399] mb-2">Recommandations après l&apos;injection :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Éviter de se frotter l&apos;œil pendant 24–48 heures</li>
                <li>Ne pas se baigner le jour même</li>
                <li>Porter des lunettes de protection si nécessaire</li>
                <li>Poursuivre les collyres prescrits</li>
                <li>Contacter immédiatement votre ophtalmologiste en cas de symptôme inhabituel</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Bénéfices attendus :</strong> stabilisation ou amélioration de la vision, réduction de l&apos;œdème maculaire et contrôle de la prolifération anormale des vaisseaux rétiniens.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/9.jpg"
              alt="Fond d'œil rétinien — Injection intra-vitréenne Au Centre Ophtalmologique Rabelais"
              title="Imagerie rétinienne — IVT"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Fond d'œil rétinien</p>
          </div>
        </div>
      </section>

      {/* ======= 4. ANGIOGRAPHIE ======= */}
      <section className="flex flex-col md:flex-row-reverse w-full bg-white">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Angiographie Numérisée
              <span className="block w-[40px] h-[2px] bg-[#003399] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              L&apos;Angiographie est un examen fondamental dans l&apos;arbre décisionnel diagnostique des pathologies rétiniennes qui permet de visualiser les vaisseaux de la rétine à l&apos;aide d&apos;un colorant de contraste injecté par voie intraveineuse dans le bras.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              L&apos;angiographie peut être réalisée avec deux catégories de colorants, chacun possédant des spécificités :
            </p>
            <div className="bg-[#f8f8f8] p-6 border-l-4 border-[#c2aa84] mb-[20px]">
              <h4 className="font-bold text-[#c2aa84] mb-2">Types de colorants :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-2">
                <li><strong className="font-bold">La Fluorescéine</strong> — colorant jaune, le plus couramment utilisé, qui met en évidence les petits vaisseaux irriguant la rétine</li>
                <li><strong className="font-bold">Le Vert d&apos;Indocyanine (ICG)</strong> — colorant vert utilisé pour visualiser le réseau vasculaire sous la rétine (choroïde)</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold">Déroulement :</strong> Instillation de collyre pour dilater la pupille, installation confortablement assise, injection du colorant dans une veine du pli du coude, puis série de clichés minutés. Il faut prévoir au minimum 1h30 de présence.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Recommandations :</strong> Il est préférable de venir accompagné et de ne pas conduire après l&apos;examen. Après la fluorescéine, la peau apparaît jaune orangé pendant plusieurs heures.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/angio-e1458514116774.png"
              alt="Angiographie à la fluorescéine — néovaisseaux choroïdiens (DMLA humide)"
              title="Angiographie rétinienne numérisée"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Angiographie — Néovaisseaux (DMLA)</p>
          </div>
        </div>
      </section>

      {/* ======= 5. OCT ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              OCT : Tomographie à Cohérence Optique
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              <strong className="font-bold text-[#003399]">OCT Maculaire :</strong> La tomographie à cohérence optique est une technique d&apos;imagerie non contact, non invasive et indolore permettant d&apos;obtenir des images en coupes de la rétine dans toute son épaisseur. Son importante résolution permet d&apos;obtenir une segmentation des différentes couches de la rétine et de quantifier l&apos;épaisseur rétinienne.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold text-[#003399]">OCT du Nerf Optique :</strong> L&apos;OCT permet de mesurer l&apos;épaisseur des fibres optiques et des couches ganglionnaires. L&apos;examen est capable de dépister les signes précoces de souffrances du nerf optique dans les cas de glaucome débutant avant même l&apos;apparition d&apos;une détérioration du champ visuel.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              On observe des pertes de 40 à 50% des cellules ganglionnaires avant une atteinte du champ visuel. L&apos;irréversibilité de la perte des fibres associée au côté asymptomatique du glaucome renforce l&apos;intérêt d&apos;un <strong className="font-bold">dépistage précoce</strong>.
            </p>
            <div className="bg-white p-6 border-l-4 border-[#003399] mb-[20px]">
              <h4 className="font-bold text-[#003399] mb-2">Déroulement côté patient :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Dilatation des pupilles recommandée</li>
                <li>Examen en position assise, aucun contact avec vos yeux</li>
                <li>Tête installée dans une mentonnière, fixation d&apos;une mire lumineuse</li>
                <li>Examen de quelques minutes, complètement indolore</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex flex-col items-center justify-center gap-6 p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/314.png"
              alt="Mire lumineuse observée par le patient lors de l'examen OCT"
              title="Mire OCT vue patient"
              loading="lazy"
              className="w-full max-w-[260px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Mire vue par le patient</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/oct-resultat.jpg"
              alt="Résultat d'un examen OCT maculaire sur écran de contrôle"
              title="Résultat OCT maculaire"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Résultat OCT sur écran</p>
          </div>
        </div>
      </section>

      {/* ======= 6. OCT-ANGIOGRAPHIE + LASER MACULAIRE ======= */}
      <section className="flex flex-col md:flex-row-reverse w-full bg-white">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              OCT-Angiographie &amp; Laser Maculaire
              <span className="block w-[40px] h-[2px] bg-[#003399] mt-4"></span>
            </h2>
            <h3 className="text-[#c2aa84] text-[18px] font-bold mb-[10px]">OCT-Angiographie</h3>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              C&apos;est une nouvelle technique d&apos;imagerie qui permet d&apos;obtenir une projection en face de l&apos;arbre vasculaire par l&apos;analyse du déplacement des globules rouges dans les vaisseaux à partir de la technologie OCT. Le Centre Ophtalmologique Rabelais dispose de cet outil depuis son état prototype et a participé activement au développement de cette nouvelle investigation.
            </p>
            <h3 className="text-[#c2aa84] text-[18px] font-bold mb-[10px]">Laser Maculaire</h3>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Le laser maculaire désigne l&apos;utilisation d&apos;un laser de faible puissance appliqué à la région maculaire pour traiter l&apos;œdème maculaire, stabiliser la vision centrale et limiter l&apos;hyperperméabilité vasculaire.
            </p>
            <div className="bg-[#f8f8f8] p-6 border-l-4 border-[#c2aa84] mb-[20px]">
              <h4 className="font-bold text-[#c2aa84] mb-2">Indications :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Œdème maculaire diabétique</li>
                <li>Œdème après occlusion veineuse rétinienne</li>
                <li>Fuites focales liées à des micro-anévrismes</li>
                <li>Choroïdopathie séreuse centrale (laser micropulsé)</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              Le laser micropulsé subseuil délivre l&apos;énergie par trains très courts sans brûlure visible, préservant au mieux la macula centrale. Résultats évalués entre 6 et 12 semaines après la séance.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex flex-col items-center justify-center gap-6 p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/311.png"
              alt="Image en coupe OCT d'une rétine normale"
              title="Coupe OCT rétinienne"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">OCT — Rétine normale</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/312.png"
              alt="Image OCT d'une DMLA humide avec néovaisseaux choroïdiens"
              title="OCT DMLA humide"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">OCT — DMLA humide (néovaisseaux)</p>
          </div>
        </div>
      </section>

      {/* ======= 7. PPR ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              PPR (Laser Rétinien Périphérique)
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              Le laser rétinien périphérique utilise un laser photocoagulateur appliqué sur la rétine périphérique pour solidifier la rétine, traiter ou prévenir une déchirure, réduire les zones ischémiques et prévenir le décollement de rétine.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold">Objectif :</strong> générer une réaction thermique contrôlée afin de créer une cicatrice adhérente qui stabilise la rétine périphérique et empêche l&apos;extension d&apos;une déchirure ou d&apos;un décollement débutant.
            </p>
            <div className="bg-white p-6 border-l-4 border-[#003399] mb-[20px]">
              <h4 className="font-bold text-[#003399] mb-2">Indications principales :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Déchirures rétiniennes en fer à cheval</li>
                <li>Prévention du décollement (myopie forte, antécédents)</li>
                <li>Traitement de zones ischémiques (rétinopathie diabétique)</li>
                <li>Consolidation après chirurgie ou vitrectomie</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Résultats :</strong> Formation d&apos;adhérences rétino-choroïdiennes en 7 à 15 jours, stabilisant la rétine et prévenant efficacement de nombreux décollements évolutifs.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2017/06/dech-optos-300x300.png"
              alt="Déchirure rétinienne en fer à cheval avec barrage laser PPR"
              title="Barrage laser PPR sur déchirure rétinienne"
              loading="lazy"
              className="w-full max-w-[300px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Déchirure avec barrage laser</p>
          </div>
        </div>
      </section>

      {/* ======= 8. SLT ======= */}
      <section className="flex flex-col md:flex-row-reverse w-full bg-white">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              SLT (Selective Laser Trabeculoplasty)
              <span className="block w-[40px] h-[2px] bg-[#003399] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              Le laser SLT est une technique utilisée pour traiter le <strong className="font-bold text-[#003399]">glaucome à angle ouvert</strong>. C&apos;est un laser non invasif et sélectif qui cible certaines cellules pigmentées du trabéculum afin d&apos;améliorer l&apos;écoulement de l&apos;humeur aqueuse et de diminuer la pression intraoculaire.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              La séance dure en moyenne 5 à 10 minutes, en consultation, sous anesthésie locale par collyre. Le patient repart le jour même.
            </p>
            <div className="bg-[#f8f8f8] p-6 border-l-4 border-[#c2aa84] mb-[20px]">
              <h4 className="font-bold text-[#c2aa84] mb-2">Avantages :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Traitement non invasif et généralement indolore</li>
                <li>Sans dommage permanent au trabéculum</li>
                <li>Peut être répété si nécessaire</li>
                <li>Possibilité de réduire ou arrêter certains collyres</li>
                <li>Résultat durable de 1 à 5 ans selon les patients</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Résultats :</strong> Baisse de la pression intraoculaire de l&apos;ordre de 20 à 30%, ce qui peut retarder ou éviter le recours à une chirurgie plus invasive.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/313.png"
              alt="Mesure de l'épaisseur des fibres optiques par OCT pour diagnostic glaucome"
              title="OCT nerf optique - Diagnostic glaucome"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Fibres optiques — Diagnostic glaucome</p>
          </div>
        </div>
      </section>

      {/* ======= 9. LASER IP ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Laser IP (Iridotomie Périphérique)
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              Le laser IP consiste à créer une micro-ouverture dans l&apos;iris afin de permettre au liquide intraoculaire de circuler plus librement entre la chambre postérieure et la chambre antérieure de l&apos;œil. C&apos;est un traitement préventif ou curatif du <strong className="font-bold text-[#003399]">glaucome par fermeture de l&apos;angle</strong>.
            </p>
            <div className="bg-white p-6 border-l-4 border-[#003399] mb-[20px]">
              <h4 className="font-bold text-[#003399] mb-2">Indications principales :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Glaucome aigu par fermeture de l&apos;angle</li>
                <li>Glaucome chronique par fermeture de l&apos;angle</li>
                <li>Angles anatomiquement étroits</li>
                <li>Antécédents de glaucome aigu ou iris plateau</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Le laser le plus employé est le <strong className="font-bold">Nd:YAG photodisruptif</strong>, parfois combiné avec un laser Argon thermique pour préparer un iris épaissi.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Résultats :</strong> Chute rapide de la pression intraoculaire, prévention des récidives et stabilisation du glaucome. L&apos;orifice créé reste perméable à long terme.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Untitled.png"
              alt="Segment antérieur de l'œil - Iridotomie périphérique au laser"
              title="Iridotomie périphérique au laser"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Iridotomie périphérique</p>
          </div>
        </div>
      </section>

      {/* ======= 10. CAPSULOTOMIE YAG ======= */}
      <section className="flex flex-col md:flex-row-reverse w-full bg-white">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Laser de Capsulotomie au YAG
              <span className="block w-[40px] h-[2px] bg-[#003399] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              La capsulotomie au laser YAG consiste à ouvrir la capsule postérieure du cristallin après chirurgie de la cataracte, lorsqu&apos;elle s&apos;est opacifiée (« cataracte secondaire »). Le laser YAG permet de restaurer la transparence sans recourir à une nouvelle chirurgie.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              L&apos;opacification survient généralement entre 6 mois et plusieurs années après l&apos;intervention cataracte, responsable d&apos;une baisse de vision, de vision floue, de halos ou d&apos;éblouissements.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold">Résultats :</strong> L&apos;amélioration visuelle est habituellement rapide (quelques heures à quelques jours), avec une vision plus nette et plus lumineuse. L&apos;ouverture capsulaire est en général définitive et ne récidive pas.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Suites :</strong> Reprise des activités normales immédiate. Des collyres anti-inflammatoires peuvent être prescrits. Un contrôle est réalisé dans l&apos;heure ou la journée.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/oct-position-patient.jpg"
              alt="Patient installé dans la mentonnière lors d'un examen ophtalmologique laser"
              title="Position patient - Examen laser YAG"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Position patient — Examen laser</p>
          </div>
        </div>
      </section>

      {/* ======= 11. EYELIGHT ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Eyelight
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              Eyelight est un dispositif médical utilisant la lumière LED à haute intensité (photobiomodulation) pour traiter les troubles liés à la surface oculaire, en particulier la <strong className="font-bold text-[#003399]">dysfonction des glandes de Meibomius (DGM)</strong>, la sécheresse oculaire évaporative et certains états inflammatoires des paupières.
            </p>
            <div className="bg-white p-6 border-l-4 border-[#003399] mb-[20px]">
              <h4 className="font-bold text-[#003399] mb-2">Indications principales :</h4>
              <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-[1.6] space-y-1">
                <li>Sécheresse oculaire évaporative</li>
                <li>Dysfonction des glandes de Meibomius</li>
                <li>Blépharite postérieure</li>
                <li>Intolérance aux lentilles de contact</li>
                <li>Fatigue oculaire et sensation de grains de sable</li>
              </ul>
            </div>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              <strong className="font-bold">Protocole :</strong> 4 séances espacées d&apos;une semaine, puis des séances d&apos;entretien une à deux fois par an. Traitement non invasif et indolore.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex items-center justify-center p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2017/06/Sans-titre-1024x1024.png"
              alt="Dispositif Eyelight pour le traitement de la sécheresse oculaire par photobiomodulation LED"
              title="Dispositif Eyelight - Traitement sécheresse"
              loading="lazy"
              className="w-full max-w-[380px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Dispositif Eyelight</p>
          </div>
        </div>
      </section>

      {/* ======= 12. RÉTINOGRAPHIE + GRAND CHAMP ======= */}
      <section className="flex flex-col md:flex-row-reverse w-full bg-white">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Rétinographie &amp; Angiographie Grand Champ
              <span className="block w-[40px] h-[2px] bg-[#003399] mt-4"></span>
            </h2>
            <h3 className="text-[#c2aa84] text-[18px] font-bold mb-[10px]">Rétinographie Couleur</h3>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              La rétinographie couleur correspond à un cliché couleur du fond d&apos;œil à un instant donné, permettant à l&apos;ophtalmologiste de réaliser des comparaisons dans le temps. Rétinographie confocale avec angle de vue de 65°.
            </p>
            <h3 className="text-[#c2aa84] text-[18px] font-bold mb-[10px]">Rétinographie Grand Champ de 200°</h3>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              Cette nouvelle technologie permet d&apos;obtenir des clichés couleur du fond d&apos;œil de 200° avec une visualisation d&apos;une grande partie de la périphérie rétinienne de manière instantanée grâce à un miroir ellipsoïdal.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              Un module angiographique est également disponible pour réaliser une imagerie plus étendue de l&apos;état vasculaire de la périphérie rétinienne en comparaison avec les angiographies traditionnelles.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex flex-col items-center justify-center gap-6 p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2017/06/optos-plein-champ--1024x1024.png"
              alt="Rétinographie Optos grand champ de 200° du fond d'œil"
              title="Rétinographie grand champ Optos 200°"
              loading="lazy"
              className="w-full max-w-[320px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Optos — Grand champ 200°</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2017/06/COMPARAISON-ANGIO-e1535826938880.png"
              alt="Comparaison angiographie conventionnelle vs grand champ"
              title="Angiographie grand champ vs conventionnelle"
              loading="lazy"
              className="w-full max-w-[320px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Angiographie grand champ vs conventionnelle</p>
          </div>
        </div>
      </section>

      {/* ======= 13. PACHYMÉTRIE & EPI-MAPPING ======= */}
      <section className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 z-10">
          <div className="max-w-[500px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] relative">
              Pachymétrie &amp; Epi-Mapping
              <span className="block w-[40px] h-[2px] bg-[#c2aa84] mt-4"></span>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mt-[10px] mb-[15px]">
              <strong className="font-bold text-[#003399]">Pachymétrie :</strong> Examen qui permet de mesurer l&apos;épaisseur totale de la cornée. Cette mesure est importante à considérer en regard des chiffres de tension oculaire car une cornée épaisse tend à surestimer les chiffres tensionnels, et inversement pour une cornée fine.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
              <strong className="font-bold text-[#003399]">Epi-Mapping :</strong> Topographie d&apos;épaisseur de l&apos;épithélium cornéen. L&apos;épithélium cornéen est connu pour sa capacité à moduler son épaisseur de manière compensatoire pour assurer un certain équilibre dans la biomécanique cornéenne.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[20px]">
              La lecture de cette carte d&apos;épaisseur est riche d&apos;information sur les modifications cornéennes pathologiques, notamment dans le dépistage du <strong className="font-bold">kératocône</strong> où l&apos;on observe un amincissement de l&apos;épithélium en regard de la zone de déformation cornéenne.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[400px] overflow-hidden flex flex-col items-center justify-center gap-6 p-10" style={{background: 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d1b30 100%)'}}>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/PACHY.png"
              alt="Pachymétrie cornéenne non contact par OCT"
              title="Pachymétrie cornéenne"
              loading="lazy"
              className="w-full max-w-[320px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Pachymétrie cornéenne</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 shadow-xl">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2017/06/epimapp-ktc1-300x300.jpg"
              alt="Epi-Mapping d'un kératocône comparé à la pachymétrie totale"
              title="Epi-Mapping kératocône"
              loading="lazy"
              className="w-full max-w-[240px] h-auto object-contain rounded"
            />
            <p className="text-[#c2aa84] text-[11px] font-bold tracking-[1.5px] uppercase text-center mt-3">Epi-Mapping — Kératocône</p>
          </div>
        </div>
      </section>
      {/* ======= FAQ SECTION ======= */}
      <section className="py-20 px-4 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#003399] text-[28px] md:text-[36px] font-light uppercase tracking-wider text-center mb-4">
            Questions <strong className="font-bold">Fréquentes</strong>
          </h2>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mx-auto mb-12">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>

          <div className="space-y-4">
            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Quels types de pathologies sont pris en charge au Centre ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Le Centre Ophtalmologique Rabelais à Lyon est spécialisé en rétine médicale et prend en charge la DMLA (dégénérescence maculaire liée à l&apos;âge) sèche et humide, la rétinopathie diabétique, les occlusions veineuses rétiniennes, la choriorétinopathie séreuse centrale (CSC), les maladies inflammatoires de la rétine, le glaucome, la cataracte secondaire, ainsi que les pathologies de la surface oculaire comme la sécheresse oculaire évaporative.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Qu&apos;est-ce que la photobiomodulation (PBM) et pour qui est-elle indiquée ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                La photobiomodulation (PBM) est un traitement non invasif de la DMLA sèche débutante et intermédiaire utilisant le système VALEDA® de LumiThera, approuvé par la FDA. Il utilise des longueurs d&apos;onde lumineuses spécifiques (jaune, rouge, proche infrarouge) pour stimuler la régénération des cellules de l&apos;épithélium pigmentaire rétinien. Le protocole comprend 9 séances de 5 minutes sur 3 semaines. Le Centre est l&apos;un des rares en France à proposer cette thérapie innovante.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Comment se déroule une injection intravitréenne (IVT) ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                L&apos;injection intravitréenne est réalisée dans notre salle blanche stérile dédiée, sous anesthésie locale par collyre. Le médecin injecte un anti-VEGF (Lucentis®, Eylea® ou Vabysmo®) ou un corticoïde directement dans le vitré. La procédure dure environ 15 minutes. L&apos;avantage du Centre Rabelais : la possibilité de réaliser l&apos;injection le jour même du diagnostic, sans délai d&apos;attente hospitalier.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Qu&apos;est-ce qu&apos;un OCT maculaire et pourquoi est-il important ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                L&apos;OCT (Tomographie en Cohérence Optique) maculaire est un examen non invasif et indolore qui produit des coupes microscopiques de la rétine avec une résolution de l&apos;ordre du micron. Il permet de détecter précocement drüsen, œdème maculaire, néovaisseaux et atrophie. C&apos;est l&apos;examen de référence pour le diagnostic et le suivi de la DMLA, du diabète rétinien et du glaucome. Le Centre dispose d&apos;OCT Spectral-Domain de dernière génération et d&apos;un OCT-Angiographie.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Quelle différence entre angiographie et OCT-Angiographie ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                L&apos;angiographie conventionnelle nécessite l&apos;injection intraveineuse d&apos;un colorant (fluorescéine ou vert d&apos;indocyanine). L&apos;OCT-Angiographie (OCT-A) cartographie la vascularisation rétinienne <strong className="font-bold">sans injection de colorant</strong>, en analysant le mouvement des globules rouges. Le Centre Rabelais dispose des deux modalités et a participé au développement de l&apos;OCT-A depuis son état prototype. L&apos;OCT-A est privilégiée pour le suivi régulier ; l&apos;angiographie reste indiquée pour certains diagnostics complexes.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Qu&apos;est-ce que la photothérapie dynamique (PDT) à la Visudyne ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                La PDT à la Visudyne (vertéporfine) combine l&apos;injection intraveineuse d&apos;un photosensibilisant avec l&apos;activation par laser diode à lumière froide (689 nm). Elle est indiquée pour la choriorétinopathie séreuse centrale (CSC) chronique, certains néovaisseaux choroïdiens atypiques et la choroïdopathie polypoïdale. Elle détruit sélectivement les vaisseaux anormaux tout en préservant la rétine saine.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Comment traite-t-on le glaucome au Centre Rabelais ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Deux approches laser sont disponibles. Le <strong className="font-bold">SLT</strong> (Selective Laser Trabeculoplasty) pour le glaucome à angle ouvert : un laser sélectif non invasif réduisant la pression intraoculaire de 20 à 30 %. L&apos;<strong className="font-bold">iridotomie périphérique</strong> au laser YAG pour le glaucome par fermeture de l&apos;angle : une micro-ouverture dans l&apos;iris rétablissant la circulation du liquide intraoculaire. Les deux procédures durent 5 à 10 minutes, en consultation, sans hospitalisation.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Quels équipements d&apos;imagerie sont disponibles au Centre ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Le plateau technique comprend : OCT Spectral-Domain de dernière génération, OCT-Angiographie, rétinographe confocal 65° et système Optos grand champ 200°, angiographe numérisé (fluorescéine et ICG), lasers spécialisés (SLT, YAG, photocoagulateur, micropulsé), système de photobiomodulation VALEDA®, dispositif Eyelight pour la sécheresse oculaire, et salle blanche dédiée aux injections intravitréennes.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[#888888] text-[30px] md:text-[40px] font-light uppercase tracking-wider mb-[20px]">
            Prendre <strong className="font-bold text-[#c2aa84]">Rendez-vous</strong>
          </h2>
          <p className="text-[#888888] text-[16px] font-light leading-[1.8] mb-[30px]">
            Pour toute demande de rendez-vous ou d&apos;information complémentaire sur nos traitements, n&apos;hésitez pas à nous contacter.
          </p>
          <Link prefetch={true}
            href="/rdv"
            className="bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors inline-block"
          >
            Demande de Rendez-vous
          </Link>
        </div>
      </section>

    </main>
  );
}
