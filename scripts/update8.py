import re

with open("src/app/publications/PublicationsContent.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

pubs = {
    "Inner nuclear layer": "book-clinical-en-face-oct-2013",
    "Molteno implant and the vicryl": "molteno-implant-2013",
    "Outer retinal cysts in exudative": "outer-retinal-cysts-2010",
    "Visante OCT and the Ahmed valve": "visante-oct-ahmed-valve-2007",
    "Tear meniscus in Visante OCT": "tear-meniscus-visante-oct-2007",
    "Nonpenetrating deep sclerectomy with": "nonpenetrating-deep-sclerectomy-2007",
    "Anomalous vitreoretinal adhesions": "anomalous-vitreoretinal-adhesions-2006",
    "Exudative idiopathic polypoidal": "exudative-idiopathic-polypoidal-2006",
    "A new technique for sutureless": "new-technique-sutureless-2005",
    "Role of indocyanine green": "indocyanine-green-chorioretinopathy-2004",
    "Retinal pigment epithelium tear induced": "retinal-pigment-epithelium-tear-2004",
    "Multiple evanescent white dot": "multiple-evanescent-white-dot-2004",
    "Indocyanine green angiography features": "indocyanine-green-geographic-atrophy-2001",
    "Late-phase indocyanine green angiography allows": "late-phase-indocyanine-green-2000",
    "Indocyanine green angiography of drusen": "indocyanine-green-drusen-1997",
    "Indocyanine green angiographic features": "indocyanine-green-pathologic-myopia-1996",
    '\"dark rim\"': "dark-rim-classic-choroidal-1995",
    # PDF matches using their exact pdfUrl match lines
    'angio-oct-aspects-techniques-2015.pdf"': 'angio-oct-aspects-techniques-2015',
    'angio-oct-premier-retour-2015.pdf"': 'angio-oct-premier-retour-2015',
    'anterior-segment-oct-2008.pdf"': 'anterior-segment-oct-2008',
    'anti-vegf-oct-angiography-2020.pdf"': 'anti-vegf-oct-angiography-2020',
    'cystic-maculopathy-glaucoma-2021.pdf"': 'cystic-maculopathy-glaucoma-2021',
    'degenerescence-kystique-glaucome-2019.pdf"': 'degenerescence-kystique-glaucome-2019',
    'global-trends-retina-2016.pdf"': 'global-trends-retina-2016',
    'oct-a-vs-fluorescein-2016.pdf"': 'oct-a-vs-fluorescein-2016',
    'oct-chirurgie-refractive-2020.pdf"': 'oct-chirurgie-refractive-2020',
    'oct-nouveautes-2015.pdf"': 'oct-nouveautes-2015',
    'oct-secheresse-oculaire-2019.pdf"': 'oct-secheresse-oculaire-2019',
    'oct-tamoxifen-retinopathy-2006.pdf"': 'oct-tamoxifen-retinopathy-2006',
    'optimiser-oct-angiographie-2017.pdf"': 'optimiser-oct-angiographie-2017'
}

cur_file = None
new_lines = []
replaced = 0

# Since imageUrl can be BEFORE or AFTER pdfUrl/title in the object,
# we need to track the current block object.
blocks = []
current_block = []

for line in lines:
    current_block.append(line)
    if line.strip() == "}," or line.strip() == "}" or line.strip() == "},":
        blocks.append(current_block)
        current_block = []
if current_block:
    blocks.append(current_block)

for block in blocks:
    # Check if any mapping keys are in this block
    match_f = None
    for line in block:
        for k, v in pubs.items():
            if k in line:
                match_f = v
                break
        if match_f:
            break
            
    if match_f:
        # replace imageUrl inside this block
        for i, line in enumerate(block):
            if "imageUrl:" in line:
                block[i] = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/images/publications/thumb_{match_f}.png"', line)
                replaced += 1
                break

    new_lines.extend(block)

with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
print(f"Updated {replaced} successfully via block iteration!")
