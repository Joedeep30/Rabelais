import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Lyon 8 | Monplaisir, Mermoz | Centre Ophtalmologique Rabelais',
  description: 'Ophtalmologue expert rétine proche de Lyon 8 (Monplaisir, Mermoz, Laënnec). Le Centre Ophtalmologique Rabelais traite la DMLA, les injections IVT et réalise vos examens OCT.',
  keywords: 'ophtalmologue lyon 8, ophtalmo monplaisir, ophtalmologiste mermoz, rdv ophtalmo lyon 8, dmla lyon 8, retine lyon 8 laennec',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-8'
  }
};

export default function OphtalmologueLyon8Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Lyon 8",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-lyon-8",
    "telephone": "+33478950908",
    "description": "Centre expert rétine et macula pour les patients du 8ème arrondissement de Lyon (Monplaisir, Mermoz, Bachut, Laënnec).",
    "areaServed": "Lyon 8ème (69008)",
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
      
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue Lyon 8</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Prise en charge experte de la macula et de la rétine pour les patients de Monplaisir, Mermoz et tout le 8ème.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Excellence ophtalmologique pour Lyon 8ème</h2>
                <p>
                    Troisième arrondissement le plus peuplé de Lyon avec <strong>86 000 habitants</strong>, le 8ème concentre une population diverse allant des familles de Monplaisir aux résidents du quartier hospitalier de Laënnec-Mermoz. Pour les pathologies oculaires complexes touchant la <strong>macula et la rétine</strong>, le <strong>Centre Ophtalmologique Rabelais</strong> constitue le pôle d&apos;excellence le plus accessible depuis le 69008.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Pourquoi consulter depuis Lyon 8 ?</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong><Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">Suspicion de DMLA</Link> :</strong> Lignes déformées, baisse d&apos;acuité soudaine — notre pôle assure un diagnostic par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] hover:underline">OCT maculaire</Link> le jour de votre consultation.</li>
                        <li><strong>Rétinopathie du diabète :</strong> Le 8ème arrondissement abrite une population diabétique significative nécessitant un suivi ophtalmologique annuel rigoureux par imagerie de fond d&apos;œil.</li>
                        <li><strong><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] hover:underline">Injections IVT</Link> :</strong> Traitement anti-VEGF en salle blanche stérile pour les patients sous protocole d&apos;injections récurrentes.</li>
                        <li><strong>Glaucome :</strong> Analyse des fibres nerveuses rétiniennes (RNFL) par OCT pour le dépistage et le suivi du glaucome.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un plateau technique complet</h2>
                <p>
                    Notre <Link prefetch={true} href="/plateau-technique" className="text-[#c2aa84] hover:underline">plateau technique</Link> réunit l&apos;ensemble des équipements nécessaires au diagnostic et au traitement des pathologies rétiniennes : OCT Spectral-Domain, OCT-Angiographie, laser Argon et YAG, système de <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#c2aa84] hover:underline">photobiomodulation Valeda</Link> pour la DMLA sèche, et salle d&apos;injection stérile dédiée aux IVT.
                </p>
                <p>
                    Cette centralisation des équipements permet aux patients du 8ème de réaliser l&apos;ensemble de leur parcours diagnostique et thérapeutique en une seule visite, contrairement aux parcours fragmentés des structures hospitalières.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès depuis Lyon 8</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚇 Métro D :</strong> Depuis <strong>Mermoz-Pinel</strong> ou <strong>Laënnec</strong>, prendre la ligne D direction Gare de Vaise, descendre à <strong>Bellecour</strong> (12-15 min direct, sans changement).</li>
                    <li><strong className="text-black">🚊 Tram T2 :</strong> Depuis le quartier du Bachut ou Porte des Alpes, tramway T2 jusqu&apos;à Perrache, puis correspondance métro ou 8 minutes à pied.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Par l&apos;avenue Berthelot direction Presqu&apos;île, parking souterrain Bellecour. Environ 15 minutes depuis Monplaisir.</li>
                </ul>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Lyon 8</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Faites-vous des consultations de vue classique ?</p>
                            <p className="text-[13px] text-[#888888]">Non. Le Centre Ophtalmologique Rabelais est un pôle hyper-spécialisé dédié à la rétine et à la macula. Pour les prescriptions de lunettes ou le suivi pédiatrique, nous vous orienterons vers un ophtalmologue généraliste.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Y a-t-il des correspondants à Lyon 8 ?</p>
                            <p className="text-[13px] text-[#888888]">Oui. De nombreux ophtalmologues du 8ème nous adressent leurs patients pour des avis spécialisés rétiniens. Le courrier d&apos;adressage facilite la prise en charge rapide.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Services associés</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> OCT Maculaire</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Expertise Rétinologue</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Diagnostic DMLA</Link></li>
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Offre de soins complète</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Expertise rétinienne pour <strong className="font-bold text-[#c2aa84]">Lyon 8</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Les résidents de Monplaisir, Mermoz et Laënnec bénéficient d&apos;un trajet direct en métro D jusqu&apos;à notre centre. Prenez rendez-vous pour votre bilan rétine.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Contacter le Centre
          </Link>
        </div>

      </section>

    </main>
  );
}
