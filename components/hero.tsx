"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Experience Luxury Living",
    subtitle: "Themed apartments inspired by exotic global destinations",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Redefined Hospitality",
    subtitle: "Where comfort meets elegance in the heart of Lagos",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=1080&width=1920",
    title: "Your Home Away From Home",
    subtitle: "Luxury short-stay apartments for the discerning traveler",
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl animate-slide-down">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slide-up">{heroSlides[currentSlide].subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link href="/apartments" className="btn btn-primary">
            Explore Apartments
          </Link>
          <Link
            href="/book-now"
            className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-10" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:block animate-bounce">
        <a href="#featured-rooms" className="text-white flex flex-col items-center" aria-label="Scroll down">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronRight size={24} className="transform rotate-90" />
        </a>
      </div>
    </section>
  )
}

export default Hero
