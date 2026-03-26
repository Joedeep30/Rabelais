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
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-start overflow-hidden mt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/etudes-cliniques-recherche.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-16 lg:px-24">
          <h1 className="text-white text-[42px] md:text-[56px] font-[Gotham] font-light leading-tight mb-4">
            Etudes Cliniques
          </h1>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light max-w-2xl leading-relaxed">
            Le Centre Rabelais est impliqué dans la recherche clinique pharmacologique
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="bg-[#f8f8f8] p-8 md:p-12 border-l-4 border-[#c2aa84] shadow-sm mb-12">
            <h2 className="text-[#c2aa84] text-[24px] font-bold tracking-[1px] mb-[15px] uppercase">Les études cliniques</h2>
            <p className="text-[#888888] text-[16px] font-light leading-[1.8] mb-[15px]">
              Le traitement des pathologies rétiniennes fait l’objet d’une intense activité de recherche clinique pour pouvoir valider la sécurité et l’efficacité de molécules de plus en plus performantes en termes de résultats visuels ou de durée d’action.
            </p>
            <p className="text-[#888888] text-[16px] font-light leading-[1.8]">
              Le Centre Ophtalmologique Rabelais participe à un grand nombre d’études cliniques de phase 1, 2 et 3 dans le domaine de la DMLA et de la rétinopathie diabétique et fait bénéficier ses patients de procédures entièrement gratuites.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
                <h3 className="text-[#003399] text-[22px] font-bold mb-[20px] pb-2 border-b border-gray-100 uppercase tracking-wide">
                  Les phases de la recherche clinique
                </h3>
                <ul className="space-y-5 text-[#888888] text-[15px] font-light leading-[1.8]">
                    <li>
                      <strong className="text-slate-800 font-bold">Phase 1.</strong> Une molécule est expérimentée sur un petit groupe de patients pour en tester l’innocuité et les dosages. Aucune molécule n’ayant passé tous les tests de laboratoire avec succès n’arrive à l’expérimentation sur l’être humain.
                    </li>
                    <li>
                      <strong className="text-slate-800 font-bold">Phase 2.</strong> Etude des dosages donnant les meilleurs résultats sur l’acuité visuelle et les autres paramètres cliniques.
                    </li>
                    <li>
                      <strong className="text-slate-800 font-bold">Phase 3.</strong> Etude de validation de l’efficacité d’une molécule sur un grand nombre de patients.
                    </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-[14px] italic text-[#888888] leading-relaxed">
                      Toutes les phases de la recherche clinique sont soumises à des contrôles stricts de sécurité. Aucun nouveau médicament n'arrive en phase 3 sans avoir passé les phases 1 et 2 avec des résultats significatifs.
                  </p>
                </div>
            </div>
            
            <div>
                <h3 className="text-[#003399] text-[22px] font-bold mb-[20px] pb-2 border-b border-gray-100 uppercase tracking-wide">
                  Comment fonctionne un protocole
                </h3>
                <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-4 text-justify">
                  Les patients présentant les caractéristiques requises par le protocole sont sélectionnés par les médecins du Centre (phase de screening) et leur dossier complet est envoyé pour validation à un centre de lecture international ou national pour l’admission à l’étude (phase d’inclusion).
                </p>
                <p className="text-[#888888] text-[15px] font-light leading-[1.8] mb-5">
                  Le patient est ensuite randomisé dans un des bras de traitement :
                </p>
                
                <div className="space-y-4 bg-gray-50/50 p-6 rounded-sm border border-gray-100">
                  <p className="text-[#888888] text-[15px] font-light leading-[1.8]">
                    <strong className="font-bold text-slate-800 tracking-wide">1. Le bras de contrôle</strong> dans lequel le patient est soumis à la procédure standard validée par des grandes études cliniques (molécules et rythme de traitement déjà validés pour leur efficacité).
                  </p>
                  <p className="text-[#888888] text-[15px] font-light leading-[1.8]">
                    <strong className="font-bold text-slate-800 tracking-wide">2. Le bras d'étude</strong> où le patient est traité avec une nouvelle molécule utilisée seule ou en association avec les traitements validés.
                  </p>
                </div>
            </div>
        </div>

        {/* Études Au Centre Ophtalmologique Rabelais */}
        <div className="text-center mb-10">
          <h2 className="text-[#c2aa84] text-[28px] font-light tracking-[2px] uppercase mb-2">
            Les études cliniques Au Centre Rabelais
          </h2>
          <p className="text-[#888888] font-bold tracking-widest uppercase text-[14px]">Pour la DMLA Humide :</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-t-2 border-[#003399] p-8 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[18px] text-[#003399] mb-4">
                  1. Etude OPH 1003 (Phase 3). Promoteur OPHTHOTECH
                </h4>
                <p className="text-[14px] text-[#888888] mb-3 leading-relaxed">
                  <strong className="text-slate-800">Cible :</strong> Patients atteints d’une DMLA humide vierge de tout traitement préalable (patients naïfs).
                </p>
                <div className="text-[14px] text-[#888888] leading-relaxed space-y-2">
                  <p>Etude d’association thérapeutique ranibizumab/Fovista.</p>
                  <p className="italic bg-gray-50 p-3 rounded-sm">L’association de ces deux molécules a démontré l’innocuité du Fovista et une tendance à des meilleurs résultats fonctionnels de l’association Fovista+ranibizumab comparée au ranibizumab seul, au cours des phases 1 et 2.</p>
                </div>
            </div>

            <div className="bg-white border-t-2 border-[#c2aa84] p-8 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[18px] text-[#c2aa84] mb-4">
                  2. Etude OPH 1008 (Phase 2-3). Promoteur OPHTHOTECH
                </h4>
                <p className="text-[14px] text-[#888888] mb-3 leading-relaxed">
                  <strong className="text-slate-800">Cible :</strong> Patients naïfs.
                </p>
                <div className="text-[14px] text-[#888888] leading-relaxed space-y-2">
                  <p>Association thérapeutique aflibercept (Eylea) ou bevacizumab (Avastin)/Fovista.</p>
                </div>
            </div>

            <div className="bg-white border-t-2 border-[#c2aa84] p-8 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[18px] text-[#c2aa84] mb-4">
                  3. Etude OPH 2008. Promoteur OPHTHOTECH
                </h4>
                <p className="text-[14px] text-[#888888] mb-3 leading-relaxed">
                  <strong className="text-slate-800">Cible :</strong> Patients naïfs et patients ayant reçu 2 injections au préalable sans succès.
                </p>
                <div className="text-[14px] text-[#888888] leading-relaxed space-y-2">
                  <p>Etude d’association thérapeutique ranibizumab/Fovista selon deux protocoles d’administration différents.</p>
                </div>
            </div>

            <div className="bg-white border-t-2 border-[#003399] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                <h4 className="font-bold text-[18px] text-[#003399] mb-4">
                  4. Etude ESBA
                </h4>
                <p className="text-[14px] text-[#888888] mb-3 leading-relaxed">
                  <strong className="text-slate-800">Cible :</strong> Molécule brolucizumab.
                </p>
                <div className="text-[14px] text-[#888888] leading-relaxed">
                  <p>Recherche clinique pour une nouvelle génération d'Anti-VEGF à longue durée d'action.</p>
                </div>
            </div>
        </div>

      </section>

    </main>
  );
}
