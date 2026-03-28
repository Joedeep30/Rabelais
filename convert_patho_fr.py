import os
import glob
from PIL import Image

brain_dir = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d"
dest_dir = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\pathologies"

# Mapping from prefix to destination filename
mapping = {
    "patho_fr_diabetique": "diabetique.webp",
    "patho_fr_vasculaire": "vasculaire.webp",
    "patho_fr_coats": "coats.webp",
    "patho_fr_crsc": "crsc.webp",
    "patho_fr_best": "best.webp",
    "patho_fr_retinite": "retinite.webp",
    "patho_fr_dpv": "dpv.webp",
    "patho_fr_traction": "traction.webp",
    "patho_fr_dechirure": "dechirure.webp",
    "patho_fr_decollement": "decollement.webp",
    "patho_fr_trou": "trou.webp",
    "patho_fr_mer": "mer.webp",
    "patho_fr_secheresse": "secheresse.webp",
    "patho_fr_glaucome": "glaucome.webp",
    "patho_fr_keratocone": "keratocone.webp",
}

for prefix, dest_filename in mapping.items():
    search_pattern = os.path.join(brain_dir, f"{prefix}_*.png")
    matches = glob.glob(search_pattern)
    
    if matches:
        # Take the most recently modified file down to that prefix
        latest_file = max(matches, key=os.path.getmtime)
        output_path = os.path.join(dest_dir, dest_filename)
        
        try:
            with Image.open(latest_file) as img:
                img.save(output_path, "WEBP", quality=85)
            print(f"✅ Converted {os.path.basename(latest_file)} -> {dest_filename}")
        except Exception as e:
            print(f"❌ Error converting {latest_file}: {e}")
    else:
        print(f"⚠️ No matching files for {prefix}")

print("Done! All French illustrations injected into public folder.")
