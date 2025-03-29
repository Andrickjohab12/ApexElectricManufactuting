import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos de proyectos (en una aplicación real, esto vendría de una base de datos)
const projects = {
  residenciales: [
    {
      id: 1,
      title: "Instalación Eléctrica Residencial en Polanco",
      description:
        "Instalación completa para una casa de 250m² incluyendo paneles solares y sistema de automatización del hogar. El proyecto incluyó la instalación de iluminación LED en toda la casa y un sistema de respaldo de energía.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Residencial", "Energía Solar", "Automatización"],
    },
    {
      id: 2,
      title: "Renovación Eléctrica en Condominio",
      description:
        "Actualización completa del sistema eléctrico en un condominio de 15 años de antigüedad. Se reemplazó todo el cableado, se instalaron nuevos interruptores y se implementó un sistema de iluminación eficiente.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Residencial", "Renovación", "Eficiencia Energética"],
    },
    {
      id: 3,
      title: "Sistema de Iluminación para Jardín",
      description:
        "Diseño e instalación de un sistema de iluminación exterior para un jardín de 500m². Incluye iluminación de caminos, áreas de estar y elementos decorativos, todo controlado mediante una aplicación móvil.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Residencial", "Iluminación", "Exterior"],
    },
    {
      id: 4,
      title: "Instalación Eléctrica para Casa Inteligente",
      description:
        "Implementación de un sistema eléctrico completo para una casa inteligente en Coyoacán. Incluye integración con asistentes de voz, control de iluminación, climatización y seguridad.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Residencial", "Casa Inteligente", "Automatización"],
    },
  ],
  comerciales: [
    {
      id: 5,
      title: "Sistema Eléctrico para Restaurante",
      description:
        "Instalación eléctrica completa para un restaurante de 300m² en la Condesa. Incluye iluminación ambiental, sistemas de cocina de alta potencia y respaldo de energía para equipos de refrigeración.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Comercial", "Restaurante", "Alta Potencia"],
    },
    {
      id: 6,
      title: "Iluminación para Tienda Departamental",
      description:
        "Diseño e instalación de sistema de iluminación para una tienda departamental de 1,200m². Se implementó iluminación LED de bajo consumo con control de intensidad según las zonas y horarios.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Comercial", "Iluminación", "Ahorro Energético"],
    },
    {
      id: 7,
      title: "Instalación Eléctrica para Oficinas Corporativas",
      description:
        "Sistema eléctrico para un edificio de oficinas de 5 pisos en Santa Fe. Incluye distribución de energía, iluminación, sistemas de respaldo y monitoreo de consumo en tiempo real.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Comercial", "Oficinas", "Monitoreo"],
    },
    {
      id: 8,
      title: "Centro Comercial en Reforma",
      description:
        "Instalación eléctrica para un centro comercial de 10,000m². El proyecto incluyó subestaciones, sistemas de distribución, iluminación de áreas comunes y sistemas de emergencia.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Comercial", "Centro Comercial", "Alta Capacidad"],
    },
  ],
  industriales: [
    {
      id: 9,
      title: "Planta de Producción Automotriz",
      description:
        "Instalación de sistema eléctrico industrial para una planta de producción automotriz. Incluye subestaciones, distribución de alta tensión y sistemas de control para maquinaria especializada.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Industrial", "Manufactura", "Alta Tensión"],
    },
    {
      id: 10,
      title: "Fábrica de Alimentos",
      description:
        "Sistema eléctrico para una fábrica de procesamiento de alimentos. Cumple con todas las normativas sanitarias y de seguridad, con sistemas redundantes para garantizar la continuidad operativa.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Industrial", "Alimentos", "Redundancia"],
    },
    {
      id: 11,
      title: "Almacén Logístico",
      description:
        "Instalación eléctrica para un centro logístico de 15,000m². Incluye iluminación LED de alta eficiencia, sistemas de carga para montacargas eléctricos y monitoreo de consumo.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Industrial", "Logística", "Eficiencia"],
    },
    {
      id: 12,
      title: "Planta de Tratamiento de Agua",
      description:
        "Sistema eléctrico para una planta de tratamiento de agua municipal. Incluye control automatizado de bombas, sistemas de monitoreo y protecciones especiales contra humedad.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Industrial", "Tratamiento de Agua", "Automatización"],
    },
  ],
  especiales: [
    {
      id: 13,
      title: "Instalación de Paneles Solares",
      description:
        "Instalación de un sistema de 50kW de paneles solares para un edificio de oficinas. Incluye inversores, baterías de respaldo y sistema de monitoreo de producción energética.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Especial", "Energía Solar", "Renovable"],
    },
    {
      id: 14,
      title: "Sistema de Respaldo para Hospital",
      description:
        "Instalación de sistema de respaldo eléctrico para un hospital privado. Incluye generadores, UPS y sistemas de transferencia automática para áreas críticas.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Especial", "Salud", "Respaldo"],
    },
    {
      id: 15,
      title: "Estaciones de Carga para Vehículos Eléctricos",
      description:
        "Implementación de 20 estaciones de carga para vehículos eléctricos en un centro comercial. Incluye sistema de gestión de carga y facturación automática.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Especial", "Movilidad Eléctrica", "Innovación"],
    },
    {
      id: 16,
      title: "Iluminación Arquitectónica para Edificio Histórico",
      description:
        "Diseño e instalación de iluminación arquitectónica para un edificio histórico en el Centro de la Ciudad. Resalta elementos arquitectónicos mientras respeta la integridad del inmueble.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Especial", "Iluminación Arquitectónica", "Patrimonio"],
    },
  ],
}

export function ProjectGallery() {
  return (
    <Tabs defaultValue="residenciales" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="residenciales">Residenciales</TabsTrigger>
          <TabsTrigger value="comerciales">Comerciales</TabsTrigger>
          <TabsTrigger value="industriales">Industriales</TabsTrigger>
          <TabsTrigger value="especiales">Especiales</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="residenciales" className="mt-0">
        <ProjectGrid projects={projects.residenciales} />
      </TabsContent>

      <TabsContent value="comerciales" className="mt-0">
        <ProjectGrid projects={projects.comerciales} />
      </TabsContent>

      <TabsContent value="industriales" className="mt-0">
        <ProjectGrid projects={projects.industriales} />
      </TabsContent>

      <TabsContent value="especiales" className="mt-0">
        <ProjectGrid projects={projects.especiales} />
      </TabsContent>
    </Tabs>
  )
}

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

