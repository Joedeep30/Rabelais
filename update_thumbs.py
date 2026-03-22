import re, os

with open('src/app/publications/PublicationsContent.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    block = match.group(0)
    # Check if this block has a pdfUrl
    m = re.search(r'pdfUrl:\s*"\/pdfs\/([^"]+)\.pdf"', block)
    if m:
        pdf_name = m.group(1)
        if os.path.exists(f'public/images/publications/thumb_{pdf_name}.png'):
            # Replace imageUrl inside this block
            block = re.sub(r'imageUrl:\s*"[^"]+"', f'imageUrl: "/images/publications/thumb_{pdf_name}.png"', block)
    return block

# Find objects { title... }
new_content = re.sub(r'{\s*title:.*?(?=\n\s*},|\n\s*}\s*])', replacer, content, flags=re.DOTALL)

with open('src/app/publications/PublicationsContent.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated with Python!")
