
'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra política de cookies.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={rejectCookies}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Rechazar
          </button>
          <button
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
