'use client';

import React from 'react';

interface YoutubeVideoProps {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string; // ISO 8601 e.g., "2026-03-27"
}

export default function YoutubeVideo({ videoId, title, description, thumbnailUrl, uploadDate }: YoutubeVideoProps) {
  // Construct the highly-optimized VideoObject schema to dominate organic SERP
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": title,
    "description": description,
    "thumbnailUrl": [
      thumbnailUrl
    ],
    "uploadDate": uploadDate,
    "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
    "embedUrl": `https://www.youtube.com/embed/${videoId}`,
    "publisher": {
      "@type": "MedicalClinic",
      "name": "Centre Ophtalmologique Rabelais",
      "logo": {
        "@type": "ImageObject",
        "url": "https://centrerabelaislyon.fr/wp-content/uploads/2015/09/ai1.png"
      }
    }
  };

  return (
    <div className="flex flex-col w-full my-12">
      {/* Invisible SEO schema injected directly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Visual Video Embed */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
      
      {/* Optional SEO-friendly caption shown below the video */}
      <p className="mt-4 text-sm font-light italic text-slate-500 text-center px-4">
        {title} - Centre Ophtalmologique Rabelais
      </p>
    </div>
  );
}
