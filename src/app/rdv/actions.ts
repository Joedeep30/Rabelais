'use server';

import { createClient } from '@/lib/supabase/server';

export type RdvFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitRdvForm(
  _prevState: RdvFormState,
  formData: FormData
): Promise<RdvFormState> {
  const supabase = await createClient();

  const civilite = formData.get('civilite') as string;
  const nom = formData.get('nom') as string;
  const prenom = formData.get('prenom') as string;
  const telephone = formData.get('telephone') as string;
  const email = formData.get('email') as string;
  const date_naissance = formData.get('date_naissance') as string;
  const adresse = formData.get('adresse') as string;
  const code_postal = formData.get('code_postal') as string;
  const ville = formData.get('ville') as string;
  const motif = formData.get('motif') as string;
  const examens = formData.getAll('examens') as string[];
  const message = formData.get('message') as string;
  const medecin_traitant = formData.get('medecin_traitant') as string;

  // Validation basique
  if (!nom || !prenom || !telephone || !email) {
    return {
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires.',
    };
  }

  const { error } = await supabase.from('rdv_requests').insert({
    civilite,
    nom,
    prenom,
    telephone,
    email,
    date_naissance: date_naissance || null,
    adresse: adresse || null,
    code_postal: code_postal || null,
    ville: ville || null,
    motif: motif || null,
    examens: examens.length > 0 ? examens : null,
    message: message || null,
    medecin_traitant: medecin_traitant || null,
  });

  if (error) {
    console.error('Supabase insert error:', error);
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone au 04 78 95 09 08.',
    };
  }

  return {
    success: true,
    message: 'Votre demande de rendez-vous a bien été envoyée. Nous vous recontacterons dans les meilleurs délais.',
  };
}
