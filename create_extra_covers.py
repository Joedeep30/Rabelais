from PIL import Image, ImageDraw, ImageFont
import textwrap
import os
import re

pubs = [
    {"title": "Failure of photocoagulation therapy for diabetic macular edema", "author": "Maddalena Quaranta-El Maftouhi", "year": "2004", "journal": "J Fr Ophtalmol", "file": "failure-of-photocoagulation-2004"},
    {"title": "OCT3 exploration of anterior segment", "author": "Maddalena Quaranta-El Maftouhi", "year": "2004", "journal": "J Fr Ophtalmol", "file": "oct3-exploration-anterior-2004"},
    {"title": "Multiple choroidal neovascularizations at the border of a myopic posterior macular staphyloma", "author": "Maddalena Quaranta-El Maftouhi", "year": "2000", "journal": "Graefes Arch Clin Exp Ophthalmol", "file": "multiple-choroidal-neovascularizations-2000"},
    {"title": "Indocyanine green angiography of basal laminar drusen associated with vitelliform macular degeneration", "author": "Maddalena Quaranta-El Maftouhi", "year": "1998", "journal": "J Fr Ophtalmol", "file": "indocyanine-green-basal-laminar-1998"},
    {"title": "Indocyanine green videoangiography of angioid streaks", "author": "Maddalena Quaranta-El Maftouhi", "year": "1995", "journal": "British Journal of Ophthalmology", "file": "indocyanine-green-videoangiography-1995"}
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

print("Patching TSX...")
with open("src/app/publications/PublicationsContent.tsx", "r", encoding="utf-8") as f:
    text = f.read()

for p in pubs:
    es = re.escape(p['title'])
    text = re.sub(r'(title:\s*"[^"]*' + es + r'[^"]*",[^}]*?imageUrl:\s*)"[^"]+"', r'\1"/images/publications/thumb_' + p['file'] + r'.png"', text)

with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.write(text)

print("Done patching.")
