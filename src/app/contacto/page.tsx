import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">Contacto</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">Envíenos un Mensaje</h2>
              <p className="text-gray-600 mb-6">
                Complete el siguiente formulario y nos pondremos en contacto con usted lo antes posible.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-6">Información de Contacto</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Dirección</h3>
                      <p className="text-gray-600 mt-1">
                        Av. Revolución 1234, Col. Centro
                        <br />
                        Ciudad de México, CP 12345
                        <br />
                        México
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Teléfono</h3>
                      <p className="text-gray-600 mt-1">
                        +52 55 1234 5678
                        <br />
                        Lunes a Viernes: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600 mt-1">
                        contacto@apexelectring.com
                        <br />
                        soporte@apexelectring.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Horario de Atención</h3>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Lunes - Viernes:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sábado:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Domingo:</span>
                      <span>Cerrado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Nuestra Ubicación</h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa de ubicación</p>
              {/* En una implementación real, aquí iría un mapa de Google Maps o similar */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

