import re
import os

print("Restoring pristine original mappings exactly as demanded...")

definitive_map = {
    "Cystic maculopathy in the internal": "art-cystic-2021.jpg",
    "Dégénérescence kystique de la": "art-glaucome-2019.jpg",
    "Anti-VEGF in OCT Angiography": "art-vegf-2020.jpg",
    "L'OCT en chirurgie réfractive": "art-oct-refractif-2020.jpg",
    "Co Auteur du rapport sur la DMLA": "book-rapport-sfo-2019.jpg",
    "OCT et sécheresse oculaire": "art-secheresse-2019.jpg",
    "Optical coherence tomography angiography characteristics of": "art-publications-generic.jpg",
    "Application of anterior segment OCT in": "art-publications-generic.jpg",
    "Optimiser son acquisition en OCT": "Angio-OCT-sm.jpg",
    "OCT-Angiographie": "art-oct-angiographie-2017.jpg",
    "Chronic Central Serous Chorioretinopathy": "art-iovs-2014.png",
    "Practical Handbook of OCT Angiography": "Practical-Handbook-of-OCT-Angiography.jpg",
    "Global Trends in Retina Survey": "art-retinal-times-2016.png",
    "L'imagerie multimodale dans la DMLA": "art-tubulations-2016.png",
    "Manuale pratico di Angiografia OCT": "manuale_corretto1.png",
    "L'angio-OCT en pratique": "Angio-OCT-Pratique.png",
    "ANGIO-OCT : Premier retour": "art-oct-nouveautes-2015.png",
    "ANGIO-OCT : aspects techniques et": "art-angio-oct-aspects-2015.png",
    "Optical coherence tomography in tamoxifen retinopathy": "art-american-journal.jpg",
    "OCT : Quelles Nouveautés en 2015": "art-oct-nouveautes-2015.png",
    "Clinical Guide to Angio-OCT": "IMG-Clinical-Guide-to-Angio-OCT.png",
    "Imagerie en ophtalmologie": "book-imagerie-ophtalmologie-2014.jpg",
    "Anomalous vitreoretinal adhesions in patients": "art-iovs-2014.png",
    "Clinical En face OCT Atlas": "book-clinical-en-face-oct-2013.png",
    "Inner nuclear layer": "book-clinical-en-face-oct-2013.png",
    "Molteno implant and the vicryl": "art-journal-fr-ophtal.jpg",
    "Encyclopédie de la Rétine": "book-encyclopedie-retine-2012.jpg",
    "Outer retinal cysts in exudative": "art-american-journal.jpg",
    "La nouvelle imagerie en O.C.T": "book-nouvelle-imagerie-2009.jpg",
    "Visante OCT and the Ahmed valve": "art-journal-fr-ophtal.jpg",
    "Tear meniscus in Visante OCT": "art-journal-fr-ophtal.jpg",
    "Nonpenetrating deep sclerectomy with": "art-journal-fr-ophtal.jpg",
    "Exudative idiopathic polypoidal": "art-american-journal.jpg",
    "A new technique for sutureless": "art-american-journal.jpg",
    "Failure of photocoagulation therapy": "art-journal-fr-ophtal.jpg",
    "OCT3 exploration of anterior": "art-journal-fr-ophtal.jpg",
    "Role of indocyanine green": "art-american-journal.jpg",
    "Retinal pigment epithelium tear": "art-american-journal.jpg",
    "Multiple evanescent white dot": "art-american-journal.jpg",
    "Indocyanine green angiography features": "art-american-journal.jpg",
    "Late-phase indocyanine green angiography allows": "art-american-journal.jpg",
    "Multiple choroidal neovascularizations at the border": "default-publication.png",
    "Indocyanine green angiography of basal laminar drusen": "art-journal-fr-ophtal.jpg",
    "Indocyanine green angiography of drusen": "art-american-journal.jpg",
    "Indocyanine green angiographic features of pathologic myopia": "art-american-journal.jpg",
    "Indocyanine green videoangiography of angioid streaks": "default-publication.png"
}

with open("src/app/publications/PublicationsContent.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Provide Adile with an image
text = re.sub(
    r'(const authorAdil: AuthorDetails = \{[\s\S]*?description: "[^"]*")',
    r'\1,\n  imageUrl: "/images/team/dr-adil-el-maftouhi.jpg"',
    text
)

# 2. Iterate each publication by finding the title, and then the NEXT imageUrl
matched = 0
for k, v in definitive_map.items():
    idx = text.find(k)
    if idx != -1:
        # find the next occurrence of imageUrl: "..."
        img_idx = text.find('imageUrl:', idx)
        if img_idx != -1:
            end_quote = text.find('"', text.find('"', img_idx) + 1)
            if end_quote != -1:
                # The substring to replace is text[img_idx:end_quote+1]
                old_img_str = text[img_idx:end_quote+1]
                text = text[:img_idx] + f'imageUrl: "/images/publications/{v}"' + text[end_quote+1:]
                matched += 1
                print(f"HARDLINKED: {k} -> {v}")
    else:
        print(f"WARNING: Title not found - {k}")

with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.write(text)

print(f"Injection Complete. {matched} articles permanently locked to their authentic original thumbnails.")
