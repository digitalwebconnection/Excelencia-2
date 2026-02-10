import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Universities", path: "/universities" },
    { name: "Study MBBS Abroad", path: "/mbbs-abroad" },
    { name: "Our Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* MAIN NAVBAR */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-5" : "py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <NavLink
            to="/"
            className={`flex items-center transition-all duration-300 ${
              scrolled ? "h-6 w-56" : "h-8 w-70"
            }`}
          >
            <img
              src={logo}
              alt="Excelencia International Logo"
              className="w-full object-contain"
            />
          </NavLink>

          {/* NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-8 text-black font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition ${
                      isActive
                        ? "text-[#c1972d]"
                        : "hover:text-[#c1972d]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default Header;
