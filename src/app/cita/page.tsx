import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AppointmentForm } from "@/components/appointment-form"

export default function Appointment() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">Agendar una Cita</h1>
          <p className="text-gray-700 mb-8">
            Complete el siguiente formulario para solicitar una cita con nuestros especialistas. Le responderemos a la
            brevedad para confirmar su solicitud.
          </p>
          <AppointmentForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

