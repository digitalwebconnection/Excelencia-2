

import { useEffect, useState } from "react";
import logo from "../assets/image.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">

      {/* MAIN NAVBAR */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${scrolled ? "py-5" : "py-7"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <div
            className={`flex items-center transition-all duration-300 ${scrolled ? "h-6 w-56" : "h-8 w-70"
              }`}
          >
            <img src={logo} alt="Excelencia International Logo" className="w-full object-contain" />
          </div>

          {/* NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-8 text-black font-medium">
            {[
              "Home",
              "About Us",
              "Universities",
              "Study MBBS Abroad",
              "Our Services",
              "Careers",
              "Blog",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer hover:text-[#c1972d] transition"
              >
                {item}
              </li>
            ))}
          </ul>

        </div>
      </nav>

    </header>
  );
};

export default Header;
