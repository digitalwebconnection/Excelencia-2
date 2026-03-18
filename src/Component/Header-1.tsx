import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/image1.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed font-serif top-0 z-50">
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${scrolled ? "py-4" : "py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <NavLink
            to="/"
            className={`flex items-center transition-all duration-300 ${scrolled ? "h-6 w-40" : "h-8 w-52"
              }`}
          >
            <img src={logo} alt="Logo" className="w-full object-contain" />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-black font-medium">
            <li><NavLink to="/" className="hover:text-[#c1972d]">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-[#c1972d]">About Us</NavLink></li>

            <li className="opacity-50 cursor-not-allowed">Destination</li>
            <li className="opacity-50 cursor-not-allowed">Collaborate</li>
            <li className="opacity-50 cursor-not-allowed">Updates</li>
            <li className="opacity-50 cursor-not-allowed">Services</li>

            <li><NavLink to="/contact" className="hover:text-[#c1972d]">Contact</NavLink></li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* MOBILE SLIDER MENU */}
        <div
          className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
            } rounded-r-3xl`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between p-5 border-b">
            <img src={logo} alt="Logo" className="h-8" />
            <button onClick={() => setMenuOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-6 p-6 text-black font-medium">

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/" className="hover:text-[#c1972d]">Home</NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/about" className="hover:text-[#c1972d]">About Us</NavLink>
            </li>

            <li className="opacity-50">Destination</li>
            <li className="opacity-50">Collaborate</li>
            <li className="opacity-50">Updates</li>
            <li className="opacity-50">Services</li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/contact" className="hover:text-[#c1972d]">Contact</NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;