"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">LUSTRO</span>
            <span className={`text-2xl font-light ${scrolled ? "text-secondary" : "text-white"}`}>HOMES</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Apartments", "About", "Gallery", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`font-medium hover:text-primary transition-colors ${
                scrolled ? "text-secondary" : "text-white"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link href="/book-now" className="btn btn-primary">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden relative z-10" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className={scrolled ? "text-secondary" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-secondary" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-secondary z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {["Home", "Apartments", "About", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white text-2xl font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="/book-now" className="btn btn-primary mt-4" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
