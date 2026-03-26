import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OCT Maculaire Lyon | Tomographie Rétine | Centre Ophtalmologique Rabelais',
  description: 'Le Centre Ophtalmologique Rabelais à Lyon réalise vos examens OCT maculaire (Tomographie en Cohérence Optique) de dernière génération pour le dépistage de la DMLA et les pathologies rétiniennes.',
  keywords: 'oct macula lyon, oct maculaire lyon, tomographie coherence optique lyon, examen retine lyon, oct-a angiographie lyon, fond oeil lyon',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/oct-macula-lyon'
  }
};

export default function OCTMaculaLyonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalTest",
        "name": "OCT Maculaire (Tomographie en Cohérence Optique)",
        "description": "Examen d'imagerie non-invasif et indolore permettant d'obtenir des coupes microscopiques de la rétine pour le diagnostic et le suivi des pathologies maculaires.",
        "url": "https://centrerabelaislyon.fr/oct-macula-lyon",
        "usedToDiagnose": {
          "@type": "MedicalCondition",
          "name": "DMLA, Œdème maculaire, Rétinopathie diabétique, Glaucome"
        },
        "availableIn": {
          "@type": "MedicalClinic",
          "name": "Centre Ophtalmologique Rabelais",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2, Rue Antoine de Saint-Exupéry",
            "addressLocality": "Lyon",
            "postalCode": "69002",
            "addressCountry": "FR"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qu'est-ce qu'un OCT maculaire (Tomographie en Cohérence Optique) ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'OCT maculaire (Optical Coherence Tomography) est un examen d'imagerie oculaire non invasif et totalement indolore qui utilise un faisceau lumineux infrarouge de basse cohérence pour réaliser des coupes microscopiques de la rétine avec une résolution de 3 à 5 microns, comparable à une biopsie optique virtuelle. Cet examen permet d'analyser les différentes couches rétiniennes (membrane limitante interne, couche nucléaire, épithélium pigmentaire) et de détecter des anomalies invisibles au fond d'œil classique. Au Centre Ophtalmologique Rabelais à Lyon, nous utilisons des OCT Spectral-Domain (SD-OCT) de dernière génération offrant une acquisition ultrarapide et une résolution exceptionnelle."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre OCT et OCT-Angiographie (OCT-A) ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'OCT structurel fournit des images en coupe de l'épaisseur et de la structure de la rétine (détection de drüsen, œdème, membranes, trous maculaires). L'OCT-Angiographie (OCT-A) est une technologie complémentaire qui visualise les vaisseaux sanguins rétiniens et choroïdiens sans injection de colorant, en détectant le mouvement des globules rouges dans les capillaires. L'OCT-A est particulièrement utile pour le suivi de la DMLA humide (détection des néovaisseaux) et de la rétinopathie diabétique (zones d'ischémie). Au Centre Ophtalmologique Rabelais, nous disposons des deux technologies et les utilisons de manière complémentaire."
            }
          },
          {
            "@type": "Question",
            "name": "Faut-il dilater les pupilles pour un OCT maculaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dans la majorité des cas, non. Les OCT de dernière génération utilisés Au Centre Ophtalmologique Rabelais fonctionnent très bien sans dilatation pupillaire, ce qui permet aux patients de repartir immédiatement en conduisant ou en transports en commun. Cependant, dans certains cas (pupilles naturellement très étroites, cataracte avancée), une dilatation peut être nécessaire. Si une angiographie à la fluorescéine est également requise lors de la même consultation, la dilatation sera alors systématique."
            }
          },
          {
            "@type": "Question",
            "name": "À quelle fréquence faire un OCT maculaire ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La fréquence dépend de la pathologie suivie. Pour la DMLA humide sous traitement anti-VEGF : un OCT est réalisé avant chaque injection (toutes les 4 à 16 semaines selon le protocole Treat & Extend). Pour la DMLA sèche : tous les 6 à 12 mois pour surveiller la progression. Pour le glaucome : tous les 6 à 12 mois pour suivre l'épaisseur des fibres nerveuses (RNFL). Pour les patients diabétiques : au minimum annuellement dans le cadre du fond d'œil de surveillance. Au Centre Ophtalmologique Rabelais, le rythme est personnalisé par le rétinologue en fonction de l'évolution observée."
            }
          },
          {
            "@type": "Question",
            "name": "Où faire un examen OCT maculaire à Lyon ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le Centre Ophtalmologique Rabelais (2, Rue Antoine de Saint-Exupéry, Lyon 2ème, métro Bellecour) réalise vos examens OCT maculaires avec des appareils Spectral-Domain de dernière génération. L'examen est réalisé par nos orthoptistes spécialisés en imagerie rétinienne, puis analysé en temps réel par le rétinologue lors de votre consultation. Le résultat et le diagnostic sont rendus le jour même. Contact : 04 78 95 09 08."
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
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/hero/cabinet-ophtalmologie-lyon-centre.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             <strong className="font-bold">OCT Maculaire</strong> à Lyon
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Imagerie rétinienne de haute résolution au Centre Ophtalmologique Rabelais — diagnostic immédiat, sans dilatation obligatoire.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Qu&apos;est-ce que l&apos;OCT Maculaire ?</h2>
                <p>
                    La <strong>Tomographie en Cohérence Optique (OCT)</strong> est un examen d&apos;imagerie non invasif et totalement indolore, considéré aujourd&apos;hui comme l&apos;outil diagnostique le plus performant en ophtalmologie rétinienne. À l&apos;aide d&apos;un faisceau lumineux infrarouge, l&apos;appareil réalise des coupes microscopiques de la rétine avec une résolution de <strong>3 à 5 microns</strong>, comparable à une biopsie optique.
                </p>
                <p>
                    Le Centre Ophtalmologique Rabelais est équipé d&apos;OCT de <strong>dernière génération (Spectral-Domain)</strong>, permettant une acquisition ultrarapide des images et une analyse des différentes couches de la rétine avec une précision remarquable.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Pathologies diagnostiquées par OCT</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong><Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA (Dégénérescence Maculaire)</Link> :</strong> Identification du type (sèche ou humide), mesure de l&apos;épaisseur rétinienne, détection des fluides sous-rétiniens.</li>
                        <li><strong>Œdème maculaire :</strong> Quantification précise de l&apos;épaisseur maculaire dans les occlusions veineuses ou la rétinopathie diabétique.</li>
                        <li><strong>Membranes épirétiniennes :</strong> Visualisation et suivi de la traction vitréo-maculaire.</li>
                        <li><strong>Trous maculaires :</strong> Classification et indication chirurgicale.</li>
                        <li><strong>Glaucome :</strong> Analyse de l&apos;épaisseur des fibres nerveuses (RNFL) autour du nerf optique.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">OCT-Angiographie (OCT-A)</h2>
                <p>
                    En complément de l&apos;OCT structurel, notre plateau dispose de l&apos;<strong>OCT-Angiographie (OCT-A)</strong>, une technologie révolutionnaire qui permet de visualiser les vaisseaux rétiniens <strong>sans injection de colorant</strong>. Contrairement à l&apos;<Link prefetch={true} href="/offre-de-soins" className="text-[#c2aa84] hover:underline">angiographie traditionnelle à la fluorescéine</Link>, l&apos;OCT-A est totalement non-invasif.
                </p>
                <p>
                    Cette technologie est particulièrement utile pour le suivi de la <strong>DMLA humide</strong> entre les séances d&apos;<Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#c2aa84] hover:underline">injections intravitréennes (IVT)</Link>, permettant de réduire le nombre d&apos;angiographies invasives.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Déroulement de l&apos;examen Au Centre Ophtalmologique Rabelais</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">⏱ Durée :</strong> L&apos;acquisition OCT elle-même dure quelques secondes. La consultation complète, incluant les examens préliminaires réalisés par nos orthoptistes, est d&apos;environ 30 à 45 minutes.</li>
                    <li><strong className="text-black">💡 Sans dilatation :</strong> La plupart des examens OCT ne nécessitent pas de dilatation pupillaire, vous permettant de repartir rapidement en transports en commun.</li>
                    <li><strong className="text-black">📋 Résultat immédiat :</strong> Les images sont analysées par le <Link prefetch={true} href="/retinologue-lyon-6" className="text-[#c2aa84] hover:underline">rétinologue</Link> en temps réel, avec un diagnostic rendu lors de la même consultation.</li>
                </ul>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">Questions OCT</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">L&apos;examen est-il douloureux ?</p>
                            <p className="text-[13px] text-[#888888]">Absolument pas. L&apos;OCT est un examen sans contact avec l&apos;œil. Vous placez votre menton sur une mentonnière et fixez un point lumineux pendant quelques secondes.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">À quelle fréquence dois-je faire un OCT ?</p>
                            <p className="text-[13px] text-[#888888]">Pour le suivi d&apos;une DMLA humide sous traitement, un OCT est réalisé avant chaque injection (environ tous les 1 à 3 mois). Pour la surveillance, un rythme semestriel ou annuel peut suffire.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Parcours associé</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Notre offre de soins complète</Link></li>
                        <li><Link prefetch={true} href="/plateau-technique" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Le plateau technique</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> DMLA : diagnostic & traitement</Link></li>
                        <li><Link prefetch={true} href="/retine-medicale-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétine médicale</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Réalisez votre <strong className="font-bold text-[#c2aa84]">bilan OCT</strong> Au Centre Ophtalmologique Rabelais
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Nos OCT Spectral-Domain de dernière génération permettent un diagnostic en temps réel de l&apos;ensemble des pathologies maculaires et du nerf optique.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Demander un Rendez-Vous OCT
          </Link>
        </div>

      </section>

    </main>
  );
}
