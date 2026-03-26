import requests
from bs4 import BeautifulSoup
import json
import time

all_items = []
headers = {'User-Agent': 'Mozilla/5.0'}

for page in range(1, 9):
    url = f"https://centrerabelaislyon.fr/publications/page/{page}/" if page > 1 else "https://centrerabelaislyon.fr/publications/"
    try:
        r = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(r.content, 'html.parser')
        articles = soup.find_all('article')
        print(f"Page {page}: found {len(articles)} articles")
        
        for article in articles:
            # Title
            title_elem = article.find(class_="entry-title")
            if not title_elem:
                continue
            title = title_elem.text.strip()
            
            # Thumbnail
            thumb = ""
            media_elem = article.find(class_="entry-media")
            if media_elem:
                img = media_elem.find('img')
                if img and img.get('src'):
                    thumb = img.get('src')
            
            # Author photo
            author_photo = ""
            author_section = article.find(class_="author-avatar") # guessing class
            if not author_section:
                # search for any IMG inside text blocks that looks like an author photo
                # in screenshot 1: "AUTHORS" -> circle photo
                # "wp-image-something" or similar
                imgs = article.find_all('img')
                for i in imgs:
                    src = i.get('src', '')
                    if 'team' in src or 'Image-37' in src or 'Avatar' in src or 'post' in src:
                        # try to identify the author avatar from multiple imgs
                        pass
                # The author photo in Screenshot 1 was actually inside the article block!
                author_div = article.find('div', class_='author-info') or article.find('div', class_='post-author') or article.find(string="AUTHORS")
                if author_div:
                    # traverse up then down
                    p = author_div.parent if hasattr(author_div, 'parent') else author_div
                    aimg = getattr(p, 'find', lambda x: None)('img')
                    if aimg:
                        author_photo = aimg.get('src')
            
            # Just grab all images in the article block and figure it out
            all_imgs = [i.get('src') for i in article.find_all('img')]
            
            all_items.append({
                "title": title,
                "thumbnail": thumb,
                "all_imgs": all_imgs
            })
    except Exception as e:
        print(f"Error {page}: {e}")

with open("exact_mapping.json", "w", encoding="utf-8") as f:
    json.dump(all_items, f, indent=2)
print(f"Saved {len(all_items)} entries")
