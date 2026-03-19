import { Metadata } from 'next';

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

          {/* Form */}
          <form className="space-y-6">
            {/* Civilité */}
            <div className="flex gap-6 mb-2">
              <label className="text-[#888888] flex items-center gap-2 font-light cursor-pointer text-[15px]">
                <input type="radio" name="civilite" value="Madame" className="accent-[#c2aa84] w-4 h-4" />
                Madame
              </label>
              <label className="text-[#888888] flex items-center gap-2 font-light cursor-pointer text-[15px]">
                <input type="radio" name="civilite" value="Monsieur" className="accent-[#c2aa84] w-4 h-4" />
                Monsieur
              </label>
            </div>

            {/* Nom + Prénom */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nom *"
                required
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
              />
              <input
                type="text"
                placeholder="Prénom *"
                required
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
              />
            </div>

            {/* Téléphone + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Téléphone *"
                required
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
              />
            </div>

            {/* Date de naissance */}
            <div>
              <input
                type="text"
                placeholder="Date de naissance *"
                required
                onFocus={(e) => { e.target.type = 'date'; }}
                onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
              />
            </div>

            {/* Motif de consultation */}
            <div>
              <select
                required
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light appearance-none transition-all"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center',
                  backgroundSize: '20px',
                }}
              >
                <option value="">Sélectionnez un motif de consultation *</option>
                <option value="dmla">Consultation DMLA</option>
                <option value="photo">Photobiomodulation (PBM)</option>
                <option value="oct">Examen OCT</option>
                <option value="angio">Angiographie</option>
                <option value="ivt">Injection intra-vitréenne (IVT)</option>
                <option value="pdt">Photothérapie Dynamique (PDT)</option>
                <option value="laser">Laser (PPR, SLT, YAG, IP)</option>
                <option value="eyelight">Eyelight (Sécheresse oculaire)</option>
                <option value="urgence">Urgence ophtalmologique</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Examens demandés (checkboxes) */}
            <div className="bg-[#f8f8f8] border border-[#e0e0e0] p-6">
              <p className="text-[#888888] text-[14px] font-bold uppercase tracking-wider mb-4">Examens demandés :</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'OCT Maculaire',
                  'OCT du Nerf Optique',
                  'Angiographie Fluorescéine',
                  'Angiographie ICG',
                  'OCT-Angiographie',
                  'Rétinographie',
                  'Champ Visuel',
                  'Pachymétrie',
                  'Autre(s) examen(s)',
                ].map((exam) => (
                  <label key={exam} className="flex items-center gap-2 text-[#888888] text-[14px] font-light cursor-pointer">
                    <input type="checkbox" name="examens" value={exam} className="accent-[#c2aa84] w-4 h-4" />
                    {exam}
                  </label>
                ))}
              </div>
            </div>

            {/* Upload ordonnance */}
            <div className="bg-[#f8f8f8] border border-[#e0e0e0] p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
              <label className="bg-[#003399] hover:bg-blue-800 text-white px-6 py-3 cursor-pointer text-[11px] font-bold uppercase tracking-[2px] transition-colors rounded-[3px] whitespace-nowrap">
                Joindre une Ordonnance
                <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
              </label>
              <span className="text-[#aaaaaa] text-[13px] font-light italic">Max 128MB. (pdf, jpg, png)</span>
            </div>

            {/* Message */}
            <textarea
              rows={5}
              placeholder="Votre message / Précisions complémentaires"
              className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all resize-vertical"
            ></textarea>

            {/* Médecin traitant */}
            <div>
              <input
                type="text"
                placeholder="Médecin traitant / Ophtalmologiste adressant"
                className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
              />
            </div>

            {/* RGPD Consent */}
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" id="rgpd" required className="mt-1 accent-[#c2aa84] w-4 h-4 flex-shrink-0" />
              <label htmlFor="rgpd" className="text-[13px] text-[#888888] font-light leading-relaxed">
                En soumettant ce formulaire, j&apos;accepte que les informations saisies soient exploitées dans le cadre de la demande de rendez-vous et de la relation commerciale qui peut en découler.
              </label>
            </div>

            {/* Submit */}
            <div className="mt-8 text-center pt-4">
              <button
                type="submit"
                className="bg-[#003399] hover:bg-blue-800 text-white font-bold uppercase tracking-widest py-4 px-16 transition-colors text-[12px] rounded-[50px]"
              >
                Envoyer ma demande
              </button>
            </div>
          </form>

        </div>
      </section>

    </main>
  );
}
