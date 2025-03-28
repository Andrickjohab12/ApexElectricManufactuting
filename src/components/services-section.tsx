import { BatteryCharging, Home, Building2, Factory, Lightbulb, Shield } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de instalación eléctrica para satisfacer todas sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Home className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Instalaciones Residenciales</h3>
            <p className="text-gray-600">
              Instalaciones eléctricas completas para hogares, desde cableado básico hasta sistemas domóticos avanzados.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Instalaciones Comerciales</h3>
            <p className="text-gray-600">
              Soluciones eléctricas para oficinas, tiendas y espacios comerciales, garantizando eficiencia y seguridad.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Factory className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Instalaciones Industriales</h3>
            <p className="text-gray-600">
              Instalaciones de alta potencia para fábricas y entornos industriales, cumpliendo con todas las normativas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Iluminación</h3>
            <p className="text-gray-600">
              Diseño e instalación de sistemas de iluminación eficientes y estéticos para cualquier espacio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BatteryCharging className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Energías Renovables</h3>
            <p className="text-gray-600">
              Instalación de sistemas de energía solar y otras soluciones renovables para reducir su huella de carbono.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Mantenimiento y Reparaciones</h3>
            <p className="text-gray-600">
              Servicios de mantenimiento preventivo y reparaciones de emergencia para mantener sus sistemas funcionando.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

