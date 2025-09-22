
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import BackToTop from './BackToTop';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Empresa */}
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-6">
                <span className="font-['Roboto'] font-bold">BADA8</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empresa especializada en vaciado de locales comerciales, oficinas y naves industriales en Badalona y Barcelona con más de 15 años de experiencia.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/34609936590" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <i className="ri-whatsapp-line text-white"></i>
                </a>
                <a href="tel:609936590" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <i className="ri-phone-line text-white"></i>
                </a>
                <a href="mailto:info@bada8.com" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-mail-line text-white"></i>
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-xl font-bold mb-6">Nuestros Servicios</h3>
              <ul className="space-y-3">
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Vaciado Locales Comerciales</Link></li>
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Vaciado Oficinas</Link></li>
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Vaciado Naves Industriales</Link></li>
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Limpieza Posterior</Link></li>
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Gestión de Residuos</Link></li>
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Retirada Mobiliario</Link></li>
              </ul>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="text-xl font-bold mb-6">Enlaces Útiles</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Inicio</Link></li>
                <li><Link href="/empresa" className="text-gray-300 hover:text-blue-400 transition-colors">Nuestra Empresa</Link></li>
                <li><Link href="/servicios" className="text-gray-300 hover:text-blue-400 transition-colors">Servicios</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">Preguntas Frecuentes</Link></li>
                <li><Link href="/contacto" className="text-gray-300 hover:text-blue-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-phone-line text-blue-400 mr-3"></i>
                  <a href="tel:609936590" className="text-gray-300 hover:text-blue-400 transition-colors">609 93 65 90</a>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-blue-400 mr-3"></i>
                  <a href="mailto:info@bada8.com" className="text-gray-300 hover:text-blue-400 transition-colors">info@bada8.com</a>
                </div>
                <div className="flex items-start">
                  <i className="ri-map-pin-line text-blue-400 mr-3 mt-1"></i>
                  <span className="text-gray-300">Badalona, Barcelona</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-blue-400 mr-3"></i>
                  <span className="text-gray-300">Lun-Vie: 8:00-19:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 BADA8. Todos los derechos reservados. Empresa especializada en vaciado de locales comerciales en Badalona.
              </p>
              <div className="flex space-x-6">
                <Link href="/contacto" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Política de Privacidad</Link>
                <Link href="/contacto" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Aviso Legal</Link>
                <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Made with Readdy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
      <BackToTop />
    </>
  );
}
