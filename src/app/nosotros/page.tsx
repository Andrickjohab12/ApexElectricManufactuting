import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">Sobre Nosotros</h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="relative h-64 sm:h-80">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Equipo de APEX Electring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                Fundada en 2010, APEX Electring Manufacturing se ha convertido en un líder en el sector de instalaciones
                eléctricas en México. Comenzamos como una pequeña empresa familiar y hemos crecido hasta convertirnos en
                un proveedor confiable tanto para hogares como para empresas en todo el país.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestra misión es proporcionar soluciones eléctricas seguras, eficientes y de alta calidad que
                satisfagan las necesidades específicas de cada cliente. Nos enorgullecemos de nuestro trabajo meticuloso
                y nuestro compromiso con la excelencia.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">
                Proporcionar servicios de instalación eléctrica de la más alta calidad, garantizando la seguridad y
                satisfacción de nuestros clientes. Nos esforzamos por mantenernos a la vanguardia de las tecnologías y
                prácticas del sector, ofreciendo soluciones innovadoras y sostenibles.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">
                Ser reconocidos como la empresa líder en instalaciones eléctricas en México, destacando por nuestra
                excelencia técnica, servicio al cliente excepcional y compromiso con la sostenibilidad y la eficiencia
                energética.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nuestro Equipo</h2>
            <p className="text-gray-700 mb-4">
              En APEX Electring, contamos con un equipo de profesionales altamente capacitados y certificados. Nuestros
              técnicos tienen años de experiencia en el sector y reciben formación continua para mantenerse al día con
              las últimas tecnologías y normativas.
            </p>
            <p className="text-gray-700">
              Desde nuestros electricistas hasta nuestro personal administrativo, todos compartimos el mismo compromiso
              con la calidad y la satisfacción del cliente. Trabajamos juntos para garantizar que cada proyecto se
              complete con los más altos estándares.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Certificaciones y Garantías</h2>
            <p className="text-gray-700 mb-4">
              APEX Electring cuenta con todas las certificaciones necesarias para realizar instalaciones eléctricas en
              México. Cumplimos con todas las normativas y estándares de seguridad nacionales e internacionales.
            </p>
            <p className="text-gray-700">
              Ofrecemos garantía en todos nuestros trabajos, asegurando la tranquilidad de nuestros clientes. Nuestro
              compromiso con la calidad se refleja en la durabilidad y eficiencia de nuestras instalaciones.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

