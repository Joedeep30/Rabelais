import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Villeurbanne | Expert Rétine & DMLA Proche',
  description: 'Proche de Villeurbanne (Gratte-Ciel, Charpennes), trouvez Au Centre Ophtalmologique Rabelais un ophtalmologue et un rétinologue de pointe pour votre suivi DMLA et vasculaire.',
  keywords: 'ophtalmologue villeurbanne, ophtalmo charpennes villeurbanne, centre vision villeurbanne, retinologue villeurbanne, clinique de la vue proche villeurbanne dmla',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-villeurbanne'
  }
};

export default function OphtalmologueVilleurbannePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Spécialiste Ophtalmologiste pour l'Ensemble de Villeurbanne",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-villeurbanne",
    "telephone": "+33478950908",
    "description": "Cabinet Ophtalmo Expert : Le Centre Ophtalmologique Rabelais accueille les patients du grand Villeurbanne (Charpennes, Gratte-Ciel, Tonkin) pour les diagnostics profonds de la rétine.",
    "areaServed": "Villeurbanne (69100), Charpennes, Gratte-Ciel, Tonkin",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2, Rue Antoine de Saint-Exupéry",
      "addressLocality": "Lyon",
      "postalCode": "69002",
      "addressCountry": "FR"
    },
    "medicalSpecialty": "Ophthalmologic"
  };

  return (
    <main className="flex flex-col flex-grow bg-white font-[Gotham] text-[#888888]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero SEO Page */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('https://centrerabelaislyon.fr/wp-content/uploads/2015/09/post1.png')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue depuis Villeurbanne</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Expertise de la rétine médicale et DMLA accessible rapidement aux patients habitants Villeurbanne (69100).
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise Maculaire Complète pour les Villeurbannais</h2>
                <p>
                    <strong>Trouver un rendez-vous rapide à Villeurbanne (69100)</strong> ou sur le pôle majeur des Charpennes pour une urgence maculaire peut constituer un réel défi. Le recours à un ophtalmologiste généraliste n'est parfois pas suffisant quand il s'agit d'une suspicion pathologique sévère impliquant la rétine.
                </p>
                <p>
                    Le <strong>Centre Ophtalmologique Rabelais</strong>, à Lyon Presqu'Île, met à disposition des patients provenant de Villeurbanne (Gratte-Ciel, Tonkin, Croix-Luizet, Charpennes) un service pointu et immédiat.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Quand faire appel Au Centre Ophtalmologique Rabelais ?</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li><strong>Injections récurrentes :</strong> Si vous nécessitez vos <Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#003399] font-bold hover:underline">séances régulières d'injections intra-vitréennes (IVT)</Link> et cherchez un cadre très qualitatif.</li>
                        <li><strong>DMLA Atrophique (Sèche) :</strong> Vous habitez Villeurbanne et cherchez des solutions médicales non-invasives ? La <Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] font-bold hover:underline">Photobiomodulation Valeda</Link> offerte par notre système en fait l'unique centre des environs équipés pour cela.</li>
                        <li><strong>Patients Diabétiques :</strong> Le bilan rétinien de précaution strict en tant qu'examen annuel approfondi. <Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] hover:underline">L'imagerie OCT permet de vous rassurer techniquement</Link>.</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Pourquoi faire le trajet depuis Villeurbanne ?</h2>
                <p>
                    Travailler sur la vue fine demande une infrastructure d'imagerie clinique irréprochable. Se réunir autour d'un plateau mutualisé par des praticiens "Hyper-Spécialistes" de la Rétine réduit le parcours du patient. En une seule visite, un diagnostic net (et si requis de l'OCT-Angiographie / Tomographie laser ou chirurgical) est rendu. Cette expertise vous empêche d'être ballottés entre plusieurs adresses hospitalières.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès depuis le cœur de Villeurbanne</h3>
                <p>
                    La connexion TCL entre le centre de Villeurbanne et notre clinique offre des chronos très courts (Ligne A) :
                </p>
                <ul className="list-none space-y-3 mt-4">
                    <li><strong className="text-black">🚇 Direct par Métro A :</strong> Depuis les stations **Gratte-Ciel**, **République**, ou **Charpennes** en direction de Perrache. Arrêt **Bellecour**. (11 à 15 min de trajet optimal). Vous êtes ensuite à 3 minutes de l'accueil de notre hôpital de jour.</li>
                    <li><strong className="text-black">🚗 En voiture :</strong> Descente rapide le long de Lafayette et des ponts via le Parc ; de multiples places payantes souterraines sont disponibles sous la place Bellecour adjacente.</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">Questions Spécifiques</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Dois-je arriver dilatable, ai-je besoin d'un arrêt ou Uber depuis Villeurbanne ?</p>
                            <p className="text-[13px] text-[#888888]">Beaucoup d'examens comme l'OCT ne nécessitent aucune dilatation, contrairement à la consultation classique, permettant à de nombreux patients de repartir en Métro A sans troubles visuels après examen.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Nos Spécialités associées</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Retinologue (Proximité directe)</Link></li>
                        <li><Link prefetch={true} href="/dmla-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> DMLA Diagnostic & Prise en Charge</Link></li>
                        <li><Link prefetch={true} href="/retine-medicale-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Qu'est-ce que la rétine médicale ?</Link></li>
                        <li><Link prefetch={true} href="/ophtalmologue-lyon-3" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Expertise Lyon 3 (Voisin)</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            L'Imagerie Diagnostique Majeure pour <strong className="font-bold text-[#c2aa84]">Villeurbanne</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Démarrez la priorisation de vos soins occulaires (Réservée exclusivement Pathologie de la Macula Rétinienne / DMLA) en soumettant un court formulaire.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Obtenir Un RDV Spécialisé
          </Link>
        </div>

      </section>

    </main>
  );
}
