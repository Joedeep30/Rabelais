import { Metadata } from 'next';
import PublicationImage from '@/components/PublicationImage';export const metadata: Metadata = {
  title: 'Publications Scientifiques | Centre Ophtalmologique Rabelais Lyon',
  description: 'Retrouvez toutes les publications scientifiques (Glaucome, OCT, DMLA) rédigées par l\'équipe médicale du Centre Ophtalmologique Rabelais.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/publications'
  }
};

type AuthorDetails = {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
  linkedinUrl?: string;
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
  authorDetails?: AuthorDetails;
};

const defaultAuthor: AuthorDetails = {
  name: "DR MADDALENA QUARANTA",
  role: "Ophtalmologiste Rétine médicale",
  description: "Fondatrice et Gérante du Centre Rabelais",
  imageUrl: "/images/team/maddalena-quaranta-thumb.jpg",
  linkedinUrl: "https://fr.linkedin.com/pub/maddalena-quaranta-el-maftouhi/58/586/604"
};

const authorAdil: AuthorDetails = {
  name: "DR ADIL EL MAFTOUHI",
  role: "Consultant Scientifique / Expert en Imagerie",
  description: "Centre Ophtalmologique Rabelais"
};

const publications: Publication[] = [
  {
    title: "Cystic maculopathy in the internal nuclear layer in glaucoma patients",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefe's Archive for Clinical and Experimental Ophthalmology",
    date: "Juin 2021",
    year: 2021,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2021/06/1-s2.0-S0181551221001789-main.pdf",
    imageUrl: "/images/publications/art-cystic-2021.jpg",
    authorDetails: defaultAuthor
  },
  {
    title: "The long-term effects of anti-VEGF therapy on the OCT angiographic appearance of neovascularization in AMD",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "International Journal of Retina and Vitreous",
    date: "Août 2020",
    year: 2020,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2020/08/The-long-term-effects-of-anti-vascular-endothelial-growth-factor-therapy-on-the-optical-coherence-tomography-angiographic-appearance-of-neovascularization-in-age-related-macular-degeneration.pdf",
    imageUrl: "/images/publications/art-vegf-2020.jpg",
    authorDetails: defaultAuthor
  },
  {
    title: "Place de l'OCT dans le bilan de chirurgie réfractive",
    authors: "Dr Adil El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Janvier 2020",
    year: 2020,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2020/01/RO-231-Adil-El-Maftouhi.pdf",
    imageUrl: "/images/publications/art-oct-refractif-2020.jpg",
    authorDetails: authorAdil
  },
  {
    title: "Dégénérescence kystique de la couche nucléaire interne chez les patients glaucomateux",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Réalités Ophtalmologiques",
    date: "Mai 2019",
    year: 2019,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2019/05/EL-MAFTOUHI_RG-kystes.pdf",
    imageUrl: "/images/publications/art-glaucome-2019.jpg",
    authorDetails: defaultAuthor
  },
  {
    title: "Intérêt de l'OCT dans la quantification de la sécheresse oculaire",
    authors: "Dr Adil El Maftouhi",
    journal: "Les Cahiers d'Ophtalmologie",
    date: "Février 2019",
    year: 2019,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2019/02/CDO225_P0_Dossier-Secheresse-A.ElMaftouhi-v2.pdf",
    imageUrl: "/images/publications/art-secheresse-2019.jpg",
    authorDetails: authorAdil
  },
  {
    title: "Dual Antagonism of PDGF and VEGF in Neovascular Age-Related Macular Degeneration",
    authors: "Dr Maddalena Quaranta-El Maftouhi et al.",
    journal: "Ophthalmologica (Phase 2b Study)",
    date: "2017",
    year: 2017,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2017/04/Dual-Antagonism-of-PDGF-and-VEGF-in-Neovascular-Age-Related-Macular-Degeneration.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Angio-OCT In Everyday Ophthalmic Practice",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2016",
    year: 2016,
    type: "book",
    authorDetails: defaultAuthor,
    imageUrl: "/images/publications/Angio-OCT-sm.jpg"
  },
  {
    title: "Comparison between OCT-A and fluorescein angiography in diabetic retinopathy",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2016",
    year: 2016,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/05/1-s2.0-S0181551215003897-main.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Practical Handbook of OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2016",
    year: 2016,
    type: "book",
    authorDetails: defaultAuthor,
    imageUrl: "/images/publications/Practical-Handbook-of-OCT-Angiography.jpg"
  },
  {
    title: "Chronic Central Serous Chorioretinopathy Imaged by OCT-Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "American Journal of Ophthalmology",
    date: "2015",
    year: 2015,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/Chronic_Central_Serous_Chorioretinopathy_Ima-2.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "L'angio-OCT en pratique",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier Masson (Livre)",
    date: "2015",
    year: 2015,
    type: "book",
    authorDetails: defaultAuthor,
    imageUrl: "/images/publications/Angio-OCT-Pratique.png"
  },
  {
    title: "Switch from aflibercept to ranibizumab: Up to 2 years follow-up",
    authors: "Dr Maddalena Quaranta-El Maftouhi et al.",
    journal: "GMS Ophthalmology Cases",
    date: "2014",
    year: 2014,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Ophthal-Cases-N-4-2014-Ranib-after-Afliber-Switch.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Imagerie en Ophtalmologie",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Elsevier Masson (Livre)",
    date: "2014",
    year: 2014,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Jaypee (Book)",
    date: "2014",
    year: 2014,
    type: "book",
    authorDetails: defaultAuthor,
    imageUrl: "/images/publications/IMG-Clinical-Guide-to-Angio-OCT.png"
  },
  {
    title: "Encyclopédie RÉTINE",
    authors: "Dr Maddalena Quaranta-El Maftouhi (co-auteur)",
    journal: "Éditions Lavoisier",
    date: "2012",
    year: 2012,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Manuale Pratico Di Angiografia OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Fabiano Group (Libro)",
    date: "2014",
    year: 2014,
    type: "book",
    authorDetails: defaultAuthor
  },
  {
    title: "Outer retinal cysts in exudative age-related macular degeneration: a spectral domain OCT study",
    authors: "Dr Maddalena Quaranta-El Maftouhi, Dr Adil El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2010",
    year: 2010,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Outer-retinal-cysts.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Gonioscopy remains a standard technique: role of high-resolution OCT",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2009",
    year: 2009,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Gonioscopy-remains-a-standard-technique.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Application of anterior segment OCT to the study of glaucoma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Journal Français d'Ophtalmologie",
    date: "2008",
    year: 2008,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/Application-of-anterior-segment-OCT.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "Optical coherence tomography in tamoxifen retinopathy",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "Graefe's Archive for Clinical and Experimental Ophthalmology",
    date: "2006",
    year: 2006,
    pdfUrl: "https://centrerabelaislyon.fr/wp-content/uploads/2016/01/OCT-in-tamoxifen-retinopathy.pdf",
    authorDetails: defaultAuthor
  },
  {
    title: "OCT3 exploration of anterior segment",
    authors: "Dr Maddalena Quaranta-El Maftouhi et al.",
    journal: "Journal Français d'Ophtalmologie",
    date: "2004",
    year: 2004,
    authorDetails: defaultAuthor
  },
  {
    title: "Multiple choroidal neovascularizations at the border of a myopic posterior macular staphyloma",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "American Journal of Ophthalmology",
    date: "2000",
    year: 2000,
    authorDetails: defaultAuthor
  },
  {
    title: "Indocyanine green videoangiography of angioid streaks",
    authors: "Dr Maddalena Quaranta-El Maftouhi",
    journal: "British Journal of Ophthalmology",
    date: "1995",
    year: 1995,
    authorDetails: defaultAuthor
  }
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
            {publications.filter(p => p.type === 'book' && p.imageUrl).map((pub, i) => (
              <div key={`book-${i}`} className="group bg-[#f8f8f8] border border-[#e8e8e8] hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#ffffff] border-b border-[#e8e8e8] flex items-center justify-center p-2">
                  <PublicationImage 
                    src={pub.imageUrl || ''} 
                    alt={pub.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col bg-white">
                  <span className="text-[11px] font-bold text-[#003399] uppercase tracking-[1px] mb-2">{pub.date} {pub.journal && `- ${pub.journal}`}</span>
                  <h3 className="text-[13px] md:text-[14px] font-bold text-slate-800 leading-[1.3] mb-4">{pub.title}</h3>
                  
                  {/* Author Details - Anchored to bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <h4 className="text-[#c2aa84] text-[12px] font-[Gotham] font-bold uppercase tracking-wider">Authors</h4>
                    {pub.authorDetails && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          {pub.authorDetails.imageUrl && (
                            <div className="w-[45px] h-[45px] shrink-0 bg-gray-100 overflow-hidden rounded-full border border-gray-200">
                              <img src={pub.authorDetails.imageUrl} alt={pub.authorDetails.name} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex flex-col">
                            <a href={pub.authorDetails.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold text-slate-700 hover:text-[#003399] transition-colors flex items-center gap-1 leading-tight">
                              {pub.authorDetails.name}
                            </a>
                            <p className="text-[9px] md:text-[10px] text-[#aaa] font-light leading-[1.3] mt-1">
                              {pub.authorDetails.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
            {publications.filter(p => p.type !== 'book' && p.imageUrl).map((pub, i) => (
              <div 
                key={`article-${i}`} 
                className={`flex flex-col md:flex-row gap-6 p-6 transition-all duration-300 hover:shadow-md ${
                  i % 2 === 0 ? 'bg-[#f8f8f8] border-l-4 border-[#003399]' : 'bg-white border border-gray-100 border-l-4 border-[#c2aa84]'
                }`}
              >
                {/* Preview Image */}
                <div className="relative w-full md:w-[240px] h-[200px] md:h-auto md:aspect-[3/4] shrink-0 overflow-hidden bg-[#ffffff] border border-gray-200 group flex items-center justify-center p-2">
                  <PublicationImage 
                    src={pub.imageUrl || ''} 
                    alt={pub.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0 flex flex-col">
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
                      className="inline-flex items-center gap-2 text-[#003399] font-bold text-[11px] uppercase tracking-[1px] hover:text-[#c2aa84] transition-colors mb-4"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                      Voir la publication PDF
                    </a>
                  )}

                  {/* Author Details - Anchored to bottom */}
                  {pub.authorDetails && (
                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                      <h4 className="text-[#c2aa84] text-[13px] font-[Gotham] font-bold uppercase tracking-wider">Authors</h4>
                      <div className="flex items-start gap-4">
                        {pub.authorDetails.imageUrl && (
                          <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] shrink-0 bg-gray-100 overflow-hidden rounded-full border border-gray-200">
                            <img src={pub.authorDetails.imageUrl} alt={pub.authorDetails.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex flex-col mt-1">
                          <a href={pub.authorDetails.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[12px] md:text-[13px] font-bold text-slate-700 hover:text-[#003399] transition-colors flex items-center gap-2">
                            {pub.authorDetails.name}
                          </a>
                          <p className="text-[11px] md:text-[12px] text-[#888] font-light leading-[1.4] mt-1">
                            {pub.authorDetails.role}<br/>
                            {pub.authorDetails.description}
                          </p>
                        </div>
                      </div>
                    </div>
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
