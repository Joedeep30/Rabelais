import Link from 'next/link';

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr Maddalena Quaranta-El Maftouhi",
    "jobTitle": "Ophtalmologiste — Rétinologue",
    "description": "Rétinologue spécialisée en DMLA, imagerie rétinienne (OCT, OCT-Angiographie) et photobiomodulation. Directrice du Centre Ophtalmologique Rabelais à Lyon.",
    "url": "https://centrerabelaislyon.fr/equipe-medicale",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post4.png",
    "sameAs": [
      "https://www.linkedin.com/in/maddalena-quaranta-60458658/"
    ],
    "worksFor": {
      "@type": "MedicalClinic",
      "@id": "https://centrerabelaislyon.fr/#clinic"
    },
    "medicalSpecialty": ["Ophthalmology", "Retina", "Macular Degeneration"],
    "memberOf": [
      { "@type": "Organization", "name": "American Academy of Ophthalmology (AAO)" },
      { "@type": "Organization", "name": "Association for Research in Vision and Ophthalmology (ARVO)" },
      { "@type": "Organization", "name": "Société Française d'Ophtalmologie" },
      { "@type": "Organization", "name": "Comité scientifique de l'association DMLA" }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que le Centre Ophtalmologique Rabelais à Lyon ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Centre Ophtalmologique Rabelais est un cabinet médical privé situé à Lyon 2ème (2, rue Antoine de Saint-Exupéry, métro Bellecour), spécialisé en rétine médicale et en imagerie ophtalmologique. Dirigé par le Dr Maddalena Quaranta-El Maftouhi, rétinologue, le centre dispose d'un plateau technique complet comprenant OCT Spectral-Domain, OCT-Angiographie, rétinographe grand champ Optos 200°, angiographe numérisé et salle blanche dédiée aux injections intravitréennes. Il prend en charge la DMLA, la rétinopathie diabétique, les occlusions veineuses rétiniennes et le glaucome."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles spécialités sont disponibles au Centre Rabelais ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Centre est hyper-spécialisé en rétine médicale et propose : le diagnostic et traitement de la DMLA sèche et humide, les injections intravitréennes anti-VEGF (Lucentis, Eylea, Vabysmo), la photobiomodulation Valeda pour la DMLA sèche, la photothérapie dynamique (PDT) à la Visudyne, les lasers rétiniens (SLT, iridotomie, photocoagulation, micropulsé), l'angiographie à la fluorescéine et au vert d'indocyanine, l'OCT maculaire et du nerf optique, l'OCT-Angiographie, et le traitement Eyelight pour la sécheresse oculaire. Tous les médecins sont conventionnés secteur 2."
        }
      },
      {
        "@type": "Question",
        "name": "Comment prendre rendez-vous au Centre Ophtalmologique Rabelais ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous pouvez prendre rendez-vous en contactant le secrétariat au 04 78 95 09 08 ou via le formulaire de demande de rendez-vous sur le site. Le Centre Rabelais est situé au 2, rue Antoine de Saint-Exupéry, Lyon 2ème (métro Bellecour). En cas d'urgence rétinienne (déformation visuelle soudaine, voile noir, flashs lumineux), précisez vos symptômes pour qu'un rendez-vous soit proposé dans les meilleurs délais."
        }
      },
      {
        "@type": "Question",
        "name": "Le Centre Rabelais traite-t-il les urgences ophtalmologiques ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Centre Rabelais assure la prise en charge urgente des pathologies rétiniennes aiguës grâce à son plateau d'imagerie complet disponible sur place. Les urgences rétiniennes (poussée néovasculaire de DMLA humide, hémorragie rétinienne, suspicion de décollement de rétine) bénéficient d'un circuit accéléré avec examen OCT et injection intravitréenne réalisables le jour même, évitant les délais d'attente hospitaliers."
        }
      },
      {
        "@type": "Question",
        "name": "Qui est le Dr Quaranta-El Maftouhi ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Dr Maddalena Quaranta-El Maftouhi est ophtalmologiste rétinologue, directrice du Centre Ophtalmologique Rabelais à Lyon. Elle est membre de l'American Academy of Ophthalmology (AAO), de l'Association for Research in Vision and Ophthalmology (ARVO), de la Société Française d'Ophtalmologie, et du comité scientifique de l'association DMLA. Elle est auteure de plus de 30 publications scientifiques dans des revues internationales à comité de lecture, et consultante experte pour différents laboratoires pharmacologiques. Elle parle français, anglais et italien."
        }
      }
    ]
  };

  return (
    <main className="flex flex-col flex-grow font-sans text-[#888888]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg"
            alt="Le cabinet du Centre Ophtalmologique Rabelais à Lyon"
            title="Centre Ophtalmologique Rabelais Lyon"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          {/* Subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Left-Aligned Content Block */}
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-center text-left pt-[80px] md:pt-[100px] px-8 md:px-[8%] max-w-[1400px]">
          
          <Link prefetch={true} href="/">
            <img 
              src="https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png" 
              alt="Logo du Centre Ophtalmologique Rabelais Lyon" 
              title="Centre Ophtalmologique Rabelais"
              width="190"
              height="60"
              className="w-[140px] md:w-[190px] h-auto mb-[40px] ml-[25px] transition-transform hover:scale-105 drop-shadow-lg" 
            />
          </Link>
          
          <h1 className="text-white text-[38px] md:text-[54px] font-[Gotham] font-light leading-[1.1] tracking-wide mb-[25px]">
            <span className="font-normal font-[Gotham]">Ophtalmologue à Lyon</span><br />Spécialiste Rétine & DMLA
          </h1>
          
          {/* Left-aligned line divider */}
          <div className="flex items-center w-full max-w-[700px] mb-[30px]">
            <div className="w-[16px] h-[16px] bg-[#d5d5d5] rounded-full shrink-0 relative z-10 shadow-[0_0_0_3px_rgba(255,255,255,0.1)]"></div>
            <div className="h-[1px] bg-white/40 w-full ml-[-2px]"></div>
          </div>
          
          <p className="text-white/85 text-[17px] md:text-[22px] font-[Gotham] font-light max-w-[650px] mb-[45px] leading-[1.5] tracking-[0.5px]">
            Le Centre Ophtalmologique Rabelais est un cabinet privé<br className="hidden md:block" />destiné au traitement médical des maladies de la rétine
          </p>

          <Link prefetch={true} 
            href="/offre-de-soins"
            className="border border-[#bda98d] hover:bg-[#bda98d]/20 text-white text-[11px] font-[Gotham] font-bold tracking-[3px] uppercase px-[35px] py-[15px] rounded-[50px] transition-colors"
          >
            Offre de soins
          </Link>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-20">
          <Link prefetch={true} href="#home-page-content" className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#003399] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
          </Link>
        </div>

      </section>

      {/* ======= AI-CITABLE CONTENT SECTION ======= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Clinic Introduction — AI-optimized paragraph */}
          <div className="text-center mb-16">
            <h2 className="text-[#003399] text-[28px] md:text-[36px] font-[Gotham] font-light uppercase tracking-wider mb-4">
              <strong className="font-bold">Ophtalmologiste</strong> Rétinologue à Lyon
            </h2>
            <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mx-auto mb-8">
              <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
              <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
              <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            </div>
            <p className="text-[#888888] text-[16px] font-[Gotham] font-light leading-[1.8] max-w-3xl mx-auto">
              Le Centre Ophtalmologique Rabelais est un pôle hyper-spécialisé en rétine médicale situé à Lyon 2ème (métro Bellecour). Dirigé par le <strong className="font-bold text-slate-700">Dr Maddalena Quaranta-El Maftouhi</strong>, rétinologue et auteure de plus de 30 publications scientifiques internationales, le centre regroupe un plateau technique complet — <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] hover:underline">OCT Spectral-Domain</Link>, <Link prefetch={true} href="/offre-de-soins" className="text-[#003399] hover:underline">OCT-Angiographie</Link>, rétinographe grand champ Optos 200°, salle blanche d&apos;injections — pour le diagnostic et le traitement de la <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] hover:underline">DMLA</Link>, de la rétinopathie diabétique, des occlusions veineuses rétiniennes et du glaucome.
            </p>
          </div>

          {/* Credibility Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-[#f8f8f8] border-t-2 border-[#003399]">
              <p className="text-[#003399] text-[36px] font-[Gotham] font-bold">30+</p>
              <p className="text-[#888888] text-[12px] font-[Gotham] font-bold uppercase tracking-[1px] mt-1">Publications scientifiques</p>
            </div>
            <div className="text-center p-6 bg-[#f8f8f8] border-t-2 border-[#c2aa84]">
              <p className="text-[#c2aa84] text-[36px] font-[Gotham] font-bold">13</p>
              <p className="text-[#888888] text-[12px] font-[Gotham] font-bold uppercase tracking-[1px] mt-1">Traitements spécialisés</p>
            </div>
            <div className="text-center p-6 bg-[#f8f8f8] border-t-2 border-[#003399]">
              <p className="text-[#003399] text-[36px] font-[Gotham] font-bold">3</p>
              <p className="text-[#888888] text-[12px] font-[Gotham] font-bold uppercase tracking-[1px] mt-1">Langues parlées</p>
            </div>
            <div className="text-center p-6 bg-[#f8f8f8] border-t-2 border-[#c2aa84]">
              <p className="text-[#c2aa84] text-[36px] font-[Gotham] font-bold">J+0</p>
              <p className="text-[#888888] text-[12px] font-[Gotham] font-bold uppercase tracking-[1px] mt-1">Injection le jour même</p>
            </div>
          </div>

          {/* Specialty Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link prefetch={true} href="/dmla-lyon" className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-8">
              <h3 className="text-[#003399] text-[18px] font-[Gotham] font-bold uppercase tracking-[1px] mb-4 group-hover:text-[#c2aa84] transition-colors">DMLA</h3>
              <p className="text-[#888888] text-[14px] font-[Gotham] font-light leading-[1.8]">
                Diagnostic OCT ultra-précoce et traitement complet de la dégénérescence maculaire : injections anti-VEGF pour la forme humide, photobiomodulation Valeda pour la forme sèche.
              </p>
              <span className="text-[#c2aa84] text-[12px] font-bold uppercase tracking-[1px] mt-4 inline-block">En savoir plus →</span>
            </Link>
            <Link prefetch={true} href="/photobiomodulation-lyon" className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-8">
              <h3 className="text-[#003399] text-[18px] font-[Gotham] font-bold uppercase tracking-[1px] mb-4 group-hover:text-[#c2aa84] transition-colors">Photobiomodulation</h3>
              <p className="text-[#888888] text-[14px] font-[Gotham] font-light leading-[1.8]">
                Traitement innovant non invasif de la DMLA sèche avec le système VALEDA® de LumiThera, approuvé FDA. 9 séances de 5 minutes pour stimuler la régénération rétinienne.
              </p>
              <span className="text-[#c2aa84] text-[12px] font-bold uppercase tracking-[1px] mt-4 inline-block">En savoir plus →</span>
            </Link>
            <Link prefetch={true} href="/injections-intravitreennes-lyon" className="group bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-8">
              <h3 className="text-[#003399] text-[18px] font-[Gotham] font-bold uppercase tracking-[1px] mb-4 group-hover:text-[#c2aa84] transition-colors">Injections IVT</h3>
              <p className="text-[#888888] text-[14px] font-[Gotham] font-light leading-[1.8]">
                Anti-VEGF (Lucentis, Eylea, Vabysmo) réalisées le jour du diagnostic dans notre salle blanche stérile. Résultat immédiat, sans délai d&apos;attente hospitalier.
              </p>
              <span className="text-[#c2aa84] text-[12px] font-bold uppercase tracking-[1px] mt-4 inline-block">En savoir plus →</span>
            </Link>
          </div>

          {/* Homepage FAQ */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#003399] text-[24px] md:text-[30px] font-[Gotham] font-light uppercase tracking-wider text-center mb-4">
              Questions <strong className="font-bold">Fréquentes</strong>
            </h2>
            <div className="flex items-center justify-center gap-0 w-full max-w-[200px] mx-auto mb-10">
              <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
              <i className="block w-[10px] h-[10px] bg-[#c2aa84] rounded-full mx-[-5px] z-10"></i>
              <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            </div>

            <div className="space-y-3">
              <details className="group bg-[#f8f8f8] border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                  <span>Qu&apos;est-ce que le Centre Ophtalmologique Rabelais ?</span>
                  <span className="text-[#c2aa84] text-[18px] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#888888] font-light leading-[1.8] border-t border-gray-200 pt-3">
                  Le Centre Ophtalmologique Rabelais est un cabinet médical privé situé à Lyon 2ème (2 rue Antoine de Saint-Exupéry, métro Bellecour), spécialisé en rétine médicale. Il dispose d&apos;un plateau technique complet : OCT, OCT-Angiographie, rétinographe Optos 200°, angiographe, lasers spécialisés, système Valeda et salle blanche d&apos;injections. Le centre prend en charge la DMLA, la rétinopathie diabétique, les occlusions veineuses et le glaucome.
                </div>
              </details>

              <details className="group bg-[#f8f8f8] border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                  <span>Comment prendre rendez-vous ?</span>
                  <span className="text-[#c2aa84] text-[18px] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#888888] font-light leading-[1.8] border-t border-gray-200 pt-3">
                  Contactez le secrétariat au <strong className="font-bold">04 78 95 09 08</strong> ou utilisez le formulaire en ligne. En cas d&apos;urgence rétinienne (déformation visuelle soudaine, voile noir, flashs lumineux), précisez vos symptômes pour bénéficier d&apos;un rendez-vous en circuit accéléré.
                </div>
              </details>

              <details className="group bg-[#f8f8f8] border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                  <span>Qui est le Dr Quaranta-El Maftouhi ?</span>
                  <span className="text-[#c2aa84] text-[18px] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#888888] font-light leading-[1.8] border-t border-gray-200 pt-3">
                  Ophtalmologiste rétinologue, directrice du Centre Rabelais. Membre de l&apos;AAO, de l&apos;ARVO et de la SFO. Auteure de plus de 30 publications internationales. Consultante experte pour différents laboratoires pharmacologiques. Parle français, anglais et italien.
                </div>
              </details>

              <details className="group bg-[#f8f8f8] border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                  <span>Le Centre traite-t-il les urgences rétiniennes ?</span>
                  <span className="text-[#c2aa84] text-[18px] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#888888] font-light leading-[1.8] border-t border-gray-200 pt-3">
                  Oui. Les urgences rétiniennes (DMLA humide aiguë, hémorragie, suspicion de décollement) bénéficient d&apos;un circuit accéléré avec examen OCT et injection intravitréenne réalisables le jour même, sans délai hospitalier.
                </div>
              </details>

              <details className="group bg-[#f8f8f8] border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[14px] font-bold text-slate-800 hover:text-[#003399] transition-colors">
                  <span>Le Centre est-il conventionné ?</span>
                  <span className="text-[#c2aa84] text-[18px] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-[13px] text-[#888888] font-light leading-[1.8] border-t border-gray-200 pt-3">
                  Tous les médecins sont conventionnés secteur 2 (honoraires libres). Le Centre est situé au 2 rue Antoine de Saint-Exupéry, Lyon 2ème, accessible par le métro Bellecour. Téléphone : 04 78 95 09 08.
                </div>
              </details>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
