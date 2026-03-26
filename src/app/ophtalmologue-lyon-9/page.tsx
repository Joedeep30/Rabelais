import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Lyon 9 | Vaise, Duchère | Centre Ophtalmologique Rabelais',
  description: 'Ophtalmologue expert rétine proche de Lyon 9 (Vaise, Duchère, Gorge de Loup). Le Centre Ophtalmologique Rabelais traite la DMLA et réalise vos examens OCT maculaire.',
  keywords: 'ophtalmologue lyon 9, ophtalmo vaise, ophtalmologiste duchère, rdv ophtalmo lyon 9, dmla lyon 9, retine lyon 9',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-9'
  }
};

export default function OphtalmologueLyon9Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Lyon 9",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-lyon-9",
    "telephone": "+33478950908",
    "description": "Centre expert rétine et macula pour les patients du 9ème arrondissement de Lyon (Vaise, Duchère, Gorge de Loup).",
    "areaServed": "Lyon 9ème (69009)",
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue Lyon 9</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8"><div className="h-[2px] w-full bg-[#c2aa84]"></div></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise maculaire et rétinienne pour Vaise, la Duchère et l&apos;ensemble du 9ème — l&apos;arrondissement à la plus forte croissance de Lyon.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Pôle rétinien pour le 9ème arrondissement</h2>
                <p>
                    Le 9ème arrondissement connaît la <strong>plus forte croissance démographique de Lyon (+5,7%)</strong> avec 53 500 habitants et de nombreux programmes immobiliers en développement. Pour les pathologies oculaires exigeant un équipement d&apos;imagerie de pointe, le <strong>Centre Ophtalmologique Rabelais</strong> est le pôle spécialisé le plus accessible depuis Vaise et la Duchère.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Consultez si vous présentez</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Vision ondulée :</strong> Lignes droites déformées, possible signe de <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA</Link> nécessitant un <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] hover:underline">OCT maculaire urgent</Link>.</li>
                        <li><strong>Tache noire centrale :</strong> Scotome central évocateur d&apos;une atteinte maculaire.</li>
                        <li><strong>Diabète :</strong> Surveillance annuelle du fond d&apos;œil recommandée pour dépister la rétinopathie diabétique.</li>
                        <li><strong>Éclairs lumineux :</strong> Flashs dans le champ visuel pouvant indiquer une traction ou un décollement du vitré.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un parcours de soin centralisé</h2>
                <p>Notre approche « tout-en-un » permet aux patients de Vaise de bénéficier d&apos;un diagnostic et d&apos;un traitement en une seule visite : <Link prefetch={true} href="/oct-macula-lyon" className="text-[#c2aa84] hover:underline">imagerie OCT</Link>, consultation rétinologue, et si nécessaire <Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#c2aa84] hover:underline">injection IVT</Link> le jour même.</p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Venir depuis Lyon 9</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚇 Métro D :</strong> Depuis <strong>Gare de Vaise</strong> ou <strong>Gorge de Loup</strong>, descendre à <strong>Bellecour</strong> (8-10 min direct).</li>
                    <li><strong className="text-black">🚌 Bus C6/C14 :</strong> Depuis la Duchère, bus vers Gare de Vaise puis métro D.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Via le tunnel de la Croix-Rousse ou les quais de Saône. Parking Bellecour à 2 minutes du centre.</li>
                </ul>
            </div>

            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Lyon 9</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Le trajet en métro D est-il vraiment aussi rapide ?</p>
                            <p className="text-[13px] text-[#888888]">Oui. La Gare de Vaise est à seulement 4 stations de Bellecour (métro D direct). C&apos;est l&apos;un des trajets les plus courts de toute la métropole pour rejoindre notre centre.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Nos spécialités</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> DMLA diagnostic</Link></li>
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> OCT Maculaire</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétinologue</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Photobiomodulation</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Bilan Rétine depuis <strong className="font-bold text-[#c2aa84]">Lyon 9</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">8 minutes en métro D depuis Vaise : prenez rendez-vous pour un diagnostic maculaire complet.</p>
          <Link prefetch={true} href="/#home-page-contact" className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors">
            Prendre Rendez-Vous
          </Link>
        </div>
      </section>
    </main>
  );
}
