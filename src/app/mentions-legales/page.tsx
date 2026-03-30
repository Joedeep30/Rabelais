import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales & Confidentialité | Centre Ophtalmologique Rabelais Lyon',
  description: 'Mentions légales, politique de confidentialité, utilisation des données personnelles et hébergement du site web du Centre Ophtalmologique Rabelais.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/mentions-legales'
  }
};

export default function MentionsLegalesPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner3.jpg"
            alt="Mentions Légales"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Title positioned at the bottom left of the hero within the container constraints */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-6 max-w-7xl h-full flex items-end pb-24">
            <h1 className="text-white text-[32px] md:text-[45px] font-bold leading-[1.1] tracking-wide">
              Mentions Légales & Confidentialité
            </h1>
          </div>
        </div>
      </section>

      {/* Content & Sidebar Section */}
      <section className="relative z-20 bg-[#f8f8f8] font-[Gotham] w-full">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Main Content (Left, White Box) */}
          <div className="bg-white p-10 md:p-16 w-full lg:w-[65%] shadow-sm min-h-[500px]">
            <div className="prose prose-slate max-w-none prose-h3:text-[#c2aa84] prose-h3:text-[22px] prose-h3:font-light prose-h3:tracking-[0.5px] prose-h3:mb-6 prose-p:text-[#888888] prose-p:font-light prose-p:leading-[1.8] prose-p:text-[15px] prose-li:text-[#888888] prose-li:font-light prose-a:text-[#003399]">
              
              <h3>Editeur/Propriété</h3>
              <p>
                Le propriétaire et éditeur du présent site internet est la Société d’exercice libéral CENTRE OPHTALMOLOGIQUE RABELAIS, société d’exercice libéral par actions simplifiées au capital de 764 000€, inscrite au Registre du Commerce et des Sociétés de Lyon sous le numéro 424 444 552 , dont le siège social est situé au 2, Rue Antoine de Saint-Exupéry, 69002 Lyon. Numéro d’inscription au tableau du CDOM : 69/ 12919.
                <br /><br />
                La directrice de la publication est le Docteur Maddalena Quaranta.
              </p>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3>Hébergeur</h3>
              <p>
                L’hébergeur du site internet est la société OVH dont le siège social est situé au 140, Quai du Sartel, 59100 Roubaix, France.
              </p>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3>Droit de reproduction et d'auteur</h3>
              <p>
                Ce site relève de la législation française et internationale sur le droit d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques. En application de la loi du 11 mars 1957 (art. 41) et du code de la propriété intellectuelle du 1er juillet 1992 : l’ensemble des textes, illustrations, photographies, plans, dessins, animations, vidéos, sons, contenus sur ce site internet ne peuvent pas être utilisés ou reproduits sans obtention de l’autorisation de l’éditeur.
              </p>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3>Liens Hypertextes & Mise en Garde</h3>
              <p>
                Les liens présents sur ce site peuvent orienter le visiteur sur des sites extérieurs dont le contenu ne peut en aucune manière engager la responsabilité du centre, qui n’est pas responsable de la gestion des liens sur les sites qu’il recense.
              </p>
              <p>
                Les informations fournies sont non contractuelles, peuvent contenir des inexactitudes techniques ou typographiques et sont sujettes à modification sans préavis. Le centre ne saurait être tenu pour responsable des erreurs, d’une absence de disponibilités des informations, exactitudes, mises à jour, de la présence d’un virus sur son portail Internet et des dommages quelconques.
              </p>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3>CNIL</h3>
              <p>Ce cabinet dispose d’un système informatique destiné :</p>
              <ul className="list-disc pl-5 my-4 text-[#888888] text-[15px] font-light leading-[1.8]">
                <li>à gérer les dossiers des patients</li>
                <li>à assurer la facturation des actes</li>
                <li>à transmettre les feuilles de soins aux caisses de sécurité sociale</li>
              </ul>
              <p>
                Les informations recueillies lors de votre consultation feront l’objet, sauf opposition justifiée de votre part, d’un enregistrement informatique réservé à l’usage de votre professionnel de santé. Tout médecin désigné par vous peut également prendre connaissance de l’ensemble de votre dossier médical. (*Loi n°78-17 du 6 janvier 1978 modifiée).
              </p>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3>RGPD & Confidentialité</h3>
              <p>
                Le site centrerabelaislyon.fr utilise des formulaires et des cookies. Les informations recueillies comme les données personnelles sont collectées afin d’échanger avec les utilisateurs du site. Elles ne sont pas revendues à des tiers. Elles peuvent être transmises à des fins techniques et médicales et utilisées pour des campagnes de mailings de suivi Qualité. La transmission des données est sécurisée par protocole HTTPS.
              </p>
              <p>
                L’intégralité des données est stockée sur des serveurs sécurisés (non externalisés) et sauvegardée durant 3 ans. La déléguée à la protection des données est le Dr Maddalena Quaranta, Centre Ophtalmologique Rabelais.
              </p>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3>Nous Contacter</h3>
              <p>
                Pour toute question, contactez le cabinet à l’adresse <a href="mailto:contact@centrerabelaislyon.fr" className="font-bold hover:underline">contact@centrerabelaislyon.fr</a>.
                <br /><br />
                Les messages ne sont pas lus en temps réel et ne constituent pas un moyen d’obtenir un renseignement de nature médicale. L’adresse n’est pas sécurisée.
              </p>

            </div>
          </div>
          {/* Sidebar (Right, Gray Background Wrapper) */}
          <div className="w-full lg:w-[35%] py-16 lg:pl-16 pr-0">
            
            <h3 className="text-[#c2aa84] text-[18px] font-light tracking-[2px] uppercase mb-8 ml-2">
              ADRESSE
            </h3>
            
            <div className="bg-white p-10 shadow-sm">
              <h4 className="text-[#c2aa84] font-bold text-[14px] mb-2 uppercase tracking-[0.5px]">
                Centre Ophtalmologique Rabelais
              </h4>
              <p className="text-[#888888] text-[14px] font-light leading-[1.8] mb-8">
                2, Rue Antoine de Saint-Exupéry<br />
                69002 Lyon
              </p>

              <h4 className="text-[#c2aa84] font-bold text-[14px] mb-2 uppercase tracking-[0.5px]">
                Heures d'ouverture
              </h4>
              <p className="text-[#888888] text-[14px] font-light leading-[1.8]">
                Le secrétariat est ouvert du lundi au vendredi de 9h00 à 17h.
              </p>
            </div>
            
          </div>

        </div>
        </div>
      </section>

    </main>
  );
}
