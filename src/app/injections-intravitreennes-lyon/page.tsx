import { Metadata } from 'next';
import Link from 'next/link';
import YoutubeVideo from '@/components/ui/YoutubeVideo';
export const metadata: Metadata = {
  title: 'Injections Intravitréennes Lyon (IVT) | DMLA | Centre Ophtalmologique Rabelais',
  description: 'Le Centre Ophtalmologique Rabelais à Lyon vous propose un circuit court et sécurisé pour l\'administration de vos Injections Intravitréennes (IVT Anti-VEGF).',
  keywords: 'injections intravitreennes lyon, traitement ivt dmla lyon, anti vegf lyon, lucentis eylea injection macula, centre ivt lyon rhodannien',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/injections-intravitreennes-lyon'
  }
};

export default function InjectionsIntravitreennesLyonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalTherapy",
        "name": "Injection Intravitréenne (IVT)",
        "description": "Administration dans l'œil d'un traitement liquidien (Anti-VEGF ou corticoïdes) indiqué dans les pathologies néovasculaires exsudatives rétiniennes comme la DMLA humide ou un œdème maculaire diabétique.",
        "url": "https://centrerabelaislyon.fr/injections-intravitreennes-lyon",
        "medicalSpecialty": "Ophthalmologic",
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
          "name": "Dégénérescence Maculaire Liée à l'Âge (DMLA) humide de stade néovasculaire, oedème diabétique, obstruction veineuse"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce qu'une injection intravitréenne (IVT) ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'injection intravitréenne (IVT) est un acte médical qui consiste à injecter un médicament directement dans le vitré (le gel transparent qui remplit l'intérieur de l'œil) à l'aide d'une aiguille fine. Les médicaments les plus couramment injectés sont les anti-VEGF (Lucentis®/ranibizumab, Eylea®/aflibercept, Vabysmo®/faricimab) qui bloquent la croissance anormale de néovaisseaux, et les corticoïdes (Ozurdex®/dexaméthasone) pour les œdèmes maculaires. Au Centre Ophtalmologique Rabelais à Lyon, cette procédure est réalisée en conditions stériles dans un bloc opératoire dédié."
            }
          },
          {
            "@type": "Question",
            "name": "L'injection intravitréenne est-elle douloureuse ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. L'injection intravitréenne est très peu douloureuse grâce à l'application préalable d'un collyre anesthésiant (tétracaïne ou oxybuprocaïne) et à l'antisepsie par bétadine ophtalmique. La plupart des patients décrivent une simple pression momentanée durant 2 à 3 secondes. L'aiguille utilisée (30 gauge) est extrêmement fine. Au Centre Ophtalmologique Rabelais, l'équipe est particulièrement attentive au confort du patient tout au long de la procédure."
            }
          },
          {
            "@type": "Question",
            "name": "À quelle fréquence doit-on faire des injections intravitréennes pour la DMLA ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le protocole commence généralement par une phase d'induction de 3 injections mensuelles consécutives. Ensuite, le rythme est personnalisé selon la réponse thérapeutique évaluée par l'OCT maculaire à chaque visite. Avec les anti-VEGF de nouvelle génération comme Vabysmo® (faricimab), l'intervalle peut s'étendre jusqu'à 16 semaines entre deux injections. Au Centre Ophtalmologique Rabelais, nous suivons un protocole 'Treat & Extend' guidé par l'imagerie OCT, permettant d'espacer au maximum les injections tout en maintenant l'efficacité thérapeutique."
            }
          },
          {
            "@type": "Question",
            "name": "Quels sont les risques d'une injection intravitréenne ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'IVT est un acte considéré comme très sûr. Le risque le plus redouté est l'endophtalmie (infection intraoculaire), dont l'incidence est inférieure à 0,05% (1 cas sur 2000 injections) grâce aux protocoles d'asepsie stricts. Les effets secondaires fréquents mais bénins incluent : des corps flottants temporaires (bulles d'air), une rougeur conjonctivale au point d'injection, et un léger inconfort durant 24 à 48 heures. Au Centre Ophtalmologique Rabelais, nous opérons dans un environnement stérile avec flux laminaire et protocole de désinfection rigoureux (bétadine ophtalmique 5%) pour minimiser tout risque infectieux."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre Lucentis, Eylea et Vabysmo ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ce sont tous des anti-VEGF mais avec des mécanismes différents. Lucentis® (ranibizumab) est un fragment d'anticorps anti-VEGF-A, historiquement le premier approuvé (2007). Eylea® (aflibercept) est un récepteur piège qui bloque le VEGF-A et le PlGF, offrant une durée d'action plus longue. Vabysmo® (faricimab) est bispécifique : il bloque à la fois le VEGF-A et l'Angiopoïétine-2, permettant des intervalles d'injection encore plus longs (jusqu'à 16 semaines). Au Centre Ophtalmologique Rabelais, le rétinologue choisit la molécule la plus adaptée à chaque patient en fonction de la réponse thérapeutique observée à l'OCT."
            }
          },
          {
            "@type": "Question",
            "name": "Où faire des injections intravitréennes à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le Centre Ophtalmologique Rabelais (Lyon 2ème, métro Bellecour) dispose d'une salle d'injection stérile dédiée aux IVT avec un environnement conforme aux normes hospitalières. L'avantage majeur du Centre Ophtalmologique Rabelais est son circuit court : le diagnostic par OCT, la consultation avec le rétinologue et l'injection anti-VEGF peuvent être réalisés le même jour, évitant les parcours fragmentés et les délais de plusieurs semaines caractéristiques des structures hospitalières. Contact : 04 78 95 09 08."
            }
          },
          {
            "@type": "Question",
            "name": "Quelles maladies sont traitées par injection intravitréenne ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les IVT sont indiquées pour plusieurs pathologies rétiniennes : la DMLA humide (néovasculaire), l'œdème maculaire diabétique (OMD), les occlusions veineuses rétiniennes (OVCR, OBVR) compliquées d'œdème maculaire, la néovascularisation choroïdienne myopique, et certaines uvéites postérieures. Au Centre Ophtalmologique Rabelais, nous traitons toutes ces indications avec un suivi OCT personnalisé à chaque visite pour optimiser le protocole thérapeutique."
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/wp-content/uploads/2015/09/post1.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Expert <strong className="font-bold text-white">Injections Intravitréennes (IVT)</strong> Lyon
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Prise en charge spécialisée et immédiate de la DMLA vasculaire en environnement stérile dédié et salle d'intervention sécurisée à Lyon.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="w-full mb-12">
          <YoutubeVideo 
            videoId="XuAwkSbQSXE" 
            title="Injections IVT pour la DMLA : La Vérité Rassurante (Prise en charge Urgente J+0 à Lyon)" 
            description="Découvrez pourquoi l'injection intra-vitréenne (IVT) pour la DMLA humide est aujourd'hui totalement indolore au Centre Ophtalmologique Rabelais." 
            thumbnailUrl="https://img.youtube.com/vi/XuAwkSbQSXE/maxresdefault.jpg" 
            uploadDate="2026-03-27" 
          />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Qu'est-ce qu'une Injection Intravitréenne (IVT) ?</h2>
                <p>
                    L'<strong>Injection Intravitréenne (ou IVT)</strong> consiste à instiller de microscopiques doses de produits médicamenteux avec une aiguille extrêmement fine (capillaire), de manière quasi indolore, directement à l'intérieur de la cavité vitréenne de l'œil situé derrière le cristallin. 
                </p>
                <p>
                    Ce traitement médical d'excellence permet d'inhiber de l'intérieur les néovaisseaux anormaux créant une perte brutale de vision (<strong>traitements Anti-VEGF type Lucentis, Eylea...</strong>) mais également de résorber un <Link prefetch={true} href="/retine-medicale-lyon" className="text-[#c2aa84] hover:underline">OEdème maculaire d'origine veineuse ou Diabétique</Link>. 
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Quand sont-elles pratiquées Au Centre Ophtalmologique Rabelais ?</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>DMLA Humide / Exsudative :</strong> Lorsque de nouveaux amas vasculaires saignent sous la rétine, limitant radicalement le champ central. Les IVT sont le recours d'urgence N°1 face au dévissage rapide que connaît la <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] p-0 font-bold hover:underline">DMLA</Link>.</li>
                        <li><strong>Occlusions Veineuses (OVR) :</strong> Thrombose d'un vaisseau provoquant un gonflement (OEdème) tissulaire.</li>
                        <li><strong>Rétinopathie du Diabète :</strong> Utilisation d'implants de corticoïdes pour l'amélioration structurelle de l'assise maculaire au long cours.</li>
                    </ul>
                </div>

                <h2 className="text-[#c2aa84] text-[26px] font-bold uppercase tracking-wider mb-6">Le Protocole Sécurisé de Centre Ophtalmologique Rabelais à Lyon 2</h2>
                <p>
                    La répétition d'interventions intra-oculaires est lourde mais décemment encadrée par le <Link prefetch={true} href="/retinologue-lyon-6" className="text-[#c2aa84] hover:underline">Rétinologue responsable</Link> du Pôle :
                </p>
                <ul className="list-disc pl-4 space-y-2 mb-8">
                    <li><strong>Espace Opératoire Stérile :</strong> L'acte est effectué avec minutie en <strong>Salle Blanche (Bloc d'intervention médicalisé certifié)</strong> respectant d'hygiène protocolaire ultra stricte (Masque, Champs stériles, gants chirurgicaux, désinfection Bétadine).</li>
                    <li><strong>Aucune Douleur :</strong> L'administration stricte est précédée de l'administration intensive de collyres et crèmes <strong>anesthésiants locaux</strong> à fort dosage (Tétracaïne). Le patient ressent, s'il est éveillé, uniquement une forme passagère de pression sans douleur aigue sur les tuniques conjonctives de l'œil.</li>
                    <li><strong>Rapidité de soins :</strong> Dès le franchissement médical diagnostique via <Link prefetch={true} href="/oct-macula-lyon" className="text-[#c2aa84] hover:underline">Tomographie en Cohérence Optique de dernière génération</Link>, notre pharmacie locale assure l'injection sans vous faire repasser de multiples étapes bureaucratiques lourdes existantes ailleurs.</li>
                </ul>

                <p className="text-[14px] italic border-t pt-4">À noter : l'injection elle-même dure quelques rares secondes, le protocole dans son intégralité incluant la salle d'attente et l'hydratation de désinfection est planifié environ 20-30 minutes en centre de soin.</p>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">Questions Traitement IVT</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Combien de piqûres aurai-je ?</p>
                            <p className="text-[13px] text-[#888888]">Dans le cadre d'une DMLA humide, le protocole débute par une "dose de charge" (1 injection par mois pendant 3 mois), suivi d’un rythme adapté selon la réponse du fond de l'œil aux Anti-VEGF ou corticoïdes.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Dois-je me présenter accompagné(e) ?</p>
                            <p className="text-[13px] text-[#888888]">Oui ! Vous ne pourrez pas conduire à votre retour en raison d'un pansement local possible et parfois de crèmes oculaires opacifiantes, nécessaires pendant plusieurs heures.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Services Avancés du Pôle</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Rencontrer le Rétinologue</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Tout savoir sur la DMLA Atrophique / Exsudative</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Nouveau: Laser Valeda Infrarouge (DMLA Sèche)</Link></li>
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Examens par Imagerie</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            L'administration de <strong className="font-bold text-[#003399]">vos Injections à Lyon 2</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Demandez un rendez-vous rapide via notre portail réservé pour un premier diagnostic profond et bénéficier des protocoles d'injections en salles agréables dès votre retour de visite.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Formulaire de Demande d'Avis DMLA
          </Link>
        </div>

      </section>

    </main>
  );
}
