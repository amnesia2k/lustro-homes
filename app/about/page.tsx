import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      title: "Exceptional Service",
      description: "We go above and beyond to ensure every guest enjoys a memorable stay.",
    },
    {
      title: "Attention to Detail",
      description: "From the decor to the amenities, we ensure every element meets our high standards.",
    },
    {
      title: "Unique Experiences",
      description: "Each of our themed apartments offers a distinct experience inspired by global destinations.",
    },
    {
      title: "Comfort & Luxury",
      description: "We combine comfort with luxury to create spaces that feel both indulgent and homely.",
    },
  ]

  const team = [
    {
      name: "Sarah Adeyemi",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years in hospitality, Sarah founded Lustro Homes with a vision to redefine short-stay experiences in Lagos.",
    },
    {
      name: "Michael Okonkwo",
      role: "Operations Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael ensures that every aspect of our operations runs smoothly, from bookings to maintenance.",
    },
    {
      name: "Amara Nwosu",
      role: "Interior Designer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Amara is the creative mind behind our uniquely themed apartments, bringing global inspirations to life.",
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="About Lustro Homes"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the story behind Lustro Homes and our commitment to redefined hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Our Story</span>
              <h2 className="section-title">Redefining Hospitality Since 2018</h2>
              <p className="text-neutral-600 mb-6">
                Lustro Homes was born from a passion for creating exceptional living spaces and a desire to elevate the
                short-stay experience in Lagos. Founded in 2018, we set out to create a collection of uniquely themed
                luxury apartments that would offer guests more than just a place to stay.
              </p>
              <p className="text-neutral-600 mb-6">
                Our founder, Sarah Adeyemi, having traveled extensively around the world, wanted to bring the essence of
                global destinations to Lagos. Each of our apartments is meticulously designed to transport guests to
                exotic locations like Beverly Hills, Santorini, Monte Carlo, and more.
              </p>
              <p className="text-neutral-600">
                Today, Lustro Homes stands as a testament to our commitment to excellence, attention to detail, and
                passion for creating memorable experiences for our guests. We continue to innovate and enhance our
                offerings, always with our core mission in mind: to redefine hospitality.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Lustro Homes Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-neutral-100">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              At Lustro Homes, our values guide everything we do, from how we design our spaces to how we interact with
              our guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Our Team</span>
            <h2 className="section-title">Meet the People Behind Lustro Homes</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our dedicated team works tirelessly to ensure that every aspect of your stay exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative h-80 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-neutral-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience Our Redefined Hospitality</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Book your stay at Lustro Homes today and discover why our guests keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/apartments" className="btn bg-white text-primary hover:bg-neutral-100">
              Explore Our Apartments
            </Link>
            <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
