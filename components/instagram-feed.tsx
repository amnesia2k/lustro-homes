"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Heart, MessageCircle } from "lucide-react"

// Sample Instagram posts data
const instagramPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=600",
    likes: 245,
    comments: 18,
    caption: "Experience luxury living at our Beverly Hills Suite ✨ #LustroHomes #LuxuryLiving",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=600",
    likes: 189,
    comments: 12,
    caption: "Sunset views from our Santorini Retreat 🌅 #LustroHomes #Lagos",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=600",
    likes: 312,
    comments: 24,
    caption: "Elegance in every detail at the Monte Carlo Luxury apartment 🥂 #LustroExperience",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=600&width=600",
    likes: 276,
    comments: 21,
    caption: "Tropical vibes at our Seychelles Paradise 🌴 #LustroHomes #LuxuryStay",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=600&width=600",
    likes: 198,
    comments: 15,
    caption: "Morning coffee with a view 🍵 #LustroHomes #LagosLiving",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=600&width=600",
    likes: 224,
    comments: 19,
    caption: "Cozy evenings at Lustro Homes 🕯️ #LuxuryExperience #ShortLet",
  },
]

const InstagramFeed = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay updated with our latest offerings and get a glimpse of the Lustro Homes experience through our
            Instagram feed.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium mt-2 hover:underline"
          >
            <Instagram size={18} className="mr-1" />
            @lustrohomes
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Overlay on hover */}
              <div
                className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                  hoveredPost === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex space-x-4 mb-3">
                  <div className="flex items-center text-white">
                    <Heart size={18} className="mr-1" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <MessageCircle size={18} className="mr-1" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <p className="text-white text-sm text-center line-clamp-3">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramFeed
