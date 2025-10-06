"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function Contact() {
  return (
    <section
      id="contacto"
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
            VISÍTANOS O <span className="text-primary">CONTÁCTANOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos listos para atenderte y ofrecerte los mejores productos del mar
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">Ubicación</h3>
              <p className="text-muted-foreground text-white">
                La caleta de Coquimbo Local N°9
                <br />
                Sindicato los delfines
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">Teléfono</h3>
              <p className="text-muted-foreground text-white">
                +569-83336573
                <br />
                Contactanos
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-card-foreground">Horario</h3>
              <p className="text-muted-foreground text-white">
                Lunes a Martes | Jueves a Domingo
                <br />
                9:00 AM - 7:00 PM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mapa */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54321.12345678901!2d-71.3357463!3d-29.9552796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c8fe24bacd51%3A0x78c3fb93a750e523!2sAv.+Costanera+500%2C+Coquimbo%2C+Chile!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación El Coquimbano"
            />
          </div>
        </div>

        {/* Botón WhatsApp */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/56983336573"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-3 justify-center"
            >
              <FaWhatsapp size={24} />
              Contáctanos por WhatsApp
            </Button>
          </a>
        </div>


      </div>
    </section>
  )
}
