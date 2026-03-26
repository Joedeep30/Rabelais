const fs = require('fs');
let content = fs.readFileSync('src/app/publications/page.tsx', 'utf8');

// 1. Add AuthorDetails to types
content = content.replace(
  /type Publication = \{[\s\S]*?type\?: 'article' \| 'book';\s*};/,
  `type AuthorDetails = {
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
};`
);

// 2. Add Author properties to books
content = content.replace(
  /title: "Angio-OCT In Everyday Ophthalmic Practice",[\s\S]*?type: "book",/,
  `$&
    imageUrl: "/images/publications/Angio-OCT-sm.jpg",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Practical Handbook of OCT Angiography",[\s\S]*?type: "book",/,
  `$&
    imageUrl: "/images/publications/Practical-Handbook-of-OCT-Angiography.jpg",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Nouvel ouvrage en Italien sur l'Angio-OCT",[\s\S]*?type: "book",/,
  `$&
    imageUrl: "/images/publications/manuale_corretto1.png",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "L'angio-OCT en pratique",[\s\S]*?type: "book",/,
  `$&
    imageUrl: "/images/publications/Angio-OCT-Pratique.png",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography",[\s\S]*?type: "book",/,
  `$&
    imageUrl: "/images/publications/IMG-Clinical-Guide-to-Angio-OCT.png",
    authorDetails: defaultAuthor,`
);

content = content.replace(
  /title: "Imagerie en Ophtalmologie",[\s\S]*?type: "book",/,
  `$&
    authorDetails: defaultAuthor,`
);


// 3. Replace books render with list render (same as articles)
const booksPattern = /\{publications\.filter\(p => p\.type === 'book'\)\.map\(\(pub, i\) => \([\s\S]*?\}\)\)\}\n          <\/div>/;

const listLayout = `{publications.filter(p => p.type === 'book').map((pub, i) => (
              <div 
                key={\`book-\${i}\`} 
                className={\`flex flex-col md:flex-row gap-6 p-6 transition-all duration-300 hover:shadow-md \${
                  i % 2 === 0 ? 'bg-[#f8f8f8] border-l-4 border-[#003399]' : 'bg-white border border-gray-100 border-l-4 border-[#c2aa84]'
                }\`}
              >
                {/* Preview Image */}
                <div className="relative w-full md:w-[240px] md:h-auto aspect-[4/3] md:aspect-[3/4] shrink-0 overflow-hidden bg-[#f0f0f0] border border-gray-200 group flex items-center justify-center">
                  <PublicationImage 
                    src={pub.imageUrl || "/images/publications/placeholder.png"} 
                    alt={pub.title}
                    className={\`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 \${pub.imageUrl ? 'object-cover object-top' : 'object-contain p-8 opacity-30 grayscale'}\`}
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

                  {/* Author Details */}
                  {pub.authorDetails && (
                    <div className="mt-auto pt-4 flex flex-col gap-3">
                      <h4 className="text-[#a68d71] text-[15px] font-[Gotham] font-medium">Authors</h4>
                      <div className="flex items-start gap-4">
                        {pub.authorDetails.imageUrl && (
                          <div className="w-[60px] h-[60px] shrink-0 bg-gray-100 overflow-hidden">
                            <img src={pub.authorDetails.imageUrl} alt={pub.authorDetails.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex flex-col">
                          <a href={pub.authorDetails.linkedinUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-slate-700 uppercase tracking-wide hover:text-[#003399] transition-colors flex items-center gap-2">
                            {pub.authorDetails.name}
                            {pub.authorDetails.linkedinUrl && (
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            )}
                          </a>
                          <p className="text-[12px] text-[#888] font-light leading-tight mt-1">
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
          </div>`;

content = content.replace(booksPattern, listLayout);

// 4. Also replace the Articles mapping
const articlesPattern = /\{publications\.filter\(p => p\.type !== 'book'\)\.map\(\(pub, i\) => \([\s\S]*?\}\)\)\}\n          <\/div>/;
content = content.replace(articlesPattern, listLayout.replace(/'book'/g, "!'book'").replace(/\`book-\$\{i\}\`/g, "\`article-\${i}\`"));

fs.writeFileSync('src/app/publications/page.tsx', content);
console.log('Update Complete!');
