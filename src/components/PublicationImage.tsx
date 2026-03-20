"use client";

import { useState } from "react";

export default function PublicationImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <button
              className="absolute top-0 right-0 md:-top-10 md:right-0 text-white text-xl p-2 hover:text-gray-300 z-50"
              onClick={() => setIsOpen(false)}
            >
              ✕ Fermer
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm bg-white"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
