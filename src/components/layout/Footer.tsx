import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#EFEFEF] text-[#666666] pt-16 font-[Gotham] font-light text-[11px] md:text-[12px] leading-loose relative z-10 w-full overflow-hidden flex flex-col mt-auto">
      
      {/* Decorative top border (subtle shadow if any, or none based on live site) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5"></div>

      {/* Main Links Area */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl pb-16">
        
        {/* Column 1: MENU */}
        <div>
          <h3 className="text-[#a68d71] text-[13px] font-light mb-6 uppercase tracking-[2px] inline-block border-b border-[#a68d71] pb-2">Menu</h3>
          <ul className="space-y-4">
            <li><Link prefetch={true} href="/offre-de-soins" className="hover:text-[#a68d71] transition-colors">Offre De Soins</Link></li>
            <li><Link prefetch={true} href="/equipe-medicale" className="hover:text-[#a68d71] transition-colors">Équipe Médicale</Link></li>
            <li><Link prefetch={true} href="/plateau-technique" className="hover:text-[#a68d71] transition-colors">Plateau Technique</Link></li>
            <li><Link prefetch={true} href="/etudes-cliniques" className="hover:text-[#a68d71] transition-colors">Etudes Cliniques</Link></li>
            <li><Link prefetch={true} href="/publications" className="hover:text-[#a68d71] transition-colors">Publications</Link></li>
            <li><Link prefetch={true} href="/dois-je-consulter" className="hover:text-[#a68d71] transition-colors">Dois-Je Consulter ?</Link></li>
          </ul>
        </div>

        {/* Column 2: SUPPLÉMENTAIRE */}
        <div>
          <h3 className="text-[#a68d71] text-[13px] font-light mb-6 uppercase tracking-[2px] inline-block border-b border-[#a68d71] pb-2">Supplémentaire</h3>
          <ul className="space-y-4">
            <li><Link prefetch={true} href="/directions" className="hover:text-[#a68d71] transition-colors">Comment Se Rendre Au Centre?</Link></li>
            <li><Link prefetch={true} href="/#home-page-contact" className="hover:text-[#a68d71] transition-colors">Demande De Rendez-Vous</Link></li>
            <li><Link prefetch={true} href="/mentions-legales" className="hover:text-[#a68d71] transition-colors">Mentions Légales & Confidentialité</Link></li>
            <li><Link prefetch={true} href="/requete-rgpd" className="hover:text-[#a68d71] transition-colors">Requête RGPD</Link></li>
            <li><Link prefetch={true} href="/liens-utiles" className="hover:text-[#a68d71] transition-colors">Liens Utiles</Link></li>
            <li><Link prefetch={true} href="/plan-du-site" className="hover:text-[#a68d71] transition-colors">Plan Du Site</Link></li>
          </ul>
        </div>
        
        {/* Column 3: SEO Cluster (The Secret Sauce) */}
        <div>
          <h3 className="text-[#a68d71] text-[13px] font-light mb-6 uppercase tracking-[2px] inline-block border-b border-[#a68d71] pb-2">Spécialités Lyon</h3>
          <ul className="space-y-4">
            <li><Link prefetch={true} href="/ophtalmologue-retine-lyon-2" className="hover:text-[#a68d71] transition-colors">Ophtalmologue Rétine Lyon 2</Link></li>
            <li><Link prefetch={true} href="/photobiomodulation-lyon" className="hover:text-[#a68d71] transition-colors">Photobiomodulation (PBM) Lyon</Link></li>
            <li><Link prefetch={true} href="/photobiomodulation-lyon" className="hover:text-[#a68d71] transition-colors">Système Valeda Lyon</Link></li>
            <li><Link prefetch={true} href="/dmla-traitement-villeurbanne" className="hover:text-[#a68d71] transition-colors">Traitement DMLA Villeurbanne</Link></li>
            <li><Link prefetch={true} href="/offre-de-soins" className="hover:text-[#a68d71] transition-colors">Injections Intra-vitréennes (IVT)</Link></li>
          </ul>
        </div>

        {/* Column 4: SUIVEZ-NOUS */}
        <div>
          <h3 className="text-[#a68d71] text-[13px] font-light mb-6 uppercase tracking-[2px] inline-block border-b border-[#a68d71] pb-2">Suivez-Nous</h3>
          <div className="flex">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[45px] h-[45px] rounded-full border border-[#a68d71] flex items-center justify-center text-[#a68d71] hover:bg-[#a68d71] hover:text-white transition-all text-[18px]">
              in
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Banners */}
      <div className="flex flex-col md:flex-row w-full mt-auto">
        {/* Left Banner */}
        <div className="bg-[#EFEFEF] md:bg-[#F2F2F2] flex-1 py-8 px-6 md:px-12 flex items-center justify-center md:justify-end text-center md:text-right md:border-t md:border-black/5">
          <p className="text-[#a68d71] text-[11px] md:text-[12px] font-medium leading-relaxed max-w-lg">
            SELARL de Médecins inscrite Sous le N ° 69/12919 au tableau de l'ODM du Rhône Ce site respecte la charte du CNOM applicable aux sites professionnels de médecins.
          </p>
        </div>
        {/* Right Banner */}
        <div className="bg-[#a68d71] flex-1 py-8 px-6 md:px-12 flex items-center justify-center md:justify-start">
          <p className="text-white text-[13px] md:text-[15px] font-normal leading-relaxed text-center md:text-left">
            La directrice de la publication est le Dr<br/>Maddalena QUARANTA-EL MAFTOUHI
          </p>
        </div>
      </div>

    </footer>
  );
}
