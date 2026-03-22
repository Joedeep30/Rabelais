const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
    try {
        const response = await axios.get('https://centrerabelaislyon.fr/application-of-anterior-segment-oct-in-glaucoma/');
        const $ = cheerio.load(response.data);
        
        console.log("Images found on page:");
        $('img').each((i, img) => {
            const src = $(img).attr('src');
            // the user screenshot showed the author photo in the bottom
            // and the article thumbnail on the side
            console.log(src);
        });
    } catch (e) {
        console.error(e.message);
    }
})();
