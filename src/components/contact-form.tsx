"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  mensaje: z.string().min(5, { message: "El mensaje es requerido (mínimo 5 caracteres)" }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormValues) => {
    // En una aplicación real, aquí enviaríamos los datos al servidor
    console.log(data)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
    }, 3000)
  }

  return (
    <Card className="p-6 shadow-lg">
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">¡Mensaje Enviado!</h3>
          <p className="text-gray-600">Gracias por contactarnos. Responderemos a su mensaje lo antes posible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="su-email@ejemplo.com" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea id="mensaje" rows={5} {...register("mensaje")} placeholder="Escriba su mensaje aquí..." />
              {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
            Enviar Mensaje
          </Button>
        </form>
      )}
    </Card>
  )
}

