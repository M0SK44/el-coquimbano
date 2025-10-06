"use client"

import { Award, Clock, MapPin } from "lucide-react"

export function About() {
  return (
    <section
      id="somos"
      className="py-24 bg-background"
      style={{ fontFamily: "'Poppins', sans-serif" }} // Poppins para toda la sección
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Título Pirata One */}
            <h2
              className="text-white text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ fontFamily: "'Pirata One', cursive" }}
            >
              TRADICIÓN Y CALIDAD <span className="text-primary">COQUIMBANA</span>
            </h2>

            {/* Párrafos en Poppins */}
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              En el Coquimbano nos enorgullece ofrecer los mejores productos del mar de la región de Coquimbo. Con años
              de experiencia, seleccionamos cuidadosamente cada producto para garantizar la máxima frescura y calidad.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Ya sea que busques mariscos para preparar en casa o quieras disfrutar de un delicioso mariscal o ceviche,
              en el Coquimbano encontrarás lo mejor del mar.
            </p>

            {/* Ítems */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Calidad Garantizada</h3>
                  <p className="text-muted-foreground text-white">Productos frescos seleccionados diariamente</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Atención Rápida</h3>
                  <p className="text-muted-foreground text-white">Te atendemos con la mejor disposición</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Ubicación Privilegiada</h3>
                  <p className="text-muted-foreground text-white">En el corazón de Coquimbo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen actualizada */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
              <img
                src="/somos.jpg" // ✅ Imagen actualizada
                alt="El Coquimbano - Tradición y calidad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
