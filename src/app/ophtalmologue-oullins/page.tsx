import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Oullins | Expert Rétine | Centre Ophtalmologique Rabelais Lyon',
  description: 'Ophtalmologue spécialiste de la rétine proche d\'Oullins-Pierre-Bénite. Le Centre Ophtalmologique Rabelais traite la DMLA, réalise les OCT maculaires et les injections IVT.',
  keywords: 'ophtalmologue oullins, ophtalmo oullins, ophtalmologiste oullins pierre benite, dmla oullins, retine oullins, centre ophtalmo proche oullins',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-oullins'
  }
};

export default function OphtalmologueOullinsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Oullins",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-oullins",
    "telephone": "+33478950908",
    "description": "Centre ophtalmologique expert de la rétine pour les patients d'Oullins-Pierre-Bénite (69600). Accessible en métro B direct.",
    "areaServed": "Oullins-Pierre-Bénite (69600)",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue depuis Oullins</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8"><div className="h-[2px] w-full bg-white/60"></div></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise maculaire et rétinienne accessible en métro B direct depuis Oullins et Pierre-Bénite.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Centre rétinien pour Oullins-Pierre-Bénite</h2>
                <p>
                    Située au sud immédiat de Lyon, la commune fusionnée d&apos;<strong>Oullins-Pierre-Bénite</strong> compte <strong>38 000 habitants</strong>. Malgré la proximité du centre hospitalier Lyon Sud (Pierre-Bénite), les patients recherchent souvent un accès plus rapide en ville pour les consultations spécialisées de la macula et de la rétine.
                </p>
                <p>
                    Le <strong>Centre Ophtalmologique Rabelais</strong> offre un complément idéal : diagnostic par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">OCT maculaire</Link> et traitement en une seule visite, avec un accès en <strong>métro B direct</strong> depuis la gare d&apos;Oullins.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Notre expertise pour Oullins</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong><Link prefetch={true} href="/dmla-lyon" className="text-[#c2aa84] font-bold hover:underline">DMLA</Link> :</strong> Diagnostic de la forme sèche et humide, traitement par IVT anti-VEGF ou <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] hover:underline">photobiomodulation Valeda</Link>.</li>
                        <li><strong>Suivi post-opératoire :</strong> Pour les patients opérés au CHU Lyon Sud, suivi rétinien en ville avec imagerie OCT de contrôle.</li>
                        <li><strong><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] hover:underline">Injections IVT</Link> récurrentes :</strong> Protocole anti-VEGF en salle blanche pour les patients sous traitement régulier, évitant les longs délais hospitaliers.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un trajet ultra-court en métro B</h2>
                <p>
                    L&apos;extension du métro B jusqu&apos;à <strong>Gare d&apos;Oullins</strong> a considérablement amélioré l&apos;accessibilité du centre de Lyon pour les Oullinois. Le Centre Ophtalmologique Rabelais, situé près de Bellecour, est désormais atteignable en seulement quelques stations.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès depuis Oullins</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚇 Métro B :</strong> Depuis <strong>Gare d&apos;Oullins</strong>, direction Charpennes, descendre à <strong>Bellecour</strong> (7-8 min direct, sans changement). C&apos;est le trajet le plus rapide de toute la banlieue sud.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Par l&apos;A450 ou les quais du Rhône, direction centre-ville. Parking souterrain Place Bellecour (environ 15 min).</li>
                    <li><strong className="text-black">🚌 Bus :</strong> Ligne C10 depuis Pierre-Bénite vers Bellecour.</li>
                </ul>
            </div>

            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Oullins</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Puis-je être suivi chez vous plutôt qu&apos;à Lyon Sud ?</p>
                            <p className="text-[13px] text-[#888888]">Pour les consultations de suivi rétiniennes et les injections IVT, notre centre en ville offre un accès plus flexible avec des délais réduits. Nous travaillons en complémentarité avec les services hospitaliers.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Services</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> OCT Maculaire</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Injections IVT</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétinologue</Link></li>
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Offre de soins</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Bilan Rétine <strong className="font-bold text-[#c2aa84]">depuis Oullins</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">7 minutes en métro B direct depuis la Gare d&apos;Oullins. Le trajet le plus court de la banlieue sud vers notre centre spécialisé.</p>
          <Link prefetch={true} href="/#home-page-contact" className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors">
            Prendre Rendez-Vous
          </Link>
        </div>
      </section>
    </main>
  );
}
