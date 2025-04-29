import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import NavLink from "../ui/NavLink";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 pt-10 ${
        scrolled ? "bg-navy-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="tel:+447526016590"
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-navy-900 font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              <Phone size={18} />
              <span>07526 016590</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-navy-900 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", height: "100vh", zIndex: 50 }}
      >
        <div className="container mx-auto px-4 pt-14">
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <NavLink href="#home" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink href="#services" onClick={toggleMenu}>
              Services
            </NavLink>
            <NavLink href="#about" onClick={toggleMenu}>
              About Us
            </NavLink>
            <NavLink href="#testimonials" onClick={toggleMenu}>
              Testimonials
            </NavLink>
            <NavLink href="#contact" onClick={toggleMenu}>
              Contact
            </NavLink>
            <a
              href="tel:+447526016590"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-navy-900 font-medium px-4 py-3 rounded-md transition-all duration-200"
              onClick={toggleMenu}
            >
              <Phone size={18} />
              <span>07526 016590</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
