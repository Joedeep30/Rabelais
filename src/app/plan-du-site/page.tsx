import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plan du site | Centre Ophtalmologique Rabelais Lyon',
  description: 'Plan du site du Centre Ophtalmologique Rabelais à Lyon. Accédez rapidement à toutes nos rubriques et spécialités.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/plan-du-site'
  }
};

export default function PlanDuSitePage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner3.jpg"
            alt="Plan du Site"
            className="w-full h-full object-cover"
            fetchPriority="low"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Title positioned at the bottom left */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-6 max-w-7xl h-full flex items-end pb-24">
            <h1 className="text-white text-[32px] md:text-[45px] font-bold leading-[1.1] tracking-wide uppercase">
              Plan du Site
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
            <div className="prose prose-slate max-w-none prose-a:text-[#003399] prose-a:no-underline hover:prose-a:underline prose-li:mb-2 text-[#888888] font-light">
              <h3 className="text-[#c2aa84] text-[22px] font-light tracking-[0.5px] mb-6">Accès Rapide</h3>
              <ul className="list-disc pl-5">
                <li><Link prefetch={true} href="/">Accueil</Link></li>
                <li><Link prefetch={true} href="/offre-de-soins">Offre de Soins</Link></li>
                <li><Link prefetch={true} href="/equipe-medicale">Équipe Médicale</Link></li>
                <li><Link prefetch={true} href="/plateau-technique">Plateau Technique</Link></li>
                <li><Link prefetch={true} href="/etudes-cliniques">Etudes Cliniques</Link></li>
                <li><Link prefetch={true} href="/publications">Publications</Link></li>
                <li><Link prefetch={true} href="/dois-je-consulter">Dois-je consulter ?</Link></li>
                <li><Link prefetch={true} href="/directions">Comment se rendre au Centre ?</Link></li>
                <li><Link prefetch={true} href="/rdv">Demande de rendez-vous</Link></li>
                <li><Link prefetch={true} href="/mentions-legales">Mentions légales & confidentialité</Link></li>
                <li><Link prefetch={true} href="/liens-utiles">Liens Utiles</Link></li>
                <li><Link prefetch={true} href="/plan-du-site">Plan du site</Link></li>
              </ul>

              <h3 className="text-[#c2aa84] text-[22px] font-light tracking-[0.5px] mb-6 mt-12">Spécialités & Traitements</h3>
              <ul className="list-disc pl-5">
                <li><Link prefetch={true} href="/dmla-lyon">DMLA Lyon</Link></li>
                <li><Link prefetch={true} href="/retine-medicale-lyon">Rétine Médicale Lyon</Link></li>
                <li><Link prefetch={true} href="/oct-macula-lyon">OCT Maculaire Lyon</Link></li>
                <li><Link prefetch={true} href="/injections-intravitreennes-lyon">Injections Intravitréennes (IVT)</Link></li>
                <li><Link prefetch={true} href="/photobiomodulation-lyon">Photobiomodulation Lyon</Link></li>
                <li><Link prefetch={true} href="/dmla-traitement-villeurbanne">Traitement DMLA Villeurbanne</Link></li>
              </ul>

              <h3 className="text-[#c2aa84] text-[22px] font-light tracking-[0.5px] mb-6 mt-12">Votre Ophtalmologue de proximité</h3>
              <ul className="list-disc pl-5">
                <li><Link prefetch={true} href="/ophtalmologue-lyon-3">Ophtalmologue Lyon 3</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-lyon-5">Ophtalmologue Lyon 5</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-lyon-6">Ophtalmologue Lyon 6</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-lyon-7">Ophtalmologue Lyon 7</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-lyon-8">Ophtalmologue Lyon 8</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-lyon-9">Ophtalmologue Lyon 9</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-retine-lyon-2">Ophtalmologue Rétine Lyon 2</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-brotteaux">Ophtalmologue Brotteaux</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-part-dieu">Ophtalmologue Part-Dieu</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-villeurbanne">Ophtalmologue Villeurbanne</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-caluire-et-cuire">Ophtalmologue Caluire-et-Cuire</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-venissieux">Ophtalmologue Vénissieux</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-bron">Ophtalmologue Bron</Link></li>
                <li><Link prefetch={true} href="/ophtalmologue-oullins">Ophtalmologue Oullins</Link></li>
                <li><Link prefetch={true} href="/retinologue-lyon-6">Rétinologue Lyon 6</Link></li>
                <li><Link prefetch={true} href="/centre-ophtalmologique-lyon-6">Centre Ophtalmologique Lyon 6</Link></li>
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
