"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo con solo Marisquería y Pescadería */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
            />
            <span className="text-white font-bold text-xl tracking-wide">
              Marisquería y Pescadería
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("productos")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("somos")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Somos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Contáctenos
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("productos")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("somos")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Somos
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              >
                Contáctenos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
