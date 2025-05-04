"use client"

import { Phone } from "lucide-react"

const WhatsAppButton = () => {
  const phoneNumber = "+2348012345678" // Replace with actual phone number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello%20Lustro%20Homes,%20I'm%20interested%20in%20booking%20an%20apartment.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={24} />
    </a>
  )
}

export default WhatsAppButton
