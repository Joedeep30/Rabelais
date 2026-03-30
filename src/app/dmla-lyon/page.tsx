import { Metadata } from 'next';
import Link from 'next/link';
import YoutubeVideo from '@/components/ui/YoutubeVideo';
export const metadata: Metadata = {
  title: 'DMLA Lyon | Diagnostic et Suivi Au Centre Ophtalmologique Rabelais',
  description: 'Dépistage, imagerie OCT et traitement de la Dégénérescence Maculaire Liée à l\'Âge (DMLA) à Lyon par les médecins spécialistes du Centre Ophtalmologique Rabelais.',
  keywords: 'dmla lyon, centre dmla lyon, ophtalmologue dmla lyon, traitement dmla seche lyon, oct macula dmla, injections dmla lyon',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/dmla-lyon'
  }
};

export default function DmlaLyonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalCondition",
        "name": "Dégénérescence Maculaire Liée à l'Âge (DMLA)",
        "description": "Affection sévère de la zone centrale de la rétine (macula) entraînant une baisse de l'acuité visuelle et l'apparition de tâches (scotome).",
        "url": "https://centrerabelaislyon.fr/dmla-lyon",
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": "Macula (Rétine Centrale)"
        },
        "possibleTreatment": [
          {
            "@type": "MedicalTherapy",
            "name": "Injections Intravitréennes Anti-VEGF (Lucentis, Eylea, Vabysmo)"
          },
          {
            "@type": "MedicalTherapy",
            "name": "Photobiomodulation Valeda (DMLA sèche)"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que la DMLA (Dégénérescence Maculaire Liée à l'Âge) ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La DMLA est une maladie dégénérative chronique de la macula, la zone centrale de la rétine responsable de la vision fine (lecture, reconnaissance des visages, conduite). Elle touche principalement les personnes de plus de 50 ans et constitue la première cause de malvoyance dans les pays industrialisés. Il existe deux formes : la DMLA sèche (atrophique), caractérisée par l'accumulation de drüsen et l'atrophie progressive de l'épithélium pigmentaire, et la DMLA humide (exsudative ou néovasculaire), caractérisée par la prolifération de néovaisseaux sous-rétiniens. Le Centre Ophtalmologique Rabelais à Lyon est spécialisé dans le diagnostic et le traitement des deux formes."
            }
          },
          {
            "@type": "Question",
            "name": "Comment savoir si j'ai la DMLA ? Quels sont les premiers symptômes ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les premiers signes de DMLA incluent : une baisse d'acuité visuelle centrale, des lignes droites qui apparaissent ondulées ou déformées (métamorphopsies), une tache sombre ou floue au centre du champ visuel (scotome central), des difficultés à lire ou à reconnaître les visages, et un besoin accru de lumière. Le test de la grille d'Amsler permet un auto-dépistage rapide. Tout symptôme de déformation visuelle nécessite un examen OCT maculaire urgent. Au Centre Ophtalmologique Rabelais, le diagnostic est réalisé en temps réel lors de votre consultation grâce à nos OCT Spectral-Domain de dernière génération."
            }
          },
          {
            "@type": "Question",
            "name": "Comment diagnostique-t-on la DMLA à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le diagnostic de la DMLA Au Centre Ophtalmologique Rabelais repose sur un examen complet incluant : un OCT maculaire (Tomographie en Cohérence Optique) qui réalise des coupes microscopiques de la rétine pour détecter les drüsen, l'œdème ou les néovaisseaux ; une OCT-Angiographie (OCT-A) sans injection de colorant pour visualiser la vascularisation rétinienne ; et si nécessaire, une angiographie à la fluorescéine pour cartographier les vaisseaux anormaux. L'ensemble de ces examens est réalisé le jour de la consultation par nos orthoptistes spécialisés en imagerie rétinienne."
            }
          },
          {
            "@type": "Question",
            "name": "Quel est le traitement de la DMLA humide à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La DMLA humide (néovasculaire) se traite par des injections intravitréennes (IVT) d'anti-VEGF (Lucentis®/ranibizumab, Eylea®/aflibercept, Vabysmo®/faricimab). Ces médicaments bloquent la croissance des néovaisseaux sous-rétiniens et réduisent l'œdème maculaire. Au Centre Ophtalmologique Rabelais à Lyon, nous disposons d'un bloc stérile dédié permettant de réaliser l'injection le jour même du diagnostic, évitant les délais de plusieurs semaines habituels dans les structures hospitalières. Le protocole suit un schéma d'induction (3 injections mensuelles) puis un schéma personnalisé guidé par l'OCT."
            }
          },
          {
            "@type": "Question",
            "name": "Existe-t-il un traitement pour la DMLA sèche ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Le Centre Ophtalmologique Rabelais est l'un des rares centres en France à proposer la photobiomodulation (PBM) avec le système VALEDA® de LumiThera pour la DMLA sèche débutante ou intermédiaire. Ce traitement non invasif utilise des longueurs d'onde lumineuses spécifiques pour stimuler la régénération cellulaire de la rétine, réduire le volume des drüsen et ralentir la progression de l'atrophie maculaire. Le protocole comprend 9 séances de 5 minutes sur 3 semaines."
            }
          },
          {
            "@type": "Question",
            "name": "La DMLA rend-elle complètement aveugle ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. La DMLA affecte la vision centrale mais préserve la vision périphérique. Toutefois, sans traitement, la DMLA humide peut entraîner une perte sévère et rapide de la vision centrale en quelques semaines. La DMLA sèche progresse plus lentement mais peut aussi entraîner une déficience visuelle importante. C'est pourquoi un dépistage précoce et un suivi régulier chez un rétinologue spécialisé sont essentiels. Au Centre Ophtalmologique Rabelais, nous assurons un suivi médicalisé rapproché avec des contrôles OCT réguliers pour adapter le traitement."
            }
          },
          {
            "@type": "Question",
            "name": "Où consulter un spécialiste DMLA à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le Centre Ophtalmologique Rabelais (2, Rue Antoine de Saint-Exupéry, Lyon 2ème, métro Bellecour) est un pôle hyper-spécialisé en rétine médicale dédié au diagnostic et au traitement de la DMLA. Dirigé par le Dr QUARANTA, rétinologue expérimentée, le centre regroupe un plateau technique complet (OCT-Angiographie, laser, salle d'injection stérile, système Valeda) et une équipe d'orthoptistes formés en imagerie rétinienne. Téléphone secrétariat : 04 78 95 09 08."
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
      
      {/* Hero SEO Page */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png"
            alt="Dépistage et traitement de la DMLA au Centre Ophtalmologique Rabelais à Lyon"
            title="Traitement DMLA Lyon"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Spécialistes de la <strong className="font-bold">DMLA à Lyon</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[400px] mb-8">
            <div className="h-[2px] w-full bg-white/60"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Diagnostic ultra-précoce etarsenal thérapeutique complet (IVT, Valeda) pour stabiliser votre vision centrale.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="w-full mb-12">
          <YoutubeVideo 
            videoId="Ge07zr0YhDM" 
            title="Traitement DMLA Sèche : L'Espoir Enfin Réel avec la Photobiomodulation (Lyon)" 
            description="Forme atrophique de la maladie, la DMLA sèche a longtemps été considérée comme une fatalité sans traitement. La Photobiomodulation offre aujourd'hui un véritable espoir clinique à Lyon." 
            thumbnailUrl="https://img.youtube.com/vi/Ge07zr0YhDM/maxresdefault.jpg" 
            uploadDate="2026-03-27" 
          />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise DMLA Au Centre Ophtalmologique Rabelais</h2>
                <p>
                    La <strong>Dégénérescence Maculaire Liée à l'Âge (DMLA)</strong> est la première cause de malvoyance chez les plus de 50 ans dans les pays industrialisés. Face à cette maladie évolutive, l'orientation vers un centre hyper-spécialisé en <strong>rétine médicale à Lyon</strong> est capitale car chaque jour d'attente lors d'une crise néovasculaire entraîne des dommages cellulaires irréversibles.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Symptômes d'alerte : Quand faut-il consulter en Urgence ?</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Déformation des lignes droites (Métamorphopsies) :</strong> Les cadres de porte, le texte ou le bord des routes vous paraissent ondulés ou tordus.</li>
                        <li><strong>Tache noire au centre (Scotome central) :</strong> Une zone aveugle ou très grisée masque systématiquement ce que vous fixez.</li>
                        <li><strong>Baisse de lecture inexpliquée :</strong> Besoin compulsif d'augmenter la luminosité malgré une correction lunettes récente.</li>
                        <li><strong>Altération des contrastes :</strong> Sensation de couleurs affadies ou délavées.</li>
                    </ul>
                </div>

                <h2 className="text-[#c2aa84] text-[26px] font-bold uppercase tracking-wider mb-6">Prise en charge des deux formes de la Maladie</h2>
                <p>
                    L'<Link prefetch={true} href="/equipe-medicale#dr-quaranta" className="text-[#003399] font-bold hover:underline">équipe du Dr Quaranta</Link> structure votre dépistage avec une exploration du fond d'œil couplée systématiquement à un <strong><Link prefetch={true} href="/oct-macula-lyon" className="text-[#c2aa84] hover:underline">OCT Maculaire (Tomographie en Cohérence Optique)</Link></strong>. Ce dispositif met en lumière la typologie exacte de l'atteinte :
                </p>

                <h3 className="text-slate-800 text-[18px] font-bold uppercase mt-8 mb-3">1. La DMLA Exsudative (Humide)</h3>
                <p>
                    Elle est caractérisée par la prolifération de vaisseaux sanguins anormaux (Néovaisseaux) sous la macula, qui fuient et provoquent des hémorragies foudroyantes. <strong>L'action :</strong> Mise en place immédiate d'un protocole d'<strong className="text-black">Injections Intravitréennes (anti-VEGF)</strong> dans notre <Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] font-bold hover:underline">salle blanche dédiée sur place à Lyon</Link>. L'objectif est d'assécher la lésion et stopper l'effondrement visuel.
                </p>

                <h3 className="text-slate-800 text-[18px] font-bold uppercase mt-8 mb-3">2. La DMLA Atrophique (Sèche)</h3>
                <p>
                    Évolution plus lente créant un amincissement tissulaire. Historiquement décrite comme "sans traitement", Le Centre Ophtalmologique Rabelais propose une avancée thérapeutique majeure validée : la <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] font-bold hover:underline">Photobiomodulation (Technologie Valeda)</Link>. Cette luminothérapie cellulaire, exclusive au sein de notre flotte laser, réduit considérablement la croissance des drüsen (dépôts toxiques) pour les formes précoces et intermédiaires.
                </p>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">FAQ DMLA</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Peut-on guérir définitivement la DMLA ?</p>
                            <p className="text-[13px] text-[#888888]">Non, il s'agit d'une maladie chronique nécessitant une observance sévère. Les traitements visent à neutraliser sa progression et maintenir une acuité compatible avec l'autonomie du patient.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Puis-je la transmettre à mes enfants ?</p>
                            <p className="text-[13px] text-[#888888]">La composante génétique majore fortement le risque. Les antécédents familiaux justifient un dépistage préventif systématisé dès l'âge de 50 ans.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Poursuivre sa lecture</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Rétinologues (Quartier Lyon 6)</Link></li>
                        <li><Link prefetch={true} href="/retine-medicale-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Tout savoir sur la Rétine Médicale</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Traiter la forme sèche (PBM Laser)</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Les injections (Anti-VEGF) : Explications</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            L'Imagerie Diagnostique Majeure pour <strong className="font-bold text-[#c2aa84]">La DMLA</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Contactez notre ligne d'accueil pour anticiper votre venue. Précisez dans votre message vos symptômes majeurs pour permettre à nos orthoptistes et médecins d'adapter les délais (urgence exsudative).
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Formulaire de Bilan Macula
          </Link>
        </div>

      </section>

    </main>
  );
}
