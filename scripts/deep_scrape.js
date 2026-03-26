const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const excludeImgs = [
    'ai1.png', 'line2.png', 'map.png', 'Publication icon.jpg', 'Publications1.jpg', 'e.png', 'f.png', 'i.png', 't2-34whis4judpupmxcjz4u0w.jpg'
];

async function scrapePost(url) {
    try {
        const res = await axios.get(url);
        const $ = cheerio.load(res.data);
        
        // Find the article tag or main content area
        const content = $('.entry-content, article');
        let images = [];
        
        content.find('img').each((i, img) => {
            let src = $(img).attr('src');
            if (src && !excludeImgs.some(ex => src.includes(ex))) {
                images.push(src);
            }
        });
        
        // Author photo might be in an author bio section or just in the content
        return images;
    } catch (e) {
        console.error("Error fetching " + url + " : " + e.message);
        return [];
    }
}

(async () => {
    let allLinks = [];
    // Read the listing pages to get all post links
    for (let i = 0; i <= 8; i++) {
        try {
            let html = fs.readFileSync('temp_pubs_' + i + '.html', 'utf8');
            let $ = cheerio.load(html);
            $('h2.entry-title a').each((_, a) => {
                let href = $(a).attr('href');
                let title = $(a).text().trim();
                allLinks.push({title, url: href});
            });
        } catch(e) {}
    }
    
    console.log("Found " + allLinks.length + " distinct publication links. Scraping...");
    
    let results = [];
    for (let item of allLinks) {
        const imgs = await scrapePost(item.url);
        // Clean duplicates
        const uniqueImgs = [...new Set(imgs)];
        results.push({title: item.title, url: item.url, images: uniqueImgs});
        console.log("Scraped: " + item.title + " -> Found " + uniqueImgs.length + " unique images");
    }
    
    fs.writeFileSync('true_images.json', JSON.stringify(results, null, 2));
    console.log("Saved to true_images.json");
})();
