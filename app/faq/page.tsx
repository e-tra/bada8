
import type { Metadata } from "next";
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import FAQAccordion from '../../components/FAQAccordion';

export const metadata: Metadata = {
  title: "FAQ Vaciado Locales BADA8 | Precios, Plazos, Dudas Resueltas",
  description: "Resuelve dudas vaciado locales Badalona: precios desde 300€, plazos, qué incluye, gestión residuos. FAQ completa BADA8. Respuestas expertas 15+ años.",
  keywords: "preguntas vaciado locales, FAQ vaciado Badalona, dudas vaciado comercial, precios vaciado oficinas, plazos vaciado naves industriales",
  openGraph: {
    title: "FAQ Vaciado Locales BADA8 | Precios, Plazos, Dudas Resueltas",
    description: "Resuelve dudas vaciado locales Badalona: precios desde 300€, plazos, qué incluye, gestión residuos. FAQ completa BADA8.",
    url: "https://bada8.com/faq",
    siteName: "BADA8",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://bada8.com/faq",
  },
};

export default function FAQ() {
  const preguntas = [
    {
      pregunta: "¿Cuánto cuesta el vaciado de un local comercial en Badalona?",
      respuesta: "El precio del vaciado de locales comerciales en Badalona depende de varios factores: tamaño del local, volumen de residuos, tipo de mobiliario, accesibilidad y servicios adicionales requeridos. En BADA8 ofrecemos presupuestos gratuitos y personalizados. Como referencia, el vaciado de un local pequeño (hasta 50m²) puede partir desde 300€, locales medianos (50-150m²) desde 600€, y locales grandes (más de 150m³) desde 1.200€. Todos nuestros presupuestos incluyen la retirada completa, gestión de residuos en centros autorizados y limpieza posterior básica. Para obtener un precio exacto, realizamos una visita gratuita sin compromiso."
    },
    {
      pregunta: "¿Cuánto tiempo se tarda en vaciar una oficina completa?",
      respuesta: "El tiempo necesario para vaciar una oficina varía según el tamaño y la cantidad de mobiliario y equipos. Una oficina pequeña (2-3 despachos) se puede vaciar en 4-6 horas, oficinas medianas (5-10 despachos) requieren 1-2 días laborables, y oficinas grandes o plantas completas pueden necesitar 2-5 días. En BADA8 planificamos cuidadosamente cada proyecto para minimizar las molestias y cumplir los plazos acordados. Factores que influyen en el tiempo incluyen: cantidad de mobiliario, presencia de equipos informáticos, documentación a gestionar, y accesibilidad del edificio. Siempre proporcionamos un cronograma detallado antes de comenzar el trabajo."
    },
    {
      pregunta: "¿Qué incluye exactamente el servicio de vaciado?",
      respuesta: "Nuestro servicio completo de vaciado incluye: evaluación inicial gratuita y presupuesto sin compromiso, desmontaje profesional de mobiliario y estructuras, retirada de todos los elementos del espacio (muebles, equipos, enseres), separación y clasificación de residuos por categorías, transporte a puntos limpios y centros de tratamiento autorizados, limpieza posterior básica del espacio, gestión documental completa con certificados de residuos, y seguro de responsabilidad civil. Servicios adicionales disponibles: limpieza profunda y desinfección, gestión confidencial de documentación, coordinación con mudanzas, y trabajos en horarios especiales. Todo incluido en un precio fijo sin sorpresas."
    },
    {
      pregunta: "¿Trabajáis fuera del horario comercial o fines de semana?",
      respuesta: "Sí, en BADA8 ofrecemos flexibilidad horaria para adaptarnos a las necesidades de nuestros clientes en Badalona y Barcelona. Realizamos vaciados en horarios especiales, incluyendo tardes, noches, fines de semana y festivos, especialmente cuando es necesario no interrumpir la actividad comercial del edificio o del negocio. Los trabajos fuera del horario comercial tienen un suplemento del 20-30% sobre la tarifa estándar, dependiendo del horario y día solicitado. Para vaciados urgentes ofrecemos servicio de emergencia 24/7 con disponibilidad inmediata. Es recomendable programar estos servicios con antelación para garantizar disponibilidad del equipo especializado."
    },
    {
      pregunta: "¿Cómo gestionáis los residuos y la documentación confidencial?",
      respuesta: "En BADA8 seguimos protocolos estrictos para la gestión de residuos y documentación. Para residuos generales: clasificación por tipos (papel, cartón, plástico, metal, madera), transporte a puntos limpios autorizados, cumplimiento de normativa ambiental vigente, y entrega de certificados de gestión. Para documentación confidencial: protocolo de seguridad específico, posibilidad de destrucción in situ bajo supervisión del cliente, certificado de destrucción documental, cumplimiento RGPD (Reglamento General de Protección de Datos), y total confidencialidad garantizada. Para residuos especiales (equipos informáticos, químicos): gestión especializada según normativa RAEE, centros de tratamiento específicos, y documentación completa de trazabilidad."
    },
    {
      pregunta: "¿Necesito estar presente durante todo el vaciado?",
      respuesta: "No es imprescindible que esté presente durante todo el proceso de vaciado, aunque recomendamos su presencia en momentos clave. Presencia recomendada: inicio del trabajo para confirmar elementos a retirar y resolver dudas, supervisión de documentación confidencial si la hay, y final del trabajo para revisión y entrega de llaves. BADA8 ofrece máxima flexibilidad: podemos trabajar con llaves proporcionadas por el cliente, coordinación con administradores de fincas o porteros, comunicación continua vía WhatsApp con fotos del progreso, y llamada de confirmación al finalizar cada jornada. Nuestro equipo es totalmente profesional y de confianza, con más de 15 años de experiencia y seguro de responsabilidad civil completo."
    },
    {
      pregunta: "¿Qué diferencia a BADA8 de otras empresas de vaciado?",
      respuesta: "BADA8 se distingue por varios factores clave que nos posicionan como líderes en vaciado de locales en Badalona: Experiencia consolidada con más de 15 años en el sector y 3.000+ proyectos completados. Servicio integral que incluye desde evaluación hasta limpieza posterior, todo en un solo proveedor. Compromiso ambiental real con gestión responsable de residuos y certificaciones completas. Equipo profesional altamente cualificado con formación continua y uniformes identificativos. Transparencia total con presupuestos claros sin sorpresas y comunicación constante. Flexibilidad horaria incluyendo trabajos nocturnos, fines de semana y urgencias 24/7. Cobertura local especializada en Badalona y área metropolitana con conocimiento del mercado. Garantía de satisfacción total y seguro de responsabilidad civil completo."
    },
    {
      pregunta: "¿Ofrecéis servicios adicionales como mudanzas o reformas?",
      respuesta: "Aunque BADA8 se especializa exclusivamente en vaciado de locales comerciales, oficinas y naves industriales, colaboramos con una red de profesionales de confianza para ofrecer servicios complementarios. Servicios que coordinamos: empresas de mudanzas especializadas para traslados, equipos de reforma y construcción, servicios de limpieza profunda y mantenimiento, gestión de permisos y licencias municipales, y empresas de seguridad para espacios vacíos. Esta colaboración nos permite ofrecer a nuestros clientes una solución integral manteniendo nuestra especialización y calidad en vaciado. Todos los profesionales recomendados cuentan con nuestra confianza tras años de colaboración exitosa. Coordinamos los servicios para que el cliente tenga un único punto de contacto y máxima comodidad en su proyecto."
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=FAQ%20and%20customer%20support%20concept%2C%20professional%20consultation%20about%20commercial%20clearance%20services%2C%20question%20marks%20and%20answers%2C%20helpful%20customer%20service%20in%20Badalona%20office%2C%20modern%20business%20environment&width=1920&height=1080&seq=faq-hero-bg&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Preguntas frecuentes sobre vaciado de locales en Badalona
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Resuelve todas tus dudas sobre nuestros servicios de vaciado de locales comerciales, oficinas y naves industriales en Badalona y Barcelona. Si no encuentras la respuesta que buscas, contacta con nuestro equipo de BADA8 para recibir asesoramiento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Respuestas a las preguntas más frecuentes</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Hemos recopilado las preguntas más comunes que nos hacen nuestros clientes sobre vaciado de locales comerciales, precios, plazos y procesos. Toda la información que necesitas saber sobre BADA8.
            </p>
          </div>

          <FAQAccordion preguntas={preguntas} />
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Información útil adicional</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Datos importantes sobre nuestros servicios de vaciado en Badalona que te ayudarán a tomar la mejor decisión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Horarios de atención</h3>
              <p className="text-gray-700 mb-4">
                Lunes a Viernes: 8:00 - 19:00<br/>
                Sábados: 9:00 - 14:00<br/>
                Urgencias 24/7
              </p>
              <p className="text-sm text-gray-600">Servicios especiales en horarios extendidos disponibles</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Garantías</h3>
              <p className="text-gray-700 mb-4">
                • Seguro responsabilidad civil<br/>
                • Garantía satisfacción total<br/>
                • Cumplimiento de plazos
              </p>
              <p className="text-sm text-gray-600">Máxima tranquilidad para nuestros clientes</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-2xl text-amber-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Zona de servicio</h3>
              <p className="text-gray-700 mb-4">
                Badalona y área metropolitana<br/>
                Radio de 30km desde Badalona<br/>
                Desplazamientos incluidos
              </p>
              <p className="text-sm text-gray-600">Consulta disponibilidad para otras zonas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Rápido */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">¿Cómo solicitar nuestros servicios?</h2>
            <p className="text-xl text-gray-700">Proceso sencillo y rápido para contratar el vaciado de tu local en Badalona</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                paso: '1',
                titulo: 'Contacto',
                descripcion: 'Llama al 609 93 65 90 o envía WhatsApp para explicarnos tu necesidad'
              },
              {
                paso: '2',
                titulo: 'Visita Gratuita',
                descripcion: 'Visitamos tu local para evaluar el trabajo y preparar presupuesto'
              },
              {
                paso: '3',
                titulo: 'Presupuesto',
                descripcion: 'Recibes presupuesto detallado sin compromiso en 24 horas'
              },
              {
                paso: '4',
                titulo: 'Ejecución',
                descripcion: 'Programamos fecha y realizamos el vaciado completo'
              }
            ].map((paso, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{paso.paso}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{paso.titulo}</h3>
                <p className="text-gray-700">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Tienes más preguntas?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Nuestro equipo de profesionales está disponible para resolver cualquier duda sobre el vaciado de tu local comercial, oficina o nave industrial en Badalona.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contacto"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Contactar Ahora
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
