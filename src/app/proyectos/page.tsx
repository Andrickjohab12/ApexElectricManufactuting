import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectGallery } from "@/components/project-gallery"

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Nuestros Proyectos</h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore nuestra galería de instalaciones eléctricas completadas. Cada proyecto refleja nuestro compromiso
            con la calidad, seguridad y excelencia técnica.
          </p>

          <ProjectGallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}

