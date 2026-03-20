import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications Scientifiques | Centre Ophtalmologique Rabelais Lyon',
  description: 'Retrouvez toutes les publications scientifiques (Glaucome, OCT, DMLA) rédigées par l\'équipe médicale du Centre Ophtalmologique Rabelais.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/publications'
  }
};

type Publication = {
  title: string;
  authors: string;
  journal?: string;
  date: string;
  year: number;
  pdfUrl?: string;
  imageUrl?: string;
  type?: 'article' | 'book';
};

const publications: Publication[] = [
  {
    title: "Cystic maculopathy in the internal nuclear layer in glaucoma patients",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefe's Archive for Clinical and Experimental Ophthalmology",
    date: "Juin 2021",
    year: 2021,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2021/06/1-s2.0-S0181551221001789-main.pdf",
    imageUrl: "/images/publications/art-cystic-2021.png",
  },
  {
    title: "The long-term effects of anti-VEGF therapy on the OCT angiographic appearance of neovascularization in AMD",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "International Journal of Retina and Vitreous",
    date: "Août 2020",
    year: 2020,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2020/08/The-long-term-effects-of-anti-vascular-endothelial-growth-factor-therapy-on-the-optical-coherence-tomography-angiographic-appearance-of-neovascularization-in-age-related-macular-degeneration.pdf",
    imageUrl: "/images/publications/art-vegf-2020.png",
  },
  {
    title: "Place de l'OCT dans le bilan de chirurgie réfractive",
    authors: "Dr Adil El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Janvier 2020",
    year: 2020,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2020/01/RO-231-Adil-El-Maftouhi.pdf",
    imageUrl: "/images/publications/art-oct-refractif-2020.png",
  },
  {
    title: "Dégénérescence kystique de la couche nucléaire interne chez les patients glaucomateux",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Mai 2019",
    year: 2019,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2019/05/EL-MAFTOUHI_RG-kystes.pdf",
    imageUrl: "/images/publications/art-glaucome-2019.png",
  },
  {
    title: "Intérêt de l'OCT dans la quantification de la sécheresse oculaire",
    authors: "Dr Adil El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie",
    date: "Février 2019",
    year: 2019,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2019/02/CDO225_P0_Dossier-Secheresse-A.ElMaftouhi-v2.pdf",
    imageUrl: "/images/publications/art-secheresse-2019.png",
  },
  {
    title: "Dual Antagonism of PDGF and VEGF in Neovascular Age-Related Macular Degeneration",
    authors: "Dr Maddalena Quaranta-El Maftouhi et al.",
    journal: "Ophthalmologica (Phase 2b Study)",
    date: "2017",
    year: 2017,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2017/04/Dual-Antagonism-of-PDGF-and-VEGF-in-Neovascular-Age-Related-Macular-Degeneration.pdf",
    imageUrl: "/images/publications/art-pdgf-2017.png",
  },
  {
    title: "Angio-OCT In Everyday Ophthalmic Practice",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2016",
    year: 2016,
    type: "book",
    imageUrl: "/images/publications/book-angio-oct.png",
  },
  {
    title: "Comparison between OCT-A and fluorescein angiography in diabetic retinopathy",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2016",
    year: 2016,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/05/1-s2.0-S0181551215003897-main.pdf",
    imageUrl: "/images/publications/art-diabetic-2016.png",
  },
  {
    title: "Practical Handbook of OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2016",
    year: 2016,
    type: "book",
    imageUrl: "/images/publications/book-practical-handbook.png",
  },
  {
    title: "Chronic Central Serous Chorioretinopathy Imaged by OCT-Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "American Journal of Ophthalmology",
    date: "2015",
    year: 2015,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/Chronic_Central_Serous_Chorioretinopathy_Ima-2.pdf",
    imageUrl: "/images/publications/art-csc-2015.png",
  },
  {
    title: "L'angio-OCT en pratique",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier Masson (Livre)",
    date: "2015",
    year: 2015,
    type: "book",
    imageUrl: "/images/publications/book-angio-oct-pratique.png",
  },
  {
    title: "Switch from aflibercept to ranibizumab: Up to 2 years follow-up",
    authors: "Dr Maddalena Quaranta-El Maftouhi et al.",
    journal: "GMS Ophthalmology Cases",
    date: "2014",
    year: 2014,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Ophthal-Cases-N-4-2014-Ranib-after-Afliber-Switch.pdf",
    imageUrl: "/images/publications/art-switch-2014.png",
  },
  {
    title: "Imagerie en Ophtalmologie",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier Masson (Livre)",
    date: "2014",
    year: 2014,
    type: "book",
    imageUrl: "/images/publications/book-imagerie.png",
  },
  {
    title: "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2014",
    year: 2014,
    type: "book",
    imageUrl: "/images/publications/book-clinical-guide.png",
  },
  {
    title: "Encyclopédie RÉTINE",
    authors: "Dr Maddalena Quaranta-El Maftouhi (co-auteur)",
    journal: "Éditions Lavoisier",
    date: "2012",
    year: 2012,
    type: "book",
    imageUrl: "/images/publications/book-retine.png",
  },
  {
    title: "Manuale Pratico Di Angiografia OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Fabiano Group (Libro)",
    date: "2014",
    year: 2014,
    type: "book",
    imageUrl: "/images/publications/book-manuale.png",
  },
  {
    title: "Outer retinal cysts in exudative age-related macular degeneration: a spectral domain OCT study",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2010",
    year: 2010,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Outer-retinal-cysts.pdf",
  },
  {
    title: "Gonioscopy remains a standard technique: role of high-resolution OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2009",
    year: 2009,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Gonioscopy-remains-a-standard-technique.pdf",
  },
  {
    title: "Application of anterior segment OCT to the study of glaucoma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2008",
    year: 2008,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Application-of-anterior-segment-OCT.pdf",
  },
  {
    title: "Optical coherence tomography in tamoxifen retinopathy",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefe's Archive for Clinical and Experimental Ophthalmology",
    date: "2006",
    year: 2006,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/OCT-in-tamoxifen-retinopathy.pdf",
  },
  {
    title: "OCT3 exploration of anterior segment",
    authors: "Dr Maddalena Quaranta-El Maftouhi et al.",
    journal: "Journal Français d'Ophtalmologie",
    date: "2004",
    year: 2004,
  },
  {
    title: "Multiple choroidal neovascularizations at the border of a myopic posterior macular staphyloma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "American Journal of Ophthalmology",
    date: "2000",
    year: 2000,
  },
  {
    title: "Indocyanine green videoangiography of angioid streaks",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "British Journal of Ophthalmology",
    date: "1995",
    year: 1995,
  },
];

export default function PublicationsPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Nos <strong className="font-bold">Publications</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <p className="text-[#888888] text-[16px] md:text-[18px] font-light leading-[1.8] mb-4">
          Afin d&apos;apporter la meilleure prise en charge à ses patients, l&apos;équipe médicale du Centre Ophtalmologique Rabelais est impliquée dans une forte activité scientifique, faisant l&apos;objet de nombreuses publications dans des journaux ophtalmologiques nationaux et internationaux.
        </p>
      </section>

      {/* Publications Grid */}
      <section className="pb-24 px-4 max-w-6xl mx-auto w-full">
        
        {/* Books Section */}
        <div className="mb-16">
          <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-10 pb-[15px] text-center relative">
            Ouvrages & Livres
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {publications.filter(p => p.type === 'book').map((pub, i) => (
              <div key={`book-${i}`} className="group bg-[#f8f8f8] border border-[#e8e8e8] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                {pub.imageUrl && (
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={pub.imageUrl} 
                      alt={pub.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <span className="text-[11px] font-bold text-[#c2aa84] uppercase tracking-[1px] mb-2">{pub.date}</span>
                  <h3 className="text-[13px] font-bold text-slate-800 leading-[1.4] mb-2">{pub.title}</h3>
                  <p className="text-[11px] text-[#888888] font-light mt-auto">{pub.authors}</p>
                  {pub.journal && <p className="text-[10px] text-[#aaa] italic mt-1">{pub.journal}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div>
          <h2 className="text-[#a68d71] text-[20px] md:text-[24px] font-[Gotham] font-light tracking-[2px] uppercase mb-10 pb-[15px] text-center relative">
            Publications Scientifiques
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30px] h-[1px] bg-[#a68d71]"></span>
          </h2>
          <div className="space-y-6">
            {publications.filter(p => p.type !== 'book').map((pub, i) => (
              <div 
                key={`article-${i}`} 
                className={`flex flex-col md:flex-row gap-6 p-6 transition-all duration-300 hover:shadow-md ${
                  i % 2 === 0 ? 'bg-[#f8f8f8] border-l-4 border-[#003399]' : 'bg-white border border-gray-100 border-l-4 border-[#c2aa84]'
                }`}
              >
                {/* Preview Image */}
                {pub.imageUrl && (
                  <div className="relative w-full md:w-[180px] h-[140px] md:h-[130px] shrink-0 overflow-hidden bg-gray-100 group">
                    <img 
                      src={pub.imageUrl} 
                      alt={pub.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-[12px] font-bold text-[#c2aa84] uppercase tracking-[2px]">{pub.date}</span>
                    {pub.journal && (
                      <span className="text-[11px] text-[#aaa] italic hidden md:inline">— {pub.journal}</span>
                    )}
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-bold text-slate-800 leading-[1.4] mb-2">{pub.title}</h3>
                  <p className="text-[13px] text-[#666] font-light mb-2">
                    <span className="text-[#003399] font-medium">{pub.authors}</span>
                  </p>
                  {pub.journal && (
                    <p className="text-[12px] text-[#aaa] italic md:hidden mb-3">{pub.journal}</p>
                  )}
                  {pub.pdfUrl && (
                    <a 
                      href={pub.pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-[#003399] font-bold text-[11px] uppercase tracking-[1px] hover:text-[#c2aa84] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                      Voir la publication PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
