import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para mejorar sus instalaciones eléctricas?</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudarle con sus necesidades
          eléctricas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cita"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
          >
            Agendar una Cita <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contacto"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg inline-flex items-center justify-center transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  )
}

