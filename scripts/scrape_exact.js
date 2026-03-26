const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeListingPage(pageNumber) {
    const url = pageNumber === 1 
        ? 'https://centrerabelaislyon.fr/publications/' 
        : `https://centrerabelaislyon.fr/publications/page/${pageNumber}/`;
        
    try {
        const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const $ = cheerio.load(res.data);
        
        const pageItems = [];
        
        // Find each publication block. On the original site, they reside within an <article> usually
        $('article.post').each((i, el) => {
            const title = $(el).find('.entry-title').text().trim();
            
            // The thumbnail is usually inside .entry-media or similar
            const thumbImg = $(el).find('.entry-media img').attr('src');
            
            // The author photo might be inside another block, let's look for anything that resembles "authors"
            // If the original site doesn't have authors on the listing page, then the thumbImg is enough
            
            if (title && thumbImg) {
                pageItems.push({
                    title,
                    thumbnail: thumbImg
                });
            }
        });
        
        return pageItems;
    } catch (e) {
        console.error(`Page ${pageNumber} failed: ${e.message}`);
        return [];
    }
}

(async () => {
    let allData = [];
    for (let i = 1; i <= 8; i++) {
        console.log(`Scraping page ${i}...`);
        const items = await scrapeListingPage(i);
        allData = allData.concat(items);
    }
    
    fs.writeFileSync('exact_mapping.json', JSON.stringify(allData, null, 2));
    console.log(`Successfully mapped ${allData.length} true thumbnails from the original site.`);
})();
