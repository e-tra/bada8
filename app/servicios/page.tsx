
import type { Metadata } from "next";
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Servicios Vaciado BADA8 | Locales, Oficinas, Naves Badalona",
  description: "Servicios profesionales vaciado Badalona: locales comerciales, oficinas, naves industriales, limpieza posterior, gestión residuos. 15+ años experiencia.",
  keywords: "vaciado locales comerciales Badalona, vaciado oficinas Barcelona, vaciado naves industriales, limpieza posterior vaciado, gestión residuos, retirada mobiliario",
  openGraph: {
    title: "Servicios Vaciado BADA8 | Locales, Oficinas, Naves Badalona", 
    description: "Servicios profesionales vaciado Badalona: locales comerciales, oficinas, naves industriales, limpieza posterior, gestión residuos.",
    url: "https://bada8.com/servicios",
    siteName: "BADA8",
    locale: "es_ES", 
    type: "website",
  },
  alternates: {
    canonical: "https://bada8.com/servicios",
  },
};

export default function Servicios() {
  const serviciosDetallados = [
    {
      titulo: 'Vaciado de Locales Comerciales',
      descripcion: 'Servicio especializado en el vaciado completo de locales comerciales en Badalona y Barcelona. Nos encargamos de la retirada de todo tipo de mobiliario comercial, estanterías, mostradores, equipos de refrigeración, maquinaria de hostelería y cualquier elemento presente en el local.',
      beneficios: [
        'Retirada completa de mobiliario comercial',
        'Desmontaje de estanterías y estructuras',
        'Gestión de equipos de refrigeración',
        'Vaciado de almacenes y trastiendas',
        'Limpieza posterior incluida',
        'Gestión documental de residuos'
      ],
      proceso: 'Evaluación inicial gratuita, planificación del vaciado, desmontaje y retirada de elementos, separación de residuos por categorías, transporte a centros autorizados y limpieza final del local.',
      imagen: 'https://readdy.ai/api/search-image?query=Professional%20team%20emptying%20commercial%20store%20in%20Badalona%20Spain%2C%20workers%20removing%20shelves%20and%20commercial%20furniture%2C%20empty%20retail%20space%20cleaning%2C%20modern%20equipment%20and%20uniforms&width=600&height=400&seq=vaciado-comercial&orientation=landscape',
      icono: 'ri-store-2-line'
    },
    {
      titulo: 'Vaciado de Oficinas',
      descripcion: 'Vaciado integral de oficinas con especial atención a la gestión segura de equipos informáticos, documentación confidencial y mobiliario de oficina. Servicio adaptado a las necesidades de empresas en proceso de mudanza, cierre o renovación.',
      beneficios: [
        'Retirada segura de equipos informáticos',
        'Gestión confidencial de documentación',
        'Desmontaje de mobiliario de oficina',
        'Vaciado de archivos y almacenes',
        'Separación de residuos electrónicos',
        'Certificado de destrucción documental'
      ],
      proceso: 'Inventario inicial, clasificación de equipos y documentos, desmontaje sistemático, embalaje seguro de equipos informáticos, gestión de residuos RAEE y limpieza completa.',
      imagen: 'https://readdy.ai/api/search-image?query=Office%20clearance%20service%20in%20Barcelona%2C%20professional%20team%20removing%20office%20furniture%20and%20computers%2C%20empty%20modern%20office%20space%2C%20business%20environment%20cleaning&width=600&height=400&seq=vaciado-oficinas&orientation=landscape',
      icono: 'ri-building-line'
    },
    {
      titulo: 'Vaciado de Naves Industriales',
      descripcion: 'Especialistas en vaciado de naves industriales y espacios de gran volumen. Contamos con maquinaria pesada y equipos especializados para el manejo de maquinaria industrial, estructuras metálicas y residuos especiales que requieren tratamiento específico.',
      beneficios: [
        'Maquinaria especializada para grandes volúmenes',
        'Manejo de equipos industriales pesados',
        'Gestión de residuos peligrosos',
        'Desmontaje de estructuras metálicas',
        'Limpieza industrial posterior',
        'Cumplimiento normativa ambiental'
      ],
      proceso: 'Evaluación técnica especializada, planificación con maquinaria pesada, desmontaje de instalaciones, clasificación de residuos industriales, transporte especializado y certificación final.',
      imagen: 'https://readdy.ai/api/search-image?query=Industrial%20warehouse%20clearance%20in%20Barcelona%2C%20heavy%20machinery%20removal%2C%20empty%20industrial%20space%2C%20professional%20industrial%20cleaning%20team%20with%20specialized%20equipment&width=600&height=400&seq=vaciado-industrial&orientation=landscape',
      icono: 'ri-factory-line'
    },
    {
      titulo: 'Limpieza y Desinfección Posterior al Vaciado',
      descripcion: 'Servicio integral de limpieza posterior al vaciado que incluye limpieza profunda de todas las superficies, desinfección cuando sea necesaria y preparación del espacio para su siguiente uso. Utilizamos productos profesionales y técnicas especializadas.',
      beneficios: [
        'Limpieza profunda de todas las superficies',
        'Desinfección con productos homologados',
        'Eliminación de olores residuales',
        'Limpieza de cristales y superficies altas',
        'Tratamiento de suelos especializado',
        'Espacio listo para nuevo uso'
      ],
      proceso: 'Evaluación del estado post-vaciado, limpieza inicial de residuos menores, aplicación de productos específicos, desinfección completa, limpieza de acabados y entrega final.',
      imagen: 'https://readdy.ai/api/search-image?query=Professional%20cleaning%20and%20disinfection%20service%20after%20commercial%20space%20clearance%2C%20cleaning%20team%20with%20professional%20equipment%2C%20sparkling%20clean%20empty%20space%20in%20Barcelona&width=600&height=400&seq=limpieza-posterior&orientation=landscape',
      icono: 'ri-brush-line'
    },
    {
      titulo: 'Gestión y Retirada de Mobiliario, Maquinaria y Enseres',
      descripcion: 'Servicio especializado en la gestión integral de mobiliario, maquinaria y enseres diversos. Incluye evaluación del estado de los elementos, posible reutilización, donación a entidades benéficas cuando sea viable y gestión adecuada de residuos.',
      beneficios: [
        'Evaluación para posible reutilización',
        'Coordinación con entidades benéficas',
        'Desmontaje profesional de mobiliario',
        'Manejo seguro de maquinaria',
        'Separación por materiales',
        'Documentación de gestión'
      ],
      proceso: 'Inventario y clasificación, evaluación del estado, gestión de elementos reutilizables, desmontaje y embalaje, transporte diferenciado y certificación final.',
      imagen: 'https://readdy.ai/api/search-image?query=Professional%20furniture%20and%20equipment%20removal%20service%2C%20team%20loading%20office%20furniture%20and%20machinery%20onto%20truck%2C%20organized%20removal%20process%20in%20Barcelona&width=600&height=400&seq=gestion-mobiliario&orientation=landscape',
      icono: 'ri-truck-line'
    },
    {
      titulo: 'Recogida y Transporte a Puntos Limpios Autorizados',
      descripcion: 'Gestión completa del transporte de residuos a puntos limpios y centros de tratamiento autorizados. Cumplimos estrictamente con la normativa ambiental vigente y proporcionamos toda la documentación requerida para la trazabilidad de residuos.',
      beneficios: [
        'Transporte a centros autorizados',
        'Cumplimiento normativa ambiental',
        'Separación por tipos de residuo',
        'Documentación completa',
        'Certificados de gestión',
        'Trazabilidad total'
      ],
      proceso: 'Clasificación inicial de residuos, carga en vehículos especializados, transporte a centros específicos, entrega documentada, obtención de certificados y archivo documental.',
      imagen: 'https://readdy.ai/api/search-image?query=Waste%20management%20truck%20delivering%20sorted%20materials%20to%20authorized%20recycling%20center%2C%20environmental%20compliance%2C%20professional%20waste%20transportation%20in%20Barcelona%20Spain&width=600&height=400&seq=puntos-limpios&orientation=landscape',
      icono: 'ri-recycle-line'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20commercial%20clearance%20services%20in%20action%2C%20BADA8%20team%20working%20on%20emptying%20commercial%20spaces%20in%20Badalona%2C%20specialized%20equipment%20and%20trucks%2C%20comprehensive%20service%20portfolio%2C%20modern%20business%20operations&width=1920&height=1080&seq=servicios-hero-bg&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-24 md:px-32">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Servicios de vaciado profesional en Badalona y Barcelona
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              BADA8 ofrece servicios completos de vaciado de locales comerciales, oficinas y naves industriales en Badalona, Barcelona y área metropolitana. Soluciones integrales con más de 15 años de experiencia, desde la retirada de mobiliario hasta la limpieza posterior y gestión de residuos en centros autorizados.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="space-y-20">
            {serviciosDetallados.map((servicio, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                      <i className={`${servicio.icono} text-2xl text-blue-600`}></i>
                    </div>
                    <h2 className="text-4xl font-bold text-blue-900">{servicio.titulo}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {servicio.descripcion}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Beneficios del servicio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {servicio.beneficios.map((beneficio, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <i className="ri-check-line text-white text-sm"></i>
                          </div>
                          <span className="text-gray-700">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Proceso de trabajo</h3>
                    <p className="text-gray-700 leading-relaxed">{servicio.proceso}</p>
                  </div>

                  <Link 
                    href="/contacto"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Solicitar Presupuesto
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={servicio.imagen}
                    alt={`${servicio.titulo} BADA8 Badalona`}
                    className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso General */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestro proceso de vaciado profesional</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Metodología probada en más de 3.000 proyectos de vaciado en Badalona y Barcelona, garantizando eficiencia y cumplimiento de normativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                paso: '01',
                titulo: 'Evaluación Gratuita',
                descripcion: 'Visita sin compromiso para evaluar el volumen, tipo de residuos y complejidad del vaciado. Presupuesto detallado y transparente.'
              },
              {
                paso: '02',
                titulo: 'Planificación',
                descripcion: 'Desarrollo del plan de trabajo personalizado, coordinación de equipos y programación de fechas según las necesidades del cliente.'
              },
              {
                paso: '03',
                titulo: 'Ejecución',
                descripcion: 'Vaciado sistemático con equipos especializados, separación de residuos y cumplimiento de todas las medidas de seguridad.'
              },
              {
                paso: '04',
                titulo: 'Finalización',
                descripcion: 'Limpieza posterior completa, entrega de certificados de gestión de residuos y espacio listo para su siguiente uso.'
              }
            ].map((paso, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{paso.paso}</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{paso.titulo}</h3>
                <p className="text-gray-700 leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Servicio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Zonas de servicio</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos todos nuestros servicios de vaciado en Badalona y municipios del área metropolitana de Barcelona.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Badalona', 'Sant Adrià del Besòs', 'Santa Coloma de Gramenet', 
              'Barcelona', 'Montgat', 'Tiana', 'El Masnou', 'Premià de Mar',
              'Vilassar de Mar', 'Mataró', 'L\'Hospitalet', 'Cornellà'
            ].map((ciudad, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors">
                <i className="ri-map-pin-line text-blue-600 text-xl mb-2"></i>
                <p className="font-semibold text-gray-800 text-sm">{ciudad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso Ambiental */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Compromiso con el medio ambiente</h2>
              <p className="text-lg text-gray-700 mb-6">
                En BADA8 entendemos la importancia de una gestión responsable de residuos. Por eso, en todos nuestros servicios de vaciado en Badalona y Barcelona, priorizamos el reciclaje, la reutilización y el tratamiento adecuado de residuos en centros autorizados.
              </p>
              
              <div className="space-y-4">
                {[
                  'Separación selectiva de residuos por categorías',
                  'Transporte a puntos limpios y centros autorizados',
                  'Gestión especializada de residuos peligrosos',
                  'Certificación completa de trazabilidad',
                  'Promoción de la reutilización y donación',
                  'Cumplimiento normativa ambiental vigente'
                ].map((compromiso, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-leaf-line text-white text-sm"></i>
                    </div>
                    <span className="text-gray-700">{compromiso}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Environmental%20waste%20management%20and%20recycling%20process%2C%20sorted%20materials%20at%20recycling%20center%2C%20green%20environmental%20practices%2C%20sustainability%20in%20waste%20management%20Barcelona&width=600&height=500&seq=compromiso-ambiental&orientation=landscape"
                alt="Compromiso ambiental BADA8 gestión residuos"
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Necesitas alguno de nuestros servicios?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Contacta con BADA8 para recibir un presupuesto personalizado para el vaciado de tu local comercial, oficina o nave industrial en Badalona. Te asesoramos sin compromiso.
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
