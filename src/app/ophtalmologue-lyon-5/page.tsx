import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Lyon 5 | Vieux Lyon, Point du Jour | Centre Ophtalmologique Rabelais',
  description: 'Ophtalmologue expert rétine proche de Lyon 5 (Vieux Lyon, Point du Jour, Saint-Just). Diagnostic DMLA, OCT maculaire et traitements IVT Au Centre Ophtalmologique Rabelais.',
  keywords: 'ophtalmologue lyon 5, ophtalmo vieux lyon, ophtalmologiste point du jour, rdv ophtalmo lyon 5, dmla lyon 5, retine lyon 5',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-5'
  }
};

export default function OphtalmologueLyon5Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologie & Rétine — Proche Lyon 5",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-lyon-5",
    "telephone": "+33478950908",
    "description": "Centre ophtalmologique expert de la rétine pour les patients du 5ème arrondissement de Lyon (Vieux Lyon, Point du Jour, Saint-Just).",
    "areaServed": "Lyon 5ème (69005)",
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
          <div className="absolute inset-0 bg-[#c2aa84]/85 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue Lyon 5</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8"><div className="h-[2px] w-full bg-white/60"></div></div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Un spécialiste de la rétine médicale à quelques minutes du Vieux Lyon et de Point du Jour.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise rétinienne de proximité pour Lyon 5</h2>
                <p>
                    Le 5ème arrondissement (<strong>48 300 habitants</strong>) s&apos;étend du Vieux Lyon historique aux hauteurs de Saint-Just et Point du Jour. Sa population vieillissante, notamment dans les quartiers résidentiels en altitude, présente un risque accru de <Link prefetch={true} href="/dmla-lyon" className="text-[#c2aa84] font-bold hover:underline">dégénérescence maculaire liée à l&apos;âge (DMLA)</Link>.
                </p>
                <p>
                    Le <strong>Centre Ophtalmologique Rabelais</strong>, situé de l&apos;autre côté de la Saône sur la Presqu&apos;Île, est le centre spécialisé le plus facilement accessible pour les résidents du 69005. Avec le funiculaire ou le métro D, le trajet se mesure en minutes.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Symptômes nécessitant une consultation</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Vision déformée :</strong> Les lignes droites (cadres de porte, grilles) apparaissent ondulées — symptôme de DMLA maculaire.</li>
                        <li><strong>Perte de vision centrale :</strong> Difficulté à lire, à reconnaître les visages. L&apos;<Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">OCT maculaire</Link> permet un diagnostic en quelques secondes.</li>
                        <li><strong>Fond d&apos;œil diabétique :</strong> Examen annuel indispensable pour les patients diabétiques résidant à Lyon 5.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Tout le parcours de soin en un lieu</h2>
                <p>Notre <Link prefetch={true} href="/plateau-technique" className="text-[#c2aa84] hover:underline">plateau technique</Link> permet de réaliser le diagnostic (<Link prefetch={true} href="/oct-macula-lyon" className="text-[#c2aa84] hover:underline">OCT-Angiographie</Link>), la consultation avec le <Link prefetch={true} href="/retinologue-lyon-6" className="text-[#c2aa84] hover:underline">rétinologue</Link>, et le traitement (<Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#c2aa84] hover:underline">injection IVT</Link>, laser) dans la même visite.</p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès depuis Lyon 5</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚇 Métro D :</strong> Depuis <strong>Vieux Lyon</strong>, une seule station jusqu&apos;à <strong>Bellecour</strong> (2 min). Depuis <strong>Gorge de Loup</strong>, 6 min.</li>
                    <li><strong className="text-black">🚡 Funiculaire :</strong> Depuis Saint-Just ou Fourvière, descente jusqu&apos;à Vieux Lyon puis métro D.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Descente par la Montée du Gourguillon ou la rue Pierre Dupont vers la Presqu&apos;Île. Parking Bellecour à proximité.</li>
                </ul>
            </div>

            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Lyon 5</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Mes parents âgés à Saint-Just peuvent-ils venir facilement ?</p>
                            <p className="text-[13px] text-[#888888]">Oui. Le funiculaire F2 depuis Saint-Just descend à Vieux Lyon en 5 minutes, puis le métro D mène à Bellecour en 2 minutes. L&apos;accès est entièrement accessible PMR.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Liens utiles</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> DMLA diagnostic</Link></li>
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> OCT Maculaire</Link></li>
                        <li><Link prefetch={true} href="/retine-medicale-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétine médicale</Link></li>
                        <li><Link prefetch={true} href="/equipe-medicale" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Équipe médicale</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Bilan Macula depuis <strong className="font-bold text-[#c2aa84]">Lyon 5</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">2 minutes en métro D depuis Vieux Lyon : Le Centre Ophtalmologique Rabelais est votre spécialiste de proximité.</p>
          <Link prefetch={true} href="/#home-page-contact" className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors">
            Prendre Rendez-Vous
          </Link>
        </div>
      </section>
    </main>
  );
}
