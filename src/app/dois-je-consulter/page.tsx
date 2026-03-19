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
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
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

    </main>
  );
}
