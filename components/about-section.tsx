import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

const AboutSection = () => {
  const features = [
    "Luxuriously furnished apartments",
    "Themed after exotic global destinations",
    "Prime location in Akoka, Yaba",
    "High-speed WiFi and smart home features",
    "Dedicated concierge service",
    "Premium amenities and toiletries",
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Lustro Homes Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-lg overflow-hidden border-8 border-white shadow-xl hidden md:block">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Lustro Homes Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-primary font-medium">About Us</span>
            <h2 className="section-title">Redefined Hospitality</h2>
            <p className="text-neutral-600 mb-6">
              At Lustro Homes, we believe in creating more than just a place to stay. We craft experiences that blend
              luxury, comfort, and unique design inspired by the world's most exotic destinations.
            </p>
            <p className="text-neutral-600 mb-8">
              Located in the vibrant neighborhood of Akoka, Yaba, our luxury short-stay apartments offer the perfect
              base for exploring Lagos while providing a tranquil retreat to return to.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="text-primary mr-2 flex-shrink-0" size={20} />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
