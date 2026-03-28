import urllib.request
try:
    from PIL import Image, ImageDraw
except ImportError:
    import sys
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageDraw

logo_url = "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png"
bg_url = "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg"

print("Downloading authentic website assets...")
try:
    urllib.request.urlretrieve(logo_url, "temp_logo.png")
    urllib.request.urlretrieve(bg_url, "temp_bg.jpg")

    bg = Image.open("temp_bg.jpg").convert("RGBA")
    tgt_w, tgt_h = 2560, 1440
    bg_ratio = bg.width / bg.height
    tgt_ratio = tgt_w / tgt_h

    if bg_ratio > tgt_ratio:
        new_h = tgt_h
        new_w = int(new_h * bg_ratio)
    else:
        new_w = tgt_w
        new_h = int(new_w / bg_ratio)

    lanczos = getattr(Image, 'Resampling', Image).LANCZOS
    bg = bg.resize((new_w, new_h), lanczos)

    left = (new_w - tgt_w) // 2
    top = (new_h - tgt_h) // 2
    bg = bg.crop((left, top, left + tgt_w, top + tgt_h))

    # Dark blue Rabelais overlay at 75% opacity to make the logo pop
    overlay = Image.new("RGBA", (tgt_w, tgt_h), (0, 51, 153, 190))
    bg = Image.alpha_composite(bg, overlay)

    logo = Image.open("temp_logo.png").convert("RGBA")
    # Resize logo to fit exactly within YouTube's mobile/desktop 'Safe Area'
    logo_w = 600
    logo_h = int(logo.height * (logo_w / logo.width))
    logo = logo.resize((logo_w, logo_h), lanczos)

    logo_x = (tgt_w - logo_w) // 2
    logo_y = (tgt_h - logo_h) // 2
    bg.paste(logo, (logo_x, logo_y), logo)

    out_path = "C:/Users/jeffo/Downloads/Rabelais-/YOUTUBE_BANNER_OFFICIEL.jpg"
    bg.convert("RGB").save(out_path, quality=95)
    print("SUCCESS: Image generated at " + out_path)
except Exception as e:
    print(f"Error: {e}")
