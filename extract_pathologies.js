const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('tmp_patho.html', 'utf-8');

// Extract the content-page section
const startIdx = html.indexOf('<div class="content-page">');
// Find the closing div of content-page. It's right before the footer or wrapper end.
// Let's just use regex to get the content-page block.
// Since nested divs exist, it's safer to just split by a known footer marker.
let contentPage = '';
if (startIdx !== -1) {
    const endIdx = html.indexOf('<div class="box-footer social-ft">');
    if (endIdx !== -1) {
        // extract up to the closing tags before footer
        let block = html.substring(startIdx, endIdx);
        // Clean up unclosed tags if we cut too early, but it should be fine to drop into dangerouslySetInnerHTML
        // block starts with <div class="content-page"> and ends before footer.
        // The original has <div class="footer"> right after content-page ends.
        const footerStart = html.indexOf('<footer');
        if (footerStart !== -1) {
            block = html.substring(startIdx, footerStart);
        }
        
        // Remove scripts or forms that might break React
        block = block.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        // Remove style tags
        block = block.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
        
        contentPage = block;
    }
}

// Generate the Page Component
const pagePath = path.join(__dirname, 'src', 'app', 'pathologies-retiniennes', 'page.tsx');
fs.mkdirSync(path.dirname(pagePath), { recursive: true });

const pageTsx = `import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Pathologies Oculaires | Centre Ophtalmologique Rabelais Lyon',
  description: 'Le centre Ophtalmologique Rabelais prend en charge les différentes pathologies de la rétine dont le diagnostic fait appel à de nombreux examens spécifiques.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/pathologies-retiniennes'
  }
};

export default function PathologiesOculairesPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-start overflow-hidden mt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner7.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-16 lg:px-24">
          <h1 className="text-white text-[42px] md:text-[56px] font-[Gotham] font-light leading-tight mb-4">
            Pathologies Oculaires
          </h1>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light max-w-2xl leading-relaxed">
            Le centre Ophtalmologique Rabelais prend en charge les différentes pathologies de la rétine dont le diagnostic fait appel à de nombreux examens spécifiques permettant d'orienter le traitement.
          </p>
        </div>
      </section>

      {/* Content wrapper from original site */}
      <div 
        className="original-wp-content-wrapper py-16 px-4 md:px-16 lg:px-24 w-full max-w-7xl mx-auto"
        dangerouslySetInnerHTML={{ __html: \`${contentPage.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }}
      />
    </main>
  );
}
`;

fs.writeFileSync(pagePath, pageTsx);
console.log('Created: ', pagePath);
