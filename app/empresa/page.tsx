
import type { Metadata } from "next";
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Empresa BADA8 Badalona | 15 Años Vaciando Locales Comerciales",
  description: "Conoce BADA8: empresa líder vaciado locales Badalona desde 2008. 15+ años experiencia, 3000+ proyectos. Equipo profesional, valores sólidos, garantía total.",
  keywords: "empresa vaciado Badalona, historia BADA8, equipo profesional vaciado, experiencia vaciado locales Barcelona, garantías vaciado comercial",
  openGraph: {
    title: "Empresa BADA8 Badalona | 15 Años Vaciando Locales Comerciales",
    description: "Conoce BADA8: empresa líder vaciado locales Badalona desde 2008. 15+ años experiencia, 3000+ proyectos. Equipo profesional, valores sólidos.",
    url: "https://bada8.com/empresa",
    siteName: "BADA8",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://bada8.com/empresa",
  },
};

export default function Empresa() {
  const valores = [
    {
      titulo: 'Profesionalidad',
      descripcion: 'Equipo altamente cualificado con formación continua en las últimas técnicas de vaciado y gestión de residuos.',
      icono: 'ri-award-line'
    },
    {
      titulo: 'Compromiso Ambiental',
      descripcion: 'Gestión responsable de residuos con reciclaje y tratamiento en centros autorizados para minimizar el impacto ambiental.',
      icono: 'ri-leaf-line'
    },
    {
      titulo: 'Transparencia',
      descripcion: 'Presupuestos claros sin sorpresas, con desglose detallado de todos los servicios incluidos en el vaciado.',
      icono: 'ri-eye-line'
    },
    {
      titulo: 'Eficiencia',
      descripcion: 'Optimización de tiempos y recursos para completar el vaciado en los plazos acordados sin comprometer la calidad.',
      icono: 'ri-time-line'
    }
  ];

  const equipo = [
    {
      nombre: 'David Martínez',
      cargo: 'Director General',
      experiencia: '18 años en el sector',
      especialidad: 'Gestión de proyectos de vaciado industrial'
    },
    {
      nombre: 'Laura Sánchez',
      cargo: 'Responsable de Operaciones',
      experiencia: '12 años en el sector',
      especialidad: 'Coordinación de equipos y logística'
    },
    {
      nombre: 'Miguel Torres',
      cargo: 'Jefe de Equipo Técnico',
      experiencia: '15 años en el sector',
      especialidad: 'Vaciado de naves industriales complejas'
    },
    {
      nombre: 'Carmen Ruiz',
      cargo: 'Responsable de Calidad',
      experiencia: '10 años en el sector',
      especialidad: 'Control de calidad y normativas ambientales'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=BADA8%20company%20headquarters%20building%20in%20Badalona%20Spain%2C%20modern%20business%20facility%20with%20professional%20team%2C%20commercial%20clearance%20company%20office%2C%20established%20business%20since%202008%2C%20corporate%20blue%20branding&width=1920&height=1080&seq=empresa-hero-bg&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Nuestra empresa: BADA8, líderes en vaciado de locales en Badalona
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Desde 2008, BADA8 se ha consolidado como la empresa de referencia en vaciado de locales comerciales, oficinas y naves industriales en Badalona y área metropolitana de Barcelona. Nuestra experiencia, profesionalidad y compromiso con el medio ambiente nos posicionan como líderes del sector.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Nuestra historia: 15 años especializados en vaciado</h2>
              <p className="text-lg text-gray-700 mb-6">
                BADA8 nació en 2008 en Badalona con una visión clara: ofrecer servicios profesionales de vaciado de locales comerciales con la máxima calidad y respeto por el medio ambiente. Fundada por profesionales con amplia experiencia en el sector de la limpieza y gestión de residuos, la empresa comenzó atendiendo pequeños locales comerciales en el centro de Badalona.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Con el paso de los años, hemos ampliado nuestros servicios para incluir el vaciado de oficinas y naves industriales, convirtiéndonos en la empresa de confianza para administradores de fincas, empresas de construcción y particulares en toda el área metropolitana de Barcelona.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Hoy, después de más de 3.000 proyectos completados con éxito, BADA8 se ha ganado la confianza de empresas y particulares gracias a nuestro enfoque profesional, puntualidad y compromiso con la excelencia en cada servicio de vaciado que realizamos.
              </p>
              <Link 
                href="/servicios"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Conoce Nuestros Servicios
              </Link>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=BADA8%20company%20history%20timeline%2C%20professional%20team%20evolution%20from%202008%20to%20present%2C%20modern%20office%20in%20Badalona%20Spain%2C%20company%20growth%20milestones%2C%20professional%20commercial%20cleaning%20business%20development&width=600&height=700&seq=historia-bada8&orientation=portrait"
                alt="Historia empresa BADA8 vaciado locales Badalona"
                className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestros valores: el compromiso de BADA8</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Los valores que nos definen y que aplicamos en cada proyecto de vaciado de locales comerciales, oficinas y naves industriales en Badalona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${valor.icono} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{valor.titulo}</h3>
                <p className="text-gray-700 leading-relaxed">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-blue-50 rounded-2xl p-10">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-focus-3-line text-2xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestra misión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Proporcionar servicios profesionales de vaciado de locales comerciales, oficinas y naves industriales en Badalona y Barcelona, garantizando la máxima calidad, puntualidad y respeto por el medio ambiente. Nos comprometemos a facilitar la transición de nuestros clientes con soluciones integrales que incluyen desde la retirada de mobiliario hasta la limpieza posterior al vaciado.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-10">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-eye-line text-2xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestra visión</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser la empresa de referencia en vaciado de locales comerciales en Cataluña, reconocida por nuestra excelencia operacional, innovación en procesos y compromiso sostenible. Aspiramos a expandir nuestros servicios manteniendo siempre la calidad y cercanía que nos caracteriza, contribuyendo al desarrollo económico y ambiental de las comunidades donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestro equipo profesional</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Profesionales altamente cualificados con amplia experiencia en vaciado de locales comerciales, oficinas y naves industriales. Cada miembro de nuestro equipo está comprometido con la excelencia y la satisfacción del cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {equipo.map((miembro, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{miembro.nombre}</h3>
                <p className="text-blue-600 font-semibold mb-2">{miembro.cargo}</p>
                <p className="text-gray-600 text-sm mb-3">{miembro.experiencia}</p>
                <p className="text-gray-700 text-sm">{miembro.especialidad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque Profesional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Nuestro enfoque profesional</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Metodología probada y procesos optimizados para garantizar el éxito en cada proyecto de vaciado en Badalona y Barcelona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Evaluación inicial</h3>
              <p className="text-gray-700">
                Visita gratuita para evaluar el volumen, tipo de residuos y necesidades específicas del vaciado. Elaboramos un plan detallado adaptado a cada situación.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ejecución planificada</h3>
              <p className="text-gray-700">
                Vaciado sistemático con equipos especializados, separación de residuos por categorías y cumplimiento estricto de normativas ambientales y de seguridad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Finalización y limpieza</h3>
              <p className="text-gray-700">
                Limpieza posterior completa, desinfección si es necesaria y entrega del espacio en perfectas condiciones. Documentación de gestión de residuos incluida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia y Garantías */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-4">15+</div>
              <h3 className="text-2xl font-semibold text-blue-100 mb-2">Años de experiencia</h3>
              <p className="text-blue-200">Especializados en vaciado de locales comerciales desde 2008</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-white mb-4">3000+</div>
              <h3 className="text-2xl font-semibold text-blue-100 mb-2">Proyectos completados</h3>
              <p className="text-blue-200">Locales, oficinas y naves industriales vaciados con éxito</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-white mb-4">100%</div>
              <h3 className="text-2xl font-semibold text-blue-100 mb-2">Satisfacción garantizada</h3>
              <p className="text-blue-200">Compromiso total con la calidad y cumplimiento de plazos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">¿Quieres conocer más sobre BADA8?</h2>
          <p className="text-xl text-gray-700 mb-10">
            Contáctanos para recibir información detallada sobre nuestros servicios de vaciado de locales comerciales en Badalona. Estaremos encantados de ayudarte con tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Contacta con Nosotros
            </Link>
            <Link 
              href="/servicios"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
