import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Études Cliniques | Centre Ophtalmologique Rabelais Lyon',
  description: 'Le Centre Ophtalmologique Rabelais participe à des études cliniques (Phase 1, 2, 3) pour valider l\'efficacité de nouveaux traitements contre la DMLA et la rétinopathie diabétique.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/etudes-cliniques'
  }
};

export default function EtudesCliniquesPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-[#fdfdfd]">
      
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
            Études <strong className="font-bold">Cliniques</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Main Left Content */}
          <div className="flex-1">
            
            {/* Intro Section */}
            <div className="mb-12">
              <h3 className="text-[#c2aa84] text-[24px] font-bold mb-4 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2aa84] mr-3"></span>
                <u className="underline-offset-4 font-bold decoration-[1.5px]">Les études cliniques</u>
              </h3>
              <div className="space-y-4 text-[#888888] text-[16px] font-light leading-[1.8] text-justify pl-5">
                <p>
                  Le traitement des pathologies rétiniennes fait l’objet d’une intense activité de recherche clinique pour pouvoir valider la sécurité et l’efficacité de molécules de plus en plus performantes en termes de résultats visuels ou de durée d’action.
                </p>
                <p>
                  Le Centre Rabelais participe à un grand nombre d’études cliniques de phase 1, 2 et 3 dans le domaine de la DMLA et de la rétinopathie diabétique et fait bénéficier ses patients de procédures entièrement gratuites.
                </p>
              </div>
            </div>

            {/* Phases Section */}
            <div className="mb-12">
              <h3 className="text-[#c2aa84] text-[24px] font-bold mb-4 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2aa84] mr-3"></span>
                <u className="underline-offset-4 font-bold decoration-[1.5px]">Les phases de la recherche clinique</u>
              </h3>
              <div className="space-y-4 text-[#888888] text-[16px] font-light leading-[1.8] pl-5">
                <p><strong className="font-bold text-[#888888]">Phase 1.</strong> Une molécule est expérimentée sur un petit groupe de patients pour en tester l’innocuité et les dosages. Aucune molécule n’ayant passé tous les tests de laboratoire avec succès n’arrive à l’expérimentation sur l’être humain.</p>
                <p><strong className="font-bold text-[#888888]">Phase 2.</strong> Etude des dosages donnant les meilleurs résultats sur l’acuité visuelle et les autres paramètres cliniques.</p>
                <p><strong className="font-bold text-[#888888]">Phase 3.</strong> Etude de validation de l’efficacité d’une molécule sur un grand nombre de patients.</p>
                <p className="text-justify pt-2">
                  Toutes les phases de la recherche clinique sont soumises à des contrôles stricts de sécurité. Aucun nouveau médicament n'arrive en phase 3 sans avoir passé les phases 1 et 2 avec des résultats significatifs.
                </p>
              </div>
            </div>

            {/* Comment fonctionne Section */}
            <div className="mb-12">
              <h3 className="text-[#c2aa84] text-[24px] font-bold mb-4 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2aa84] mr-3"></span>
                <u className="underline-offset-4 font-bold decoration-[1.5px]">Comment fonctionne un protocole de recherche clinique</u>
              </h3>
              <div className="space-y-4 text-[#888888] text-[16px] font-light leading-[1.8] pl-5">
                <p className="text-justify">
                  Les patients présentant les caractéristiques requises par le protocole sont sélectionnés par les médecins du Centre (phase de screening) et leur dossier complet est envoyé pour validation à un centre de lecture international ou national pour l’admission à l’étude (phase d’inclusion).
                </p>
                <p>Le patient est ensuite randomisé dans un des bras de traitement.</p>
                <p>La plupart des études concernant la DMLA, par exemple, prévoient 2 bras de traitement :</p>
                
                <p className="font-normal text-[#888888] pt-2">
                  1. Le bras de contrôle dans lequel le patient est soumis à la procédure standard validée par des grandes études cliniques (molécules et rythme de traitement déjà validés pour leur efficacité).
                </p>
                <p className="font-normal text-[#888888]">
                  2. Le bras d’étude où le patient est traité avec une nouvelle molécule utilisée seule ou en association avec les traitements validés.
                </p>
              </div>
            </div>

            {/* Etudes au centre Section */}
            <div className="mb-12">
              <h3 className="text-[#c2aa84] text-[24px] font-bold mb-4 flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2aa84] mr-3"></span>
                <u className="underline-offset-4 font-bold decoration-[1.5px]">Les études cliniques au Centre Rabelais</u>
              </h3>
              <div className="space-y-10 pl-5">
                <p className="text-[#888888] text-[16px] font-light">Pour la DMLA Humide :</p>
                
                {/* 1 */}
                <div>
                  <h4 className="text-[#c2aa84] text-[18px] font-bold mb-3">
                    <u className="underline-offset-4 decoration-[1px]">1. Etude OPH 1003 (Phase 3). Promoteur OPHTHOTECH</u>
                  </h4>
                  <div className="text-[#888888] text-[16px] font-light leading-[1.8] space-y-3">
                    <p>Patients atteints d’une DMLA humide vierge de tout traitement préalable (patients naïfs).</p>
                    <p>Etude d’association thérapeutique ranibizumab/Fovista.</p>
                    <p className="text-justify">L’association de ces deux molécules a démontré l’innocuité du Fovista et une tendance à des meilleurs résultats fonctionnels de l’association Fovista+ranibizumab comparée au ranibizumab seul, au cours des phases 1 et 2.</p>
                  </div>
                </div>

                {/* 2 */}
                <div>
                  <h4 className="text-[#c2aa84] text-[18px] font-bold mb-3">
                    <u className="underline-offset-4 decoration-[1px]">2. Etude OPH 1008 (Phase 2-3). Promoteur OPHTHOTECH</u>
                  </h4>
                  <div className="text-[#888888] text-[16px] font-light leading-[1.8] space-y-3">
                    <p>Patients naïfs.</p>
                    <p>Association thérapeutique aflibercept (Eylea) ou bevacizumab (Avastin)/Fovista.</p>
                  </div>
                </div>

                {/* 3 */}
                <div>
                  <h4 className="text-[#c2aa84] text-[18px] font-bold mb-3">
                    <u className="underline-offset-4 decoration-[1px]">3. Etude OPH 2008. Promoteur OPHTHOTECH</u>
                  </h4>
                  <div className="text-[#888888] text-[16px] font-light leading-[1.8] space-y-3">
                    <p>Patients naïfs et patients ayant reçu 2 injections au préalable sans succès.</p>
                    <p>Etude d’association thérapeutique ranibizumab/Fovista selon deux protocoles d’administration différents.</p>
                  </div>
                </div>

                {/* 4 */}
                <div>
                  <h4 className="text-[#c2aa84] text-[18px] font-bold mb-3">
                    <u className="underline-offset-4 decoration-[1px]">4. Etude ESBA</u>
                  </h4>
                </div>

              </div>
            </div>

          </div>

          {/* Right Sidebar (Adresse) */}
          <div className="w-full md:w-[350px]">
            <h3 className="text-[#c2aa84] text-[22px] font-light tracking-[2px] uppercase mb-6">Adresse</h3>
            
            <div className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] pb-[30px] border border-gray-50/50">
              <div className="p-8">
                <p className="text-[#888888] font-bold text-[15px] mb-1">Centre Ophtalmologique Rabelais</p>
                <p className="text-[#888888] text-[15px] font-light">2, Rue Antoine de Saint-Exupéry</p>
                <p className="text-[#888888] text-[15px] font-light">69002 Lyon</p>
                <p className="text-[#888888] font-bold text-[15px] mt-1 mb-8">04 78 95 09 08</p>

                <p className="text-[#888888] font-bold text-[14px]">Accès: Proche Bus/Métro</p>
                <p className="text-[#888888] text-[14px] font-light">Lignes de métro : A et D</p>
                <p className="text-[#888888] text-[14px] font-light mb-6">Bus : C20, C9, C10 Et 40 / 15 / 35</p>

                <p className="text-[#888888] font-bold text-[14px]">Prendre Rendez-vous:</p>
                <p className="text-[#888888] text-[14px] font-light">Du Lundi au Jeudi de 9h à 18h</p>
                <p className="text-[#888888] text-[14px] font-light">Et Le Vendredi de 9h à 17h00</p>
              </div>

              {/* Map Button (Matching design) */}
              <div className="relative h-[60px] w-full flex items-center justify-center cursor-pointer overflow-hidden group">
                 <img 
                    src="https://centrerabelaislyon.fr/wp-content/themes/Placeholder/images/mapbg.jpg" 
                    alt="Map Background" 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity" 
                 />
                 <div className="absolute inset-0 bg-[#c2aa84]/40 group-hover:bg-[#c2aa84]/50 transition-colors z-[1]"></div>
                 <a href="/directions" className="relative z-10 flex items-center gap-2 text-white font-bold text-[12px] tracking-[2px] uppercase">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Montrer la carte
                 </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
