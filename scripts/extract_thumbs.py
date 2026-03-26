import os, glob, subprocess, sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import fitz
except ImportError:
    install('PyMuPDF')
    import fitz

pdf_dir = "public/pdfs"
img_dir = "public/images/publications"

pdfs = glob.glob(os.path.join(pdf_dir, "*.pdf"))

for p in pdfs:
    try:
        doc = fitz.open(p)
        page = doc.load_page(0)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
        base = os.path.basename(p).replace(".pdf", "")
        out = os.path.join(img_dir, f"thumb_{base}.png")
        pix.save(out)
        print(f"Created {out}")
    except Exception as e:
        print(f"Error on {p}: {e}")
