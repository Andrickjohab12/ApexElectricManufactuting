"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Receipt } from "@/components/receipt"

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }),
  apellido: z.string().min(2, { message: "El apellido es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().min(10, { message: "Teléfono inválido" }),
  tipoCliente: z.enum(["residencial", "comercial"]),
  nombreEmpresa: z.string().optional(),
  direccion: z.string().min(5, { message: "La dirección es requerida" }),
  tipoServicio: z.string().min(1, { message: "Seleccione un tipo de servicio" }),
  fechaPreferida: z.string().min(1, { message: "Seleccione una fecha" }),
  horaPreferida: z.string().min(1, { message: "Seleccione una hora" }),
  detalles: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function AppointmentForm() {
  const [showReceipt, setShowReceipt] = useState(false)
  const [formData, setFormData] = useState<FormValues | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoCliente: "residencial",
    },
  })

  const tipoCliente = watch("tipoCliente")

  const onSubmit = (data: FormValues) => {
    setFormData(data)
    setShowReceipt(true)
    // En una aplicación real, aquí enviaríamos los datos al servidor
  }

  const handleNewAppointment = () => {
    setShowReceipt(false)
    reset()
  }

  if (showReceipt && formData) {
    return <Receipt data={formData} onNewAppointment={handleNewAppointment} />
  }

  return (
    <Card className="p-6 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">Información Personal</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input id="nombre" {...register("nombre")} />
              {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellido">Apellido</Label>
              <Input id="apellido" {...register("apellido")} />
              {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input id="telefono" {...register("telefono")} />
              {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tipo de Cliente</Label>
            <RadioGroup defaultValue="residencial" className="flex space-x-4" {...register("tipoCliente")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="residencial" id="residencial" />
                <Label htmlFor="residencial">Residencial</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comercial" id="comercial" />
                <Label htmlFor="comercial">Comercial/Empresa</Label>
              </div>
            </RadioGroup>
          </div>

          {tipoCliente === "comercial" && (
            <div className="space-y-2">
              <Label htmlFor="nombreEmpresa">Nombre de la Empresa</Label>
              <Input id="nombreEmpresa" {...register("nombreEmpresa")} />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="direccion">Dirección</Label>
            <Input id="direccion" {...register("direccion")} />
            {errors.direccion && <p className="text-red-500 text-sm">{errors.direccion.message}</p>}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">Detalles del Servicio</h2>

          <div className="space-y-2">
            <Label htmlFor="tipoServicio">Tipo de Servicio</Label>
            <Select
              defaultValue=""
              onValueChange={(value) => {
                register("tipoServicio").onChange({ target: { name: "tipoServicio", value } })
              }}
            >
              <SelectTrigger id="tipoServicio">
                <SelectValue placeholder="Seleccione un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instalacion_residencial">Instalación Residencial</SelectItem>
                <SelectItem value="instalacion_comercial">Instalación Comercial</SelectItem>
                <SelectItem value="instalacion_industrial">Instalación Industrial</SelectItem>
                <SelectItem value="iluminacion">Iluminación</SelectItem>
                <SelectItem value="energia_renovable">Energía Renovable</SelectItem>
                <SelectItem value="mantenimiento">Mantenimiento y Reparación</SelectItem>
              </SelectContent>
            </Select>
            {errors.tipoServicio && <p className="text-red-500 text-sm">{errors.tipoServicio.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fechaPreferida">Fecha Preferida</Label>
              <Input id="fechaPreferida" type="date" {...register("fechaPreferida")} />
              {errors.fechaPreferida && <p className="text-red-500 text-sm">{errors.fechaPreferida.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="horaPreferida">Hora Preferida</Label>
              <Input id="horaPreferida" type="time" {...register("horaPreferida")} />
              {errors.horaPreferida && <p className="text-red-500 text-sm">{errors.horaPreferida.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="detalles">Detalles Adicionales</Label>
            <Textarea
              id="detalles"
              rows={4}
              {...register("detalles")}
              placeholder="Describa su proyecto o necesidades específicas..."
            />
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
            Solicitar Cita
          </Button>
        </div>
      </form>
    </Card>
  )
}

