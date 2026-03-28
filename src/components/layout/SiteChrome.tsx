'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalSections from '@/components/layout/GlobalSections';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <GlobalSections />
      <Footer />
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9000] w-[94px]">
        <Link prefetch={true} href="/rdv" className="bg-[#2b3787] text-white py-[21px] px-[5px] flex flex-col items-center justify-center text-center shadow-lg hover:bg-blue-800 transition-colors">
          <svg className="w-[21px] h-[21px] mb-[12px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span className="text-[13px] font-[Gotham] font-bold leading-[1.2]">
            Demande<br/>de<br/>rendez-vous
          </span>
        </Link>
      </div>
    </>
  );
}
