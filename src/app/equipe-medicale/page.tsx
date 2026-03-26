import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Équipe Médicale | Centre Ophtalmologique Rabelais Lyon',
  description: 'Rencontrez notre équipe médicale spécialisée dans le traitement de la rétine et de la DMLA à Lyon : Dr Maddalena Quaranta et experts en imagerie oculaire.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/equipe-medicale'
  }
};

export default function EquipeMedicalePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr Maddalena Quaranta",
    "jobTitle": "Ophtalmologiste",
    "medicalSpecialty": ["Retina Specialist", "Macular Degeneration", "Ophthalmologic"],
    "worksFor": {
      "@type": "MedicalClinic",
      "name": "Centre Ophtalmologique Rabelais",
      "url": "https://centrerabelaislyon.fr"
    },
    "url": "https://centrerabelaislyon.fr/equipe-medicale",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/bfi_thumb/t2-34whis4k12b7eqiii51uyo.jpg",
    "alumniOf": "Clinique Universitaire de Créteil",
    "description": "Spécialiste de la Rétine Médicale & DMLA. Ancien Fellow du Wills Eye Institute, Philadelphie USA (Oncologie)."
  };

  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider4.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Équipe <strong className="font-bold">Médicale</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
          <p className="text-white font-bold tracking-[2px] uppercase mt-[30px] text-[12px] bg-[#003399]/80 px-4 py-2 rounded-sm border border-white/20">
            We Speak English / Si Parla Italiano
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-0 max-w-4xl mx-auto text-center">
        <p className="text-[#888888] text-[16px] md:text-[20px] font-light leading-[1.8]">
          Les partenaires du <strong className="font-bold text-[#003399]">Centre Ophtalmologique Rabelais</strong> sont composés de médecins Ophtalmologistes (Anciens Assistants des Hôpitaux de Paris) spécialisés dans la prise en charge des maladies de la rétine et d’Orthoptistes Spécialisés en Imagerie Oculaire et Basse Vision.
        </p>
      </section>

      {/* Doctor Profile: Dr Maddalena Quaranta */}
      <section id="dr-quaranta" className="flex flex-col md:flex-row w-full bg-[#f8f8f8]">
        <div className="relative w-full md:w-1/3 min-h-[400px] md:min-h-[auto] bg-[#003399] overflow-hidden">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/bfi_thumb/t2-34whis4k12b7eqiii51uyo.jpg"
            alt="Portrait du Dr Maddalena Quaranta, Ophtalmologiste spécialiste de la Rétine à Lyon"
            title="Dr Maddalena Quaranta - Centre Ophtalmologique Rabelais"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Fallback pattern if image is missing from original source */}
          <div className="relative z-10 w-full h-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
             <h3 className="text-white text-3xl font-light">Dr. Maddalena<br/><strong className="font-bold">Quaranta</strong></h3>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex items-center justify-start p-12 md:p-24 z-10">
          <div className="max-w-[700px] flex flex-col items-start">
            <h2 className="text-[#c2aa84] text-[24px] md:text-[32px] font-light tracking-[2px] mb-[10px] uppercase">
              Dr. Maddalena Quaranta
            </h2>
            <p className="text-[#003399] font-bold text-[14px] uppercase tracking-widest mb-[20px]">
              Spécialiste de la Rétine Médicale & DMLA
            </p>
            <div className="h-[2px] w-[40px] bg-[#c2aa84] mb-[30px]"></div>

            <ul className="list-none text-[#888888] text-[15px] font-light leading-[1.8] space-y-3">
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Ancienne Assistante de la Clinique Universitaire de Créteil
              </li>
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Ancien Fellow du Wills Eye Institute, Philadelphie USA (Oncologie)
              </li>
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Spécialisée dans la prise en charge de la DMLA et des pathologies maculaires.
              </li>
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Auteur et Co-auteur de nombreux ouvrages et articles scientifiques sru la Rétine médicale.
              </li>
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Reviewer pour le Journal Français d'ophtalmologie.
              </li>
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Très impliquée dans la recherche clinique. Participe en tant qu'investigateur principal à de nombreux protocoles de recherche (phases 1, 2 et 3) pour faire bénéficier aux patients des dernières avancées.
              </li>
              <li className="flex items-start">
                <span className="text-[#c2aa84] mr-3 mt-1">▪</span>
                Organisatrice et Directrice Scientifique du congrès Rétina Lyon.
              </li>
            </ul>

            <div className="flex gap-4 mt-10">
              <Link prefetch={true} 
                href="/publications" 
                className="bg-transparent border border-[#003399] text-[#003399] hover:bg-[#003399] hover:text-white text-[11px] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
              >
                Voir ses publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members (Placeholder for exact data from site) */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-[#888888] text-[30px] md:text-[40px] font-light uppercase tracking-wider mb-12">
          Orthoptistes & <strong className="font-bold text-[#c2aa84]">Infirmières</strong>
        </h2>
        <p className="text-[#888888] text-[16px] max-w-2xl mx-auto leading-relaxed mb-4 font-light">
          Le Centre Ophtalmologique Rabelais regroupe également une équipe hautement qualifiée d'orthoptistes spécialisés en imagerie oculaire et rétinographie, garantissant la réalisation précise de tous vos examens OCT et Angiographies.
        </p>
        <p className="text-[#888888] text-[16px] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Une infirmière diplômée d'État accompagne nos médecins lors des procédures intra-vitréennes (IVT) au sein de notre bloc stérile dédié.
        </p>
         <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[11px] font-bold tracking-[2px] uppercase py-[15px] px-[35px] rounded-[50px] transition-colors"
          >
            Prendre rendez-vous avec l'équipe
          </Link>
      </section>

    </main>
  );
}
