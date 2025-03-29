"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type ReceiptProps = {
  data: {
    nombre: string
    apellido: string
    email: string
    telefono: string
    tipoCliente: string
    nombreEmpresa?: string
    direccion: string
    tipoServicio: string
    fechaPreferida: string
    horaPreferida: string
    detalles?: string
  }
  onNewAppointment: () => void
}

const servicioLabels: Record<string, string> = {
  instalacion_residencial: "Instalación Residencial",
  instalacion_comercial: "Instalación Comercial",
  instalacion_industrial: "Instalación Industrial",
  iluminacion: "Iluminación",
  energia_renovable: "Energía Renovable",
  mantenimiento: "Mantenimiento y Reparación",
}

export function Receipt({ data, onNewAppointment }: ReceiptProps) {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-")
    return `${day}/${month}/${year}`
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  // Generar un número de referencia único
  const referenceNumber = `APEX-${Date.now().toString().slice(-6)}`

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">¡Solicitud Recibida!</h2>
        <p className="text-gray-600">
          Gracias por solicitar una cita con APEX Electric Manufacturing. A continuación se muestra un resumen de su solicitud.
        </p>
      </div>

      <Card className="shadow-lg border-t-4 border-blue-700 mb-8">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-xl text-center">Comprobante de Solicitud</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Información de Referencia</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Número de Referencia</p>
                  <p className="font-medium">{referenceNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fecha de Solicitud</p>
                  <p className="font-medium">{new Date().toLocaleDateString("es-MX")}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Información Personal</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Nombre Completo</p>
                  <p className="font-medium">
                    {data.nombre} {data.apellido}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tipo de Cliente</p>
                  <p className="font-medium">{data.tipoCliente === "residencial" ? "Residencial" : "Comercial"}</p>
                </div>
                {data.tipoCliente === "comercial" && data.nombreEmpresa && (
                  <div>
                    <p className="text-sm text-gray-500">Empresa</p>
                    <p className="font-medium">{data.nombreEmpresa}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{data.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-medium">{data.telefono}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Dirección</p>
                  <p className="font-medium">{data.direccion}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Detalles del Servicio</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Tipo de Servicio</p>
                  <p className="font-medium">{servicioLabels[data.tipoServicio] || data.tipoServicio}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fecha y Hora Preferida</p>
                  <p className="font-medium">
                    {formatDate(data.fechaPreferida)} a las {formatTime(data.horaPreferida)}
                  </p>
                </div>
                {data.detalles && (
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Detalles Adicionales</p>
                    <p className="font-medium">{data.detalles}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t p-6">
          <div className="w-full text-center">
            <p className="text-gray-600 mb-4">
              Nos pondremos en contacto con usted en las próximas 24 horas para confirmar su cita.
            </p>
            <Button onClick={onNewAppointment} className="bg-blue-700 hover:bg-blue-800">
              Solicitar Otra Cita
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className="text-center text-gray-600 text-sm">
        <p>Si tiene alguna pregunta, contáctenos al +52 6631276214 o envíe un correo a admin@apexemtj.com</p>
      </div>
    </div>
  )
}

