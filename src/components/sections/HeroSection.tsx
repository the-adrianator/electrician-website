import { Phone, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-navy-900/50"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            24/7 Emergency Electricians—Certified & Trusted
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Your Peace of Mind, Powered by Precision. Professional electrical
            services for homes and businesses across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="emergency"
              size="lg"
              icon={<Phone size={20} />}
              onClick={() => (window.location.href = "tel:+441234567890")}
            >
              Emergency Hotline
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-black"
              icon={<ArrowRight size={20} />}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See Our Services
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white font-medium">NICEIC Registered</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white font-medium">Fully Insured</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white font-medium">5★ Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
