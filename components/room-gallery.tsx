"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface RoomGalleryProps {
  images: string[]
}

const RoomGallery = ({ images }: RoomGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Image */}
        <div className="md:col-span-2">
          <div
            className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0] || "/placeholder.svg"}
              alt="Room main view"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Thumbnail Images */}
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index + 1}
            className="relative h-48 w-full rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openLightbox(index + 1)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Room view ${index + 2}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <div className="relative h-[80vh] w-[80vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt={`Room view ${currentImage + 1}`}
              fill
              className="object-contain"
            />

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              aria-label="Previous image"
            >
              &larr;
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              aria-label="Next image"
            >
              &rarr;
            </button>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoomGallery
