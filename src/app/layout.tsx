import { Metadata } from "next";
import SiteChrome from "@/components/layout/SiteChrome";
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
        "@type": ["MedicalClinic", "Organization", "MedicalBusiness"],
        "@id": "https://centrerabelaislyon.fr/#clinic",
        "name": "Centre Ophtalmologique Rabelais",
        "alternateName": ["Centre Rabelais", "Centre Rétine Lyon Rabelais", "Ophtalmologue Rabelais Lyon"],
        "url": "https://centrerabelaislyon.fr",
        "logo": {
          "@type": "ImageObject",
          "url": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png",
          "width": 400,
          "height": 400
        },
        "image": [
          "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider1.jpg",
          "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/slider2.jpg"
        ],
        "description": "Centre Ophtalmologique Rabelais : le centre de rétine médicale de référence à Lyon. Spécialistes exclusifs de la rétine et de la macula. Traitements DMLA (injections anti-VEGF, Photobiomodulation Valeda®), OCT Spectral-Domain, angiographie rétinienne, laser rétinien. Situé Place Bellecour, Lyon 2.",
        "slogan": "Le Centre de Rétine Médicale de Référence à Lyon",
        "telephone": "+33478950908",
        "email": "ophrabelais@hotmail.fr",
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card, Carte Vitale",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2, Rue Antoine de Saint-Exupéry",
          "addressLocality": "Lyon",
          "addressRegion": "Auvergne-Rhône-Alpes",
          "postalCode": "69002",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 45.756100,
          "longitude": 4.831900
        },
        "hasMap": "https://www.google.com/maps/place/Centre+Ophtalmologique+Rabelais",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:30",
            "closes": "18:00"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "ratingCount": "42",
          "reviewCount": "42"
        },
        "medicalSpecialty": [
          "Ophthalmologic",
          "Retina Specialist",
          "Macular Degeneration",
          "Photobiomodulation",
          "Diabetic Retinopathy",
          "Intravitreal Injections"
        ],
        "areaServed": {
          "@type": "City",
          "name": "Lyon",
          "sameAs": "https://www.wikidata.org/wiki/Q456"
        },
        "employee": [
          {
            "@type": "Person",
            "@id": "https://centrerabelaislyon.fr/#dr-quaranta",
            "name": "Dr Maddalena Quaranta-El Maftouhi",
            "jobTitle": "Ophtalmologue spécialiste de la rétine médicale",
            "medicalSpecialty": "Retina Specialist",
            "url": "https://centrerabelaislyon.fr/equipe-medicale",
            "sameAs": [
              "https://www.linkedin.com/in/maddalena-quaranta-60458658/"
            ],
            "worksFor": { "@id": "https://centrerabelaislyon.fr/#clinic" }
          },
          {
            "@type": "Person",
            "name": "Dr Adil El Maftouhi",
            "jobTitle": "Ophtalmologue spécialiste de la rétine médicale",
            "medicalSpecialty": "Retina Specialist",
            "url": "https://centrerabelaislyon.fr/equipe-medicale",
            "worksFor": { "@id": "https://centrerabelaislyon.fr/#clinic" }
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/in/maddalena-quaranta-60458658/",
          "https://www.linkedin.com/company/centre-ophtalmologique-rabelais",
          "https://www.google.com/maps/place/Centre+Ophtalmologique+Rabelais",
          "https://www.doctolib.fr/ophtalmologue/lyon/maddalena-quaranta-el-maftouhi",
          "https://www.pagesjaunes.fr/pros/55769640"
        ],
        "knowsAbout": [
          "DMLA (Dégénérescence maculaire liée à l'âge)",
          "Rétinopathie diabétique",
          "Injection intravitréenne anti-VEGF",
          "Photobiomodulation Valeda",
          "OCT Spectral-Domain",
          "Angiographie rétinienne",
          "Membrane épirétinienne",
          "Trou maculaire",
          "Occlusion veineuse rétinienne",
          "Glaucome"
        ],
        "availableService": [
          {
            "@type": "MedicalTherapy",
            "name": "Photobiomodulation (PBM) - Système Valeda®",
            "description": "Traitement innovant de la DMLA sèche par luminothérapie oculaire, approuvé FDA",
            "url": "https://centrerabelaislyon.fr/photobiomodulation-lyon"
          },
          {
            "@type": "MedicalTest",
            "name": "OCT Spectral-Domain et Angiographie Rétinienne",
            "description": "Imagerie haute résolution de la rétine et de la macula",
            "url": "https://centrerabelaislyon.fr/oct-macula-lyon"
          },
          {
            "@type": "MedicalTherapy",
            "name": "Injection intravitréenne (IVT) anti-VEGF",
            "description": "Traitement de référence de la DMLA humide et de l'œdème maculaire",
            "url": "https://centrerabelaislyon.fr/injections-intravitreennes-lyon"
          },
          {
            "@type": "MedicalTherapy",
            "name": "Laser rétinien",
            "description": "Traitement par photocoagulation laser de la rétine",
            "url": "https://centrerabelaislyon.fr/pathologies-retiniennes"
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
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://centrerabelaislyon.fr/?s={search_term_string}",
          "query-input": "required name=search_term_string"
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
