import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Redefined Hospitality?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Book your stay at Lustro Homes today and immerse yourself in luxury,
          comfort, and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/book-now"
            className="btn bg-white border-black border text-primary hover:bg-neutral-100"
          >
            Book Now
          </Link>
          <Link href="/contact" className="border border-black btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
