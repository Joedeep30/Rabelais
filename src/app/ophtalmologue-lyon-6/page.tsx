import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ophtalmologue Lyon 6 | Centre Ophtalmologique Rabelais',
  description: 'Vous cherchez un ophtalmologue proche de Lyon 6, Foch ou Brotteaux ? Le Centre Ophtalmologique Rabelais est votre spécialiste pour la Rétine médicale et la DMLA à Lyon.',
  keywords: 'ophtalmologue lyon 6, ophtalmologue proche lyon 6, Centre Ophtalmologique Rabelais Lyon, ophtalmo lyon 6eme, specialiste dmla lyon 6, rdv ophtalmo lyon 6',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/ophtalmologue-lyon-6'
  }
};

export default function OphtalmologueLyon6Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ophtalmologue Lyon 6 - Centre Ophtalmologique Rabelais",
    "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
    "url": "https://centrerabelaislyon.fr/ophtalmologue-lyon-6",
    "telephone": "+33478950908",
    "description": "Consultation ophtalmologique d'expertise pour les patients du 6ème arrondissement de Lyon. Dépistage et traitement DMLA, pathologies de la rétine.",
    "areaServed": "Lyon 6ème (69006), Brotteaux, Foch, Masséna, Parc de la Tête d'Or",
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
          <div className="absolute inset-0 bg-[#003399]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 max-w-4xl">
          <h1 className="text-white text-[32px] md:text-[50px] font-light leading-[1.2] tracking-wide mb-[20px] uppercase">
             Votre <strong className="font-bold">Ophtalmologue Lyon 6</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px] mb-8">
            <div className="h-[2px] w-full bg-[#c2aa84]"></div>
          </div>
          <p className="text-white/90 text-[18px] md:text-[22px] font-light leading-[1.6]">
            Consultations d'experts en rétine médicale à proximité immédiate du 6e arrondissement et des Brotteaux.
          </p>
        </div>
      </section>

      {/* Main SEO Content Body */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 prose prose-lg max-w-none text-[#888888] font-light leading-relaxed">
                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Expertise Ophtalmologique pour les patients de Lyon 6</h2>
                <p>
                    Vous résidez ou travaillez dans le <strong>6ème arrondissement de Lyon (69006)</strong>, près du Parc de la Tête d'Or, des Brotteaux, de Masséna ou de Foch ? Le <strong>Centre Ophtalmologique Rabelais</strong> est un pôle d'excellence en <Link prefetch={true} href="/retine-medicale-lyon" className="text-[#c2aa84] font-bold hover:underline">Rétine Médicale</Link> situé à moins de 15 minutes de votre domicile.
                </p>
                <p>
                    Contrairement aux centres de soins classiques, notre clinique privée hyper-spécialisée prend en charge prioritairement les pathologies du fond d'œil : macula, rétinopathie diabétique, et altérations visuelles liées à l'âge.
                </p>

                <div className="my-10 p-8 bg-[#f8f8f8] border-l-4 border-[#c2aa84] shadow-sm">
                    <h3 className="text-[#c2aa84] text-[20px] font-bold uppercase mb-4">Soins proposés pour les patients de Lyon 6</h3>
                    <ul className="list-disc pl-4 space-y-2 mb-0">
                        <li>Dépistage et traitement de la <Link prefetch={true} href="/dmla-lyon" className="text-[#003399] font-bold hover:underline">DMLA (Dégénérescence Maculaire Liée à l'Âge)</Link></li>
                        <li>Examen du fond d'œil approfondi (<Link prefetch={true} href="/oct-macula-lyon" className="text-[#003399] font-bold hover:underline">OCT Maculaire</Link>, Angiographie)</li>
                        <li><Link prefetch={true} href="/photobiomodulation-lyon" className="text-[#003399] font-bold hover:underline">Photobiomodulation (Valeda)</Link> pour freiner l'atrophie</li>
                        <li>Urgences rétiniennes (baisses d'acuité brutales, myodésopsies)</li>
                    </ul>
                </div>

                <h2 className="text-[#003399] text-[26px] font-bold uppercase tracking-wider mb-6">Pourquoi consulter Au Centre Ophtalmologique Rabelais depuis Lyon 6 ?</h2>
                <p>
                    Le 6ème arrondissement (Lyon 6) est un quartier central très bien desservi par le métro A (Foch, Masséna) et le réseau TCL. Nos patients du 69006 choisissent notre plateau technique car nous disposons du matériel d'imagerie diagnostique de toute dernière génération permettant des examens immédiats (O.C.T., Rétinographie Ultra Grand Champ) sur un même lieu, sans avoir à multiplier les rendez-vous ailleurs dans l'agglomération.
                </p>

                <h3 className="text-slate-800 text-[20px] font-bold uppercase mt-10 mb-4">Accès rapide depuis le 6e arrondissement</h3>
                <ul className="list-none space-y-3">
                    <li><strong className="text-black">🚗 En voiture :</strong> Via les quais du Rhône (Quai Général Sarrail, Quai Jean Moulin). Stationnements publics : Parking Bellecour ou Antonin Poncet.</li>
                    <li><strong className="text-black">🚇 TCL (Métro) :</strong> Depuis la station Foch (Métro A), trajet direct jusqu'à Bellecour. Le cabinet se trouve à 2 minutes à pied de la place.</li>
                    <li><strong className="text-black">🚲 À vélo :</strong> Les pistes cyclables des quais vous amènent directement à destination au Centre Presqu'île Lyon 2 en toute fluidité.</li>
                </ul>

            </div>

            {/* Sidebar FAQ / Liens internes */}
            <div className="space-y-8">
                <div className="bg-[#f8f8f8] p-6 shadow-sm border-t-2 border-[#003399]">
                    <h4 className="font-bold text-[#003399] text-[18px] uppercase mb-4">FAQ Locale</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Traitez-vous les urgences rétine pour les patients de Lyon 6 ?</p>
                            <p className="text-[13px] text-[#888888]">Oui, face à une suspicion de décollement de la rétine (flashs, voile noir), un accueil rapide est mis en place par nos spécialistes.</p>
                        </div>
                        <div>
                            <p className="font-bold text-[14px] text-slate-800 mb-1">Faites-vous la chirurgie réfractive ?</p>
                            <p className="text-[13px] text-[#888888]">Actuellement, notre plateau technique de Lyon se consacre à 100% à l'imagerie maculaire et à la rétine médicale.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-[#c2aa84] text-[16px] uppercase mb-4">Domaines d'intervention</h4>
                    <ul className="space-y-2 text-[14px]">
                        <li><Link prefetch={true} href="/retinologue-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Rétinologue à proximité</Link></li>
                        <li><Link prefetch={true} href="/injections-intravitreennes-lyon" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Injections Intravitréennes</Link></li>
                        <li><Link prefetch={true} href="/centre-ophtalmologique-lyon-6" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Centre Médical Partenaires</Link></li>
                        <li><Link prefetch={true} href="/offre-de-soins" className="text-[#888888] hover:text-[#003399] transition-colors flex items-center gap-2"><span className="text-[#c2aa84]">▹</span> Voir tous les soins</Link></li>
                    </ul>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h3 className="text-[24px] font-light uppercase tracking-wider mb-6 text-[#888888]">
            Prenez rendez-vous avec un <strong className="font-bold text-[#003399]">Ophtalmologue d'Expertise</strong>
          </h3>
          <p className="text-[#888888] font-light mb-8 max-w-2xl mx-auto">
            Sélectionnez en un clic le motif de consultation grâce à notre formulaire de prise de rendez-vous sécurisé au bas de cette page.
          </p>
          <Link prefetch={true} 
            href="/#home-page-contact" 
            className="inline-block bg-[#003399] hover:bg-blue-800 text-white text-[13px] font-bold tracking-[2px] uppercase py-[18px] px-[40px] rounded-[50px] transition-colors"
          >
            Formulaire de Contact
          </Link>
        </div>

      </section>

    </main>
  );
}
