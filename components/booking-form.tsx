"use client"

import type React from "react"

import { useState } from "react"

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Booking request sent! We will contact you shortly to confirm your reservation.")
      // Reset form
      setCheckIn("")
      setCheckOut("")
      setGuests(1)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="check-in" className="block text-sm font-medium text-neutral-700 mb-1">
          Check-in Date
        </label>
        <input
          type="date"
          id="check-in"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="check-out" className="block text-sm font-medium text-neutral-700 mb-1">
          Check-out Date
        </label>
        <input
          type="date"
          id="check-out"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-neutral-700 mb-1">
          Guests
        </label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(Number.parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="w-full btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Processing..." : "Book Now"}
      </button>

      {message && <div className="p-3 bg-green-50 text-green-800 rounded-md text-sm">{message}</div>}
    </form>
  )
}

export default BookingForm
