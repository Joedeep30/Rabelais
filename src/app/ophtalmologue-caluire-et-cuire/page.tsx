import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Caluire-et-Cuire | Expert Rétine Centre Ophtalmologique Rabelais',
  description: 'Un centre ophtalmologique expert (DMLA, Rétine) prenant en charge les patients de Caluire-et-Cuire. Injections IVT et OCT diagnostic en circuit ultra-court.',
  keywords: 'ophtalmologue caluire, ophtalmo caluire et cuire centre, clinique vision proche caluire, dmla caluire, pbm caluire',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-caluire-et-cuire'
  }
};

export default function OphtalmologueCaluirePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologue & Rétine - Bassin Caluire-et-Cuire",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-caluire-et-cuire",
    "telephone": "+33478950908",
    "description": "Expertise en Rétinopathie (Diabète, DMLA) assurée par les praticiens du Centre Ophtalmologique Rabelais pour les patients provenant de Caluire-et-Cuire (69300).",
    "areaServed": "Caluire-et-Cuire (69300)",
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
             Votre <strong className="font-bold">Ophtalmologue depuis Caluire</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise de la rétine médicale et traitements d'avant-garde accessibles rapidement pour nos patients de Caluire-et-Cuire (69300).
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise Maculaire Complète pour Caluire-et-Cuire</h2>
                <p>
                    Vivre à <strong>Caluire-et-Cuire (69300)</strong> permet de profiter de la quiétude des hauteurs lyonnaises, sans toutefois compromettre son accès aux infrastructures de santé métropolitaines majeures. Lorsque la vision centrale baisse, trouver un "simple" ophtalmologue pour de nouvelles lunettes n'est plus la priorité : le diagnostic fin de la DMLA ou de répercutions du diabète doit être assuré par le plateau technique de <Link prefetch={true} href="/retine-medicale-lyon" className="text-[#c2aa84] font-bold hover:underline">Rétine Médicale du Centre Ophtalmologique Rabelais</Link>.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Focus sur l'Offre de Soins pour nos patients :</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Dépistage des Tâches :</strong> Le flou au centre, signe précurseur de DMLA, analysé immédiatement par la <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">Tomographie Maculaire (OCT)</Link> avant rencontre médicale.</li>
                        <li><strong>IVT pour Caluire :</strong> Traitement d'urgence : réalisation d'<Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] hover:underline">Injections d'Anti-VEGF</Link> évitant la cécité de la DMLA vasculaire exsudative.</li>
                        <li><strong>Photobiomodulation :</strong> Solution Valeda® - nous sommes fiers d'accueillir chaque jour des résidents de Caluire pour ce protocole de <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] hover:underline">Luminothérapie freinant l'atrophie rétinienne (DMLA Sèche)</Link>.</li>
                    </ul>
                </div>

                <h2 className="text-[#c2aa84] text-[26px] font-bold uppercase tracking-wider mb-6">Pourquoi se rendre en Presqu'île Lyonnaise ?</h2>
                <p>
                    La centralisation des outils diagnostiques lourds permet un confort total. Au lieu de réaliser un OCT en clinique de la Croix-Rousse puis ramener les fichiers à un second médecin, vous fusionnez consultation clinique, prise de mesure technologique certifiée, et traitement au <strong>Centre Ophtalmologique Rabelais</strong>, le tout sans délai d'attente proéminent des services d'urgence grâce à une admission bien gérée.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès depuis le cœur de Caluire (69300)</h3>
                <p>
                    La situation du centre permet de relier le pôle médical par des axes très fluides : 
                </p>
                <ul className="list-none space-y-3 mt-4">
                    <li><strong className="text-black">🚗 En Voiture (20 min max) :</strong> Descendre sur la presqu'ile par le tunnel de la Croix-Rousse, ou les quais (direction Hôtel de ville puis Bellecour). Stationnement souterrain massif au niveau de Bellecour ou République Antonin-Poncet.</li>
                    <li><strong className="text-black">🚇 Transports (Bus TCL puis Métro) :</strong> Ligne C1/C2 depuis Caluire Centre pour rejoindre Hôtel de Ville, puis correspondance simple avec le **Métro A jusqu'à la Place Bellecour** ! Arrivée directe à notre parvis.</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">Questions Fréquentes</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Je viens du plateau de Cuire, doit-on faire un arrêt de travail pour les séances Lasers ?</p>
                            <p className="text-[13px] text-[#888888]">Non, le traitement Valeda (Photobiomodulation) dure - de 5 min par œil et n'implique aucune sédation, vous pouvez repartir de manière purement autonome sans aucun collyre modifiant la vision (sauf OCT préliminaire de dépistage !).</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Liens Utiles Associés</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/ophtalmologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Ophtalmologue Lyon 6 (Secteur Foch limitrophe)</Link></li>
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Retinologue (Expertise DMLA)</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Luminothérapie Valeda PBM </Link></li>
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#003399]">▹</span> Voir tout le catalogue de soins</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            L'excellence visuelle au service des patients de <strong className="font-bold text-[#003399]">Caluire</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Démarrez la priorisation de vos soins occulaires (Réservée exclusivement Pathologie de la Macula Rétinienne) en soumettant un court formulaire pour être recontacté.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Obtenir Un RDV Spécialisé
          </Link>
        </div>

      </section>

    </main>
  );
}
