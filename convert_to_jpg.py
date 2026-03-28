import os
import glob
from PIL import Image

thumbs_dir = r"C:\Users\jeffo\Downloads\Rabelais-\thumbs\GBP_Illustrations"
webp_files = glob.glob(os.path.join(thumbs_dir, "*.webp"))

for file_path in webp_files:
    try:
        with Image.open(file_path) as img:
            rgb_im = img.convert('RGB')
            new_path = file_path.replace(".webp", ".jpg")
            rgb_im.save(new_path, "JPEG", quality=95)
        # remove the webp
        os.remove(file_path)
        print(f"✅ Converted to JPG: {os.path.basename(new_path)}")
    except Exception as e:
        print(f"❌ Error converting {file_path}: {e}")

print("Done converting WebP to JPG for GBP Posts.")
