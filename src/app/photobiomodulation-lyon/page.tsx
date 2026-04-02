import { Metadata } from 'next';
import Link from 'next/link';
import YoutubeVideo from '@/components/ui/YoutubeVideo';
export const metadata: Metadata = {
  title: 'Photobiomodulation Lyon (Système Valeda) - Traitement DMLA | Centre Ophtalmologique Rabelais',
  description: 'Découvrez la Photobiomodulation (PBM) avec le système Valeda Au Centre Ophtalmologique Rabelais à Lyon. Un traitement innovant et indolore pour la DMLA débutante et intermédiaire.',
  keywords: 'Photobiomodulation Lyon, Système Valeda Lyon, Traitement DMLA Lyon, Luminothérapie rétine, Centre Ophtalmologique Rabelais, PBM Lyon, Dégénérescence maculaire',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/photobiomodulation-lyon'
  }
};

export default function PhotobiomodulationLyonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalTherapy",
        "name": "Photobiomodulation (PBM) - Système Valeda",
        "description": "Traitement par luminothérapie oculaire approuvé par la FDA pour la dégénérescence maculaire liée à l'âge (DMLA) débutante ou intermédiaire.",
        "url": "https://centrerabelaislyon.fr/photobiomodulation-lyon",
        "medicalSpecialty": "Retina Specialist",
        "provider": {
          "@type": "MedicalClinic",
          "name": "Centre Ophtalmologique Rabelais",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2, Rue Antoine de Saint-Exupéry",
            "addressLocality": "Lyon",
            "postalCode": "69002",
            "addressCountry": "FR"
          }
        },
        "indication": {
          "@type": "MedicalIndication",
          "name": "Dégénérescence Maculaire Liée à l'Âge (DMLA) sèche, stade précoce ou intermédiaire"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que la Photobiomodulation (PBM) oculaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La Photobiomodulation (PBM), également appelée Low-Level Light Therapy (LLLT) ou luminothérapie oculaire, est un traitement médical non invasif qui utilise des longueurs d'onde lumineuses spécifiques (590nm jaune, 660nm rouge, 850nm infrarouge proche) pour stimuler l'activité mitochondriale des cellules de l'épithélium pigmentaire rétinien (EPR). Au Centre Ophtalmologique Rabelais à Lyon, nous administrons ce traitement via le système VALEDA® Air Light Delivery System, le premier dispositif approuvé par la FDA et marqué CE pour la photobiomodulation dans le cadre de la DMLA sèche débutante ou intermédiaire."
            }
          },
          {
            "@type": "Question",
            "name": "Où faire de la photobiomodulation à Lyon pour la DMLA ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le Centre Ophtalmologique Rabelais (2, Rue Antoine de Saint-Exupéry, Lyon 2ème) est le centre de référence pour la photobiomodulation en région lyonnaise. Dirigé par le Dr QUARANTA, rétinologue spécialisée, le centre dispose du système VALEDA® de LumiThera, le seul dispositif médical cliniquement validé dédié à la PBM ophtalmologique. Le centre est accessible par métro (station Bellecour)."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre photobiomodulation et luminothérapie classique ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La luminothérapie classique utilise une lumière blanche à large spectre pour traiter les troubles du rythme circadien (dépression saisonnière). La photobiomodulation oculaire est fondamentalement différente : elle utilise des longueurs d'onde calibrées (jaune 590nm, rouge 660nm, infrarouge 850nm) ciblant spécifiquement les mitochondries des cellules rétiniennes pour stimuler la production d'ATP, réduire le stress oxydatif et l'inflammation, et régénérer l'épithélium pigmentaire. C'est un acte médical réalisé sous contrôle ophtalmologique Au Centre Ophtalmologique Rabelais à Lyon."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de séances de photobiomodulation Valeda faut-il ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le protocole standard Au Centre Ophtalmologique Rabelais comprend 9 séances réparties sur 3 semaines (3 séances/semaine). Chaque séance dure moins de 5 minutes et est totalement indolore. Un bilan OCT maculaire initial est réalisé pour vérifier l'éligibilité (présence de drüsen séreux confluents). Un contrôle à 6 mois objective les bénéfices : réduction du volume des drüsen, ralentissement de l'atrophie, et amélioration potentielle de l'acuité visuelle et de la sensibilité aux contrastes."
            }
          },
          {
            "@type": "Question",
            "name": "La photobiomodulation est-elle efficace contre la DMLA sèche ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Les études cliniques multicentriques (LIGHTSITE I, II et III) ont démontré une amélioration statistiquement significative de l'acuité visuelle chez les patients traités par PBM, avec une réduction mesurable du volume des drüsen maculaires. La PBM agit en stimulant les cytochromes C oxydases mitochondriaux, augmentant la production d'ATP cellulaire et réduisant les déchets métaboliques (lipofuscine) qui s'accumulent dans l'EPR. Au Centre Ophtalmologique Rabelais, nous avons observé des résultats positifs chez nos patients traités par le système Valeda."
            }
          },
          {
            "@type": "Question",
            "name": "La photobiomodulation peut-elle remplacer les injections intravitréennes ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. La photobiomodulation et les injections intravitréennes (IVT) traitent des formes différentes de DMLA. La PBM est indiquée pour la DMLA sèche (atrophique) débutante ou intermédiaire, pour laquelle il n'existait aucun traitement jusqu'à récemment. Les IVT anti-VEGF (Lucentis®, Eylea®, Vabysmo®) traitent la DMLA humide (néovasculaire exsudative). Au Centre Ophtalmologique Rabelais, nous proposons les deux traitements. Un patient peut bénéficier de PBM sur un œil atteint de DMLA sèche et d'IVT sur l'autre œil atteint de DMLA humide."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les risques et effets secondaires de la PBM oculaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La photobiomodulation oculaire est un traitement extrêmement sûr. Les études cliniques n'ont rapporté aucun effet indésirable grave. Les longueurs d'onde utilisées sont non-thermiques et non-ionisantes. Les seules contre-indications sont l'épilepsie photosensible et certaines pathologies neurologiques sensibles à la lumière. Un interrogatoire médical est systématiquement réalisé par l'équipe du Centre Ophtalmologique Rabelais avant tout traitement."
            }
          },
          {
            "@type": "Question",
            "name": "Quel est le prix d'un traitement de photobiomodulation Valeda à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le coût du protocole complet de 9 séances de photobiomodulation Valeda dépend du bilan initial et du suivi. La PBM n'est pas encore remboursée par l'Assurance Maladie. Contactez le secrétariat du Centre Ophtalmologique Rabelais (04 78 95 09 08) pour obtenir un devis personnalisé. Certaines mutuelles commencent à prendre en charge une partie des frais de PBM."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex flex-col flex-grow bg-white font-[Gotham] text-[#888888]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Premium Hero SEO Page */}
      <section className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-content/uploads/2015/09/post1.png"
            alt="Salles de traitement photobiomodulation et lasers du Centre Ophtalmologique Rabelais"
            title="Photobiomodulation Valeda Lyon"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-20 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Traitement de la DMLA à Lyon par <strong className="font-bold">Photobiomodulation (Valeda)</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[400px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Le Centre Ophtalmologique Rabelais vous propose une approche thérapeutique novatrice, validée par la FDA, pour stopper l'évolution de la DMLA sèche.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        
        <YoutubeVideo 
          videoId="yC2asJZ8pU0" 
          title="Photobiomodulation à Lyon : Le Nouveau Traitement Révolutionnaire de la DMLA (Système Valeda)" 
          description="Découvrez la Photobiomodulation (système Valeda), la première technologie au monde approuvée pour traiter la DMLA sèche, désormais disponible au Centre Ophtalmologique Rabelais à Lyon." 
          thumbnailUrl="https://img.youtube.com/vi/yC2asJZ8pU0/maxresdefault.jpg" 
          uploadDate="2026-03-27" 
        />

        <div className="prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
          <h2 className="text-[#003399] text-[28px] font-bold uppercase tracking-wider mb-6">Qu'est-ce que la Photobiomodulation (PBM) ?</h2>
          <p>
            Également appelée luminothérapie oculaire, la <strong>Photobiomodulation (PBM)</strong> est un traitement médical de pointe proposé au <strong>Centre Ophtalmologique Rabelais à Lyon</strong>. Ce traitement s'adresse spécifiquement aux patients souffrant de <strong>Dégénérescence Maculaire Liée à l'Âge (DMLA) débutante ou intermédiaire</strong>.
          </p>
          <p>
            Contrairement aux traitements invasifs, la PBM utilise des longueurs d'onde lumineuses spécifiques (proches de l'infrarouge) pour stimuler l'activité cellulaire de la rétine. L'objectif est de régénérer l'épithélium pigmentaire et de ralentir, voire stopper, la progression de l'atrophie maculaire.
          </p>

          <div className="my-12 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
            <h3 className="text-[#c2aa84] text-[22px] font-bold uppercase mb-4">Le Système VALEDA® Au Centre Ophtalmologique Rabelais</h3>
            <p className="mb-0">
              Notre plateau technique s'est doté du <strong>VALEDA Air Light Delivery System</strong>, la toute première technologie médicale approuvée et cliniquement prouvée pour administrer la photobiomodulation dans le cadre de la DMLA sèche. Ce dispositif exclusif sur Lyon permet de délivrer des séances sûres, rapides et parfaitement calibrées.
            </p>
          </div>

          <h2 className="text-[#003399] text-[28px] font-bold uppercase tracking-wider mb-6">Déroulement du Protocole à Lyon</h2>
          <p>
            Le protocole de traitement standard au sein de notre pôle Rétine à Lyon se déroule comme suit :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-[#888888] font-light">
            <li><strong>Bilan initial :</strong> Réalisation d'une <Link prefetch={true} href="/plateau-technique" className="text-[#c2aa84] font-bold hover:underline">Tomographie à Cohérence Optique (OCT)</Link> pour vérifier l'éligibilité (présence de drüsen séreux confluents).</li>
            <li><strong>Le cycle de traitement :</strong> Le patient suit <strong>9 séances réparties sur 3 semaines</strong> (soit 3 séances par semaine).</li>
            <li><strong>L'intervention :</strong> Chaque séance est totalement indolore et dure moins de 5 minutes. Le patient est confortablement installé face à l'appareil Valeda.</li>
            <li><strong>Suivi :</strong> Un contrôle clinique est programmé à 6 mois pour objectiver les bénéfices.</li>
          </ul>

          <h2 className="text-[#003399] text-[28px] font-bold uppercase tracking-wider mb-6">Les Bénéfices Cliniques Attendus</h2>
          <p>
            Les études cliniques démontrent de nombreux avantages pour la vision des patients atteints de DMLA sèche traitée par PBM :
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white border border-[#eaeaea] p-6 shadow-sm">
              <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-2">Ralentissement de la Pathologie</h4>
              <p className="text-sm">Réduction avérée du volume des drüsen et ralentissement net de la formation des zones d'atrophie maculaire.</p>
            </div>
            <div className="bg-white border border-[#eaeaea] p-6 shadow-sm">
              <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-2">Amélioration Visuelle</h4>
              <p className="text-sm">Gain potentiel d'acuité visuelle et augmentation sensible de la perception des contrastes dans la vie quotidienne.</p>
            </div>
          </div>

          <p className="text-sm italic text-slate-500 mt-8">
            *À noter : Bien qu’extrêmement sûre, un interrogatoire médical sera réalisé par l'<Link prefetch={true} href="/equipe-medicale#dr-quaranta" className="text-[#c2aa84] font-bold hover:underline">équipe médicale</Link> pour écarter toute contre-indication neurologique liée à la lumière (ex: épilepsie).
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Prendre un rendez-vous pour un <strong className="font-bold text-[#c2aa84]">Bilan DMLA</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Consultez nos experts rétine Au Centre Ophtalmologique Rabelais (Lyon 2) pour déterminer si le traitement Valeda est adapté à votre stade de DMLA.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Demander une consultation
          </Link>
        </div>

      </section>

    </main>
  );
}
