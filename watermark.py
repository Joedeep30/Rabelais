import os
from PIL import Image, ImageDraw, ImageFont

# Path to the pathologies directory
directory = r"C:\Users\jeffo\Downloads\Rabelais-\public\images\pathologies"

# The 15 generated French webp files
files = [
    "diabetique.webp", "vasculaire.webp", "coats.webp", "crsc.webp", "best.webp",
    "retinite.webp", "dpv.webp", "traction.webp", "dechirure.webp", "decollement.webp",
    "trou.webp", "mer.webp", "secheresse.webp", "glaucome.webp", "keratocone.webp"
]

watermark_text = "© Centre Ophtalmologique Rabelais Lyon"

for filename in files:
    filepath = os.path.join(directory, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}, not found.")
        continue
    
    with Image.open(filepath) as img:
        img = img.convert("RGBA")
        
        # Make a blank image for the text
        txt = Image.new('RGBA', img.size, (255,255,255,0))
        
        try:
            # Arial or modern sans-serif
            font = ImageFont.truetype("arial.ttf", 35)
        except IOError:
            font = ImageFont.load_default()
            
        d = ImageDraw.Draw(txt)
        
        # Calculate text bounding box
        bbox = d.textbbox((0, 0), watermark_text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Position at bottom right
        x = img.size[0] - text_width - 25
        y = img.size[1] - text_height - 25
        
        # Draw background shadow for visibility on bright backgrounds
        d.text((x + 2, y + 2), watermark_text, font=font, fill=(0, 0, 0, 160))
        # Draw text with transparency
        d.text((x, y), watermark_text, font=font, fill=(255, 255, 255, 180))
        
        watermarked = Image.alpha_composite(img, txt)
        # Convert back to RGB to save as WebP
        watermarked = watermarked.convert("RGB")
        watermarked.save(filepath, "WEBP", quality=90)
        print(f"✅ Watermarked {filename}")

print("Done! All images have been watermarked.")
