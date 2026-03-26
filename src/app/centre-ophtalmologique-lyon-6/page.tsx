import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Centre Ophtalmologique Lyon 6 | Centre Ophtalmologique Rabelais',
  description: 'Vous cherchez un centre ophtalmologique à Lyon 6 pour traiter la macula (DMLA, rétinopathie) ? Le Centre Ophtalmologique Rabelais vous accueille près du Parc de la Tête d\'Or.',
  keywords: 'centre ophtalmologique lyon 6, clinique de la vue lyon 6, cabinet ophtalmo lyon 6eme, dmla lyon 6, centre rabelais ophtalmologie',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/centre-ophtalmologique-lyon-6'
  }
};

export default function CentreOphtalmologiqueLyon6Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Centre Ophtalmologique près de Lyon 6 - Rabelais",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
    "url": "https://centrerabelaislyon.fr/centre-ophtalmologique-lyon-6",
    "telephone": "+33478950908",
    "description": "Centre Ophtalmologique spécialisé pour le secteur Lyon 6 (Brotteaux, Parc Tête d'or, Foch). Examens de fond de l'œil, traitements DMLA et macula.",
    "areaServed": "Lyon 6ème (69006)",
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
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Centre Ophtalmologique Lyon 6</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[400px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Des infrastructures de pointe et une équipe hyperspécialisée pour les habitants et travailleurs du 6e arrondissement de Lyon.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise et Proximité avec Lyon 6</h2>
                <p>
                    Les patients en quête d'un <strong>Centre ophtalmologique à Lyon 6 (69006)</strong> recherchent généralement un établissement capable de fournir des diagnostics fiables dans des délais courts, en particulier pour les troubles visuels touchant la <strong>macula</strong> (baisse d'acuité, lignes droites déformées).
                </p>
                <p>
                    À quelques stations de métro de la roseraie du Parc de la Tête d'Or ou des Brotteaux, Le Centre Ophtalmologique Rabelais mobilise une <Link prefetch={true} href="/equipe-medicale" className="text-[#c2aa84] font-bold hover:underline">équipe complète</Link> d'ophtalmologistes, d'orthoptistes et d'infirmières dédiés à votre capital visuel.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Pourquoi choisir notre établissement médical ?</h3>
                    <p className="mb-4">
                        Au-delà d'un simple cabinet d'ophtalmologie médicale de secteur 2, le pôle Rabelais fonctionne comme un véritable mini-CHU décentralisé pour ce qui concerne la rétine :
                    </p>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Parcours de soins intégré en 1H :</strong> Acuité, tension, et imagerie par Angiographie et OCT durant <Link prefetch={true} href="/plateau-technique" className="text-[#c2aa84] hover:underline">la même consultation</Link>.</li>
                        <li><strong>DMLA Humide :</strong> Réalisation en urgence d'<Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#c2aa84] hover:underline">Injections Intravitréennes (IVT)</Link> au sein de salles de soins conformes aux standards chirurgicaux.</li>
                        <li><strong>DMLA Sèche :</strong> <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#c2aa84] hover:underline">Centre de luminothérapie</Link> équipé du Laser Valeda, unique pour l'innovation dans le bassin de population de Lyon Est / Lyon 6.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Depuis votre secteur du 69006</h2>
                <p>
                    Notre plateau se situe pour votre praticité dans l'hyper-centre lyonnais. Les résidents des quartiers Foch, Masséna ou Vitton bénéficient du trajet le plus intuitif de toute la métropole.
                </p>
                <ul className="list-none space-y-3 mt-6">
                    <li><strong className="text-black">🚇 Direct par le Métro A :</strong> Rejoignez la navette depuis Foch en 4 minutes, descendez à "Ampère - Victor Hugo" ou "Bellecour". Moins de 10 min porte à porte du centre ophtalmologique.</li>
                    <li><strong className="text-black">🚌 En surface :</strong> Plusieurs lignes de bus desservent directement la Place Bellecour.</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">Questions fréquentes</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Puis-je consulter pour un contrôle vue / lunettes ?</p>
                            <p className="text-[13px] text-[#888888]">Non, le Centre est purement consacré à l'exploration et aux traitements maculaires complexes et aux patients référés par d'autres praticiens ophtalmologues classiques.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Quels documents apporter depuis Lyon 6 ?</p>
                            <p className="text-[13px] text-[#888888]">Votre carte vitale à jour, votre dernière ordonnance ophtalmo et tout courrier d'adressage médical pour cibler votre maladie rétinienne.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">À Proximité</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/ophtalmologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Ophtalmologue Lyon 6</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Rétinologue Lyon 6</Link></li>
                        <li><Link prefetch={true} href="/ophtalmologue-brotteaux" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Ophtalmologue Brotteaux</Link></li>
                        <li><Link prefetch={true} href="/ophtalmologue-villeurbanne" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Ophtalmologue Villeurbanne</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            L'expertise médicale pour la <strong className="font-bold text-[#c2aa84]">Maladie de la Macula</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Remplissez notre formulaire de rendez-vous avec vos données rgpd protégées pour un bilan OCT spécifique à la DMLA ou Diabète.
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
