'use server';

export type RdvFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitRdvForm(
  _prevState: RdvFormState,
  formData: FormData
): Promise<RdvFormState> {
  const nom = formData.get('nom') as string;
  const prenom = formData.get('prenom') as string;
  const telephone = formData.get('telephone') as string;
  const email = formData.get('email') as string;

  // Validation basique
  if (!nom || !prenom || !telephone || !email) {
    return {
      success: false,
      message: 'Veuillez remplir tous les champs obligatoires.',
    };
  }

  // Fallback logging without Supabase
  console.log('RDV Request Details:', Object.fromEntries(formData));

  return {
    success: true,
    message: 'Votre demande de rendez-vous a bien été envoyée. Nous vous recontacterons dans les meilleurs délais.',
  };
}
