import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

// Sample room data
const rooms = [
  {
    id: 1,
    name: "Beverly Hills Suite",
    description:
      "Experience the glamour and luxury of Beverly Hills in this opulent suite. Featuring a spacious living area, premium entertainment system, and a luxurious king-size bed.",
    price: 75000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    reviews: 124,
    capacity: "2 guests",
    size: "45 m²",
  },
  {
    id: 2,
    name: "Santorini Retreat",
    description:
      "A serene white and blue themed apartment inspired by the Greek islands. Enjoy the calming atmosphere, private balcony, and stunning decor reminiscent of Santorini.",
    price: 65000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    reviews: 98,
    capacity: "2 guests",
    size: "40 m²",
  },
  {
    id: 3,
    name: "Monte Carlo Luxury",
    description:
      "Elegant and sophisticated space reminiscent of Monaco's famous district. This apartment features high-end furnishings, a dedicated workspace, and premium amenities.",
    price: 85000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    size: "50 m²",
  },
  {
    id: 4,
    name: "Seychelles Paradise",
    description:
      "Tropical-inspired apartment with the relaxing vibes of the Seychelles islands. Features include natural materials, lush decor, and a spa-like bathroom.",
    price: 70000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.7,
    reviews: 76,
    capacity: "2 guests",
    size: "42 m²",
  },
  {
    id: 5,
    name: "Cappadocia Dream",
    description:
      "Unique and exotic apartment inspired by the magical landscapes of Turkey. Enjoy the warm color palette, artistic details, and cozy atmosphere.",
    price: 68000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    reviews: 65,
    capacity: "2 guests",
    size: "38 m²",
  },
  {
    id: 6,
    name: "Mykonos Escape",
    description:
      "Contemporary Mediterranean style with the vibrant energy of Mykonos. This apartment features clean lines, bright spaces, and a private outdoor area.",
    price: 72000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    reviews: 92,
    capacity: "2 guests",
    size: "45 m²",
  },
  {
    id: 7,
    name: "Oakland Loft",
    description:
      "Urban-inspired apartment with industrial touches and modern amenities. Perfect for those who appreciate contemporary design and comfort.",
    price: 65000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.8,
    reviews: 58,
    capacity: "2 guests",
    size: "40 m²",
  },
  {
    id: 8,
    name: "Malibu Beachfront",
    description:
      "Coastal-themed apartment with relaxed California vibes. Enjoy the light-filled spaces, beach-inspired decor, and premium comfort.",
    price: 78000,
    image: "/placeholder.svg?height=600&width=800",
    rating: 4.9,
    reviews: 73,
    capacity: "2 guests",
    size: "48 m²",
  },
]

// Format price with commas
const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default function ApartmentsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Lustro Homes Apartments"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Apartments</h1>
            <p className="text-xl max-w-2xl mx-auto">Discover our collection of uniquely themed luxury apartments</p>
          </div>
        </div>
      </section>

      {/* Apartments Listing */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
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
                  <p className="text-neutral-600 mb-4 line-clamp-3">{room.description}</p>

                  <div className="flex justify-between text-sm text-neutral-500 mb-4">
                    <span>{room.capacity}</span>
                    <span>{room.size}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold">₦{formatPrice(room.price)}</span>
                      <span className="text-neutral-500 text-sm"> / night</span>
                    </div>
                    <Link href={`/apartments/${room.id}`} className="btn btn-primary text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
