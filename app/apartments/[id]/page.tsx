import Image from "next/image";
import {
  Star,
  Check,
  MapPin,
  Wifi,
  Tv,
  Coffee,
  Utensils,
  Car,
  ShowerHead,
  Phone,
} from "lucide-react";
import RoomGallery from "@/components/room-gallery";
import BookingForm from "@/components/booking-form";

// Sample room data
const rooms = [
  {
    id: 1,
    name: "Beverly Hills Suite",
    description:
      "Experience the glamour and luxury of Beverly Hills in this opulent suite. Featuring a spacious living area, premium entertainment system, and a luxurious king-size bed. The Beverly Hills Suite is designed to provide the ultimate luxury experience, with high-end furnishings, premium linens, and exclusive amenities that will make you feel like a celebrity.\n\nThe suite includes a fully equipped kitchenette, a dining area, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your suite.",
    price: 120000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 4.9,
    reviews: 124,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "45 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 2,
    name: "Santorini Retreat",
    description:
      "A serene white and blue themed apartment inspired by the Greek islands. Enjoy the calming atmosphere, private balcony, and stunning decor reminiscent of Santorini. The Santorini Retreat is designed to provide a peaceful escape from the hustle and bustle of Lagos, with a focus on relaxation and comfort.\n\nThe apartment features a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom includes premium toiletries, plush towels, and a rainfall shower. Enjoy the beautiful views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 80000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 4.8,
    reviews: 98,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "40 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "Queen-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 3,
    name: "Monte Carlo Luxury",
    description:
      "Elegant and sophisticated space reminiscent of Monaco's famous district. This apartment features high-end furnishings, a dedicated workspace, and premium amenities. The Monte Carlo Luxury apartment is designed to provide a luxurious living experience, with a focus on style and comfort.\n\nThe apartment includes a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 70000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "50 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 4,
    name: "Seychelles Paradise",
    description:
      "Tropical-inspired apartment with the relaxing vibes of the Seychelles islands. Features include natural materials, lush decor, and a spa-like bathroom. The Seychelles Paradise apartment is designed to provide a tranquil escape from the hustle and bustle of Lagos, with a focus on relaxation and comfort.\n\nThe apartment includes a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 80000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "50 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 5,
    name: "Cappadocia Dream",
    description:
      "Unique and exotic apartment inspired by the magical landscapes of Turkey. Enjoy the warm color palette, artistic details, and cozy atmosphere. The Cappadocia Dream apartment is designed to provide a unique living experience, with a focus on style and comfort.\n\nThe apartment includes a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 60000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "50 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 6,
    name: "Mykonos Escape",
    description:
      "Contemporary Mediterranean style with the vibrant energy of Mykonos. The Mykonos Escape apartment is designed to provide a luxurious living experience, with a focus on style and comfort.\n\nThe apartment includes a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 60000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "50 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 7,
    name: "Oakland Loft",
    description:
      "Stylish and modern loft apartment with a touch of urban elegance. The Oakland Loft apartment is designed to provide a luxurious living experience, with a focus on style and comfort.\n\nThe apartment includes a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 50000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "50 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },

  {
    id: 8,
    name: "Malibu Beachfront",
    description:
      "Coastal-themed apartment with relaxed California vibes. Enjoy the light-filled spaces, beach-inspired decor, and premium comfort. The Malibu Beachfront apartment is designed to provide a luxurious living experience, with a focus on style and comfort.\n\nThe apartment includes a spacious living area, a fully equipped kitchenette, and a comfortable workspace. The bathroom features premium toiletries, plush towels, and a rainfall shower. Enjoy the stunning views of Lagos from your private balcony, or relax in the air-conditioned comfort of your apartment.",
    price: 50000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 5.0,
    reviews: 87,
    capacity: "2 guests",
    bedrooms: 1,
    bathrooms: 1,
    size: "50 m²",
    amenities: [
      "Free WiFi",
      "Smart TV with Netflix",
      "Air Conditioning",
      "King-size Bed",
      "Premium Linens",
      "Fully Equipped Kitchenette",
      "Coffee Machine",
      "Work Desk",
      "Private Balcony",
      "Rainfall Shower",
      "Premium Toiletries",
      "Hair Dryer",
      "Iron & Ironing Board",
      "In-room Safe",
      "Daily Housekeeping",
    ],
  },
];

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  // Find the room by ID
  const room =
    rooms.find((r) => r.id === Number.parseInt(params.id)) || rooms[0];

  // Format price with commas
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {/* Room Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={room.images[0] || "/placeholder.svg"}
          alt={room.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/30 flex items-end">
          <div className="container pb-12">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {room.name}
              </h1>
              <div className="flex items-center mb-2">
                <Star
                  className="text-yellow-400 fill-yellow-400 mr-1"
                  size={20}
                />
                <span className="text-lg font-medium">{room.rating}</span>
                <span className="text-sm ml-1">({room.reviews} reviews)</span>
                <span className="mx-2">•</span>
                <MapPin size={16} className="mr-1" />
                <span>Akoka, Yaba, Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Room Details - 2/3 width */}
            <div className="lg:col-span-2">
              {/* Room Gallery */}
              <RoomGallery images={room.images} />

              {/* Room Description */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">
                  About this apartment
                </h2>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Wifi size={20} className="text-primary mr-2" />
                    <span>Free WiFi</span>
                  </div>
                  <div className="flex items-center">
                    <Tv size={20} className="text-primary mr-2" />
                    <span>Smart TV</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee size={20} className="text-primary mr-2" />
                    <span>Coffee Machine</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils size={20} className="text-primary mr-2" />
                    <span>Kitchenette</span>
                  </div>
                  <div className="flex items-center">
                    <Car size={20} className="text-primary mr-2" />
                    <span>Free Parking</span>
                  </div>
                  <div className="flex items-center">
                    <ShowerHead size={20} className="text-primary mr-2" />
                    <span>Rainfall Shower</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 mb-8 text-sm">
                  <div>
                    <p className="text-neutral-500">Guests</p>
                    <p className="font-medium">{room.capacity}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Bedrooms</p>
                    <p className="font-medium">{room.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Bathrooms</p>
                    <p className="font-medium">{room.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Size</p>
                    <p className="font-medium">{room.size}</p>
                  </div>
                </div>

                <div className="prose max-w-none text-neutral-700">
                  {room.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="text-primary mr-2 shrink-0" size={20} />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <div className="aspect-16/9 w-full bg-neutral-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9486936549374!2d3.382151273117476!3d6.52816452311299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d03dcff0961%3A0x47fb6aa7a57a3b2!2s37%20Ibukun%20Olu%20St%2C%20Akoka%2C%20Lagos%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746447412585!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="mt-4 text-neutral-600">
                  Located in the vibrant neighborhood of Akoka, Yaba, our luxury
                  apartments offer easy access to major attractions, shopping
                  centers, and dining options in Lagos.
                </p>
              </div>
            </div>

            {/* Booking Form - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold">
                      ₦{formatPrice(room.price)}
                    </span>
                    <span className="text-neutral-500">per night</span>
                  </div>
                  <div className="flex items-center">
                    <Star
                      className="text-yellow-400 fill-yellow-400 mr-1"
                      size={16}
                    />
                    <span className="text-sm font-medium">{room.rating}</span>
                    <span className="text-xs text-neutral-500 ml-1">
                      ({room.reviews} reviews)
                    </span>
                  </div>
                </div>

                <BookingForm />

                <div className="mt-6 text-center">
                  <p className="text-sm text-neutral-500 mb-2">
                    No charge until booking is confirmed
                  </p>
                  <a
                    href="tel:+2348012345678"
                    className="text-primary font-medium hover:underline flex items-center justify-center"
                  >
                    <Phone size={16} className="mr-1" />
                    Call to book: +234 801 234 5678
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
