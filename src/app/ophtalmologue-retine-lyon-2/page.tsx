import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Spécialiste Rétine Lyon 2 (Bellecour) | Centre Ophtalmologique Rabelais',
  description: 'Prenez RDV avec un ophtalmologue spécialiste de la rétine au coeur de Lyon 2 (Bellecour/Presqu\'île). Expert en DMLA, diabète oculaire et chirurgie maculaire.',
  keywords: 'Ophtalmologue rétine Lyon 2, Ophtalmologue Bellecour, Spécialiste rétine Presqu\'île Lyon, DMLA Lyon 2, Centre Ophtalmologique Rabelais',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-retine-lyon-2'
  }
};

export default function LocalRetinaLyon2Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Ophtalmologue Spécialiste Rétine Lyon 2",
    "about": {
      "@type": "MedicalCondition",
      "name": "Retinal Diseases (DMLA, Rétinopathie)"
    },
    "audience": {
      "@type": "Patient",
      "geographicArea": {
        "@type": "AdministrativeArea",
        "name": "Lyon 2ème (Bellecour, Presqu'île)"
      }
    }
  };

  return (
    <main className="flex flex-col flex-grow bg-[#f8f8f8] font-[Gotham] text-[#888888]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SEO Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[46px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
            Votre Ophtalmologue Spécialiste <strong className="font-bold">Rétine à Lyon 2</strong>
          </h1>
          <div className="h-[2px] w-[100px] bg-[#c2aa84] mb-6"></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise médicale de la DMLA et de la macula au carrefour de la Presqu'île et de Bellecour.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-white p-10 md:p-16 shadow-sm border-t-4 border-[#c2aa84]">
          <h2 className="text-[#003399] text-[24px] font-bold uppercase tracking-wider mb-6">
            Pourquoi consulter notre pôle Rétine à Lyon 2 ?
          </h2>
          <p className="text-[#888888] text-[16px] leading-relaxed mb-6 font-light">
            Situé en plein centre-ville au <strong>2 rue Antoine de Saint-Exupéry (Lyon 69002)</strong>, à quelques pas de la Place Bellecour, le Centre Ophtalmologique Rabelais est un pôle d'excellence dédié exclusivement aux pathologies du fond d'œil et de la macula.
          </p>
          <p className="text-[#888888] text-[16px] leading-relaxed mb-10 font-light">
            Contrairement à un cabinet d'ophtalmologie généraliste, notre structure réunit l'équipement diagnostique (OCT Spectralis, Angiographes) et les traitements (Injections Intra-Vitréennes, Système Valeda) nécessaires pour une prise en charge immédiate de la <strong>DMLA (Dégénérescence Maculaire Liée à l'Âge)</strong> et de la <strong>rétinopathie diabétique</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f4f6fc] p-8 rounded-sm">
              <h3 className="text-[#003399] font-bold text-[18px] mb-4">Accès depuis la Presqu'île</h3>
              <ul className="text-[#888888] text-[14px] leading-relaxed space-y-2">
                <li><strong className="text-black">Métro :</strong> Lignes A et D (Arrêt Bellecour à 2 min à pied).</li>
                <li><strong className="text-black">Bus :</strong> Lignes C20, C9, C10, 40, 15, 35.</li>
                <li><strong className="text-black">Parking :</strong> Parking Bellecour ou Antonin Poncet.</li>
              </ul>
            </div>
            <div className="bg-[#fdfbf7] p-8 rounded-sm">
              <h3 className="text-[#c2aa84] font-bold text-[18px] mb-4">Nos Spécialités</h3>
              <ul className="text-[#888888] text-[14px] leading-relaxed space-y-2">
                <li>Diagnostic rapide DMLA humide/sèche.</li>
                <li>Injections anti-VEGF sur place.</li>
                <li>Lasers maculaires experts.</li>
                <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#c2aa84] font-bold hover:underline">Photobiomodulation (PBM)</Link>.</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link prefetch={true} 
              href="/#home-page-contact" 
              className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
            >
              Prendre rendez-vous à Lyon 2
            </Link>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#888888] text-[28px] font-light uppercase tracking-wider mb-8 text-center">
            Questions Fréquentes (<strong className="font-bold text-[#003399]">Patientèle Lyon 2</strong>)
          </h2>
          <div className="space-y-6">
            <div className="pb-6 border-b border-gray-200">
              <h4 className="font-bold text-[16px] text-[#888888] mb-2">Prenez-vous des urgences rétine sur le secteur Bellecour ?</h4>
              <p className="text-[#888888] text-[14px] font-light">Oui, en cas de baisse de vision brutale (soupçon de DMLA exsudative ou décollement de rétine), contactez directement notre secrétariat au 04 78 95 09 08 pour qu'un spécialiste vous examine rapidement.</p>
            </div>
            <div className="pb-6 border-b border-gray-200">
              <h4 className="font-bold text-[16px] text-[#888888] mb-2">Faites-vous les bilans de vue classiques (lunettes) ?</h4>
              <p className="text-[#888888] text-[14px] font-light">Le Centre Ophtalmologique Rabelais est un pôle d'expertise hyper-spécialisé en <strong>Rétine Médicale</strong>. Pour un simple renouvellement de lunettes sans pathologie sous-jacente, nous vous recommandons de consulter un ophtalmologue généraliste sur la Presqu'île.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
