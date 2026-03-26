import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dois-je consulter ? | Centre Ophtalmologique Rabelais Lyon',
  description: 'Quels sont les premiers signes des maladies rétiniennes comme la DMLA ou le décollement de rétine ? Découvrez quand consulter un ophtalmologiste.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/dois-je-consulter'
  }
};

export default function DoisJeConsulterPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels sont les premiers signes de la DMLA qui doivent m'alerter ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les premiers signes de DMLA incluent une diminution de la perception des contrastes, un besoin de lumière plus important, des lignes droites qui apparaissent déformées ou ondulées (métamorphopsies), une baisse progressive de la vision de près lors de la lecture, et l'apparition d'une tache sombre ou floue au centre du champ visuel (scotome central). Un auto-dépistage avec la grille d'Amsler permet de détecter ces anomalies. Tout symptôme de déformation visuelle doit conduire à une consultation ophtalmologique urgente avec un OCT maculaire."
        }
      },
      {
        "@type": "Question",
        "name": "Quand consulter en urgence un ophtalmologiste ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consultez en urgence si vous présentez : une apparition soudaine de corps flottants (points noirs, fils, mouches volantes) qui se multiplient, des flashs lumineux dans l'œil (phosphènes), une baisse brutale d'acuité visuelle, un rétrécissement du champ visuel (impression de rideau ou voile noir), ou une déformation soudaine des lignes droites. Ces symptômes peuvent évoquer un décollement de rétine (urgence absolue), une hémorragie rétinienne ou une poussée néovasculaire de DMLA humide. Le Centre Ophtalmologique Rabelais à Lyon dispose d'un plateau d'imagerie complet permettant un diagnostic immédiat."
        }
      },
      {
        "@type": "Question",
        "name": "Le décollement de rétine est-il douloureux ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non, le décollement de rétine est une urgence ophtalmologique indolore, ce qui le rend d'autant plus traître. Les signes d'alerte sont uniquement visuels : apparition brutale de nombreux corps flottants, flashs lumineux, voile noir progressif ou rétrécissement du champ de vision. L'absence de douleur peut amener les patients à tarder avant de consulter, ce qui compromet le pronostic visuel. Toute apparition soudaine de ces symptômes doit conduire à une consultation ophtalmologique le jour même."
        }
      },
      {
        "@type": "Question",
        "name": "Qu'est-ce que la grille d'Amsler et comment l'utiliser ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La grille d'Amsler est un test simple d'auto-dépistage des anomalies de la vision centrale. C'est un quadrillage de lignes droites avec un point central. Pour l'utiliser : gardez vos lunettes de lecture, placez la grille à 30 cm, cachez un œil, fixez le point central et observez si les lignes paraissent ondulées, déformées ou manquantes, puis recommencez avec l'autre œil. Toute déformation ou zone manquante peut signaler une atteinte maculaire (DMLA, œdème, membrane épirétinienne) et nécessite une consultation rapide avec un OCT maculaire."
        }
      },
      {
        "@type": "Question",
        "name": "À partir de quel âge faut-il se faire dépister pour la DMLA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le dépistage de la DMLA est recommandé à partir de 50 ans lors de l'examen ophtalmologique annuel. Un dépistage plus précoce est conseillé en cas de facteurs de risque : antécédents familiaux de DMLA, tabagisme actif ou ancien, surcharge pondérale, ou exposition solaire intense. Le dépistage repose sur un examen du fond d'œil complété si nécessaire par un OCT maculaire. Au Centre Ophtalmologique Rabelais, ces examens sont réalisés le jour même de la consultation par nos orthoptistes spécialisés en imagerie rétinienne."
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Dois-je <strong className="font-bold">Consulter ?</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <p className="text-[#888888] text-[16px] md:text-[20px] font-light leading-[1.8]">
          Les premiers signes des maladies rétiniennes sont habituellement discrets et peuvent être négligés. Une baisse d’acuité visuelle est un signe connu qui doit conduire à consulter un ophtalmologiste mais d’autres signes doivent être connus et portés à la vigilance des patients.
        </p>
      </section>

      {/* DMLA Section */}
      <section className="bg-[#f8f8f8] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] uppercase text-center relative">
            DMLA : Dégénérescence Maculaire Liée à l'Âge
            <span className="block w-[40px] h-[2px] bg-[#c2aa84] mx-auto mt-4"></span>
          </h2>
          
          <p className="text-[#888888] text-[16px] font-light leading-[1.8] mb-[30px] text-center max-w-3xl mx-auto">
            La DMLA est la principale cause de malvoyance chez les sujets âgés de plus de 50 ans. Cette maladie intéresse la région centrale de la rétine qu’on appelle la macula. On considère 3 stades dans cette affection :
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 shadow-sm border-t-2 border-[#003399]">
                <h4 className="font-bold text-[#003399] mb-3 text-[18px]">La MLA (Précurseur)</h4>
                <p className="text-[#888888] text-[14px] leading-relaxed">Maculopathie liée à l’âge. L’atteinte rétinienne est caractérisée par des dépôts sous la rétine qu’on appelle des drusen.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-2 border-[#c2aa84]">
                <h4 className="font-bold text-[#c2aa84] mb-3 text-[18px]">DMLA Sèche (Atrophique)</h4>
                <p className="text-[#888888] text-[14px] leading-relaxed">Affection la plus fréquente. Évolution lente. Nouveaux médicaments en cours d’évaluation (essais cliniques).</p>
            </div>
            <div className="bg-white p-6 shadow-sm border-t-2 border-[#003399]">
                <h4 className="font-bold text-[#003399] mb-3 text-[18px]">DMLA Humide (Néovasculaire)</h4>
                <p className="text-[#888888] text-[14px] leading-relaxed">Apparition de vaisseaux anormaux sous la rétine. Perte visuelle rapide, mais traitements possibles (Injections).</p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-[#003399] text-[22px] font-bold mb-6">1. Les Signes de la DMLA</h3>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-6">La DMLA est insidieuse. Au début, seul un examen du Fond d’œil permet d’établir le diagnostic.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-[#888888] mb-2">A) Diminution de la qualité de vision</h4>
                    <p className="text-[#888888] text-[14px] leading-relaxed mb-4">Baisse de la perception des contrastes, besoin de lumière plus important. Sensibilité à l'éblouissement accrue.</p>
                    
                    <h4 className="font-bold text-[#888888] mb-2">B) Baisse de l'acuité visuelle</h4>
                    <p className="text-[#888888] text-[14px] leading-relaxed mb-4">Diminution de la perception des détails, s'apprécie surtout de près lors de la lecture.</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#888888] mb-2">C) Déformation des lignes droites</h4>
                    <p className="text-[#888888] text-[14px] leading-relaxed mb-4">Les lignes droites semblent gondolées et déformées (Métamorphopsies).</p>

                    <h4 className="font-bold text-[#888888] mb-2">D) Perception d'une tache sombre</h4>
                    <p className="text-[#888888] text-[14px] leading-relaxed">Apparition d'un "scotome" (tache floue/sombre) dans le champ visuel central.</p>
                </div>
            </div>

            <div className="mt-8 bg-[#f8f8f8] p-6 text-center border border-[#c2aa84]">
                <p className="text-[#888888] text-[15px] mb-4">Un auto-contrôle de votre vision, grâce à la grille d’Amsler, vous permettra de mettre en évidence ces anomalies.</p>
                <a href="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/GrilleAmsler_fr.pdf" target="_blank" rel="noopener noreferrer" className="text-[#003399] font-bold text-[13px] uppercase tracking-[1px] hover:underline">
                    &gt;&gt; Télécharger la Grille d'Amsler (PDF) &lt;&lt;
                </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 bg-white p-8 shadow-sm">
             <div>
                <h3 className="text-[#c2aa84] text-[20px] font-bold mb-4">2. Conséquences de la DMLA</h3>
                <p className="text-[#888888] text-[14px] leading-relaxed mb-4">La DMLA ne rend pas complètement aveugle car elle n’atteint que la macula. Lorsqu’on est atteint de DMLA bilatérale on conserve une vision grossière périphérique permettant l'autonomie.</p>
             </div>
             <div>
                <h3 className="text-[#c2aa84] text-[20px] font-bold mb-4">3. Causes & Facteurs de risque</h3>
                <ul className="list-disc list-inside text-[#888888] text-[14px] leading-relaxed">
                    <li>Vieillissement (facteur principal, prédominance féminine)</li>
                    <li>Tabagisme et surcharge pondérale</li>
                    <li>Prédisposition génétique (antécédents familiaux)</li>
                </ul>
             </div>
          </div>

        </div>
      </section>

      {/* Décollement de Rétine Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto border-l-4 border-[#003399] p-8 md:p-12 shadow-md">
            <h2 className="text-[#003399] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[20px] uppercase">
                Le Décollement de Rétine
            </h2>
            <p className="text-[#888888] text-[16px] font-bold leading-[1.8] mb-[20px]">
                Le décollement de Rétine est une Urgence ophtalmologique indolore qui doit faire consulter rapidement un ophtalmologiste.
            </p>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-[15px]">
                Symptômes pouvant être évocateurs :
            </p>
            <ul className="list-disc list-inside text-[#888888] text-[15px] font-light leading-[1.8] space-y-2">
                <li>Corps flottants qui se démultiplient et gênent votre champ visuel.</li>
                <li>Flashs lumineux dans l'œil.</li>
                <li>Baisse soudaine d'acuité visuelle.</li>
                <li>Rétrécissement du champ visuel (effet de rideau).</li>
                <li>Sensation de voile noir ou de taches.</li>
            </ul>
        </div>
      </section>

      {/* FAQ Section */}
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
                <span>Quels sont les premiers signes de DMLA qui doivent m&apos;alerter ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Les premiers signes incluent une diminution de la perception des contrastes, un besoin de lumière plus important, des lignes droites déformées ou ondulées (métamorphopsies), une baisse progressive de la vision de lecture, et l&apos;apparition d&apos;une tache sombre au centre du champ visuel (scotome central). Un auto-dépistage avec la grille d&apos;Amsler permet de détecter ces anomalies. Toute déformation visuelle nécessite une consultation urgente avec un OCT maculaire.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Quand faut-il consulter en urgence un ophtalmologiste ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Consultez en urgence si vous présentez : une apparition soudaine de corps flottants qui se multiplient, des flashs lumineux dans l&apos;œil (phosphènes), une baisse brutale d&apos;acuité visuelle, un rétrécissement du champ visuel (impression de rideau ou voile noir), ou une déformation soudaine des lignes droites. Ces symptômes peuvent évoquer un décollement de rétine, une hémorragie rétinienne ou une poussée néovasculaire de DMLA humide.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Le décollement de rétine est-il douloureux ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Non. Le décollement de rétine est une urgence ophtalmologique <strong className="font-bold">totalement indolore</strong>, ce qui le rend d&apos;autant plus traître. Les signes d&apos;alerte sont uniquement visuels : corps flottants brutaux, flashs lumineux, voile noir progressif. L&apos;absence de douleur peut retarder la consultation, ce qui compromet le pronostic visuel. Toute apparition soudaine de ces symptômes doit conduire à une consultation le jour même.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>Comment utiliser la grille d&apos;Amsler pour l&apos;auto-dépistage ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Gardez vos lunettes de lecture, tenez la grille à 30 cm, cachez un œil, fixez le point central et observez si les lignes paraissent ondulées, déformées ou manquantes. Recommencez avec l&apos;autre œil. Toute déformation ou zone manquante peut signaler une atteinte maculaire (DMLA, œdème, membrane épirétinienne) et nécessite une consultation rapide avec un OCT maculaire.
              </div>
            </details>

            <details className="group bg-white border border-gray-200 shadow-sm">
              <summary className="flex items-center justify-between cursor-pointer p-6 text-[15px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                <span>À partir de quel âge se faire dépister pour la DMLA ?</span>
                <span className="text-[#c2aa84] text-[20px] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-[14px] text-[#888888] font-light leading-[1.8] border-t border-gray-100 pt-4">
                Le dépistage est recommandé à partir de <strong className="font-bold">50 ans</strong> lors de l&apos;examen ophtalmologique annuel. Un dépistage plus précoce est conseillé en cas de facteurs de risque : antécédents familiaux de DMLA, tabagisme, surcharge pondérale, ou exposition solaire intense. Au Centre Rabelais, le fond d&apos;œil et l&apos;OCT maculaire sont réalisés le jour même de la consultation.
              </div>
            </details>
          </div>
        </div>
      </section>

    </main>
  );
}
