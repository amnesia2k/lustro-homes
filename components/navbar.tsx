"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="flex items-center gap-x-1">
            <span className="flex items-center gap-x-1 text-2xl font-bold text-primary">
              <Home size={30} />
              LUSTRO
            </span>
            <span
              className={`text-2xl font-light ${
                scrolled ? "text-secondary" : "text-white"
              }`}
            >
              HOMES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Apartments", "About", "Contact"].map((item) => (
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
          <Link
            href="/book-now"
            className="px-5 py-3 rounded-full transition-all duration-300 font-medium bg-[#b3941f] text-white hover:bg-[#b3941f]/80 cursor-pointer"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? (
            <X className="text-secondary" size={24} />
          ) : (
            <Menu
              className={scrolled ? "text-secondary" : "text-white"}
              size={24}
            />
          )}
        </div>
      </div>

      {/* Backdrop — renders only when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Navigation Side Menu */}
      <div
        ref={sidebarRef}
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <X
            size={24}
            onClick={toggleMenu}
            className="cursor-pointer text-secondary"
          />
        </div>

        <div className="flex flex-col px-6 pb-6">
          <div className="flex flex-col space-y-6 mb-8">
            {["Home", "Apartments", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-secondary text-xl font-medium hover:text-primary transition-colors border-b border-neutral-200 pb-2"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="/book-now"
            className="px-5 py-3 rounded-full transition-all duration-300 font-medium bg-[#b3941f] text-white hover:bg-[#b3941f]/80 cursor-pointer text-center"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
