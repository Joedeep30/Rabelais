
from PIL import Image, ImageDraw, ImageFont
import textwrap
import os

pubs = [{"title":"Dual Antagonism of PDGF and VEGF in Neovascular Age-Related Macular Degeneration","author":"Dr Maddalena Quaranta-El Maftouhi","journal":"Ophthalmology","year":"2017","file":"dual-antagonism-of-pdgf-and-ve"},{"title":"Comparison between OCT-A and fluorescein angiography for the imaging of Type 1 Neovascularization","author":"Dr Maddalena Quaranta-El Maftouhi","journal":"Investigative Ophthalmology & Visual Science","year":"2016","file":"comparison-between-oct-a-and-f"},{"title":"Chronic Central Serous Chorioretinopathy Imaged by Optical Coherence Tomographic Angiography","author":"Dr Maddalena Quaranta-El Maftouhi","journal":"Am J Ophthalmol","year":"2015","file":"chronic-central-serous-chorior"},{"title":"Switch from aflibercept to ranibizumab: Up to 2 years follow-up post View2 study","author":"Dr Maddalena Quaranta-El Maftouhi","journal":"Investigative Ophthalmology & Visual Science","year":"2014","file":"switch-from-aflibercept-to-ran"},{"title":"New diagnosis approaches: iridocorneal angle in optical coherence tomography","author":"Dr Maddalena Quaranta-El Maftouhi","journal":"J Fr Ophtalmol","year":"2009","file":"new-diagnosis-approaches-irid"},{"title":"Co Auteur du rapport sur la DMLA de la SFO","author":"Dr Maddalena Quaranta-El Maftouhi","journal":"Elsevier / Masson - Rapport SFO","year":"2007","file":"co-auteur-du-rapport-sur-la-dm"}]

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

    d.text((40, 60), str(p['journal']).upper()[:30], font=font_journal, fill=(26, 54, 93))
    
    lines = textwrap.wrap(p['title'], width=28)
    y_text = 120
    for line in lines:
        d.text((40, y_text), line, font=font_title, fill=(45, 55, 72))
        y_text += 45
        
    y_text += 20
    d.text((40, y_text), "... " + str(p['author'])[:35], font=font_author, fill=(74, 85, 104))
    
    d.text((40, height - 80), "SCIENTIFIC PUBLICATION  |  " + str(p['year']), font=font_journal, fill=(160, 174, 192))
    
    img.save(os.path.join(out_dir, "thumb_" + p['file'] + ".png"))
    print(f"Generated {p['file']}")
