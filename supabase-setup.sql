-- Table pour stocker les demandes de RDV
CREATE TABLE rdv_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  civilite TEXT,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  telephone TEXT NOT NULL,
  email TEXT NOT NULL,
  date_naissance TEXT,
  adresse TEXT,
  code_postal TEXT,
  ville TEXT,
  motif TEXT,
  examens TEXT[],
  message TEXT,
  medecin_traitant TEXT,
  fichier_nom TEXT,
  status TEXT DEFAULT 'nouveau'
);

-- Activer RLS (Row Level Security)
ALTER TABLE rdv_requests ENABLE ROW LEVEL SECURITY;

-- Politique : permettre l'insertion depuis le client (anon key)
CREATE POLICY "Allow anonymous inserts" ON rdv_requests
  FOR INSERT
  WITH CHECK (true);

-- Politique : pas de lecture depuis le client (admin seulement via dashboard)
CREATE POLICY "Admin read only" ON rdv_requests
  FOR SELECT
  USING (false);
