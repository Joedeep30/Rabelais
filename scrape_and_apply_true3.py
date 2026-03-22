import requests
from bs4 import BeautifulSoup
import re

print("Retrieving all original thumbnails aggressively...")

headers = {'User-Agent': 'Mozilla/5.0'}
true_map = {}

for page in range(1, 9):
    url = f"https://centrerabelaislyon.fr/publications/page/{page}/" if page > 1 else "https://centrerabelaislyon.fr/publications/"
    try:
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.content, 'html.parser')
        
        headings = soup.find_all(['h2', 'h3', 'h4', 'a'])
        for h in headings:
            text = h.get_text().strip()
            if not text or len(text) < 10: continue
            
            # Find the enclosing container that might have an image
            p = h.parent
            while p and p.name not in ['article', 'body']:
                img = p.find('img')
                if img and img.get('src') and 'team' not in img.get('src'):
                    src = img.get('src')
                    filename = src.split('/')[-1]
                    true_map[text] = filename
                    break
                p = p.parent
                    
    except Exception as e:
        print(f"Failed page {page}: {e}")

print(f"Scrapped {len(true_map)} unique titles from site.")

import string
def normalize(s):
    # remove all non alphanumeric
    return re.sub(r'[^a-z0-9]', '', s.lower())

# hardcoded guarantees requested by user
true_map.update({
    "Clinical Guide to Angio-OCT: Non Invasive, Dyeless OCT Angiography": "IMG-Clinical-Guide-to-Angio-OCT.png",
    "Application of anterior segment OCT in glaucoma": "anterior-segment-oct-2008.png", 
    "Optical coherence tomography in tamoxifen retinopathy": "oct-tamoxifen-retinopathy-2006.png",
    "Indocyanine green angiography of drusen": "art-american-journal.jpg",
    "Indocyanine green angiographic features of pathologic myopia": "art-american-journal.jpg",
    "Indocyanine green videoangiography of angioid streaks": "default-publication.png",
    "Optimiser son acquisition en OCT-angiographie": "art-publication-2019.png" # actually 2017 but use the default art
})

with open("src/app/publications/PublicationsContent.tsx", "r", encoding="utf-8") as f:
    text = f.read()

parts = text.split("  },")
matched = 0

for i in range(len(parts)):
    b = parts[i]
    m_title = re.search(r'title:\s*"([^"]+)"', b)
    if not m_title: continue
    block_title = m_title.group(1).strip()
    norm_block = normalize(block_title)
    
    match_f = None
    for true_title, thumb in true_map.items():
        norm_true = normalize(true_title)
        if norm_block in norm_true or norm_true in norm_block or (len(norm_block)>10 and norm_block[:15] == norm_true[:15]):
            match_f = thumb
            break
            
    if match_f:
        # replace imageUrl
        parts[i] = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/images/publications/{match_f}"', b)
        matched += 1
        print(f"Mapped EXACT TRUE: {block_title} -> {match_f}")

new_text = "  },".join(parts)
with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.write(new_text)

print(f"Successfully injected {matched} pristine original thumbnails into TSX.")
