import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plateau Technique & Équipement | Centre Ophtalmologique Rabelais Lyon',
  description: 'Le Centre Ophtalmologique Rabelais est équipé de matériel d\'imagerie dernière génération : OCT Spectralis, Angiographe HRA Heidelberg, Rétinographie grand champ Eidon.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/plateau-technique'
  }
};

export default function PlateauTechniquePage() {
  const GALLERY = [
    {
      title: "3 Angiographes HRA Heidelberg",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla2.jpg"
    },
    {
      title: "Rétinographe Canon numérisé",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Rétinographe.png"
    },
    {
      title: "3 OCT Spectralis, Heidelberg",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla1.jpg"
    },
    {
      title: "Champ Visuel Humphrey, Zeiss",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla3.jpg"
    },
    {
      title: "Rétinographe Eidon de Centervue",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2025/12/iCare_EIDON.png"
    },
    {
      title: "Rétinographe grand champ Eidon AD UWF",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla6.jpg"
    },
    {
      title: "Solix Expert",
      src: "https://centrerabelaislyon.fr/wp-content/uploads/2025/12/VX65-Product-page-picture-900x900-px-4.webp"
    }
  ];

  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-start overflow-hidden mt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/equipement-imagerie-oculaire.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 h-full">
          <h1 className="text-white text-[32px] md:text-[52px] font-[Gotham] font-light leading-[1.1] tracking-[2px] mb-[20px] uppercase">
            Notre <strong className="font-bold">Plateau Technique</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
          <p className="text-white/90 text-[16px] md:text-[18px] font-light max-w-2xl leading-relaxed mt-6">
            Des équipements de pointe pour le diagnostic précis, le suivi régulier et le traitement chirurgical des maladies rétiniennes
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto w-full">
        <div className="mb-[60px] text-center">
          <p className="text-[#888888] text-[18px] md:text-[22px] font-light leading-[1.8]">
            Le Centre Ophtalmologique Rabelais dispose d’appareillages de pointe dans le domaine de l’exploration oculaire pour garantir une précision diagnostique absolue.
          </p>
        </div>

        {/* --- Exact Image Gallery Replication --- */}
        <div className="mb-16">
          {/* Top block: Left tall image, Right two stacked images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Left Box (Tall) */}
            <div className="flex flex-col border border-[#e5e5e5] bg-white shadow-sm">
              <div className="flex-grow flex items-center justify-center p-2 h-full">
                <img 
                  src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla1.jpg" 
                  alt="3 Angiographes HRA Heidelberg" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="bg-[#003399] text-white py-2 px-3 text-center">
                <span className="text-[16px] font-medium tracking-wide">3 Angiographes HRA Heidelberg</span>
              </div>
            </div>

            {/* Right Box (Stacked) */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col border border-[#e5e5e5] bg-white shadow-sm flex-1">
                <div className="flex-grow flex items-center justify-center p-2 h-full">
                  <img 
                    src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla2.jpg" 
                    alt="Rétinographe Canon numérisé" 
                    className="w-full h-full object-contain mix-blend-multiply" 
                    loading="lazy" 
                  />
                </div>
                <div className="bg-[#003399] text-white py-2 px-3 text-center">
                  <span className="text-[16px] font-medium tracking-wide">Rétinographe Canon numérisé</span>
                </div>
              </div>
              <div className="flex flex-col border border-[#e5e5e5] bg-white shadow-sm flex-1">
                <div className="flex-grow flex items-center justify-center p-2 h-full">
                  <img 
                    src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla3.jpg" 
                    alt="3 OCT Spectralis, Heidelberg" 
                    className="w-full h-full object-cover mix-blend-multiply bg-[#f5f5f5]" 
                    loading="lazy" 
                  />
                </div>
                <div className="bg-[#003399] text-white py-2 px-3 text-center">
                  <span className="text-[16px] font-medium tracking-wide">3 OCT Spectralis, Heidelberg</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Grid: 2 columns matching the remaining elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col border border-[#e5e5e5] bg-[#f8f8f8] shadow-sm">
              <div className="h-[280px] w-full bg-white flex items-center justify-center p-4">
                <img 
                  src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla6.jpg" 
                  alt="Champ Visuel Humphrey, Zeiss" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                  loading="lazy" 
                />
              </div>
              <div className="bg-[#003399] text-white py-2 px-3 text-center">
                <span className="text-[16px] font-medium tracking-wide">Champ Visuel Humphrey, Zeiss</span>
              </div>
            </div>

            <div className="flex flex-col border border-[#e5e5e5] bg-[#f8f8f8] shadow-sm">
              <div className="h-[280px] w-full bg-[#f6f6f6] flex items-center justify-center p-4">
                <img 
                  src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Rétinographe.png" 
                  alt="Rétinographe Eidon de Centervue" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                  loading="lazy" 
                />
              </div>
              <div className="bg-[#003399] text-white py-2 px-3 text-center">
                <span className="text-[16px] font-medium tracking-wide">Rétinographe Eidon de Centervue</span>
              </div>
            </div>

            <div className="flex flex-col border border-[#e5e5e5] bg-[#f8f8f8] shadow-sm">
              <div className="h-[280px] w-full bg-[#f6f6f6] flex items-center justify-center p-4">
                <img 
                  src="https://centrerabelaislyon.fr/wp-content/uploads/2025/12/iCare_EIDON.png" 
                  alt="Rétinographe grand champ Eidon AD UWF" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                  loading="lazy" 
                />
              </div>
              <div className="bg-[#003399] text-white py-2 px-3 text-center">
                <span className="text-[16px] font-medium tracking-wide">Rétinographe grand champ Eidon AD UWF</span>
              </div>
            </div>

            <div className="flex flex-col border border-[#e5e5e5] bg-[#f8f8f8] shadow-sm">
              <div className="h-[280px] w-full bg-[#f6f6f6] flex items-center justify-center p-4">
                <img 
                  src="https://centrerabelaislyon.fr/wp-content/uploads/2025/12/VX65-Product-page-picture-900x900-px-4.webp" 
                  alt="Solix Expert" 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                  loading="lazy" 
                />
              </div>
              <div className="bg-[#003399] text-white py-2 px-3 text-center">
                <span className="text-[16px] font-medium tracking-wide">Solix Expert</span>
              </div>
            </div>

          </div>
        </div>

        {/* --- Text List Layout (Matching exactly the grey block screenshots) --- */}
        <div className="space-y-4">
          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • RÉTINOGRAPHIE COULEUR :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              - Rétinographe Canon numérisé<br />
              - Rétinographe Confocal SLO EIDON avec montage composite.
            </p>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • ANGIOGRAPHIE NUMÉRISÉE CONFOCALE HRA, HEIDELBERG :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              - Angiographie à la fluorescéine<br />
              - Angiographie au vert d’indocyanine (ICG)
            </p>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • OCT MACULAIRE et OCT DU GLAUCOME :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              Spectralis, Heidelberg<br />
              XR AVANTI, OPTOVUE avec Module ANGIO-OCT<br />
              Cirrus HD 5000, ZEISS<br />
              Solix Expert
            </p>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • OCT DE CORNEE et PACHYMETRIE :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              XR AVANTI, OPTOVUE (Pachymétrie Cornéenne totale et de l’épithélium)
            </p>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • ÉCHOGRAPHIE OCULAIRE :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              AVISO, QUANTEL MEDICAL :<br />
              - Échographie en Mode B (Sonde de 10Mhz et 20 Mhz)<br />
              - Échographie du Segment Antérieur : UBM
            </p>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • BLOC IVT (injection intra-vitréenne) 
            </h4>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • SENSIBILITÉ AUX CONTRASTES INFORMATISÉS :
            </h4>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • BILAN BASSE VISION :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              Conseil et adaptation optique spécifique à l’atteinte rétinienne
            </p>
          </div>

          <div className="bg-[#fcfcfc] border border-gray-100 p-6">
            <h4 className="text-[#888888] font-bold text-[15px] uppercase tracking-wider mb-2">
              • RETINOGRAPHIE ET ANGIOGRAPHIE CHAMP LARGE 200° :
            </h4>
            <p className="text-[#a0a0a0] text-[15px] font-light leading-[1.8]">
              Appareil California, Optos : Rétinographie, Angiographie à la Fluorescéine et ICG à Champ large
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[12px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>

      </section>
    </main>
  );
}
