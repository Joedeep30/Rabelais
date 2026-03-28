import os
import glob
from PIL import Image, ImageDraw, ImageFont

brain_dir = r"C:\Users\jeffo\.gemini\antigravity\brain\c800707c-520d-42b7-9307-0383dd04682d"
dest_dir = r"C:\Users\jeffo\Downloads\Rabelais-\thumbs\GBP_Illustrations"

watermark_text = "© Centre Ophtalmologique Rabelais Lyon"

search_pattern = os.path.join(brain_dir, "patho_fr_dmla_*.png")
matches = glob.glob(search_pattern)

if matches:
    latest_file = max(matches, key=os.path.getmtime)
    output_path = os.path.join(dest_dir, "dmla.jpg")
    
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
        watermarked.save(output_path, "JPEG", quality=95)
        print(f"✅ Converted and watermarked dmla.jpg")
else:
    print(f"⚠️ No matches for dmla")
