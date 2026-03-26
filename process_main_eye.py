import os
from PIL import Image

artifacts_dir = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d"
img_path = os.path.join(artifacts_dir, "patho_oeil_complet_1774524918480.png")
public_dir = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\pathologies"
dest_path = os.path.join(public_dir, "illustration-de-loeil-normal.webp")

if os.path.exists(img_path):
    img = Image.open(img_path)
    img.save(dest_path, "WEBP", quality=85)
    print("Saved Eye WebP")
else:
    print(f"Not found: {img_path}")
