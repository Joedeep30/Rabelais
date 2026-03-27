import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalSections from "@/components/layout/GlobalSections";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ophtalmologue Lyon | Centre Ophtalmologique Rabelais (Spécialiste Rétine)",
    template: "%s | Centre Ophtalmologique Rabelais Lyon",
  },
  description: "Ophtalmologue à Lyon (Secteur 2). Le Centre Ophtalmologique Rabelais est spécialisé en rétine médicale, DMLA, photobiomodulation Valeda, angiographie, et OCT.",
  keywords: [
    "ophtalmologue rétine Lyon",
    "spécialiste rétine Lyon",
    "DMLA Lyon",
    "traitement DMLA Lyon",
    "photobiomodulation Lyon",
    "photobiomodulation DMLA Lyon",
    "OCT Lyon",
    "angiographie rétinienne Lyon",
    "rétinopathie diabétique Lyon",
    "injection intravitréenne Lyon",
    "sécheresse oculaire Lyon",
    "pathologies rétiniennes Lyon",
    "avis DMLA Lyon",
    "consultation rétine Lyon",
    "Centre Ophtalmologique Rabelais"
  ],
  authors: [{ name: "Centre Ophtalmologique Rabelais" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Centre Ophtalmologique Rabelais | Spécialiste Rétine & DMLA Lyon",
    description: "Expertise en rétine médicale, traitement DMLA, photobiomodulation et imagerie (OCT) à Lyon.",
    url: "https://centrerabelaislyon.fr",
    siteName: "Centre Ophtalmologique Rabelais",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://centrerabelaislyon.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://centrerabelaislyon.fr/#clinic",
        "name": "Centre Ophtalmologique Rabelais",
        "url": "https://centrerabelaislyon.fr",
        "logo": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png",
        "image": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
        "description": "Centre Ophtalmologique Rabelais à Lyon. Spécialistes en rétine médicale, traitement de la DMLA (Macula), photobiomodulation (Valeda), angiographie, et OCT.",
        "telephone": "+33478950908",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2, Rue Antoine de Saint-Exupéry",
          "addressLocality": "Lyon",
          "postalCode": "69002",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 45.756100,
          "longitude": 4.831900
        },
        "medicalSpecialty": ["Ophthalmologic", "Retina Specialist", "Macular Degeneration", "Photobiomodulation"],
        "sameAs": [
          "https://www.linkedin.com/in/maddalena-quaranta-60458658/",
          "https://www.linkedin.com/company/centre-ophtalmologique-rabelais"
        ],
        "availableService": [
          {
            "@type": "MedicalTherapy",
            "name": "Photobiomodulation (PBM) - Système Valeda",
            "url": "https://centrerabelaislyon.fr/photobiomodulation-lyon"
          },
          {
            "@type": "MedicalTest",
            "name": "Tomographie à Cohérence Optique (OCT) et Angiographie",
            "url": "https://centrerabelaislyon.fr/plateau-technique"
          },
          {
            "@type": "MedicalTherapy",
            "name": "Injection intra-vitréenne (IVT)",
            "url": "https://centrerabelaislyon.fr/offre-de-soins"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://centrerabelaislyon.fr/#website",
        "url": "https://centrerabelaislyon.fr",
        "name": "Centre Ophtalmologique Rabelais",
        "publisher": {
          "@id": "https://centrerabelaislyon.fr/#clinic"
        }
      }
    ]
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen flex flex-col font-sans text-slate-800 bg-white`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
      </body>
    </html>
  );
}
