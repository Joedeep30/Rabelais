import os
import glob
from PIL import Image, ImageDraw, ImageFont

brain_dir = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d"
dest_dir = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\pathologies"

# Mapping from prefix to destination filename
mapping = {
    "anat_fr_oeil": "oeil.webp",
    "anat_fr_cornee": "cornee.webp",
    "anat_fr_iris": "iris.webp",
    "anat_fr_cristallin": "cristallin.webp",
    "anat_fr_vitre": "vitre.webp",
    "anat_fr_retine": "retine.webp",
}

watermark_text = "© Centre Ophtalmologique Rabelais Lyon"

for prefix, dest_filename in mapping.items():
    search_pattern = os.path.join(brain_dir, f"{prefix}_*.png")
    matches = glob.glob(search_pattern)
    
    if matches:
        latest_file = max(matches, key=os.path.getmtime)
        output_path = os.path.join(dest_dir, dest_filename)
        
        try:
            with Image.open(latest_file) as img:
                img = img.convert("RGBA")
                txt = Image.new('RGBA', img.size, (255,255,255,0))
                try:
                    font = ImageFont.truetype("arial.ttf", 35)
                except IOError:
                    font = ImageFont.load_default()
                d = ImageDraw.Draw(txt)
                
                bbox = d.textbbox((0, 0), watermark_text, font=font)
                text_width, text_height = bbox[2] - bbox[0], bbox[3] - bbox[1]
                x, y = img.size[0] - text_width - 25, img.size[1] - text_height - 25
                
                d.text((x + 2, y + 2), watermark_text, font=font, fill=(0, 0, 0, 160))
                d.text((x, y), watermark_text, font=font, fill=(255, 255, 255, 180))
                
                watermarked = Image.alpha_composite(img, txt).convert("RGB")
                watermarked.save(output_path, "WEBP", quality=90)
            print(f"✅ Converted and watermarked {dest_filename}")
        except Exception as e:
            print(f"❌ Error processing {latest_file}: {e}")
    else:
        print(f"⚠️ No matching files for {prefix}")

print("Done! All 6 anatomical illustrations processed.")
