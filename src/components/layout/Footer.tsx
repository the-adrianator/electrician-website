import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Your trusted electrical services company specializing in 24/7
              emergency repairs, domestic/commercial installations, and
              electrical safety certifications.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Emergency Repairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Lighting Installations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Fuse Board Upgrades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  EV Charger Installations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  EICR Certificates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Smart Home Wiring
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-yellow-400"
                />
                <span>07526 016590</span>
              </li>
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-yellow-400"
                />
                <span>info@aygaelectrical.co.uk</span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 mt-1 flex-shrink-0 text-yellow-400"
                />
                <span>123 Electrical Avenue, Manchester, M1 1AA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} AYGA Electrical LTD. All rights
            reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors ml-2"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
