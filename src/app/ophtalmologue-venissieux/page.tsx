import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Vénissieux | Expert Rétine | Centre Ophtalmologique Rabelais',
  description: 'Depuis Vénissieux, accédez rapidement Au Centre Ophtalmologique Rabelais (Lyon) pour vos pathologies rétiniennes : DMLA, injections IVT, OCT maculaire et photobiomodulation.',
  keywords: 'ophtalmologue venissieux, ophtalmo venissieux, ophtalmologiste venissieux, dmla venissieux, retine venissieux, centre ophtalmo proche venissieux',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-venissieux'
  }
};

export default function OphtalmologueVenissieuxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Vénissieux",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-venissieux",
    "telephone": "+33478950908",
    "description": "Centre ophtalmologique expert de la rétine pour les patients de Vénissieux (69200). Diagnostic OCT, traitement DMLA et injections IVT.",
    "areaServed": "Vénissieux (69200)",
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
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[46px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
            Votre <strong className="font-bold">Ophtalmologue depuis Vénissieux</strong>
          </h1>
          <div className="h-[2px] w-[100px] bg-[#c2aa84] mb-6"></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise rétinienne et DMLA à portée directe des habitants de Vénissieux (69200).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Prise en charge rétinienne pour les Vénissians</h2>
                <p>
                    Avec <strong>66 000 habitants</strong>, <strong>Vénissieux</strong> est la plus grande commune de la périphérie lyonnaise. Pour les pathologies complexes de la macula et de la rétine, les cabinets d&apos;ophtalmologie généraliste ne disposent pas toujours du plateau technique nécessaire. Le <strong>Centre Ophtalmologique Rabelais</strong>, hyper-spécialisé en rétine médicale, offre un accès direct aux patients du 69200.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Pathologies traitées pour Vénissieux</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong><Link prefetch={true} href="/dmla-lyon" className="text-[#c2aa84] font-bold hover:underline">DMLA Humide & Sèche</Link> :</strong> Diagnostic immédiat par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] hover:underline">OCT maculaire</Link> et traitement adapté (IVT anti-VEGF ou <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] hover:underline">photobiomodulation Valeda</Link>).</li>
                        <li><strong>Rétinopathie diabétique :</strong> Surveillance rigoureuse et traitement laser pour les patients diabétiques.</li>
                        <li><strong>Occlusions veineuses :</strong> Prise en charge rapide des thromboses rétiniennes avec traitement par <Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] hover:underline">injections intravitréennes</Link>.</li>
                    </ul>
                </div>

                <h2 className="text-[#c2aa84] text-[26px] font-bold uppercase tracking-wider mb-6">Pourquoi choisir Le Centre Ophtalmologique Rabelais ?</h2>
                <p>
                    Notre pôle réunit l&apos;ensemble du parcours diagnostique et thérapeutique en un seul lieu : imagerie OCT-Angiographie, consultation spécialisée avec le <Link prefetch={true} href="/retinologue-lyon-6" className="text-[#c2aa84] hover:underline">rétinologue</Link>, et traitements (injections, laser, photobiomodulation) le jour même si nécessaire. Cette approche intégrée évite les allers-retours entre multiples structures hospitalières.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Trajet Vénissieux → Centre Ophtalmologique Rabelais</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚇 Métro D :</strong> Depuis <strong>Parilly</strong> ou <strong>Mermoz-Pinel</strong>, direction Gare de Vaise, descendre à <strong>Bellecour</strong> (15-18 min direct, sans changement).</li>
                    <li><strong className="text-black">🚊 Tram T4 :</strong> Depuis Vénissieux centre, tramway T4 jusqu&apos;à Jet d&apos;Eau puis métro D vers Bellecour.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Via le boulevard Laurent Bonnevay (périphérique) puis sortie Presqu&apos;île / Bellecour. Environ 20 minutes. Parking souterrain Place Bellecour.</li>
                </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">FAQ Vénissieux</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Acceptez-vous les patients CMU/CSS ?</p>
                            <p className="text-[13px] text-[#888888]">Nos médecins exercent en secteur 2 (honoraires libres). Nous acceptons la carte vitale pour la transmission CPAM. Renseignez-vous auprès de votre complémentaire pour le remboursement des dépassements d&apos;honoraires.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Services du Centre</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> OCT Maculaire</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Injections IVT</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Diagnostic DMLA</Link></li>
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Offre de soins complète</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Prendre en main votre <strong className="font-bold text-[#c2aa84]">santé rétinienne depuis Vénissieux</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Ne laissez pas une pathologie maculaire progresser. Le Centre Ophtalmologique Rabelais est accessible en métro D direct depuis Parilly.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Demander un Rendez-Vous
          </Link>
        </div>
      </section>
    </main>
  );
}
