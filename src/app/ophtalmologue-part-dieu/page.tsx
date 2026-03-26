import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Part-Dieu | DMLA & Rétine | Centre Ophtalmologique Rabelais à proximité',
  description: 'Un centre ophtalmologique référent pour la DMLA, la macula et le diabète situé à proximité directe du Quartier d\'affaires de la Part-Dieu (Lyon 3 / 6).',
  keywords: 'ophtalmologue part dieu lyon, centre ophtalmo part-dieu, ophtalmologiste lyon gare part dieu, dmla lyon 3, rdv ophtalmo rapide part dieu',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-part-dieu'
  }
};

export default function OphtalmologuePartDieuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Centre Ophtalmologique Proche La Part-Dieu - Lyon",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-part-dieu",
    "telephone": "+33478950908",
    "description": "Prise en charge spécialisée pour la rétine et la DMLA. Accès très facile depuis la Gare de Lyon Part-Dieu et son quartier d'affaires.",
    "areaServed": "Part-Dieu, Lyon 3ème, Lyon 6ème",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2, Rue Antoine de Saint-Exupéry",
      "addressLocality": "Lyon",
      "postalCode": "69002",
      "addressCountry": "FR"
    },
    "medicalSpecialty": "Ophthalmologic"
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
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post4.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Expert Ophtalmologue proche <strong className="font-bold">Part-Dieu</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[400px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Des consultations dédiées à l'imagerie maculaire et au traitement de la rétine, directement connectées au centre multimodal Part-Dieu.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise Dégénérescence Maculaire & Rétine depuis La Part-Dieu</h2>
                <p>
                    Le pôle d'affaires et de transport de <strong>la Part-Dieu (Lyon 3 / Lyon 6)</strong> est un carrefour majeur. Si vous résidez dans ce quartier central ou si vous y transitez via la Gare TGV, le <Link prefetch={true} href="/ophtalmologue-lyon-3" className="text-[#c2aa84] font-bold hover:underline">Centre Ophtalmologique Rabelais</Link> se positionne comme l'un des rares instituts 100% focalisés sur les urgences et diagnostics de la rétine à proximité.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Quand consulter notre médecin ophtalmologiste ?</h3>
                    <p className="mb-4">
                        Ce centre est la référence pour tout avis de confirmation, diagnostic et plan de soins lors de suspicions métaboliques telles que :
                    </p>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li>La <strong>Dégénérescence Maculaire (<Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA</Link>)</strong> qui touche le centre du champ visuel.</li>
                        <li>Les répercutions du diabète via le diagnostic approfondi de la <strong>Rétinopathie Diabétique</strong>.</li>
                        <li>L'exploration du nerf optique par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">Imagerie sans dilatation d'OCT-A (tomographie)</Link>.</li>
                        <li>Les anomalies telles que les Trous Maculaires et les membranes Épirétiniennes.</li>
                    </ul>
                </div>

                <h2 className="text-[#c2aa84] text-[26px] font-bold uppercase tracking-wider mb-6">Plateau Rétine dernière génération</h2>
                <p>
                    L'un des avantages fondamentaux de notre établissement est notre intégration de l'offre médicamenteuse sur un même palier (<strong>Sectorisation Intravitréenne IVT</strong>) et de la solution laser <strong>Valeda pour la PBM</strong> (Photobiomodulation) en exclusivité, s'adressant aux DMLA sèches, un traitement validé <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#c2aa84] font-bold hover:underline">à découvrir en détail ici</Link>.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès rapide Centre Ophtalmologique Rabelais au départ de la Part-Dieu</h3>
                <p>
                    En sortant de la Gare Part-Dieu (Côté Vivier Merle) ou depuis le Centre commercial :
                </p>
                <ul className="list-none space-y-3 mt-4">
                    <li><strong className="text-black">🚇 Bus C9 :</strong> Prenez la Ligne C9 (Arrêt Gare Part-Dieu Vivier-Merle), descendez directement à l'arrêt monument "Bellecour, Le Viste". Le Centre Ophtalmologique Rabelais est sur le trottoir d'en face à l'entrée de la rue Saint-Exupéry. (Trajet : env 15/20 min)</li>
                    <li><strong className="text-black">🚇 Option Métro :</strong> Métro B (Dir. Oullins) arrêt Saxe, puis Métro D (Dir. Gare de Vaise) arrêt Bellecour. (Trajet : env 15 min)</li>
                    <li><strong className="text-black">🚕 Taxis/VTC :</strong> Moins de 10 min de route hors trafic pour traverser le Pont de la Guillotière.</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">Questions Fréquentes</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Je sors du bureau à Part-Dieu, combien de temps prendra l'examen DMLA ?</p>
                            <p className="text-[13px] text-[#888888]">Prévoyez habituellement 45 minutes à 1 heure dans nos locaux incluant les clichés d'imagerie qui vous sont restitués instantanément.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Disposez-vous d'une convention tiers payant ?</p>
                            <p className="text-[13px] text-[#888888]">Secteur 2 avec utilisation de la carte Vitale. Un dépassement d'honoraires est appliqué selon les examens prescrits.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Autres quartiers ciblés</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/ophtalmologue-lyon-3" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Ophtalmologue Lyon 3 (Général)</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-3" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Rétinologue sur Lyon 3 / 6</Link></li>
                        <li><Link prefetch={true} href="/ophtalmologue-villeurbanne" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Ophtalmo Villeurbanne Centre</Link></li>
                        <li><Link prefetch={true} href="/retine-medicale-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Découvrir tous nos Traitements</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Bilan Rapide : Prenez rendez-vous depuis <strong className="font-bold text-[#c2aa84]">La Part-Dieu</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Veuillez noter que Le Centre Ophtalmologique Rabelais n'est expert que pour la Rétine Médicale (Diabète, DMLA). Nous ne faisons pas de corrections lunettes pures.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Faire ma Demande de RDV
          </Link>
        </div>

      </section>

    </main>
  );
}
