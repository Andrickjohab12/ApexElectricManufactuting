import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-blue-700 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Soluciones Eléctricas Profesionales para su Hogar y Empresa
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Instalaciones eléctricas de alta calidad realizadas por expertos certificados. Seguridad, eficiencia y
            confiabilidad garantizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/cita"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
            >
              Agendar Cita <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/nosotros"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

