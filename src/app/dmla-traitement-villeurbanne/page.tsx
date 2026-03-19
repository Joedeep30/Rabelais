import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traitement DMLA Villeurbanne | Centre Expert Rétine Rabelais',
  description: 'Vous résidez à Villeurbanne et cherchez un spécialiste de la DMLA ? Le Centre Ophtalmologique Rabelais (Lyon) offre des traitements de pointe : Injections anti-VEGF et Photobiomodulation Valeda.',
  keywords: 'DMLA Villeurbanne, Traitement DMLA Villeurbanne, Ophtalmologue DMLA Villeurbanne, Spécialiste macula Villeurbanne',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/dmla-traitement-villeurbanne'
  }
};

export default function LocalDMLAVilleurbannePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Traitement DMLA pour les patients de Villeurbanne",
    "about": {
      "@type": "MedicalCondition",
      "name": "Dégénérescence Maculaire Liée à l'Âge (DMLA)"
    },
    "audience": {
      "@type": "Patient",
      "geographicArea": {
        "@type": "City",
        "name": "Villeurbanne"
      }
    }
  };

  return (
    <main className="flex flex-col flex-grow bg-white font-[Gotham] text-[#888888]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SEO Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png')" }}
        >
          <div className="absolute inset-0 bg-[#1a1a1a]/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[46px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
            Traitement de la <strong className="font-bold text-[#c2aa84]">DMLA</strong> pour les patients de <strong className="font-bold">Villeurbanne</strong>
          </h1>
          <div className="h-[2px] w-[100px] bg-[#c2aa84] mb-6"></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Des protocoles cliniques avancés à seulement 15 minutes en métro depuis Gratte-Ciel ou Charpennes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-[#f8f8f8] p-10 md:p-16 shadow-sm border-l-4 border-[#003399]">
          <h2 className="text-[#888888] text-[24px] font-bold uppercase tracking-wider mb-6">
            Pourquoi les patients de Villeurbanne viennent-ils Au Centre Ophtalmologique Rabelais ?
          </h2>
          <p className="text-[#888888] text-[16px] leading-relaxed mb-6 font-light">
            La prise en charge de la Dégénérescence Maculaire (sèche ou humide) exige un équipement d'imagerie extrêmement pointu (OCT angiographie) et un bloc stérile dédié pour les interventions. Beaucoup de cabinets classiques à <strong>Villeurbanne</strong> ne disposent pas de ces infrastructures spécifiques.
          </p>
          <p className="text-[#888888] text-[16px] leading-relaxed mb-10 font-light">
            En choisissant le Centre Ophtalmologique Rabelais (situé stratégiquement dans le centre de Lyon), vous bénéficiez de l'expertise de médecins entièrement dédiés à la rétine, assurant un diagnostic immédiat et le début du traitement le jour même si nécessaire.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-[#c2aa84] font-bold text-[18px] mb-4">Traitements DMLA Exclusifs</h3>
              <ul className="text-[#888888] text-[14px] leading-relaxed space-y-2">
                <li><strong>DMLA Humide :</strong> Injections d'anti-VEGF (Lucentis, Eylea) en bloc dédié.</li>
                <li><strong>DMLA Sèche :</strong> Nouveau traitement innovant par <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] font-bold hover:underline">Photobiomodulation (Système Valeda)</Link>, validé par la FDA.</li>
                <li><strong>Complications :</strong> Photothérapie dynamique (PDT) à la Visudyne.</li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-[#003399] font-bold text-[18px] mb-4">Trajet Villeurbanne &rarr; Centre Ophtalmologique Rabelais</h3>
              <ul className="text-[#888888] text-[14px] leading-relaxed space-y-2">
                <li><strong className="text-black">Métro A :</strong> Depuis Gratte-Ciel, République ou Charpennes, accès direct jusqu'à Bellecour (env. 15min) sans aucun changement.</li>
                <li><strong className="text-black">En voiture :</strong> Accès direct via les quais du Rhône. Parking public sous la place Antonin Poncet, juste devant le cabinet.</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link prefetch={true} 
              href="/#home-page-contact" 
              className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
            >
              Organiser votre Bilan DMLA
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
