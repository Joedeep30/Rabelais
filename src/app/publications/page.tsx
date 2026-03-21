import { Metadata } from 'next';
import PublicationsContent from './PublicationsContent';

export const metadata: Metadata = {
  title: 'Publications Scientifiques | Centre Ophtalmologique Rabelais Lyon',
  description: 'Retrouvez toutes les publications scientifiques (Glaucome, OCT, DMLA) rédigées par l\'équipe médicale du Centre Ophtalmologique Rabelais.',
  alternates: {
    canonical: 'https://centrerabelaislyon.fr/publications'
  }
};

export default function PublicationsPage() {
  return (
    <main className="flex flex-col flex-grow font-[Gotham] text-[#888888] bg-white">
      <PublicationsContent />
    </main>
  );
}
