"use client"

import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import Image from "next/image" // Para el logo

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

         
          {/* Logo + Nombre */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="El Coquimbano Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <h1
              className="text-3xl md:text-4xl text-primary relative inline-block animate-shine"
              style={{ fontFamily: "'Pirata One', cursive" }}
            >
              EL COQUIMBANO
            </h1>
          </div>



          {/* Derechos + Redes Sociales */}
          <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-3">
            <div>
              <p className="text-muted-foreground">© 2025 El Coquimbano. Todos los derechos reservados.</p>
              <p className="text-sm text-muted-foreground mt-1">Pescados y Mariscos Frescos de Coquimbo</p>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="https://instagram.com/marisqueria_coquimbano" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/56983336573" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
