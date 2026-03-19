'use client';

import { useState, type FormEvent } from 'react';

export default function RdvForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [dateType, setDateType] = useState('text');
  const [dateValue, setDateValue] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);

    // Collect checked examens into a string
    const examens = formData.getAll('examens').join(', ');
    formData.delete('examens');
    formData.append('Examens demandes', examens || 'Aucun');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Erreur lors de l\'envoi.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Erreur de connexion. Veuillez réessayer ou nous contacter au 04 78 95 09 08.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-300 p-8 text-center rounded-sm">
        <div className="text-green-600 text-[48px] mb-4">✓</div>
        <h3 className="text-green-800 text-[22px] font-bold mb-4">Demande envoyée !</h3>
        <p className="text-green-700 text-[16px] font-light leading-relaxed">
          Votre demande de rendez-vous a bien été envoyée. Nous vous recontacterons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value="27fa05a8-0839-4cc1-a62c-d20c45745a67" />
      <input type="hidden" name="subject" value="Nouvelle demande de RDV - Centre Ophtalmologique Rabelais" />
      <input type="hidden" name="from_name" value="Centre Ophtalmologique Rabelais" />
      <input type="hidden" name="replyto" value="contact@centrerabelaislyon.fr" />
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      {/* Error message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-300 p-4 text-red-700 text-[14px] rounded-sm">
          {errorMsg}
        </div>
      )}

      {/* Civilité + Nom + Prénom */}
      <div className="grid md:grid-cols-3 gap-6">
        <select
          name="Civilite"
          required
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light appearance-none transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            backgroundSize: '20px',
          }}
        >
          <option value="">Civilite*</option>
          <option value="Madame">Madame</option>
          <option value="Monsieur">Monsieur</option>
        </select>
        <input
          type="text"
          name="Nom"
          placeholder="Saisir votre nom... *"
          required
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
        <input
          type="text"
          name="Prenom"
          placeholder="Saisir votre prénom... *"
          required
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
      </div>

      {/* Téléphone + Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="tel"
          name="Telephone"
          placeholder="Votre téléphone *"
          required
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
        <input
          type="email"
          name="Email"
          placeholder="Votre adresse email *"
          required
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
      </div>

      {/* Date de naissance */}
      <div>
        <p className="text-[#888888] text-[14px] font-light mb-2">Date de naissance</p>
        <input
          type={dateType}
          name="Date de naissance"
          placeholder="Date de naissance *"
          required
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          onFocus={() => setDateType('date')}
          onBlur={() => { if (!dateValue) setDateType('text'); }}
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
      </div>

      {/* Adresse */}
      <div>
        <input
          type="text"
          name="Adresse"
          placeholder="N° de voie et rue"
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="Code postal"
          placeholder="Code postal"
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
        <input
          type="text"
          name="Ville"
          placeholder="Ville"
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all"
        />
      </div>

      {/* Motif de consultation */}
      <div>
        <select
          name="Motif"
          required
          className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light appearance-none transition-all"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            backgroundSize: '20px',
          }}
        >
          <option value="">Selectionnez un motif de consultation *</option>
          <option value="Consultation DMLA">Consultation DMLA</option>
          <option value="Photobiomodulation (PBM)">Photobiomodulation (PBM)</option>
          <option value="Examen OCT">Examen OCT</option>
          <option value="Angiographie">Angiographie</option>
          <option value="Injection intra-vitreenne (IVT)">Injection intra-vitreenne (IVT)</option>
          <option value="Phototherapie Dynamique (PDT)">Phototherapie Dynamique (PDT)</option>
          <option value="Laser (PPR, SLT, YAG, IP)">Laser (PPR, SLT, YAG, IP)</option>
          <option value="Eyelight (Secheresse oculaire)">Eyelight (Secheresse oculaire)</option>
          <option value="Urgence ophtalmologique">Urgence ophtalmologique</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      {/* Examens demandés (checkboxes) */}
      <div className="bg-[#f8f8f8] border border-[#e0e0e0] p-6">
        <p className="text-[#888888] text-[14px] font-bold uppercase tracking-wider mb-4">Examens demandés :</p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'OCT Maculaire',
            'OCT du Nerf Optique',
            'Angiographie Fluoresceine',
            'Angiographie ICG',
            'OCT-Angiographie',
            'Retinographie',
            'Champ Visuel',
            'Pachymetrie',
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
        name="Message"
        rows={5}
        placeholder="Votre message / Précisions complémentaires"
        className="w-full bg-[#f8f8f8] border border-[#e0e0e0] p-4 text-[#888888] placeholder-[#aaaaaa] rounded-none focus:ring-2 focus:ring-[#003399] focus:border-transparent text-[15px] font-light transition-all resize-vertical"
      ></textarea>

      {/* Médecin traitant */}
      <div>
        <input
          type="text"
          name="Medecin traitant"
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
          disabled={status === 'sending'}
          className="bg-[#003399] hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest py-4 px-16 transition-colors text-[12px] rounded-[50px]"
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </button>
      </div>
    </form>
  );
}
