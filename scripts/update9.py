import re

with open("src/app/publications/PublicationsContent.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

# All 31 specific flawless covers to be applied:
pubs = {
    # 19 Typography / Extracted Covers
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
    "Failure of photocoagulation therapy for diabetic macular edema": "failure-of-photocoagulation-2004",
    "OCT3 exploration of anterior segment": "oct3-exploration-anterior-2004",
    "Indocyanine green angiography features": "indocyanine-green-geographic-atrophy-2001",
    "Late-phase indocyanine green angiography allows": "late-phase-indocyanine-green-2000",
    "Multiple choroidal neovascularizations at the border": "multiple-choroidal-neovascularizations-2000",
    "Indocyanine green angiography of basal laminar drusen": "indocyanine-green-basal-laminar-1998",
    "Indocyanine green angiography of drusen": "indocyanine-green-drusen-1997",
    "Indocyanine green angiographic features": "indocyanine-green-pathologic-myopia-1996",
    "Indocyanine green videoangiography of angioid streaks": "indocyanine-green-videoangiography-1995",
    '\"dark rim\"': "dark-rim-classic-choroidal-1995",
    
    # PDF matches using exactly matched titles
    "ANGIO-OCT : aspects techniques et": 'angio-oct-aspects-techniques-2015',
    "ANGIO-OCT : Premier retour d": 'angio-oct-premier-retour-2015',
    "Application of anterior segment OCT in glaucoma": 'anterior-segment-oct-2008',
    "Anti-VEGF in OCT Angiography": 'anti-vegf-oct-angiography-2020',
    "Cystic maculopathy in the internal nuclear": 'cystic-maculopathy-glaucoma-2021',
    "Dégénérescence kystique de la couche nucléaire": 'degenerescence-kystique-glaucome-2019',
    "Global Trends in Retina Survey": 'global-trends-retina-2016',
    "OCT-A vs Fluorescein Angiography": 'oct-a-vs-fluorescein-2016',
    "L'OCT en chirurgie réfractive": 'oct-chirurgie-refractive-2020',
    "OCT : Quelles Nouveautés en 2015": 'oct-nouveautes-2015',
    "OCT et sécheresse oculaire": 'oct-secheresse-oculaire-2019',
    "Optical coherence tomography in tamoxifen retinopathy": 'oct-tamoxifen-retinopathy-2006',
    "Optimiser son acquisition en OCT-Angiographie": 'optimiser-oct-angiographie-2017'
}

cur_file = None
new_lines = []
replaced = 0

# Track blocks properly
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
    match_f = None
    for line in block:
        # ONLY MATCH if it's the title line to avoid accidents
        if "title:" in line:
            for k, v in pubs.items():
                if k in line:
                    match_f = v
                    break
        if match_f:
            break
            
    if match_f:
        for i, line in enumerate(block):
            if "imageUrl:" in line:
                block[i] = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/images/publications/thumb_{match_f}.png"', line)
                replaced += 1
                break

    new_lines.extend(block)

with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
print(f"Absolutely Flawless Update: {replaced} items mapped via explicit title block mapping.")
