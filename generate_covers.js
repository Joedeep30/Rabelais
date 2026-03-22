const { chromium } = require('playwright');
const fs = require('fs');

const pubs = [
  {"title": "Inner nuclear layer cystic degeneration, in macular area of glaucomatous patients", "author": "Maddalena Quaranta-El Maftouhi", "year": "2013", "journal": "Clinical En Face OCT Atlas - Jaypee", "file": "book-clinical-en-face-oct-2013"},
  {"title": "Molteno implant and the vicryl tie technique", "author": "Maddalena Quaranta-El Maftouhi", "year": "2013", "journal": "J Fr Ophtalmol", "file": "molteno-implant-2013"},
  {"title": "Outer retinal cysts in exudative age-related macular degeneration", "author": "Maddalena Quaranta-El Maftouhi", "year": "2010", "journal": "J Fr Ophtalmol", "file": "outer-retinal-cysts-2010"},
  {"title": "Visante OCT and the Ahmed valve", "author": "Maddalena Quaranta-El Maftouhi", "year": "2007", "journal": "J Fr Ophtalmol", "file": "visante-oct-ahmed-valve-2007"},
  {"title": "Tear meniscus in Visante OCT", "author": "Maddalena Quaranta-El Maftouhi", "year": "2007", "journal": "J Fr Ophtalmol", "file": "tear-meniscus-visante-oct-2007"},
  {"title": "Nonpenetrating deep sclerectomy with Aquaflow drain", "author": "Maddalena Quaranta-El Maftouhi", "year": "2007", "journal": "J Fr Ophtalmol", "file": "nonpenetrating-deep-sclerectomy-2007"},
  {"title": "Anomalous vitreoretinal adhesions in patients with exudative age-related macular degeneration", "author": "Maddalena Quaranta-El Maftouhi", "year": "2006", "journal": "Invest Ophthalmol Vis Sci", "file": "anomalous-vitreoretinal-adhesions-2006"},
  {"title": "Exudative idiopathic polypoidal choroidal vasculopathy and photodynamic therapy with verteporfin", "author": "Maddalena Quaranta-El Maftouhi", "year": "2006", "journal": "Eur J Ophthalmol", "file": "exudative-idiopathic-polypoidal-2006"},
  {"title": "A new technique for sutureless, clear-corneal, 20-gauge incisions", "author": "Maddalena Quaranta-El Maftouhi", "year": "2005", "journal": "Ophthalmic Surg Lasers Imaging", "file": "new-technique-sutureless-2005"},
  {"title": "Role of indocyanine green angiography in the treatment of chronic central serous chorioretinopathy", "author": "Maddalena Quaranta-El Maftouhi", "year": "2004", "journal": "Eur J Ophthalmol", "file": "indocyanine-green-chorioretinopathy-2004"},
  {"title": "Retinal pigment epithelium tear induced by photodynamic therapy for occult subfoveal choroidal neovascularization", "author": "Maddalena Quaranta-El Maftouhi", "year": "2004", "journal": "Eur J Ophthalmol", "file": "retinal-pigment-epithelium-tear-2004"},
  {"title": "Multiple evanescent white dot syndrome with drusen-like appearance", "author": "Maddalena Quaranta-El Maftouhi", "year": "2004", "journal": "Eur J Ophthalmol", "file": "multiple-evanescent-white-dot-2004"},
  {"title": "Indocyanine green angiography features of geographic atrophy in macular degeneration", "author": "Maddalena Quaranta-El Maftouhi", "year": "2001", "journal": "Am J Ophthalmol", "file": "indocyanine-green-geographic-atrophy-2001"},
  {"title": "Late-phase indocyanine green angiography allows differentiating between typical geographic atrophy and primary subretinal fibrosis", "author": "Maddalena Quaranta-El Maftouhi", "year": "2000", "journal": "Ophthalmology", "file": "late-phase-indocyanine-green-2000"},
  {"title": "Indocyanine green angiography of drusen", "author": "Maddalena Quaranta-El Maftouhi", "year": "1997", "journal": "Am J Ophthalmol", "file": "indocyanine-green-drusen-1997"},
  {"title": "Indocyanine green angiographic features of pathologic myopia", "author": "Maddalena Quaranta-El Maftouhi", "year": "1996", "journal": "Am J Ophthalmol", "file": "indocyanine-green-pathologic-myopia-1996"},
  {"title": "Is the \"dark rim\" of classic choroidal neovascularisation a reliable anatomic landmark?", "author": "Maddalena Quaranta-El Maftouhi", "year": "1995", "journal": "Int Ophthalmol", "file": "dark-rim-classic-choroidal-1995"},
];

const htmlTemplate = (p) => `
<!DOCTYPE html>
<html>
<head>
<style>
  body {
    margin: 0; padding: 0; width: 600px; height: 800px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    display: flex; flex-direction: column; justify-content: space-between;
    box-sizing: border-box; padding: 60px;
    border-top: 15px solid #1a365d;
    box-shadow: inset 0 0 50px rgba(0,0,0,0.05);
  }
  .journal {
    font-size: 24px; color: #1a365d; font-weight: bold; text-transform: uppercase;
    letter-spacing: 2px; border-bottom: 2px solid #1a365d; padding-bottom: 10px;
  }
  .title {
    font-size: 42px; font-weight: 800; color: #2d3748; line-height: 1.2;
    margin: 40px 0;
  }
  .author {
    font-size: 22px; color: #4a5568; font-style: italic; margin-bottom: auto;
  }
  .footer {
    display: flex; justify-content: space-between; align-items: baseline;
    border-top: 1px solid #cbd5e0; padding-top: 20px;
  }
  .year {
    font-size: 32px; font-weight: bold; color: #a0aec0;
  }
  .type {
    font-size: 18px; color: #718096; text-transform: uppercase; letter-spacing: 1px;
  }
</style>
</head>
<body>
  <div>
    <div class="journal">${p.journal}</div>
    <div class="title">${p.title}</div>
    <div class="author">${p.author}</div>
  </div>
  <div class="footer">
    <div class="type">SCIENTIFIC PUBLICATION</div>
    <div class="year">${p.year}</div>
  </div>
</body>
</html>
`;

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 600, height: 800 });
    
    for (const p of pubs) {
        const filePath = `public/images/publications/thumb_${p.file}.png`;
        if(!fs.existsSync(filePath)){
            await page.setContent(htmlTemplate(p));
            await page.screenshot({ path: filePath });
            console.log("Generated: " + filePath);
        }
    }
    
    await browser.close();
})();
