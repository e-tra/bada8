
import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: "Contacto BADA8 Badalona | Presupuesto Gratis Vaciado ☎️ 609 93 65 90",
  description: "Contacta BADA8 para vaciado locales comerciales Badalona. Presupuesto gratuito 24h. Atención personalizada. WhatsApp disponible. Servicio garantizado.",
  keywords: "contacto vaciado Badalona, presupuesto vaciado locales, teléfono BADA8, oficina Badalona, contactar vaciado comercial Barcelona",
  openGraph: {
    title: "Contacto BADA8 Badalona | Presupuesto Gratis Vaciado",
    description: "Contacta BADA8 para vaciado locales comerciales Badalona. Presupuesto gratuito 24h. Atención personalizada. WhatsApp disponible.",
    url: "https://bada8.com/contacto",
    siteName: "BADA8",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://bada8.com/contacto",
  },
};

export default function Contacto() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative py-20 pt-32 min-h-[80vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=Professional%20customer%20service%20team%20in%20modern%20office%20environment%20Badalona%20Spain%2C%20friendly%20staff%20ready%20to%20help%20with%20commercial%20clearance%20services%2C%20phone%20consultation%2C%20welcoming%20atmosphere%20with%20blue%20corporate%20colors&width=1920&height=1080&seq=contacto-hero-bg&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Contacta con BADA8 para tu vaciado en Badalona
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              ¿Necesitas vaciar un local comercial, oficina o nave industrial en Badalona o Barcelona? En BADA8 estamos aquí para ayudarte. Solicita tu presupuesto gratuito y sin compromiso. Nuestro equipo de profesionales te atenderá de forma personalizada para ofrecerte la mejor solución para tu proyecto de vaciado.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Información */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Ponte en contacto con nosotros</h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                En BADA8 valoramos la comunicación directa y personalizada con nuestros clientes. Ofrecemos múltiples vías de contacto para que puedas elegir la que más te convenga. Nuestro compromiso es responder a todas las consultas en un plazo máximo de 2 horas durante horario comercial.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="ri-phone-line text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Teléfono</h3>
                    <p className="text-lg text-gray-700 mb-2">
                      <a href="tel:609936590" className="text-blue-600 hover:text-blue-700 font-semibold">609 93 65 90</a>
                    </p>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 - 19:00 | Sábados: 9:00 - 14:00 | Urgencias 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="ri-whatsapp-line text-2xl text-green-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">WhatsApp</h3>
                    <p className="text-lg text-gray-700 mb-2">
                      <a href="https://wa.me/34609936590" className="text-green-600 hover:text-green-700 font-semibold">609 93 65 90</a>
                    </p>
                    <p className="text-gray-600">Respuesta rápida y envío de fotos para evaluación previa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="ri-mail-line text-2xl text-amber-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Email</h3>
                    <p className="text-lg text-gray-700 mb-2">
                      <a href="mailto:info@bada8.com" className="text-amber-600 hover:text-amber-700 font-semibold">info@bada8.com</a>
                    </p>
                    <p className="text-gray-600">Para consultas detalladas y envío de documentación</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="ri-map-pin-line text-2xl text-red-600"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Oficina</h3>
                    <p className="text-lg text-gray-700 mb-2">Badalona, Barcelona</p>
                    <p className="text-gray-600">Visitas concertadas previa cita telefónica</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Horario de atención</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-800">Lunes a Viernes</p>
                    <p className="text-gray-700">8:00 - 19:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sábados</p>
                    <p className="text-gray-700">9:00 - 14:00</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Domingos</p>
                    <p className="text-gray-700">Solo emergencias</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Urgencias</p>
                    <p className="text-gray-700">24/7 disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Solicita tu presupuesto gratuito</h2>
                <p className="text-gray-700 text-center mb-8">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas para ofrecerte un presupuesto personalizado.
                </p>
                <ContactForm />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Servicio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Área de servicio</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              BADA8 ofrece servicios de vaciado de locales comerciales, oficinas y naves industriales en Badalona y todas las localidades del área metropolitana de Barcelona.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-8">Municipios donde trabajamos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Badalona', 'Sant Adrià del Besòs', 'Santa Coloma de Gramenet', 
                  'Barcelona', 'Montgat', 'Tiana', 'El Masnou', 'Premià de Mar',
                  'Vilassar de Mar', 'Mataró', 'L\'Hospitalet', 'Cornellà',
                  'Esplugues', 'Sant Just Desvern', 'El Prat', 'Viladecans'
                ].map((ciudad, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center hover:shadow-lg transition-shadow">
                    <i className="ri-map-pin-line text-blue-600 text-xl mb-2"></i>
                    <p className="font-semibold text-gray-800">{ciudad}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-100 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-2">¿Tu municipio no está en la lista?</h4>
                <p className="text-gray-700">
                  Contacta con nosotros para consultar disponibilidad. Evaluamos cada caso individualmente y podemos desplazarnos a otras localidades de Cataluña.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Service%20area%20map%20of%20Barcelona%20metropolitan%20area%2C%20Badalona%20location%20highlighted%2C%20professional%20service%20coverage%20zones%2C%20modern%20map%20design%20with%20blue%20markers&width=600&height=500&seq=area-servicio&orientation=landscape"
                alt="Área de servicio BADA8 Badalona Barcelona"
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegir BADA8 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">¿Por qué contactar con BADA8?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Más de 15 años de experiencia nos avalan como la empresa de confianza para el vaciado de locales en Badalona y Barcelona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                titulo: 'Respuesta Rápida',
                descripcion: 'Contestamos todas las consultas en menos de 2 horas durante horario comercial.',
                icono: 'ri-time-line'
              },
              {
                titulo: 'Presupuesto Gratuito',
                descripcion: 'Evaluación y presupuesto sin compromiso. Transparencia total en precios.',
                icono: 'ri-calculator-line'
              },
              {
                titulo: 'Equipo Profesional',
                descripcion: 'Más de 15 años de experiencia en vaciado de locales comerciales.',
                icono: 'ri-team-line'
              },
              {
                titulo: 'Servicio Integral',
                descripcion: 'Desde la evaluación hasta la limpieza final. Todo incluido.',
                icono: 'ri-settings-line'
              }
            ].map((ventaja, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${ventaja.icono} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{ventaja.titulo}</h3>
                <p className="text-gray-700">{ventaja.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios rápidos */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Lo que dicen de nosotros</h2>
            <p className="text-xl text-blue-100">Testimonios reales de clientes satisfechos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                comentario: "Excelente servicio. Muy profesionales y cumplieron todos los plazos.",
                cliente: "María González - Restaurante",
                estrellas: 5
              },
              {
                comentario: "Precio justo y trabajo impecable. Los recomiendo sin dudarlo.",
                cliente: "Carlos Martín - Oficina",
                estrellas: 5
              },
              {
                comentario: "Se encargaron de todo. Muy cómodo para nosotros.",
                cliente: "Ana López - Nave Industrial",
                estrellas: 5
              }
            ].map((testimonio, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonio.estrellas)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonio.comentario}"</p>
                <p className="font-semibold text-blue-900">{testimonio.cliente}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
