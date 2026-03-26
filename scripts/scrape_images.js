const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = 'https://centrerabelaislyon.fr' + loc;
        fetch(loc).then(resolve).catch(reject);
        return;
      }
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = 'https://centrerabelaislyon.fr' + loc;
        downloadFile(loc, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error('HTTP ' + res.statusCode)); return; }
      const ws = fs.createWriteStream(filepath);
      res.pipe(ws);
      ws.on('finish', () => { ws.close(); resolve(); });
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function main() {
  const pages = [];
  for (let i = 1; i <= 8; i++) {
    const url = i === 1 
      ? 'https://centrerabelaislyon.fr/publications/' 
      : `https://centrerabelaislyon.fr/publications/page/${i}/`;
    try {
      console.log(`Fetching page ${i}...`);
      const html = await fetch(url);
      pages.push(html);
    } catch (e) {
      console.log(`  Failed page ${i}: ${e.message}`);
    }
  }

  // Extract publication blocks: each has a featured image and a title
  // WordPress format: <article> blocks with <img> and <h2> tags
  const allPubs = [];
  
  for (const html of pages) {
    // Extract article blocks - the WP theme uses entry-thumb for images and entry-title for titles
    // Pattern: find consecutive image + title patterns
    const entryPattern = /<img[^>]*class="[^"]*entry-thumb[^"]*"[^>]*src="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*class="[^"]*entry-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>/gi;
    let match;
    while ((match = entryPattern.exec(html)) !== null) {
      allPubs.push({ imgUrl: match[1], title: match[2].trim() });
    }
    
    // Also try alternative pattern
    const altPattern = /<div[^>]*class="[^"]*post-thumbnail[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"[\s\S]*?<h[23][^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>/gi;
    while ((match = altPattern.exec(html)) !== null) {
      allPubs.push({ imgUrl: match[1], title: match[2].trim() });
    }

    // Try another common WP pattern
    const wpPattern = /data-bg="([^"]+)"[\s\S]*?<h[23][^>]*class="[^"]*entry-title[^"]*"[^>]*>\s*<a[^>]*>([^<]+)<\/a>/gi;
    while ((match = wpPattern.exec(html)) !== null) {
      allPubs.push({ imgUrl: match[1], title: match[2].trim() });
    }
  }

  // Deduplicate by title
  const seen = new Set();
  const unique = allPubs.filter(p => {
    const key = p.title.toLowerCase().substring(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`\nFound ${unique.length} publications with images:`);
  unique.forEach((p, i) => {
    console.log(`${i+1}. "${p.title.substring(0, 60)}..."`);
    console.log(`   IMG: ${p.imgUrl}`);
  });

  // If no results from patterns, try a raw dump of image URLs
  if (unique.length === 0) {
    console.log('\nNo structured patterns found. Trying raw image extraction...');
    for (const html of pages) {
      const rawImgPattern = /src="(https?:\/\/centrerabelaislyon\.fr\/wp-content\/uploads\/[^"]+\.(jpg|jpeg|png))"/gi;
      let m;
      const imgs = [];
      while ((m = rawImgPattern.exec(html)) !== null) {
        if (!m[1].includes('logo') && !m[1].includes('icon') && !m[1].includes('slider') && !m[1].includes('banner') && !m[1].includes('map') && !m[1].includes('-150x') && !m[1].includes('-300x')) {
          imgs.push(m[1]);
        }
      }
      console.log(`  Page images: ${imgs.length}`);
      imgs.forEach(u => console.log(`    ${u}`));
    }
  }
}

main().catch(e => console.error(e));
