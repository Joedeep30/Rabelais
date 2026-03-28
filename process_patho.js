
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const files = ["patho_best_1774566994444.png","patho_coats_1774566967618.png","patho_cornee_1774524035704.png","patho_cristallin_1774523890765.png","patho_crsc_1774566980634.png","patho_dechirure_1774567073966.png","patho_decollement_1774567087896.png","patho_diabetique_1774566943380.png","patho_dpv_1774567044423.png","patho_glaucome_1774567156876.png","patho_iris_1774523875007.png","patho_keratocone_1774567169855.png","patho_mer_1774567131396.png","patho_oeil_complet_1774524918480.png","patho_retine_1774523926827.png","patho_retinite_1774567030452.png","patho_secheresse_1774567144479.png","patho_traction_1774567057197.png","patho_trou_1774567118706.png","patho_vasculaire_1774566954919.png","patho_vitre_1774523909012.png"];
const brainDir = "C:/Users/jeffo/.gemini/antigravity/brain/c800707c-520d-42b7-9307-0383dd04682d";
const targetDir = "C:/Users/jeffo/Downloads/Rabelais-/public/images/pathologies";

async function run() {
    for (const file of files) {
        const src = path.join(brainDir, file);
        let baseName = file.replace('patho_', '').split('_')[0];
        // Handle parts like 'trou', 'mer', 'secheresse'
        if (file.includes('patho_mer')) baseName = 'mer';
        else if (file.includes('patho_trou')) baseName = 'trou';
        else if (file.includes('patho_secheresse')) baseName = 'secheresse';
        else if (file.includes('patho_glaucome')) baseName = 'glaucome';
        else if (file.includes('patho_keratocone')) baseName = 'keratocone';
        
        const dest = path.join(targetDir, baseName + '.webp');
        
        await sharp(src)
            .resize(800, 800, { fit: 'cover' })
            .webp({ quality: 85 })
            .toFile(dest);
        console.log('Processed', dest);
    }
}
run();
