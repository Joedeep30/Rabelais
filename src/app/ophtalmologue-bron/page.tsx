import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Bron | Expert Rétine | Centre Ophtalmologique Rabelais Lyon',
  description: 'Depuis Bron, accédez rapidement Au Centre Ophtalmologique Rabelais (Lyon) pour vos pathologies rétiniennes. DMLA, injections IVT, OCT maculaire — spécialistes de la macula.',
  keywords: 'ophtalmologue bron, ophtalmo bron, ophtalmologiste bron, dmla bron, retine bron, centre ophtalmo proche bron',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-bron'
  }
};

export default function OphtalmologueBronPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Bron",
    "image": "/wp-content/uploads/2015/09/post2.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-bron",
    "telephone": "+33478950908",
    "description": "Centre ophtalmologique expert de la rétine pour les patients de Bron (69500). Diagnostic OCT, traitement DMLA et injections IVT.",
    "areaServed": "Bron (69500)",
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
             Votre <strong className="font-bold">Ophtalmologue proche Bron</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8"><div className="h-[2px] w-full bg-[#c2aa84]"></div></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Spécialiste de la rétine et de la macula pour les 43 000 habitants de Bron et sa périphérie.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise ophtalmologique pour les Brondillants</h2>
                <p>
                    Commune de <strong>43 000 habitants</strong> en bordure est de Lyon, <strong>Bron</strong> héberge le groupement hospitalier Est des HCL mais manque de centres spécialisés en rétine médicale en ville. Le <strong>Centre Ophtalmologique Rabelais</strong> complète l&apos;offre hospitalière en proposant un accès rapide aux diagnostics par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">OCT maculaire</Link> et aux traitements rétiniens ambulatoires.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Prises en charge pour Bron</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong><Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA</Link> :</strong> Diagnostic immédiat et traitement (IVT anti-VEGF ou <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] hover:underline">photobiomodulation Valeda</Link> pour la forme sèche).</li>
                        <li><strong>Rétinopathie diabétique :</strong> Fond d&apos;œil annuel et traitement laser si nécessaire.</li>
                        <li><strong><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] hover:underline">Injections IVT</Link> :</strong> Protocole anti-VEGF en salle blanche stérile.</li>
                        <li><strong>Glaucome :</strong> Analyse des fibres nerveuses par OCT et suivi de la pression intraoculaire.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Complémentaire aux HCL Bron</h2>
                <p>De nombreux patients suivis au groupement hospitalier Est nous sont adressés pour des consultations spécialisées rétiniennes en ville, réduisant les délais d&apos;attente hospitaliers. Notre <Link prefetch={true} href="/plateau-technique" className="text-[#c2aa84] hover:underline">plateau technique</Link> est équivalent en imagerie diagnostique.</p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès depuis Bron</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚊 Tram T2 :</strong> Depuis <strong>Bron centre</strong> ou <strong>Porte des Alpes</strong>, tramway T2 jusqu&apos;à Perrache, puis métro A vers Bellecour (25-30 min).</li>
                    <li><strong className="text-black">🚇 Métro D :</strong> Depuis <strong>Mermoz-Pinel</strong> (limite Bron/Lyon 8), direct jusqu&apos;à Bellecour (12 min).</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Par le boulevard Pinel puis l&apos;avenue Berthelot vers la Presqu&apos;Île. Parking Bellecour. Environ 20 min.</li>
                </ul>
            </div>

            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Bron</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Acceptez-vous les patients référés par l&apos;hôpital ?</p>
                            <p className="text-[13px] text-[#888888]">Oui. Nous recevons régulièrement des patients adressés par les services d&apos;ophtalmologie des HCL Bron pour le suivi et le traitement des pathologies maculaires en ville.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Nos services</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> OCT Maculaire</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétinologue</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Diagnostic DMLA</Link></li>
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Offre de soins</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Expertise Rétine pour <strong className="font-bold text-[#c2aa84]">Bron</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">Le Centre Ophtalmologique Rabelais complète l&apos;offre hospitalière de Bron avec un accès rapide en ville aux diagnostics et traitements rétiniens.</p>
          <Link prefetch={true} href="/#home-page-contact" className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors">
            Demander un Rendez-Vous
          </Link>
        </div>
      </section>
    </main>
  );
}
