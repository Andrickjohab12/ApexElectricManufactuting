import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conozca algunos de nuestros proyectos más recientes y descubra cómo hemos ayudado a nuestros clientes a
            mejorar sus instalaciones eléctricas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Instalación Residencial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Instalación Residencial en Polanco</h3>
              <p className="text-gray-600 mb-4">
                Sistema eléctrico completo con paneles solares y automatización para una residencia de lujo.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">Residencial</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                  Energía Solar
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Instalación Comercial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Centro Comercial en Reforma</h3>
              <p className="text-gray-600 mb-4">
                Instalación eléctrica completa para un centro comercial de 10,000m² con sistemas de respaldo.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">Comercial</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                  Alta Capacidad
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Instalación Industrial"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Planta de Producción Automotriz</h3>
              <p className="text-gray-600 mb-4">
                Sistema eléctrico industrial de alta tensión para una planta de producción con maquinaria especializada.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">Industrial</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                  Alta Tensión
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Ver Todos los Proyectos <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

