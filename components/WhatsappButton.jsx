"use client"

export function WhatsappButton() {
  const phoneNumber = "56983336573" // ← tu número (sin +, sin espacios)
  const message = "¡Hola! 👋 Me gustaría hacer un pedido o consultar por los productos del mar."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      {/* Ícono oficial WhatsApp (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16.003 3C9.376 3 4 8.377 4 15.002c0 2.68.782 5.175 2.144 7.271L4 29l6.93-2.106A11.903 11.903 0 0 0 16.003 27C22.63 27 28 21.624 28 14.998 28 8.377 22.63 3 16.003 3zm0 21.799a9.706 9.706 0 0 1-5.003-1.367l-.359-.214-4.118 1.251 1.243-4.015-.234-.375A9.692 9.692 0 0 1 6.297 15c0-5.354 4.349-9.703 9.706-9.703 5.358 0 9.701 4.349 9.701 9.703-.001 5.356-4.344 9.799-9.701 9.799zm5.537-7.279c-.303-.15-1.793-.883-2.071-.983-.278-.102-.482-.15-.688.15-.204.299-.789.983-.967 1.186-.178.204-.357.227-.66.076-.303-.15-1.279-.47-2.437-1.497-.9-.802-1.507-1.791-1.684-2.094-.178-.3-.019-.461.134-.609.137-.134.303-.357.454-.536.152-.178.203-.299.303-.498.101-.199.051-.375-.025-.525-.075-.15-.688-1.662-.943-2.27-.248-.596-.5-.514-.688-.523-.178-.008-.381-.01-.584-.01-.204 0-.534.076-.813.375-.278.3-1.067 1.043-1.067 2.546 0 1.502 1.093 2.953 1.246 3.152.152.199 2.15 3.282 5.211 4.602.728.314 1.295.502 1.737.643.729.232 1.391.199 1.914.121.584-.088 1.793-.731 2.046-1.438.252-.705.252-1.309.177-1.438-.075-.13-.277-.203-.58-.353z" />
      </svg>
    </a>
  )
}
