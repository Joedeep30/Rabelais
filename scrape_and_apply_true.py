import requests
from bs4 import BeautifulSoup
import re
import os

print("Scraping live site for true image mapping...")
headers = {'User-Agent': 'Mozilla/5.0'}
true_map = {}

for page in range(1, 9):
    url = f"https://centrerabelaislyon.fr/publications/page/{page}/" if page > 1 else "https://centrerabelaislyon.fr/publications/"
    try:
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.content, 'html.parser')
        
        # Look for <article> or the actual publication blocks. 
        # Actually, let's just find all <h2 class="entry-title"> and their closest image
        posts = soup.find_all('article')
        for post in posts:
            title_el = post.find(class_='entry-title')
            if not title_el: continue
            title = title_el.text.strip().replace(' ', ' ')
            
            # Find thumbnail
            media = post.find(class_='entry-media')
            if media:
                img = media.find('img')
                if img and img.get('src'):
                    src = img.get('src')
                    # Get filename
                    filename = src.split('/')[-1]
                    true_map[title] = filename
            
    except Exception as e:
        print(f"Failed page {page}: {e}")

print(f"Scraped {len(true_map)} true thumbnail mappings.")

# Now apply to PublicationsContent.tsx
with open("src/app/publications/PublicationsContent.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Restore defaultAuthor to pristine first
text = re.sub(
    r'(const defaultAuthor: AuthorDetails = \{[^}]*imageUrl:\s*)"[^"]+"',
    r'\1"/images/team/maddalena-quaranta-thumb.jpg"',
    text
)

# Apply correct thumbnails
parts = text.split("  },")
matched = 0

for i in range(len(parts)):
    # Extract title from block
    b = parts[i]
    m_title = re.search(r'title:\s*"([^"]+)"', b)
    if not m_title: continue
    block_title = m_title.group(1).strip()
    
    # Fuzzy match with scraped map
    for true_title, thumb in true_map.items():
        if block_title.lower() in true_title.lower() or true_title.lower() in block_title.lower() or block_title[:20].lower() == true_title[:20].lower():
            # if we found a match, replace the imageUrl
            parts[i] = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/images/publications/{thumb}"', b)
            matched += 1
            break

new_text = "  },".join(parts)
with open("src/app/publications/PublicationsContent.tsx", "w", encoding="utf-8") as f:
    f.write(new_text)

print(f"Successfully injected {matched} pristine original thumbnails.")
