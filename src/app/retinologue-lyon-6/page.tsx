import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rétinologue Lyon 6 | Spécialiste DMLA & Rétine | Centre Ophtalmologique Rabelais',
  description: 'Trouvez un rétinologue expert pour la prise en charge de la DMLA à Lyon 6. Le Centre Ophtalmologique Rabelais réalise vos injections, OCT et lasers maculaires en urgence.',
  keywords: 'retinologue lyon 6, specialiste retine lyon 6, dmla lyon 6, expert macula lyon 6, injections intravitreennes',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/retinologue-lyon-6'
  }
};

export default function RetinologueLyon6Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Rétinologue d'Expertise proche Lyon 6 - Centre Ophtalmologique Rabelais",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post4.png",
    "url": "https://centrerabelaislyon.fr/retinologue-lyon-6",
    "telephone": "+33478950908",
    "description": "Spécialiste en chirurgie et médecine de la rétine. Diagnostic et traitement des dégénérescences maculaires, trous et membranes maculaires pour l'arrondissement du 6ème.",
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
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Expertise en Rétine : <strong className="font-bold">Rétinologue Lyon 6</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[400px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Confiez la santé de votre macula à des spécialistes hyper qualifiés intervenant pour les patients de l'Est Lyonnais.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un Rétinologue pour surveiller votre vue (Lyon 69006)</h2>
                <p>
                    Contrairement à un ophtalmologiste d'optique général, le <strong>Rétinologue</strong> est un médecin sur-spécialisé dans les maladies du fond de l'œil. Lorsque notre vue devient gondolée ou qu'une tache noire apparaît au centre (scotome), c'est l'expertise d'un spécialiste en rétine médicale (<Link prefetch={true} href="/retine-medicale-lyon" className="text-[#c2aa84] hover:underline">voir notre page dédiée</Link>) qui est nécessaire pour stopper la progression vers une malvoyance grave.
                </p>
                <p>
                    Pour les patients originaires du <strong>6ème arrondissement de Lyon (69006)</strong>, incluant le Parc de la Tête d'Or ou le Bd des Belges, notre établissement propose l’offre de soins intra-vitréens la plus complète de Lyon intramuros.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Focus sur l'Offre de Soins Rétinienne (Lyon 6)</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Dégénérescence Maculaire :</strong> Diagnostic de la <Link prefetch={true} href="/dmla-lyon" className="text-[#c2aa84] font-bold hover:underline">DMLA (sèche ou humide)</Link>.</li>
                        <li><strong>Tomographie :</strong> Passage aux examens spécifiques par <Link prefetch={true} href="/oct-macula-lyon" className="text-[#c2aa84] hover:underline">OCT Maculaire Haute Résolution</Link>.</li>
                        <li><strong>Injections :</strong> Salles blanches locales dédiées pour des <Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#c2aa84] font-bold hover:underline">Injections Intravitréennes (IVT)</Link> quasi-immédiates dans le cadre de maladies néovasculaires.</li>
                        <li><strong>Diabéto :</strong> Traitement et surveillance par laser de la Rétinopathie Diabétique ou Occlusions veineuses.</li>
                    </ul>
                </div>

                <h2 className="text-[#c2aa84] text-[26px] font-bold uppercase tracking-wider mb-6">Pourquoi choisir de vous orienter vers Rabelais ?</h2>
                <p>
                    L'équipe médicale s'engage sur la modernité des traitements au sein d'études cliniques. Par exemple, nous bénéficions de la technologie exclusive de Photobiomodulation (Luminothérapie oculaire Valeda) pour traiter la DMLA sèche (<Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] font-bold hover:underline">en savoir plus sur la PBM</Link>).
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Rejoindre votre expertise médicale depuis le 6ème</h3>
                <p>
                    Une urgence due à un flash dans votre champ de vision, nécessitant la réaction imminente d'un rétinologue ? Depuis Lyon 6 (Secteur Foch / Tête d'Or), empruntez les quais direction Presqu'Île.
                </p>
                <p>
                    Vous bénéficiez d'une synergie de transports avec des correspondances métro extrêmement réduites sur le pôle intermodal pour venir effectuer votre fond d'œil Au Centre Ophtalmologique Rabelais sans fatigue ou délai d'attente proéminent classique des structures d'hôpitaux de la métropole.
                </p>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">Bon à savoir</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">M'examine-t-il les deux yeux ?</p>
                            <p className="text-[13px] text-[#888888]">Oui, la DMLA étant prévalente sur le second oeil, notre équipe s'assure d'une consultation rétine intégrale préventive à chaque visite.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Délai d'Injections depuis Lyon 6 ?</p>
                            <p className="text-[13px] text-[#888888]">Pour une DMLA vasculaire urgente (néovaisseaux confirmés à OCT), nous tentons via notre plateforme de réduire l'attente logistique drastiquement pour la première IVT.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Naviguer vers d'autres expertises</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/retine-medicale-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Rétine Médicale (Générale)</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Diagnostic DMLA à Lyon</Link></li>
                        <li><Link prefetch={true} href="/oct-macula-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> OCT et Angiographie</Link></li>
                        <li><Link prefetch={true} href="/ophtalmologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Section Ophtalmologie</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            N'attendez pas en cas de <strong className="font-bold text-[#c2aa84]">baisse brutale de votre acuité</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Avertissez notre équipe par notre module de contact si vous possédez une lettre de votre ophtalmologue pour une ordonnance traitant de la rétine urgente.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Prendre Mon RDV Rétinologue
          </Link>
        </div>

      </section>

    </main>
  );
}
