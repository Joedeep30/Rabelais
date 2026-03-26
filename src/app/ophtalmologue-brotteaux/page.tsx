import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Brotteaux | Centre Ophtalmologique Rabelais à proximité',
  description: 'Proche du quartier des Brotteaux (Lyon 6), le Centre Ophtalmologique Rabelais prend en charge vos urgences maculaires, DMLA, et anomalies rétiniennes.',
  keywords: 'ophtalmologue brotteaux, ophtalmo gare des brotteaux, centre ophtalmologique lyon brotteaux, dmla brotteaux, oct brotteaux',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-brotteaux'
  }
};

export default function OphtalmologueBrotteauxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine - Proche Brotteaux",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-brotteaux",
    "telephone": "+33478950908",
    "description": "Cabinet d'ophtalmologie médicale expert de la rétine situé à quelques minutes des Brotteaux (Lyon 6).",
    "areaServed": "Brotteaux (69006)",
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
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue proche Brotteaux</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-white/60"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise maculaire et traitements rétiniens nouvelle génération à quelques minutes de la place Jules Ferry.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un centre dédié aux habitants des Brotteaux</h2>
                <p>
                    Articulé autour de l'ancienne gare, le quartier commerçant et résidentiel des Brotteaux nécessite une offre de santé de haut niveau. Pour les pathologies complexes de l'œil, les patients n'ont plus à s'éloigner vers les hôpitaux de périphérie. Le <strong>Centre Ophtalmologique Rabelais</strong>, accessible <Link prefetch={true} href="/ophtalmologue-lyon-6" className="text-[#c2aa84] font-bold hover:underline">depuis tout le 6ème arrondissement</Link>, offre une expertise unique de proximité.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Quand consulter notre clinique de la rétine ?</h3>
                    <p>Contactez le Pôle Rétine de Lyon Rabelais si vous ressentez ces symptômes depuis les Brotteaux :</p>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Baisse de vue rapide :</strong> Une difficulté soudaine à lire ou à distinguer le visage de vos proches.</li>
                        <li><strong>Tâches grises :</strong> Apparition d'un scotome occultant la vision centrale, caractéristique typique d'une <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA débutante</Link>.</li>
                        <li><strong>Diabète diagnostiqué :</strong> Vous nécessitez une surveillance rigoureuse par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">Angiographie / OCT</Link> de votre fond d'œil annuel.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Le Centre Ophtalmologique Rabelais : Un parcours de soin ultra-fluide</h2>
                <p>
                    Notre méthodologie d'action repose sur la centralisation du diagnostic médical. Dès votre arrivée depuis l'avenue Thiers ou le boulevard des Belges, vous êtes pris en charge par nos orthoptistes qui réalisent les bilans techniques complets avant la validation et l'expertise du <strong>médecin ophtalmologiste</strong>. S'il s'avère qu'un traitement type <strong>Injection Intravitréenne (IVT)</strong> est requis, nous disposons du plateau stérile pour l'administrer immédiatement, limitant le stress des protocoles espacés.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Rejoindre Le Centre Ophtalmologique Rabelais depuis la Gare des Brotteaux</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚗 En voiture (10 minutes) :</strong> Prendre le Cours Franklin Roosevelt, passer sur la presqu'île via le Pont Lafayette, puis stationner sur la Place Bellecour.</li>
                    <li><strong className="text-black">🚇 TCL / Métro (12 minutes) :</strong> Rejoindre l'arrêt Masséna (Métro A). Descendre directement à l'arrêt Bellecour. Traverser la place (2 min à pied).</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Locale</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Soignez-vous les glaucomes aux Brotteaux ?</p>
                            <p className="text-[13px] text-[#888888]">Nos OCT permettent le diagnostic du glaucome (fibres ganglionnaires), nous effectuons la surveillance sur dossier de nos correspondants.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Prenez-vous la carte vitale ?</p>
                            <p className="text-[13px] text-[#888888]">Oui. Nos ophtalmologues sont des médecins exerçant en secteur 2 (conventionnés à honoraires libres) et acceptent la carte vitale pour la transmission automatique CPAM.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Liens Utiles & Services</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/ophtalmologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Ophtalmologue Lyon 6 (arrondissement global)</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Expertise Rétinologue</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Traitement novateur DMLA</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Pôle IVT Injections</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Bilan Macula Détaillé depuis <strong className="font-bold text-[#c2aa84]">Les Brotteaux</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Gagnez du temps grâce à l'expertise d'un pôle spécialisé de bout en bout pour éviter l'errance médicale.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Je prends Rendez-Vous
          </Link>
        </div>

      </section>

    </main>
  );
}
