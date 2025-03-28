import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor prioridad. Aquí hay algunas opiniones de quienes han
            confiado en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-4">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
            </div>
            <p className="text-gray-700 mb-6 italic">
              "APEX Electring realizó la instalación eléctrica completa de nuestra nueva casa. El trabajo fue impecable,
              cumplieron con los plazos y el presupuesto. Altamente recomendados."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
                MR
              </div>
              <div>
                <h4 className="font-semibold">Miguel Rodríguez</h4>
                <p className="text-gray-500 text-sm">Cliente Residencial</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-4">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Contratamos a APEX para la instalación eléctrica de nuestra nueva oficina. Su equipo fue profesional,
              eficiente y nos asesoraron sobre las mejores soluciones para nuestras necesidades."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
                LC
              </div>
              <div>
                <h4 className="font-semibold">Laura Campos</h4>
                <p className="text-gray-500 text-sm">Gerente de Oficina</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex text-yellow-400 mb-4">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
            </div>
            <p className="text-gray-700 mb-6 italic">
              "Nuestra fábrica necesitaba una actualización completa del sistema eléctrico. APEX Electring hizo un
              trabajo excepcional, minimizando el tiempo de inactividad y garantizando la seguridad de nuestras
              instalaciones."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
                JV
              </div>
              <div>
                <h4 className="font-semibold">Javier Vega</h4>
                <p className="text-gray-500 text-sm">Director de Operaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

