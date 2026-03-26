import re
import json
import os

all_pubs = []

for i in range(0, 9):
    file_path = f"temp_pubs_{i}.html"
    if not os.path.exists(file_path): continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        html = f.read()
        
    # The structure of the article block: <article ...> ... </article>
    # We can split by <article and process each
    blocks = html.split("<article")
    for b in blocks[1:]:
        # Find title
        title_m = re.search(r'<h2 class="entry-title"[^>]*><a[^>]*>(.*?)</a></h2>', b)
        if not title_m:
            continue
        title = title_m.group(1).strip()
        
        # Find thumbnail within entry-media
        thumb = ""
        media_idx = b.find('class="entry-media"')
        if media_idx != -1:
            img_m = re.search(r'<img[^>]+src="([^"]+)"', b[media_idx:])
            if img_m:
                thumb = img_m.group(1).strip()
                
        all_pubs.append({
            "title": title,
            "thumbnail": thumb
        })

with open("exact_mapping.json", "w", encoding="utf-8") as f:
    json.dump(all_pubs, f, indent=2)

print(f"Parsed {len(all_pubs)} entries locally.")
