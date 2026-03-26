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
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner11.jpg"
            alt="Plateau Technique et Imagerie du Centre Ophtalmologique Rabelais"
            title="Plateau Technique Ophtalmologie Lyon"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Notre <strong className="font-bold">Plateau Technique</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="mb-[60px] text-center">
          <p className="text-[#888888] text-[18px] md:text-[22px] font-light leading-[1.8] max-w-3xl mx-auto">
            Le Centre Ophtalmologique Rabelais dispose d’appareillages de pointe dans le domaine de l’exploration et de l'imagerie oculaire pour garantir une précision diagnostique absolue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Imagerie List */}
          <div className="bg-[#f8f8f8] p-10 rounded-sm shadow-sm border-t-4 border-[#003399]">
            <h3 className="text-[#003399] text-[22px] font-bold uppercase tracking-wider mb-8">
              Imagerie & Exploration
            </h3>
            
            <div className="space-y-6">
              <div className="mb-10">
                <h4 className="font-bold text-[#888888] text-[16px] mb-4 uppercase tracking-wide">Rétinographie Couleur</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <img src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Rétinographe.png" alt="Rétinographe Canon" className="rounded-xl shadow-md w-full h-auto object-contain bg-white" loading="lazy" />
                  <img src="https://centrerabelaislyon.fr/wp-content/uploads/2025/12/iCare_EIDON.png" alt="Rétinographe EIDON" className="rounded-xl shadow-md w-full h-auto object-contain bg-white" loading="lazy" />
                </div>
                <img src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla6.jpg" alt="Optos California" className="rounded-xl shadow-sm w-full h-auto mb-6" loading="lazy" />
                <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-relaxed mt-4 space-y-1">
                  <li>Rétinographe Canon numérisé</li>
                  <li>Rétinographe Confocal SLO EIDON</li>
                  <li>Optos California (Rétinographie & Angiographie Champ Large 200°)</li>
                </ul>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-[#888888] text-[16px] mb-4 uppercase tracking-wide">Angiographie Numérisée</h4>
                <img src="https://centrerabelaislyon.fr/wp-content/uploads/2015/11/Rétinographe.png" alt="Salle Imagerie Angiographie Canon" className="rounded-xl shadow-sm w-full h-auto mb-6" loading="lazy" />
                <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-relaxed space-y-1">
                  <li>3 Angiographes Confocals HRA, Heidelberg</li>
                  <li>Angiographie à la fluorescéine et au vert d’indocyanine (ICG)</li>
                </ul>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-[#888888] text-[16px] mb-4 uppercase tracking-wide">OCT (Tomographie)</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <img src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla1.jpg" alt="OCT Spectralis Heidelberg" className="rounded-xl shadow-md w-full h-auto object-cover" loading="lazy" />
                  <img src="https://centrerabelaislyon.fr/wp-content/uploads/2025/12/VX65-Product-page-picture-900x900-px-4.webp" alt="OCT Avanti" className="rounded-xl shadow-md w-full h-auto object-contain bg-white" loading="lazy" />
                </div>
                <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-relaxed mt-2 space-y-1">
                  <li>3 OCT Spectralis, Heidelberg</li>
                  <li>XR AVANTI, OPTOVUE avec Module ANGIO-OCT</li>
                  <li>Cirrus HD 5000, ZEISS</li>
                  <li>Solix Expert</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Autres équipements List */}
          <div className="bg-[#f8f8f8] p-10 rounded-sm shadow-sm border-t-4 border-[#c2aa84]">
            <h3 className="text-[#c2aa84] text-[22px] font-bold uppercase tracking-wider mb-8">
              Traitements & Bilans
            </h3>
            
            <div className="space-y-6">
              <div className="mb-10">
                <h4 className="font-bold text-[#888888] text-[16px] mb-4 uppercase tracking-wide">Traitements Spécifiques</h4>
                <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-relaxed mt-2 space-y-1">
                  <li>Bloc dédié aux Injections Intra-Vitréennes (IVT)</li>
                  <li>Salles de Lasers (PPR, SLT, YAG)</li>
                  <li>Système Valeda (Photobiomodulation)</li>
                </ul>
              </div>

              <div className="mb-10">
                <h4 className="font-bold text-[#888888] text-[16px] mb-4 uppercase tracking-wide">Échographie & Vision</h4>
                <img src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/pla3.jpg" alt="Echographie et Salles de Bilans" className="rounded-xl shadow-md w-full h-auto mb-6" loading="lazy" />
                <ul className="list-disc list-inside text-[#888888] text-[14px] font-light leading-relaxed space-y-1">
                  <li>Échographe AVISO, QUANTEL MEDICAL (Mode B 10/20 Mhz)</li>
                  <li>UBM (Échographie du Segment Antérieur)</li>
                  <li>Champ Visuel Humphrey, Zeiss</li>
                  <li>Sensibilité aux contrastes informatisée</li>
                  <li>Bilan Basse Vision (Conseil et adaptation optique)</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link prefetch={true} 
                href="/#home-page-contact" 
                className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
              >
                Prendre rendez-vous
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
