import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comment Se Rendre Au Centre | Centre Ophtalmologique Rabelais Lyon',
  description: 'Informations d\'accès et plan pour se rendre au Centre Ophtalmologique Rabelais situé au 2, Rue Antoine de Saint-Exupéry, 69002 Lyon.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/directions'
  }
};

export default function DirectionsPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[42px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Comment se rendre <strong className="font-bold">au Centre ?</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[200px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto w-full">
        
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Infos Pratiques */}
            <div>
                <h3 className="text-[#003399] text-[24px] font-bold mb-6 tracking-[1px] uppercase">Coordonnées</h3>
                <div className="bg-[#f8f8f8] p-8 border-l-4 border-[#c2aa84] shadow-sm mb-8">
                    <p className="text-[16px] text-slate-800 font-bold mb-2">Centre Ophtalmologique Rabelais</p>
                    <p className="text-[15px] text-[#888888] mb-2 leading-relaxed">2, Rue Antoine de Saint-Exupéry<br/>69002 Lyon</p>
                    <p className="text-[15px] text-[#888888] mb-4">Téléphone : <a href="tel:0478950908" className="text-[#003399] font-bold hover:underline">04 78 95 09 08</a></p>
                    <p className="text-[14px] text-[#888888] italic">Le centre est entièrement accessible aux personnes à mobilité réduite (PMR).</p>
                </div>

                <h3 className="text-[#c2aa84] text-[20px] font-bold mb-4 tracking-[1px] uppercase mt-8">Transports en Commun</h3>
                <ul className="space-y-4 text-[#888888] text-[15px]">
                    <li className="flex items-start gap-3">
                        <span className="bg-red-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">A</span>
                        <span><strong>Métro A :</strong> Arrêt Ampère - Victor Hugo ou Bellecour</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">D</span>
                        <span><strong>Métro D :</strong> Arrêt Bellecour</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="bg-slate-800 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">S1</span>
                        <span><strong>Bus :</strong> Ligne S1, arrêt Bellecour - Saint-Exupéry</span>
                    </li>
                </ul>

                <h3 className="text-[#c2aa84] text-[20px] font-bold mb-4 tracking-[1px] uppercase mt-8">Stationnement</h3>
                <p className="text-[#888888] text-[15px] leading-relaxed">
                    Parkings publics à proximité :
                    <br/>- Parking Bellecour
                    <br/>- Parking Antonin Poncet
                    <br/>- Parking Perrache
                </p>

            </div>

            {/* Google Map */}
            <div className="h-full min-h-[400px] w-full bg-gray-200 border-2 border-white shadow-lg relative">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.504936302824!2d4.829623815567637!3d45.75610817910549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaa37265d22f%3A0xa1234b35e0af1872!2s2%20Rue%20Antoine%20de%20Saint-Exup%C3%A9ry%2C%2069002%20Lyon!5e0!3m2!1sfr!2sfr!4v1680000000000!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte d'accès Au Centre Ophtalmologique Rabelais"
                ></iframe>
            </div>

        </div>

      </section>

    </main>
  );
}
