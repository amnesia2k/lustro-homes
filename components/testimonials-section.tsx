"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "/placeholder.svg?height=200&width=200",
    text: "My stay at the Beverly Hills Suite exceeded all expectations. The attention to detail and the luxurious amenities made me feel like a celebrity. I will definitely be returning on my next trip to Lagos.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    role: "Couple Getaway",
    image: "/placeholder.svg?height=200&width=200",
    text: "The Santorini Retreat was the perfect romantic getaway for our anniversary. The blue and white decor truly transported us to Greece, and the staff went above and beyond to make our stay special.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Okafor",
    role: "Solo Traveler",
    image: "/placeholder.svg?height=200&width=200",
    text: "I felt completely at home in the Seychelles Paradise apartment. The tropical vibes and comfortable furnishings made it hard to leave! The location is perfect for exploring Lagos.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Digital Nomad",
    image: "/placeholder.svg?height=200&width=200",
    text: "As someone who works remotely, I appreciated the fast WiFi and comfortable workspace in the Monte Carlo Luxury apartment. The elegant surroundings inspired productivity!",
    rating: 5,
  },
  {
    id: 5,
    name: "Amara Nwosu",
    role: "Family Vacation",
    image: "/placeholder.svg?height=200&width=200",
    text: "Our family had an amazing time at Lustro Homes. The Mykonos Escape was spacious enough for all of us, and the kids loved the smart home features. A truly memorable stay!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="section bg-secondary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our guests who have
            experienced the Lustro Homes difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-4">
                  <div className="bg-secondary-light rounded-lg p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-neutral-600"
                          } mx-0.5`}
                        />
                      ))}
                    </div>

                    <p className="text-neutral-300 mb-6 italic">
                      "{testimonial.text}"
                    </p>

                    <h4 className="font-bold text-lg text-neutral-400">
                      {testimonial.name}
                    </h4>
                    <p className="ext-sm text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer top-1/2 -left-4 -translate-y-1/2 p-2 rounded-full bg-primary-dark text-white shadow-lg hover:bg-primary-dark/80 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute cursor-pointer top-1/2 -right-4 -translate-y-1/2 p-2 rounded-full bg-primary-dark text-white shadow-lg hover:bg-primary-dark/80 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === activeIndex
                    ? "bg-primary-dark w-8"
                    : "bg-neutral-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
