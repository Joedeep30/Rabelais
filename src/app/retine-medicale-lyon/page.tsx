import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rétine Médicale Lyon | Centre Ophtalmologique Rabelais',
  description: 'Expertise médicale spécialisée dans le diagnostic et le suivi des maladies de la macula et de la rétine (DMLA, Diabète, membranes). Imagerie dernière génération à Lyon 2.',
  keywords: 'rétine médicale lyon, centre ophtalmologique retine, ophtalmo macula lyon, urgence retine lyon, dmla retine',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/retine-medicale-lyon'
  }
};

export default function RetineMedicaleLyonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalSpecialty",
        "name": "Rétine Médicale et Maladies Maculaires",
        "description": "Prise en charge médicale et diagnostique complète des pathologies de la rétine et du nerf optique. Imagerie par OCT Maculaire (tomographie en cohérence optique) et angiographie.",
        "url": "https://centrerabelaislyon.fr/retine-medicale-lyon"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce que la rétine médicale ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La rétine médicale est la sur-spécialité de l'ophtalmologie dédiée au diagnostic et au traitement non chirurgical des maladies du fond de l'œil, principalement la macula (vision centrale) et le nerf optique. Elle se distingue de la rétine chirurgicale (décollements de rétine, vitrectomies). Au Centre Ophtalmologique Rabelais à Lyon, la rétine médicale constitue notre expertise exclusive. Nous traitons la DMLA (sèche et humide), la rétinopathie diabétique, les occlusions veineuses rétiniennes, les membranes épirétiniennes, les trous maculaires, et le glaucome."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre un ophtalmologue et un rétinologue ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'ophtalmologue généraliste prend en charge l'ensemble des pathologies oculaires (réfraction, cataracte, glaucome, pédiatrie). Le rétinologue est un ophtalmologue hyper-spécialisé exclusivement dans les maladies de la rétine et de la macula. Il possède une expertise avancée en imagerie rétinienne (OCT, OCT-Angiographie, angiographie à la fluorescéine) et en traitements spécialisés (injections intravitréennes, laser, photobiomodulation). Au Centre Ophtalmologique Rabelais, le Dr Quaranta-El Maftouhi est rétinologue exclusif."
            }
          },
          {
            "@type": "Question",
            "name": "Quels examens sont réalisés en rétine médicale à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le bilan rétinien complet Au Centre Ophtalmologique Rabelais comprend : l'OCT maculaire (Tomographie en Cohérence Optique Spectral-Domain) pour analyser les couches rétiniennes avec une résolution de 3 à 5 microns ; l'OCT-Angiographie (OCT-A) pour visualiser la vascularisation rétinienne sans injection de colorant ; la rétinographie (photographie couleur du fond d'œil) ; l'angiographie à la fluorescéine en cas de pathologie vasculaire complexe ; et l'analyse des fibres nerveuses rétiniennes (RNFL) pour le dépistage du glaucome. Tous ces examens sont réalisés par nos orthoptistes spécialisés en imagerie oculaire."
            }
          },
          {
            "@type": "Question",
            "name": "Quand consulter un spécialiste de la rétine ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Consultez un rétinologue en urgence si vous observez : des lignes droites déformées (métamorphopsies), une tache sombre au centre de la vision (scotome), des éclairs lumineux (photopsies), une pluie soudaine de corps flottants (mouches volantes), ou un voile sombre dans le champ visuel. Consultez également pour un suivi régulier si vous avez plus de 55 ans avec des antécédents familiaux de DMLA, si vous êtes diabétique (fond d'œil annuel obligatoire), ou si votre ophtalmologue traitant vous a référé pour un avis spécialisé."
            }
          },
          {
            "@type": "Question",
            "name": "Où trouver un spécialiste de la rétine à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le Centre Ophtalmologique Rabelais (2, Rue Antoine de Saint-Exupéry, Lyon 2ème) est le pôle de référence en rétine médicale à Lyon. Exclusivement dédié aux pathologies maculaires et rétiniennes, il réunit un plateau technique complet (OCT Spectral-Domain, OCT-Angiographie, laser Argon et YAG, système de photobiomodulation Valeda, salle d'injection stérile) et une équipe spécialisée (rétinologue, orthoptistes en imagerie, infirmière IVT). Accessible par métro (Bellecour). Tél. : 04 78 95 09 08."
            }
          },
          {
            "@type": "Question",
            "name": "Le Centre Ophtalmologique Rabelais est-il un centre hospitalier ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. Le Centre Ophtalmologique Rabelais est un cabinet médical libéral hyper-spécialisé en rétine, distinct des services hospitaliers. Nous offrons cependant un niveau d'équipement et d'expertise équivalent aux services hospitaliers universitaires, avec l'avantage d'un accès plus rapide et d'un parcours patient centralisé (diagnostic + traitement le même jour). De nombreux patients nous sont adressés par les services d'ophtalmologie des HCL (Hôpitaux de Lyon) pour des prises en charge rétiniennes en ville."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex flex-col flex-grow bg-white font-[Gotham] text-[#888888]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero SEO Page */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post2.png"
            alt="Équipements et spécialistes en Rétine Médicale Au Centre Ophtalmologique Rabelais à Lyon"
            title="Spécialiste Rétine Médicale Lyon"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Spécialistes de la <strong className="font-bold text-[#c2aa84]">Rétine Médicale</strong> à Lyon
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Diagnostics approfondis et prise en charge thérapeutique de pointe (DMLA, Diabète, Membranes) par l'équipe d'experts de Rabelais.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Qu'est-ce que la Rétine Médicale ?</h2>
                <p>
                    La <strong>rétine médicale</strong> est la branche sur-spécialisée de l'ophtalmologie qui se consacre exclusivement à l'évaluation, au diagnostic fin, et au traitement non chirurgical des maladies affectant le fond de l'œil, et principalement la <strong>macula</strong>.
                </p>
                <p>
                    C'est l'essence même du <Link prefetch={true} href="/centre-ophtalmologique-lyon-6" className="text-[#c2aa84] font-bold hover:underline">Centre Ophtalmologique Rabelais à Lyon</Link>. À l’aide de technologies d’exploration ophtalmologique sophistiquées, souvent indolores (OCT-Angio, Photographie du fond d'œil), nous visualisons l'invisible : le vieillissement cellulaire de vos nerfs optiques et la micro-vascularisation rétinienne.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#003399] shadow-sm">
                    <h3 className="text-[#003399] text-[20px] font-bold uppercase mb-4">Pathologies Prises en Charge au Centre</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>La DMLA (Dégénérescence Maculaire Liée à l'Âge) :</strong> La principale affection traitée quotidiennement par nos équipes, sous <Link prefetch={true} href="/dmla-lyon" className="text-[#c2aa84] hover:underline">ses formes atrophiques (sèches) et exsudatives (humides)</Link>.</li>
                        <li><strong>Rétinopathie Diabétique :</strong> Suivi des œdèmes maculaires et altérations induits par le diabète et les variations glycémiques impactant le nerf de l'œil (Ischémie).</li>
                        <li><strong>Occlusions Veineuses (OVR) :</strong> Thromboses d'une veine au cœur de la rétine nécessitant l'intervention d'examens angio-fluorographiques par nos <Link prefetch={true} href="/retinologue-lyon-6" className="text-[#c2aa84] font-bold hover:underline">Rétinologues</Link>.</li>
                        <li><strong>Phénomènes Maculaires (Trous, Membranes) :</strong> Analyse du froissement prémaculaire et traction vitréo-rétinienne.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Un parcours ultra-centralisé de Rétine Médicale</h2>
                <p>
                    Afin d'éviter l'errance de patients âgés de laboratoires en hôpitaux, <strong>l'avantage majeur du Centre Ophtalmologique Rabelais</strong>, situé en plein milieu de la métropole, consiste en son <strong>intégration structurelle complète</strong>.
                </p>
                <p>
                    Le dépistage est effectué instantanément par des plateformes d'<Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] hover:underline">OCT Haute Résolution SD-OCT</Link> produisant des coupes histologiques de 3 microns.
                    Le traitement suit presque immédiatement l'examen clinique des clichés d'angiographie selon vos indications thérapeutiques, via notre salle stérile d'<Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] font-bold hover:underline">Injections Intravitréennes (IVT Anti-VEGF)</Link>, ou nos blocs lasers froids spécifiques (<Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] hover:underline">Système Valeda</Link>).
                </p>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#c2aa84]">
                    <h4 className="font-bold text-[#c2aa84] text-[18px] uppercase mb-4">Urgence & Sécurité</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">J'ai un éclair noir et de nombreux corps flottants ce matin, dois-je m'inquiéter ?</p>
                            <p className="text-[13px] text-[#888888]">Oui, la baisse subite de vue, un éclair persistant en faible luminosité (Phosphènes) et la recrudescence d'une pluie de sable témoignent typiquement du tiraillement maculaire ou d'une déchirure de décollement. <strong>Demandez l'avis urgent</strong> d'un praticien spécialisé du centre !</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#003399] text-[16px] uppercase mb-4">Naviguez nos expertises associées</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Consulter un Rétinologue (Lyon 6)</Link></li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Innovation : Valeda contre la DMLA</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Protocole IVT Expliqué</Link></li>
                        <li><Link prefetch={true} href="/dois-je-consulter" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Symptômes clés : Dois-je consulter ?</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            L'Imagerie Diagnostique Majeure de la <strong className="font-bold text-[#c2aa84]">Rétine Médicale</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Consultez le <Link prefetch={true} href="/equipe-medicale#dr-quaranta" className="text-[#003399] font-bold hover:underline">Docteur Quaranta</Link> ou ses collègues du Pôle au sein de l'Institut Rabelais en effectuant une pré-déclaration en ligne en vue d'organiser votre passage aux soins du Dépistage.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Formulaire d'Admission DMLA
          </Link>
        </div>

      </section>

    </main>
  );
}
