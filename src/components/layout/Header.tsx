"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSize, setActiveSize] = useState<'sm' | 'md' | 'lg'>('sm');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleFontSizeChange = (size: 'sm' | 'md' | 'lg') => {
    setActiveSize(size);
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      html.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
      html.classList.add(`text-size-${size}`);
    }
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 p-6 md:p-[20px] pb-0 flex justify-between items-start pointer-events-none">
        
        {/* Logo (Left Side) - Hidden on Homepage to prevent duplicate with Central Hero Logo */}
        <div className="pointer-events-auto ml-2 md:ml-6 mt-2">
          {!isHomePage && (
            <Link prefetch={true} href="/">
              <img 
                src="/wp-content/uploads/2015/09/ai1.png" 
                alt="Logo Centre Rabelais" 
                className="w-[100px] md:w-[130px] hover:scale-105 transition-transform drop-shadow-md"
              />
            </Link>
          )}
        </div>

        {/* Container for top right nav elements */}
        <div className="flex gap-[25px] items-start pointer-events-auto mr-4 md:mr-10 mt-6 z-50">
          
          {/* 'Où sommes nous ?' Button */}
          <Link prefetch={true} 
            href="#home-page-contact"
            className="bg-[#c2aa84] hover:bg-[#a68d71] text-white text-[12px] font-[Gotham] font-bold tracking-[2px] uppercase px-[35px] py-[14px] rounded-[50px] transition-colors mt-[2px]"
          >
            Où sommes nous ?
          </Link>

          {/* Menu & Lang Container */}
          <div className="flex gap-[20px]">
            
            {/* Columns Container: A A A and Menu */}
            <div className="flex flex-col items-end gap-[15px]">
              {/* MENU text */}
              <span 
                className="text-white text-[16px] font-[Gotham] font-bold tracking-wide cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Menu
              </span>
              
              {/* Accessibility A A A */}
              <div className="flex items-end gap-[4px] text-blue-600 font-[Gotham] font-bold">
                <button 
                  onClick={() => handleFontSizeChange('sm')} 
                  className={`text-[10px] uppercase transition-colors ${activeSize === 'sm' ? 'text-white' : 'text-[#003399] hover:text-white'}`}
                  title="Taille de texte normale"
                >A</button>
                <button 
                  onClick={() => handleFontSizeChange('md')} 
                  className={`text-[12px] uppercase mb-[1px] transition-colors ${activeSize === 'md' ? 'text-white' : 'text-[#003399] hover:text-white'}`}
                  title="Taille de texte grande"
                >A</button>
                <button 
                  onClick={() => handleFontSizeChange('lg')} 
                  className={`text-[15px] uppercase mb-[1px] transition-colors ${activeSize === 'lg' ? 'text-white' : 'text-[#003399] hover:text-white'}`}
                  title="Taille de texte très grande"
                >A</button>
              </div>
            </div>

            {/* Columns Container: Burger and Lang */}
            <div className="flex flex-col items-center gap-[10px]">
              {/* Hamburger Blue Circle */}
              <div 
                className="w-[48px] h-[48px] bg-[#003399] rounded-full flex flex-col justify-center items-center gap-[4px] cursor-pointer hover:scale-105 transition-transform shadow-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={`w-5 h-[2px] bg-white rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                <span className={`w-5 h-[2px] bg-white rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-[2px] bg-white rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
              </div>

              {/* Languages */}
              <ul className="flex flex-col gap-[4px] text-white text-[14px] font-[Gotham] font-bold items-center mt-2">
                <li className="cursor-pointer">Fr</li>
                <li className="cursor-pointer text-white/60 hover:text-white transition-colors">En</li>
                <li className="cursor-pointer text-white/60 hover:text-white transition-colors">It</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay Panel (Right Side) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[350px] bg-[#a68d71] z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full pt-[140px] px-8 overflow-y-auto">
          <ul className="flex flex-col text-white font-[Gotham] text-[16px] font-bold tracking-wide">
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Home</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/offre-de-soins" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Offre de Soins</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/equipe-medicale" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Équipe Médicale</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/plateau-technique" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Plateau Technique</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/pathologies-retiniennes" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Pathologies Oculaires</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/etudes-cliniques" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Etudes Cliniques</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/publications" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Publications</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/dois-je-consulter" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Dois-je Consulter ?</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/mentions-legales" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Mentions Légales & Confidentialité</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/liens-utiles" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Liens Utiles</Link></li>
            <li className="border-b border-white/20 py-4"><Link prefetch={true} href="/plan-du-site" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Plan du Site</Link></li>
            <li className="py-4"><Link prefetch={true} href="/directions" onClick={() => setIsMenuOpen(false)} className="hover:opacity-80 block">Comment se rendre au Centre</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Background Dim (Optional, to close on click outside) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/10" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
}
