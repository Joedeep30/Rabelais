import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Publications Scientifiques | Centre Ophtalmologique Rabelais Lyon',
  description: 'Retrouvez toutes les publications scientifiques (Glaucome, OCT, DMLA) rédigées par l\'équipe médicale du Centre Ophtalmologique Rabelais.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/publications'
  }
};

export default function PublicationsPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Nos <strong className="font-bold">Publications</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <p className="text-[#888888] text-[16px] md:text-[18px] font-light leading-[1.8] mb-12">
          Afin d’apporter la meilleure prise en charge à ses patients, l’équipe médicale du Centre Ophtalmologique Rabelais est impliquée dans une forte activité scientifique, faisant l’objet de nombreuses publications dans des journaux ophtalmologiques nationaux et internationaux, avec également des interventions orales dans divers congrès.
        </p>

        {/* Publications Feed */}
        <div className="space-y-12 text-left">
          
          {/* Pub 1 */}
          <div className="bg-[#f8f8f8] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border-l-4 border-[#003399]">
            <div className="flex-1">
              <span className="text-sm font-bold text-[#c2aa84] uppercase tracking-[2px] mb-2 block">Juin 2021</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Cystic maculopathy in the internal nuclear layer in glaucoma patients</h3>
              <p className="text-[14px] text-[#888888] font-light leading-relaxed mb-4">
                Journal Français d’ophtalmologie sur le thème du Glaucome. Auteur : Dr Maddalena Quaranta.
              </p>
              <a href="https://centrerabelaislyon.fr/wp-content/uploads/2021/06/1-s2.0-S0181551221001789-main.pdf" target="_blank" rel="noopener noreferrer" className="text-[#003399] font-bold text-[12px] uppercase tracking-[1px] hover:underline">
                [ Voir la publication PDF ]
              </a>
            </div>
          </div>

          {/* Pub 2 */}
          <div className="bg-white border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border-l-4 border-[#c2aa84]">
            <div className="flex-1">
              <span className="text-sm font-bold text-[#c2aa84] uppercase tracking-[2px] mb-2 block">Août 2020</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">The long-term effects of anti-vascular endothelial growth factor therapy on the OCT angiographic appearance of neovascularization in AMD</h3>
              <p className="text-[14px] text-[#888888] font-light leading-relaxed mb-4">
                Publication dans le journal International Journal of Retina and Vitreous sur le comportement des néovaisseaux observé en OCT-A durant le traitement par IVT.
              </p>
              <a href="https://centrerabelaislyon.fr/wp-content/uploads/2020/08/The-long-term-effects-of-anti-vascular-endothelial-growth-factor-therapy-on-the-optical-coherence-tomography-angiographic-appearance-of-neovascularization-in-age-related-macular-degeneration.pdf" target="_blank" rel="noopener noreferrer" className="text-[#003399] font-bold text-[12px] uppercase tracking-[1px] hover:underline">
                [ Voir la publication PDF ]
              </a>
            </div>
          </div>

          {/* Pub 3 */}
          <div className="bg-[#f8f8f8] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border-l-4 border-[#003399]">
            <div className="flex-1">
              <span className="text-sm font-bold text-[#c2aa84] uppercase tracking-[2px] mb-2 block">Janvier 2020</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Place de l’OCT dans le bilan de chirurgie réfractive</h3>
              <p className="text-[14px] text-[#888888] font-light leading-relaxed mb-4">
                Le rapport de la Société Française d’Ophtalmologie a porté sur le thème de l’imagerie par OCT.
              </p>
              <a href="https://centrerabelaislyon.fr/wp-content/uploads/2020/01/RO-231-Adil-El-Maftouhi.pdf" target="_blank" rel="noopener noreferrer" className="text-[#003399] font-bold text-[12px] uppercase tracking-[1px] hover:underline">
                [ Voir la publication PDF ]
              </a>
            </div>
          </div>

          {/* Pub 4 */}
          <div className="bg-white border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border-l-4 border-[#c2aa84]">
            <div className="flex-1">
              <span className="text-sm font-bold text-[#c2aa84] uppercase tracking-[2px] mb-2 block">Mai 2019</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Dégénérescence kystique de la nucléaire interne chez les patients glaucomateux</h3>
              <p className="text-[14px] text-[#888888] font-light leading-relaxed mb-4">
                Paru dans le journal Réalités Ophtalmologiques.
              </p>
              <a href="https://centrerabelaislyon.fr/wp-content/uploads/2019/05/EL-MAFTOUHI_RG-kystes.pdf" target="_blank" rel="noopener noreferrer" className="text-[#003399] font-bold text-[12px] uppercase tracking-[1px] hover:underline">
                [ Voir la publication PDF ]
              </a>
            </div>
          </div>

          {/* Pub 5 */}
          <div className="bg-[#f8f8f8] p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border-l-4 border-[#003399]">
            <div className="flex-1">
              <span className="text-sm font-bold text-[#c2aa84] uppercase tracking-[2px] mb-2 block">Février 2019</span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Intérêt de l’OCT dans la quantification de la sécheresse oculaire</h3>
              <p className="text-[14px] text-[#888888] font-light leading-relaxed mb-4">
                Publication des cahiers d’ophtalmologie.
              </p>
              <a href="https://centrerabelaislyon.fr/wp-content/uploads/2019/02/CDO225_P0_Dossier-Secheresse-A.ElMaftouhi-v2.pdf" target="_blank" rel="noopener noreferrer" className="text-[#003399] font-bold text-[12px] uppercase tracking-[1px] hover:underline">
                [ Voir la publication PDF ]
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
