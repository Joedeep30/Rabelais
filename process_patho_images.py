import os
from PIL import Image

artifacts_dir = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d"
images = {
    "patho_iris_1774523875007.png": "illustration-iris-anatomie.webp",
    "patho_cristallin_1774523890765.png": "illustration-cristallin-anatomie.webp",
    "patho_vitre_1774523909012.png": "illustration-corps-vitre-anatomie.webp",
    "patho_retine_1774523926827.png": "illustration-retine-anatomie.webp"
}

public_dir = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\pathologies"

for src, dest in images.items():
    img_path = os.path.join(artifacts_dir, src)
    if os.path.exists(img_path):
        img = Image.open(img_path)
        dest_path = os.path.join(public_dir, dest)
        img.save(dest_path, "WEBP", quality=85)
        print(f"Saved {dest}")
    else:
        print(f"Not found: {src}")
