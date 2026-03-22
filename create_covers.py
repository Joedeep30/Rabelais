from PIL import Image, ImageDraw, ImageFont
import textwrap
import os

pubs = [
    {"title": "Inner nuclear layer cystic degeneration, in macular area of glaucomatous patients", "author": "Maddalena Quaranta-El Maftouhi", "year": "2013", "journal": "Clinical En Face OCT Atlas - Jaypee", "file": "book-clinical-en-face-oct-2013"},
    {"title": "Molteno implant and the vicryl tie technique: role of Visante anterior segment OCT", "author": "Maddalena Quaranta-El Maftouhi", "year": "2013", "journal": "J Fr Ophtalmol", "file": "molteno-implant-2013"},
    {"title": "Outer retinal cysts in exudative age-related macular degeneration: a spectral domain OCT study", "author": "Maddalena Quaranta-El Maftouhi", "year": "2010", "journal": "J Fr Ophtalmol", "file": "outer-retinal-cysts-2010"},
    {"title": "Visante OCT and the Ahmed valve: from the anterior chamber to the posterior chamber", "author": "Maddalena Quaranta-El Maftouhi", "year": "2007", "journal": "J Fr Ophtalmol", "file": "visante-oct-ahmed-valve-2007"},
    {"title": "Tear meniscus in Visante OCT", "author": "Maddalena Quaranta-El Maftouhi", "year": "2007", "journal": "J Fr Ophtalmol", "file": "tear-meniscus-visante-oct-2007"},
    {"title": "Nonpenetrating deep sclerectomy with Aquaflow drain", "author": "Maddalena Quaranta-El Maftouhi", "year": "2007", "journal": "J Fr Ophtalmol", "file": "nonpenetrating-deep-sclerectomy-2007"},
    {"title": "Anomalous vitreoretinal adhesions in patients with exudative age-related macular degeneration: an OCT study", "author": "Maddalena Quaranta-El Maftouhi", "year": "2006", "journal": "Invest Ophthalmol Vis Sci", "file": "anomalous-vitreoretinal-adhesions-2006"},
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
]

width = 600
height = 800
out_dir = "public/images/publications"

try:
    font_title = ImageFont.truetype("arialbd.ttf", 36)
    font_journal = ImageFont.truetype("arial.ttf", 24)
    font_author = ImageFont.truetype("ariali.ttf", 20)
except:
    font_title = ImageFont.load_default()
    font_journal = font_title
    font_author = font_title

for p in pubs:
    img = Image.new('RGB', (width, height), color=(245, 247, 250))
    d = ImageDraw.Draw(img)
    
    d.rectangle([(0, 0), (width, 25)], fill=(26, 54, 93))
    d.rectangle([(0, height-25), (width, height)], fill=(161, 136, 108))

    d.text((40, 60), p['journal'].upper(), font=font_journal, fill=(26, 54, 93))
    
    lines = textwrap.wrap(p['title'], width=28)
    y_text = 120
    for line in lines:
        d.text((40, y_text), line, font=font_title, fill=(45, 55, 72))
        y_text += 45
        
    y_text += 20
    d.text((40, y_text), "... " + p['author'], font=font_author, fill=(74, 85, 104))
    
    d.text((40, height - 80), "SCIENTIFIC PUBLICATION  |  " + p['year'], font=font_journal, fill=(160, 174, 192))
    
    img.save(os.path.join(out_dir, f"thumb_{p['file']}.png"))
    print(f"Generated {p['file']}")
