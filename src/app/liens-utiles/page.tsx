import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liens Utiles | Centre Ophtalmologique Rabelais Lyon',
  description: 'Liens utiles et ressources d\'information pour les patients du Centre Ophtalmologique Rabelais : DMLA, Glaucome, associations.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/liens-utiles'
  }
};

export default function LiensUtilesPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-content/uploads/2015/10/banner3.jpg"
            alt="Liens Utiles"
            className="w-full h-full object-cover"
            fetchPriority="low"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Title positioned at the bottom left */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-6 max-w-7xl h-full flex items-end pb-24">
            <h1 className="text-white text-[32px] md:text-[45px] font-bold leading-[1.1] tracking-wide uppercase">
              Liens Utiles
            </h1>
          </div>
        </div>
      </section>

      {/* Content & Sidebar Section */}
      <section className="relative z-20 bg-[#f8f8f8] font-[Gotham] w-full">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-0">
          
          {/* Main Content */}
          <div className="bg-white p-10 md:p-16 w-full lg:w-[65%] shadow-sm min-h-[500px]">
            <div className="prose prose-slate max-w-none prose-h3:text-[#c2aa84] prose-h3:text-[22px] prose-h3:font-light prose-h3:tracking-[0.5px] prose-h3:mb-4 prose-p:text-[#888888] prose-p:font-light prose-p:leading-[1.8] prose-li:text-[#888888] prose-li:font-light prose-a:text-[#003399]">
              
              <p>
                Les laboratoires pharmaceutiques investis dans la prise en charge de la DMLA, sont à l’origine de sites internet d’information à destination des patients, source de nombreuses informations vulgarisées.
              </p>

              <h3 className="mt-8">Sites d’information à usage des patients pour la DMLA :</h3>
              <ul>
                <li>Laboratoire Novartis : <a href="http://www.dmlainfo.fr/" target="_blank" rel="noopener noreferrer">WWW.DMLAINFO.FR</a></li>
                <li>Laboratoire Bayer : <a href="http://ladmlaetmoi.fr/index.php" target="_blank" rel="noopener noreferrer">WWW.LADMLAETMOI.FR</a></li>
              </ul>

              <p className="mt-8">
                Créée en 2003, l’association DMLA compte plus de 1 500 patients adhérents et 110 ophtalmologistes. Ses objectifs sont d’informer le grand public, de soutenir les patients et d’aider la recherche.
              </p>
              <ul>
                <li><a href="http://www.association-dmla.com/" target="_blank" rel="noopener noreferrer">WWW.ASSOCIATION-DMLA.COM</a></li>
              </ul>

              <div className="h-[1px] w-full bg-gray-100 my-10"></div>

              <h3 className="mt-12">Site d’information à usage des patients pour le Glaucome :</h3>
              <p>
                Le comité de lutte contre le glaucome possède un site riche d’informations vulgarisées sur la pathologie du glaucome à destination des patients.
              </p>
              <ul>
                <li><a href="http://www.leglaucome.fr/sinformer/quest-ce-que-le-glaucome/" target="_blank" rel="noopener noreferrer">WWW.LEGLAUCOME.FR</a></li>
              </ul>
              
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
