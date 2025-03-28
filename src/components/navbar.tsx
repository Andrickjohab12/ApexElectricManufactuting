"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Zap } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-700" />
            <span className="text-xl font-bold text-blue-700">APEX Electring</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-blue-700 font-medium">
              Nosotros
            </Link>
            <Link href="/cita" className="text-gray-700 hover:text-blue-700 font-medium">
              Agendar Cita
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-700 font-medium">
              Contacto
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/cita"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Cita
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-blue-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="/contacto"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

