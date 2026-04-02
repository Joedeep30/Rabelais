import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Lyon 3 | Centre Ophtalmologique Rabelais proche Part-Dieu',
  description: 'À la recherche d\'un ophtalmologue pour la macula ou le diabète proche de Lyon 3 ? Le Centre Ophtalmologique Rabelais intervient sur les maladies de la rétine (Secteur Guillotière / Montchat).',
  keywords: 'ophtalmologue lyon 3, rdv ophtalmo rapide lyon 3, urgence ophtalmologique lyon 3, centre vision lyon 3, ophtalmo guillotiere',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-3'
  }
};

export default function OphtalmologueLyon3Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Centre Pôle Rétine Proche Lyon 3",
    "image": "/wp-content/uploads/2015/09/post2.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-lyon-3",
    "telephone": "+33478950908",
    "description": "Clinique des yeux spécialisée dans les pathologies du fond d'œil depuis 20 ans pour les patients du 3ème arrondissement (Guillotière, Préfecture, Montchat).",
    "areaServed": "Lyon 3ème (69003)",
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
          style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue Lyon 3</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Des spécialistes de la vue traitant la Macula (DMLA) à proximité immédiate de votre domicile du 69003.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise Oculaire de proximité pour Lyon 3ème</h2>
                <p>
                    Vous habitez les quartiers de la <strong>Guillotière, de la Préfecture, de la Part-Dieu ou de Montchat (69003)</strong> et vous recherchez un établissement d'imagerie et de soin pour votre vue ? Le <strong>Centre Ophtalmologique Rabelais</strong>, situé à une enjambée du Pont de la Guillotière sur la presqu'île, est reconnu comme l'un des pôles majeurs d'expertise rétinienne à Lyon.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Quand consulter notre médecin ophtalmologiste ?</h3>
                    <p className="mb-4">Contrairement à la chirurgie de la cataracte courante, le pôle Rabelais a fait le choix de la sur-spécialisation pour garantir un maximum de qualité lors du diagnostic :</p>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Signes de DMLA :</strong> Apparition de lignes incurvées, brouillard central, la <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">Détection ultra-précoce de la DMLA</Link> est notre cheval de bataille.</li>
                        <li><strong>Dépistage Diabète :</strong> <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">Un fond d'œil par OCT ultra haute résolution</Link> est recommandé pour évaluer et traiter les angiopathies ou ischémies maculaires d'origine diabétique.</li>
                        <li><strong>Injections IVT :</strong> L'administration de l'Anti-VEGF à intervalles précis pour les formes vasculaires.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un circuit patient fluide depuis le 3e arrondissement</h2>
                <p>
                    Obtenir une consultation chez un spécialiste dans des délais raisonnables est difficile quand il s'agit de votre vision centrale. Dès que votre dossier est accepté aux urgences Rétiniennes suite au courrier de votre médecin de Lyon 3, notre structure assure un dépistage profond (Angio-OCT) la plupart du temps sans délai hospitalier.
                </p>
                <p>
                    Au niveau des traitements spécifiques à notre Centre Ophtalmologique Rabelais de la presqu'île : <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#c2aa84] hover:underline">l'intégration du laser froid Valeda pour stopper les stades atrophiques</Link>. Un dispositif quasiment exclusif hors HCL en région lyonnaise.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Trajet pratique et direct de Lyon 3</h3>
                <p>À peine 1,5 km sépare l'hôtel de ville du 69003 de notre plateau, rendant le parcours indolore pour les patients à mobilité compliquée.</p>
                <ul className="list-none space-y-3 mt-4">
                    <li><strong className="text-black">🚇 Direct par le Métro D :</strong> De l'arrêt **Garibaldi**, **Guillotière Gabriel Péri**, roulez 1 ou 2 stations jusqu'à l'arrêt **Bellecour**. (Trajet minimal estimé 3 à 5 mn)</li>
                    <li><strong className="text-black">🚗 En voiture (10 minutes) :</strong> Prendre le Cours Gambetta, puis passer sur la presqu'île via le Pont de la Guillotière, le cabinet est la première rue en face.</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Locale</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Prenez-vous les enfants en consultation si on réside à Montchat ?</p>
                            <p className="text-[13px] text-[#888888]">Le centre ophtalmologique ne pratique pas l'ophtalmo-pédiatrie (ni la prescription de lorgnettes/strabisme), il est focalisé purement sur les pathologies adultes du pôle postérieur.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Parcours Médical Lié</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/ophtalmologue-part-dieu" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Secteur Part-Dieu</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-3" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétinologue à proximité (Lyon 3)</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Diagnostic & Pathologies DMLA</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Focus Injections Rétine</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            N'attendez pas en cas de <strong className="font-bold text-[#c2aa84]">déformation visuelle</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Les habitants de Lyon 3 bénéficient d'un accès ultra-réduit à notre centre via Bellecour. Cliquez ci-dessous pour organiser une batterie d'examens Rétine avec nos experts.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Formulaire de Contact
          </Link>
        </div>

      </section>

    </main>
  );
}
