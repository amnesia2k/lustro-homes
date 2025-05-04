"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// Sample room data
const rooms = [
  {
    id: 1,
    name: "Beverly Hills Suite",
    description: "Experience the glamour and luxury of Beverly Hills in this opulent suite.",
    price: 75000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: "Santorini Retreat",
    description: "A serene white and blue themed apartment inspired by the Greek islands.",
    price: 65000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Monte Carlo Luxury",
    description: "Elegant and sophisticated space reminiscent of Monaco's famous district.",
    price: 85000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 5.0,
    reviews: 87,
  },
  {
    id: 4,
    name: "Seychelles Paradise",
    description: "Tropical-inspired apartment with the relaxing vibes of the Seychelles islands.",
    price: 70000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.7,
    reviews: 76,
  },
  {
    id: 5,
    name: "Cappadocia Dream",
    description: "Unique and exotic apartment inspired by the magical landscapes of Turkey.",
    price: 68000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    reviews: 65,
  },
  {
    id: 6,
    name: "Mykonos Escape",
    description: "Contemporary Mediterranean style with the vibrant energy of Mykonos.",
    price: 72000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    reviews: 92,
  },
]

const FeaturedRooms = () => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleRooms = 3 // Number of rooms visible at once

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleRooms >= rooms.length ? 0 : prevIndex + visibleRooms))
  }

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - visibleRooms < 0 ? Math.max(0, rooms.length - visibleRooms) : prevIndex - visibleRooms,
    )
  }

  // Format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section id="featured-rooms" className="section bg-neutral-100">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="section-title">Featured Apartments</h2>
            <p className="text-neutral-600 max-w-2xl">
              Discover our collection of uniquely themed luxury apartments, each offering a distinct experience inspired
              by exotic global destinations.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-neutral-300 hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous apartments"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-neutral-300 hover:border-primary hover:text-primary transition-colors"
              aria-label="Next apartments"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop View - Carousel */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {rooms.slice(startIndex, startIndex + visibleRooms).map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift">
              <div className="relative h-64 w-full">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{room.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400 mr-1" size={16} />
                    <span className="text-sm font-medium">{room.rating}</span>
                    <span className="text-xs text-neutral-500 ml-1">({room.reviews})</span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4 line-clamp-2">{room.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold">₦{formatPrice(room.price)}</span>
                    <span className="text-neutral-500 text-sm"> / night</span>
                  </div>
                  <Link href={`/apartments/${room.id}`} className="text-primary font-medium hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Grid */}
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6">
          {rooms.slice(0, 4).map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 w-full">
                <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{room.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-yellow-400 mr-1" size={14} />
                    <span className="text-xs font-medium">{room.rating}</span>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{room.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-base font-bold">₦{formatPrice(room.price)}</span>
                    <span className="text-neutral-500 text-xs"> / night</span>
                  </div>
                  <Link href={`/apartments/${room.id}`} className="text-primary text-sm font-medium hover:underline">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/apartments" className="btn btn-outline">
            View All Apartments
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedRooms
