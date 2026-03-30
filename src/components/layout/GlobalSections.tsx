"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GlobalSections() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      {/* Content Rendered ONLY on the Homepage */}
      {isHomePage && (
        <>
          {/* Split Content Sections */}
          <section id="home-page-content" className="w-full flex flex-col pt-0 pb-0">

        {/* --- Block 1: Offre de Soins --- */}
        <div className="flex flex-col md:flex-row w-full bg-white">
          {/* Text Container (Left) */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white z-10 shadow-[20px_0_20px_-20px_rgba(0,0,0,0.1)]">
            <div className="max-w-[450px] text-center flex flex-col items-center">
              <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-[20px] pb-[15px] relative">
                Offre de Soins
                {/* Small horizontal gold line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
              </h2>
              <p className="text-[#646464] text-[14px] md:text-[15px] font-[Gotham] font-light leading-[1.8] mt-[25px] mb-[40px]">
                Le Centre Ophtalmologique Rabelais est une structure de soins spécialisée dans l'imagerie ophtalmologique et dans la prise en charge des maladies rétiniennes
              </p>
              <Link prefetch={true} 
                href="/offre-de-soins" 
                className="bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-[Gotham] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
              >
                Plus d'infos
              </Link>
            </div>
          </div>
          {/* Image Container (Right) */}
          <div 
            className="w-full md:w-1/2 min-h-[450px] md:min-h-[550px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png')" }}
          ></div>
        </div>

        {/* --- Block 2: Plateau Technique --- */}
        <div className="flex flex-col md:flex-row-reverse w-full bg-[#f8f8f8]">
          {/* Text Container (Right) */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-[#f8f8f8] z-10 shadow-[-20px_0_20px_-20px_rgba(0,0,0,0.05)]">
            <div className="max-w-[450px] text-center flex flex-col items-center">
              <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-[20px] pb-[15px] relative">
                Plateau Technique
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
              </h2>
              <p className="text-[#646464] text-[14px] md:text-[15px] font-[Gotham] font-light leading-[1.8] mt-[25px] mb-[40px]">
                Le Centre Rabelais met un point d’honneur à toujours équiper son plateau technique avec le matériel d’imagerie de toute dernière génération &nbsp;
              </p>
              <Link prefetch={true} 
                href="/plateau-technique" 
                className="bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-[Gotham] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
              >
                Plus d'infos
              </Link>
            </div>
          </div>
          {/* Image Container (Left) */}
          <div 
            className="w-full md:w-1/2 min-h-[450px] md:min-h-[550px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png')" }}
          ></div>
        </div>

        {/* --- Block 3: Équipe Médicale --- */}
        <div className="flex flex-col md:flex-row w-full bg-white">
          {/* Text Container (Left) */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-white z-10 shadow-[20px_0_20px_-20px_rgba(0,0,0,0.1)]">
            <div className="max-w-[450px] text-center flex flex-col items-center">
              <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-[20px] pb-[15px] relative">
                Équipe Médicale
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
              </h2>
              <p className="text-[#646464] text-[14px] md:text-[15px] font-[Gotham] font-light leading-[1.8] mt-[25px] mb-[10px]">
                Notre équipe médicale est constituée d'ophtalmologistes et d'orthoptistes spécialisés dans ce domaine ainsi que d'une infirmière diplômée d'État. Tous les médecins du centre sont conventionnés et exercent en secteur 2 (conventionnés à honoraires libres).
              </p>
              <p className="text-[#003399] text-[11px] font-bold tracking-[1px] uppercase mt-[10px] mb-[30px]">
                WE SPEAK ENGLISH / SI PARLA ITALIANO
              </p>
              <Link prefetch={true} 
                href="/equipe-medicale" 
                className="bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-[Gotham] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
              >
                Plus d'infos
              </Link>
            </div>
          </div>
          {/* Image Container (Right) */}
          <div 
            className="w-full md:w-1/2 min-h-[450px] md:min-h-[550px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post4.png')" }}
          ></div>
        </div>

        {/* --- Block 4: Suivez-nous / Publications / Associations --- */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Suivez-nous (Left) */}
          <div className="w-full md:w-1/3 bg-[#f8f8f8] flex flex-col items-center justify-center p-12 md:p-16">
            <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-[20px] pb-[15px] relative text-center">
              Suivez-nous
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
            </h2>
            <div className="flex gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/in/maddalena-quaranta-60458658/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[60px] h-[60px] rounded-full border-2 border-[#c2aa84] flex items-center justify-center text-[#c2aa84] hover:bg-[#c2aa84] hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              href="https://www.youtube.com/@CentreOphtalmoRabelais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[60px] h-[60px] rounded-full border-2 border-[#c2aa84] flex items-center justify-center text-[#c2aa84] hover:bg-[#c2aa84] hover:text-white transition-all"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            </div>
          </div>

          {/* Publications (Center) */}
          <div 
            className="w-full md:w-1/3 min-h-[350px] bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png')" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center">
              <div className="w-[60px] h-[60px] mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c2aa84" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <Link 
                prefetch={true}
                href="/publications"
                className="text-white text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase hover:text-[#c2aa84] transition-colors"
              >
                Publications
              </Link>
            </div>
          </div>

          {/* Associations (Right) */}
          <div className="w-full md:w-1/3 bg-white flex flex-col items-center justify-center p-10 md:p-12">
            <h2 className="text-[#a68d71] text-[18px] md:text-[20px] font-[Gotham] font-light tracking-[2px] uppercase mb-[20px] pb-[15px] relative text-center">
              Associations
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
            </h2>
            <ul className="space-y-4 text-center">
              {[
                "Membre du comité scientifique de l'association DMLA",
                "Membre de l'American Academy of Ophthalmology (AAO)",
                "Membre de l'Association for Research in Vision and Ophthalmology (ARVO)",
                "Membre de la Société Française d'Ophtalmologie",
                "Expert Consultant pour différents Laboratoires pharmacologiques",
                "Membre de l'Association de Dégénérescence Maculaire Liée à l'Âge (DMLA)",
              ].map((item, i) => (
                <li key={i} className="text-[#646464] text-[13px] font-[Gotham] font-light leading-[1.6] pb-3 border-b border-[#e8e8e8] last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

          </section>

          {/* Lyon Panorama Section (matches original - no embedded form) */}
          <section 
            id="home-page-contact" 
            className="w-full h-[400px] md:h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/themes/Placeholder/images/new-img-background.png')" }}
          >
          </section>
        </>
      )}
    </>
  );
}
