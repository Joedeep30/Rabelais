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
    '\"dark rim\"': "dark-rim-classic-choroidal-1995"
}

in_block = False
cur_file = None
new_lines = []
replaced = 0

for line in lines:
    if "title:" in line:
        for k, v in pubs.items():
            if k in line:
                cur_file = v
                in_block = True
                break
    
    if in_block and "imageUrl:" in line:
        line = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/images/publications/thumb_{cur_file}.png"', line)
        in_block = False
        cur_file = None
        replaced += 1
        
    new_lines.append(line)

with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.writelines(new_lines)
print(f"Updated {replaced} successfully via line iteration!")
