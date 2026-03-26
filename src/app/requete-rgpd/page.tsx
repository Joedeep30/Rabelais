import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Requête RGPD | Centre Ophtalmologique Rabelais Lyon',
  description: 'Portail de gestion de vos données personnelles (RGPD) du Centre Ophtalmologique Rabelais : accès, rectification, et oubli de vos données.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/requete-rgpd'
  }
};

export default function RequeteRGPDPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[42px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Requête <strong className="font-bold">RGPD</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[200px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto w-full">
        <p className="text-[#888888] text-[16px] font-light leading-[1.8] mb-12 text-center">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits concernant vos données personnelles. Vous pouvez formuler vos requêtes ci-dessous.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Demande d'accès */}
            <div className="bg-[#f8f8f8] p-8 border-t-2 border-[#003399] shadow-sm">
                <h3 className="text-[#003399] text-[20px] font-bold mb-4">Demande d'accès aux données</h3>
                <p className="text-[#888888] text-[14px] font-light leading-relaxed mb-6">
                    Demander une copie des données que nous avons sur vous. Un e-mail vous sera envoyé avec les données après leur création.
                </p>
                <div className="flex flex-col gap-4">
                    <input type="email" placeholder="Votre adresse email" className="w-full border-gray-300 p-3 text-sm focus:ring-2 focus:ring-[#003399]" />
                    <button className="bg-[#003399] text-white py-3 px-6 text-sm font-bold uppercase tracking-[1px] hover:bg-blue-800 transition-colors">Envoyer la demande</button>
                </div>
            </div>

            {/* Oubli */}
            <div className="bg-[#f8f8f8] p-8 border-t-2 border-[#c2aa84] shadow-sm">
                <h3 className="text-[#c2aa84] text-[20px] font-bold mb-4">Demande d'oubli (Suppression)</h3>
                <p className="text-[#888888] text-[14px] font-light leading-relaxed mb-6">
                    Sélectionnez ce que vous souhaitez être oublié. Vous serez averti par email une fois que la suppression sera effective.
                </p>
                <div className="flex flex-col gap-4">
                    <input type="email" placeholder="Votre adresse email" className="w-full border-gray-300 p-3 text-sm focus:ring-2 focus:ring-[#c2aa84]" />
                    <button className="bg-[#c2aa84] text-white py-3 px-6 text-sm font-bold uppercase tracking-[1px] hover:bg-[#8e765d] transition-colors">Supprimer mes données</button>
                </div>
            </div>

            {/* Rectification */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm md:col-span-2">
                <h3 className="text-slate-800 text-[20px] font-bold mb-4">Rectifier ou Désinscrire (Newsletters)</h3>
                <p className="text-[#888888] text-[14px] font-light leading-relaxed mb-6">
                    Veuillez reconsidérer votre désinscription car vous risquez de manquer des mises à jour importantes de sécurité de la part du cabinet. Si vous voulez vraiment vous désinscrire, remplissez votre adresse email :
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                    <input type="email" placeholder="Votre adresse email" className="w-full md:flex-1 border-gray-300 p-3 text-sm focus:ring-2 focus:ring-slate-800" />
                    <button className="bg-slate-800 text-white py-3 px-8 text-sm font-bold uppercase tracking-[1px] hover:bg-slate-900 transition-colors">Se désinscrire</button>
                </div>
            </div>
        </div>

      </section>

    </main>
  );
}
