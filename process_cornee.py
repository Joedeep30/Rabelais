import os
from PIL import Image

artifacts_dir = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d"
img_path = os.path.join(artifacts_dir, "patho_cornee_1774524035704.png")
public_dir = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\pathologies"
dest_path = os.path.join(public_dir, "illustration-cornee-anatomie.webp")

if os.path.exists(img_path):
    img = Image.open(img_path)
    img.save(dest_path, "WEBP", quality=85)
    print("Saved Cornea WebP")
else:
    print(f"Not found: {img_path}")
