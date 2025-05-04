import Hero from "@/components/hero"
import FeaturedRooms from "@/components/featured-rooms"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import InstagramFeed from "@/components/instagram-feed"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedRooms />
      <AboutSection />
      <TestimonialsSection />
      <InstagramFeed />
      <CallToAction />
    </>
  )
}
