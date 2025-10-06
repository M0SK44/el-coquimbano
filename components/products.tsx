"use client"

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

const products = [
  {
    img: "mariscos.jpg",
    imgHover: "mariscos2.jpg",
    title: "Mariscos a Granel",
    description: "La mejor selección de mariscos a granel, frescos y llenos de sabor.",
    items: ["Choritos", "Almejas", "Machas", "Mariscos solos", "Surtido de marisco", "Y mucho más"],
  },
  {
    img: "pescados.jpg",
    imgHover: "pescados2.jpg",
    title: "Pescados Frescos",
    description: "Pescados de la mejor calidad, recién llegados del mar. Ideales para preparar en casa.",
    items: ["Reineta", "Corvina", "Merluza", "Jurel", "Salmón", "Y mucho más"],
  },
  {
    img: "mariscales.jpg",
    imgHover: "mariscales2.jpg",
    title: "Para Comer Aquí",
    description: "Disfruta nuestros mariscales y ceviches preparados al momento con los ingredientes más frescos.",
    items: ["Mariscal tradicional", "Ceviche de reineta", "Mariscal Especial (elección propia)", "Mariscos solos", "Mariscal de loco", "Y mucho más"],
  },
]

export function Products() {
  const [showHover, setShowHover] = useState(false)
  const [isInstagram, setIsInstagram] = useState(false)

  // Detecta si estamos en Instagram WebView
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userAgent.includes("Instagram")) {
      setIsInstagram(true)
    }
  }, [])

  // Alterna imágenes cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHover(prev => !prev)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="productos"
      className="py-24 bg-secondary/30"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white"
            style={{ fontFamily: "'Pirata One', cursive" }}
          >
            NUESTROS <span className="text-primary">PRODUCTOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos la más amplia variedad de productos del mar con la frescura y calidad que nos caracteriza
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 h-full"
            >
              <div className="absolute inset-0 overflow-hidden">
                {isInstagram ? (
                  // Si es Instagram, solo cambia la imagen sin fade
                  <img
                    src={showHover ? product.imgHover : product.img}
                    alt={product.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ) : (
                  // Si es navegador normal, fade premium
                  <>
                    <img
                      src={product.img}
                      alt={product.title}
                      className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${showHover ? "opacity-0" : "opacity-100"}`}
                      style={{ willChange: "opacity" }}
                    />
                    <img
                      src={product.imgHover}
                      alt={product.title}
                      className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${showHover ? "opacity-100" : "opacity-0"}`}
                      style={{ willChange: "opacity" }}
                    />
                  </>
                )}
                {/* Overlay negro */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-1000"></div>
              </div>

              {/* Contenido */}
              <div className="relative p-6 flex flex-col justify-start h-72">
                <h3
                  className="text-2xl text-white font-bold mb-2"
                  style={{ fontFamily: "'Pirata One', cursive" }}
                >
                  {product.title}
                </h3>
                <p className="text-white/90 mb-4">{product.description}</p>
                <ul className="space-y-1 text-white/80 text-sm">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
