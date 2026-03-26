const fs = require('fs');

const path = 'src/app/publications/PublicationsContent.tsx';
let content = fs.readFileSync(path, 'utf8');

// Accurate list of French articles from the 45 titles
const frenchTitles = [
  "Place de l'OCT dans le bilan de chirurgie réfractive",
  "Le rapport de la société Française d'ophtalmologie sur le thème de l'imagerie par OCT",
  "Dégénérescence kystique de la couche nucléaire interne chez les patients glaucomateux",
  "Implant de Molteno suturé : intérêt de l'imagerie OCT Visante",
  "Co Auteur de l'Encyclopédie RÉTINE",
  "La Nouvelle Imagerie du Segment Antérieur BSOF 2009",
  "L'imagerie multimodale dans la DMLA : ne pas se limiter à l'OCT",
  "Manuale pratico di Angiografia OCT - Angiografia OCT non invasiva, senza coloranti", // Wait, this is Italian! Let's examine: "suturé" is French, "RÉTINE". 
  // Let's just use regex for typical French accents or common French words
  "L'angio-OCT en pratique",
  "ANGIO-OCT : Premier retour d'expérience",
  "ANGIO-OCT : aspects techniques et appareils disponibles en 2015",
  "OCT : Quelles Nouveautés en 2015",
  "Imagerie en ophtalmologie",
  "Co Auteur du rapport sur la DMLA de la SFO"
];

const isFrench = (title) => {
  if (title.includes('🇫🇷')) return false; // already flagged
  
  // Checking exact match from our curated list
  if (frenchTitles.some(t => title.includes(t))) return true;
  
  // Checking for common French words
  const lower = title.toLowerCase();
  const frWords = [' dans ', ' le ', " l'", ' de ', " d'", ' sur '];
  let matches = 0;
  frWords.forEach(w => { if (lower.includes(w)) matches++; });
  
  // Exclude explicit Italian words if any
  if (lower.includes('manuale') || lower.includes('pratico')) return false;

  return matches >= 2 || title.includes("é") || title.includes("è") || title.includes("à") || title.includes("ç") || title.includes("î");
};

const lines = content.split('\n');
let flagCount = 0;
const newLines = lines.map(line => {
  if (line.trim().startsWith('title: "') || line.trim().startsWith("title: '")) {
    const match = line.match(/title:\s*["'](.*)["'],?/);
    if (match) {
      const title = match[1];
      if (isFrench(title) && !title.includes('🇫🇷')) {
        console.log(`Flagging: ${title}`);
        flagCount++;
        return line.replace(title, `${title} 🇫🇷`);
      }
    }
  }
  return line;
});

fs.writeFileSync(path, newLines.join('\n'), 'utf8');
console.log(`Done. Flagged ${flagCount} titles.`);
