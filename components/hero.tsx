"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Fondo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/fondo.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          className="text-6xl md:text-8xl mb-6 text-balance text-primary relative inline-block animate-shine"
          style={{ fontFamily: "'Pirata One', cursive" }}
        >
          EL COQUIMBANO
        </h1>

        <p className="text-white text-xl md:text-3xl text-foreground/90 mb-4 max-w-3xl mx-auto text-balance leading-relaxed">
          El sabor del mar en cada bocado
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Botón con efecto de brillo */}
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden"
            onClick={() => scrollToSection("productos")}
          >
            <span className="absolute inset-0 animate-shineBg"></span>
            <span className="relative z-10">Ver Productos</span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => scrollToSection("contacto")}
          >
            Contáctanos
          </Button>
        </div>
      </div>

      {/* Flecha “Desliza hacia abajo” */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer"
        onClick={() => scrollToSection("productos")}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-sm font-medium">Desliza hacia abajo</span>
          <ChevronDown
            size={40}
            className="animate-bounce text-white opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Efectos */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: -200%; }
          100% { background-position: 200%; }
        }
        .animate-shine {
          background: linear-gradient(90deg, #fff, #facc15, #fff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        @keyframes shineBg {
          0% { background-position: -200%; }
          100% { background-position: 200%; }
        }
        .animate-shineBg {
          background: linear-gradient(90deg, #fff, #facc15, #fff);
          background-size: 200%;
          animation: shineBg 3s linear infinite;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }
      `}</style>
    </section>
  )
}
