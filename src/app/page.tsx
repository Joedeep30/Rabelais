import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col flex-grow font-sans text-[#888888]">
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg"
            alt="Le cabinet du Centre Ophtalmologique Rabelais à Lyon"
            title="Centre Ophtalmologique Rabelais Lyon"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Left-Aligned Content Block */}
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-center text-left pt-[80px] md:pt-[100px] px-8 md:px-[8%] max-w-[1400px]">
          
          <Link prefetch={true} href="/">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png" 
              alt="Logo du Centre Ophtalmologique Rabelais Lyon" 
              title="Centre Ophtalmologique Rabelais"
              width="190"
              height="60"
              className="w-[140px] md:w-[190px] h-auto mb-[40px] ml-[25px] transition-transform hover:scale-105 drop-shadow-lg" 
            />
          </Link>
          
          <h1 className="text-white text-[38px] md:text-[54px] font-[Gotham] font-light leading-[1.1] tracking-wide mb-[25px]">
            Bienvenue au <span className="font-normal font-[Gotham]">Centre Ophtalmologique Rabelais</span><br />de Lyon
          </h1>
          
          {/* Left-aligned line divider */}
          <div className="flex items-center w-full max-w-[700px] mb-[30px]">
            <div className="w-[16px] h-[16px] bg-[#d5d5d5] rounded-full shrink-0 relative z-10 shadow-[0_0_0_3px_rgba(255,255,255,0.1)]"></div>
            <div className="h-[1px] bg-white/40 w-full ml-[-2px]"></div>
          </div>
          
          <p className="text-white/85 text-[17px] md:text-[22px] font-[Gotham] font-light max-w-[650px] mb-[45px] leading-[1.5] tracking-[0.5px]">
            Le Centre Ophtalmologique Rabelais est un cabinet privé<br className="hidden md:block" />destiné au traitement médical des maladies de la rétine
          </p>

          <Link prefetch={true} 
            href="/offre-de-soins"
            className="border border-[#bda98d] hover:bg-[#bda98d]/20 text-white text-[11px] font-[Gotham] font-bold tracking-[3px] uppercase px-[35px] py-[15px] rounded-[50px] transition-colors"
          >
            Offre de soins
          </Link>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-20">
          <Link prefetch={true} href="#home-page-content" className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#003399] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
          </Link>
        </div>

      </section>

    </main>
  );
}
