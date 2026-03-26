import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Lyon 7 | Gerland, Jean Macé | Centre Ophtalmologique Rabelais',
  description: 'Vous cherchez un ophtalmologue à Lyon 7 (Gerland, Jean Macé, Guillotière Sud) ? Le Centre Ophtalmologique Rabelais, spécialiste de la rétine, est accessible en minutes depuis le 7ème.',
  keywords: 'ophtalmologue lyon 7, ophtalmo gerland, ophtalmologiste jean macé, rdv ophtalmo lyon 7, dmla lyon 7, retine lyon 7',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-7'
  }
};

export default function OphtalmologueLyon7Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Lyon 7",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-lyon-7",
    "telephone": "+33478950908",
    "description": "Cabinet d'ophtalmologie expert de la rétine accessible depuis tout le 7ème arrondissement de Lyon (Gerland, Jean Macé, Guillotière Sud).",
    "areaServed": "Lyon 7ème (69007)",
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
          style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue Lyon 7</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-white/60"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise maculaire et traitements rétiniens de pointe depuis Gerland, Jean Macé et tout le 7ème arrondissement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Spécialiste de la rétine pour le 7ème arrondissement</h2>
                <p>
                    Avec près de <strong>87 500 habitants</strong>, le 7ème arrondissement est le deuxième plus peuplé de Lyon. De Gerland à la Guillotière Sud en passant par Jean Macé, les résidents du 69007 bénéficient d&apos;un accès direct et rapide au <strong>Centre Ophtalmologique Rabelais</strong>, situé à seulement quelques minutes en transport depuis la station Bellecour.
                </p>
                <p>
                    Notre pôle est exclusivement dédié à la <Link prefetch={true} href="/retine-medicale-lyon" className="text-[#c2aa84] font-bold hover:underline">rétine médicale</Link> et aux pathologies complexes du fond de l&apos;œil : DMLA, rétinopathie diabétique, occlusions veineuses, trous et membranes maculaires.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Quand consulter depuis Lyon 7 ?</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Baisse de vision centrale :</strong> Vision floue ou tache sombre au centre du champ visuel, symptôme caractéristique de la <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA</Link>.</li>
                        <li><strong>Lignes déformées :</strong> Les lignes droites apparaissent ondulées (métamorphopsies), signe d&apos;atteinte maculaire nécessitant un <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">OCT maculaire en urgence</Link>.</li>
                        <li><strong>Suivi diabétique :</strong> Dépistage annuel recommandé de la rétinopathie diabétique par imagerie OCT haute résolution.</li>
                        <li><strong>Flash lumineux :</strong> Éclairs dans le champ visuel pouvant indiquer une traction vitréo-rétinienne nécessitant une évaluation rétinienne rapide.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Diagnostic et traitement en une seule visite</h2>
                <p>
                    Contrairement aux structures hospitalières où les délais entre l&apos;examen diagnostique et le début du traitement peuvent être considérables, Le Centre Ophtalmologique Rabelais centralise l&apos;ensemble du parcours de soin. Dès votre première visite, nos orthoptistes réalisent l&apos;imagerie complète (<Link prefetch={true} href="/oct-macula-lyon" className="text-[#c2aa84] hover:underline">OCT-Angiographie</Link>, rétinographie) avant la consultation avec le <Link prefetch={true} href="/retinologue-lyon-6" className="text-[#c2aa84] hover:underline">rétinologue</Link>.
                </p>
                <p>
                    Si une <Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#c2aa84] hover:underline">injection intravitréenne (IVT)</Link> est requise, nous disposons du bloc stérile pour l&apos;administrer le jour même, évitant l&apos;attente de plusieurs semaines que connaissent les patients dans d&apos;autres structures.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Venir depuis Lyon 7</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚇 Métro B :</strong> Depuis <strong>Jean Macé</strong> ou <strong>Gerland</strong>, prendre la ligne B direction Charpennes, correspondance à Saxe-Gambetta avec la ligne D, descendre à <strong>Bellecour</strong> (10-12 min).</li>
                    <li><strong className="text-black">🚊 Tram T1 :</strong> Depuis Gerland, tramway T1 jusqu&apos;à Perrache puis 5 minutes à pied ou correspondance métro.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Remonter les quais du Rhône via le Pont Gallieni ou le Pont de l&apos;Université. Parking souterrain Place Bellecour à proximité immédiate.</li>
                </ul>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ locale</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Traitez-vous les urgences rétiniennes depuis le 7ème ?</p>
                            <p className="text-[13px] text-[#888888]">Oui. En cas de suspicion de DMLA humide ou d&apos;occlusion veineuse récente, nous priorisons les patients pour un diagnostic OCT rapide, quel que soit leur arrondissement de résidence.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Acceptez-vous les patients de l&apos;hôpital Lyon Sud ?</p>
                            <p className="text-[13px] text-[#888888]">Absolument. De nombreux patients référés par les services d&apos;ophtalmologie du CHU Lyon Sud (Pierre-Bénite) nous consultent pour des prises en charge rétiniennes spécialisées.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Nos expertises</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> DMLA : diagnostic & traitement</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Injections intravitréennes</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Photobiomodulation Valeda</Link></li>
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> OCT Maculaire</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Bilan Rétine Complet depuis <strong className="font-bold text-[#c2aa84]">Lyon 7</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Les habitants du 7ème bénéficient d&apos;un accès rapide Au Centre Ophtalmologique Rabelais via les quais ou le métro B. Prenez rendez-vous pour un diagnostic approfondi.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Prendre Rendez-Vous
          </Link>
        </div>

      </section>

    </main>
  );
}
