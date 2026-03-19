import { Metadata } from 'next';
import RdvForm from './RdvForm';

export const metadata: Metadata = {
  title: 'Prise de Rendez-vous - Centre Ophtalmologique Rabelais Lyon',
  description: 'Demandez un rendez-vous au Centre Ophtalmologique Rabelais à Lyon. Remplissez le formulaire et vous serez recontacté rapidement.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/rdv'
  }
};

export default function RdvPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://centrerabelaislyon.fr/wp-content/uploads/2015/10/banner8.jpg"
            alt="Prise de rendez-vous Centre Ophtalmologique Rabelais Lyon"
            title="Prise de Rendez-vous"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16">
          <h1 className="text-white text-[32px] md:text-[52px] font-light leading-[1.1] tracking-wide mb-[20px] uppercase">
            Prise de <strong className="font-bold">Rendez-vous</strong>
          </h1>
          <div className="flex items-center justify-center gap-0 w-full max-w-[300px]">
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
            <i className="block w-[14px] h-[14px] bg-[#c2aa84] rounded-full mx-[-7px] z-10"></i>
            <div className="h-[1px] w-full bg-[#c2aa84]/60"></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-[40px]">
            <h2 className="text-[#888888] text-[28px] md:text-[35px] font-light uppercase tracking-wider mb-[15px]">
              Demande de <strong className="font-bold text-[#c2aa84]">rendez-vous</strong>
            </h2>
            <p className="text-[#888888] text-[15px] font-light leading-[1.8]">
              Remplissez le formulaire ci-dessous et vous serez recontacté. Merci de préciser le ou les examens demandés après avoir rempli les champs obligatoires.
            </p>
            <p className="text-[#c2aa84] text-[13px] font-light mt-2">* Champs obligatoires</p>
          </div>

          {/* Interactive Form Component */}
          <RdvForm />

        </div>
      </section>

    </main>
  );
}
