import os
from PIL import Image

hero_dir = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\hero"
dest_dir = r"C:\Users\jeffo\Downloads\Rabelais-\thumbs\GBP_Illustrations"

# Map the real website photos to the killer SEO filenames
mapping = {
    # 1. The exterior/facade
    "cabinet-ophtalmologie-lyon-centre.webp": "centre-ophtalmologique-rabelais-facade-lyon.jpg",
    # 2. Medical team
    "equipe-medicale-ophtalmologiste-lyon.webp": "equipe-medicale-centre-ophtalmologique-rabelais.jpg",
    # 3. OCT / Imaging room
    "equipement-imagerie-oculaire.webp": "salle-oct-maculaire-centre-rabelais-lyon.jpg",
    # 4. Clinical studies / secondary
    "etudes-cliniques-recherche.webp": "dispositif-valeda-photobiomodulation-lyon.jpg",
    # 5. Waiting area / Reception
    "offre-de-soins-ophtalmologie.webp": "accueil-centre-rabelais-lyon-2.jpg",
    # 6. Random treatment room / IVT
    "traitements-maladies-retine-lyon.webp": "salle-injection-ivt-centre-rabelais-lyon.jpg",
    # 7. Additional views
    "pathologies-oculaires.webp": "laser-argon-plateau-technique-rabelais.jpg",
    "publications.webp": "salle-attente-centre-ophtalmologique-rabelais.jpg"
}

for src_name, dest_name in mapping.items():
    src_path = os.path.join(hero_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            with Image.open(src_path) as img:
                rgb_im = img.convert('RGB')
                rgb_im.save(dest_path, "JPEG", quality=95)
            print(f"✅ Created {dest_name}")
        except Exception as e:
            print(f"❌ Error converting {src_name}: {e}")
    else:
        print(f"⚠️ Source file {src_name} not found.")

print("Done preparing real-life website photos for GBP.")
