"use client"

import { Button } from "@/components/ui/button"
import { FaInstagram, FaGlobe } from "react-icons/fa"

export default function Landing() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-background px-4 relative"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Fondo con opacidad */}
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

      <div className="text-center w-full max-w-md mx-auto relative z-10">
        {/* Título */}
        <h1
          className="text-6xl md:text-8xl mb-8 text-balance text-primary relative inline-block animate-shine"
          style={{ fontFamily: "'Pirata One', cursive" }}
        >
          EL COQUIMBANO
        </h1>

        {/* Subtítulo */}
        <p className="text-white text-xl md:text-3xl text-foreground/90 mb-6 text-balance leading-relaxed">
          Descubre el sabor del mar en cada bocado
        </p>

        {/* Mensaje llamativo arriba de los botones */}
        <p className="text-yellow-400 text-lg mb-6 animate-bounce text-center">
          ¡Haz clic y descubre nuestro Instagram! 
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://www.instagram.com/marisqueria_coquimbano"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative group"
          >
            <Button 
              className="flex items-center justify-center gap-3 px-8 py-6 text-lg w-full sm:w-auto text-white relative overflow-hidden"
            >
              <span className="absolute inset-0 animate-shineBg"></span>
              <FaInstagram size={24} className="relative z-10 text-black" />
              <span className="text-black relative z-10">Síguenos en Instagram</span>
            </Button>
          </a>

          <a
            href="https://el-coquimbano.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="flex items-center justify-center gap-3 px-8 py-6 border border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-lg w-full sm:w-auto">
              <FaGlobe size={24} />
              Ver nuestra página web
            </Button>
          </a>
        </div>

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
      </div>
    </main>
  )
}
