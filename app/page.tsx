'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative py-20 pt-32 pb-32 md:pb-20 min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Professional%20BADA8%20team%20working%20on%20commercial%20clearance%20services%20in%20Badalona%2C%20modern%20industrial%20equipment%2C%20blue%20corporate%20colors%2C%20workers%20in%20safety%20gear%20clearing%20out%20commercial%20space%20with%20professional%20tools%20and%20truck&width=1920&height=1080&seq=hero-bg-bada8&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Vaciado de locales comerciales en Badalona
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-20 md:mb-16 leading-relaxed">
              Empresa especializada en el vaciado de oficinas, naves industriales y locales comerciales con más de 15 años de experiencia en el sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 md:mb-16">
              <a
                href="/contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Solicitar Presupuesto Gratuito
              </a>
              <a
                href="/servicios"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestros servicios de vaciado en Badalona</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Servicios integrales de vaciado con más de 15 años de experiencia en el sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-store-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Vaciado de locales comerciales</h3>
              <p className="text-gray-700 mb-6">Servicio completo de vaciado de tiendas, restaurantes y locales comerciales en Badalona.</p>
              <Link 
                href="/servicios"
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Ver más detalles →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-building-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Vaciado de oficinas</h3>
              <p className="text-gray-700 mb-6">Retirada profesional de mobiliario de oficina, equipos informáticos y documentación.</p>
              <Link 
                href="/servicios"
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Ver más detalles →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-factory-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Vaciado de naves industriales</h3>
              <p className="text-gray-700 mb-6">Especialistas en vaciado de naves industriales con maquinaria especializada.</p>
              <Link 
                href="/servicios"
                className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
              >
                Ver más detalles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir BADA8 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">¿Por qué elegir BADA8?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Somos la empresa de confianza para el vaciado de locales en Badalona y Barcelona
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">15+</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Más de 15 años</h3>
              <p className="text-gray-700">Experiencia consolidada en vaciado de locales comerciales.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">0€</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Presupuesto gratuito</h3>
              <p className="text-gray-700">Evaluación y presupuesto sin compromiso.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-lg font-bold text-blue-600">100%</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Servicio completo</h3>
              <p className="text-gray-700">Desde el vaciado hasta la limpieza final.</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Gestión de residuos</h3>
              <p className="text-gray-700">Transporte a puntos limpios autorizados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Necesitas vaciar tu local en Badalona?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Contacta con nosotros para recibir un presupuesto gratuito y personalizado. Más de 15 años de experiencia nos avalan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contacto"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Solicitar Presupuesto
            </Link>
            <a 
              href="tel:609936590"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Llamar: 609 93 65 90
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
