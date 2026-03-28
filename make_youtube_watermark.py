import urllib.request
try:
    from PIL import Image
except ImportError:
    import sys
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

logo_url = "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png"

try:
    urllib.request.urlretrieve(logo_url, "temp_logo.png")
    
    logo = Image.open("temp_logo.png").convert("RGBA")
    target_size = 150
    
    # We leave a 10px buffer so the logo doesn't touch the edges of the video perfectly
    ratio = min((target_size - 10) / logo.width, (target_size - 10) / logo.height)
    new_w = int(logo.width * ratio)
    new_h = int(logo.height * ratio)
    
    lanczos = getattr(Image, 'Resampling', Image).LANCZOS
    logo = logo.resize((new_w, new_h), lanczos)
    
    # Create a 150x150 FULLY TRANSPARENT square canvas
    watermark = Image.new("RGBA", (target_size, target_size), (255, 255, 255, 0))
    
    # Center the logo in the transparent square
    x = (target_size - new_w) // 2
    y = (target_size - new_h) // 2
    watermark.paste(logo, (x, y), logo)
    
    out_path = "C:/Users/jeffo/Downloads/Rabelais-/YOUTUBE_WATERMARK.png"
    watermark.save(out_path, format="PNG")
    print("SUCCESS: Watermark generated at " + out_path)

except Exception as e:
    print(f"Error: {e}")
