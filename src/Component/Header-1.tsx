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

  const destinations = [
    "UK",
    "UAE",
    "Europe",
    "Ireland",
    "Australia",
    "United States of America",
    "Canada",
    "New Zealand",
  ];

  const updates = ["News", "Blogs", "Awards", "Updates"];

  const services = [
    "Profile Evaluation",
    "Country, Course, University shortlisting",
    "Documentation",
    "Admission Assistance",
    "Interview",
    "Finance support",
    "Career Guidance",
    "Student Visa",
    "Visitor Visa",
    "Pre and Post arrival services",
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          
          {/* LOGO */}
          <NavLink
            to="/"
            className={`flex items-center transition-all duration-300 ${
              scrolled ? "h-6 w-52" : "h-8 w-64"
            }`}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full object-contain"
            />
          </NavLink>

          {/* NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-8 text-black font-medium">

            {/* Home */}
            <li>
              <NavLink to="/" className="hover:text-[#c1972d]">
                Home
              </NavLink>
            </li>

            {/* About */}
            <li>
              <NavLink to="/about" className="hover:text-[#c1972d]">
                About Us
              </NavLink>
            </li>

            {/* Destination Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-[#c1972d]">
                Destination
              </span>
              <ul className="absolute left-0 top-8 bg-white shadow-lg rounded-md w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {destinations.map((country, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/destination/${country
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {country}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* Collaborate */}
            <li>
              <NavLink to="/collaborate" className="hover:text-[#c1972d]">
                Collaborate with us
              </NavLink>
            </li>

            {/* Updates Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-[#c1972d]">
                Updates
              </span>
              <ul className="absolute left-0 top-8 bg-white shadow-lg rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {updates.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/updates/${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-[#c1972d]">
                Services
              </span>
              <ul className="absolute left-0 top-8 bg-white shadow-lg rounded-md w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 max-h-96 overflow-y-auto">
                {services.map((service, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/services/${service
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {service}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact */}
            <li>
              <NavLink to="/contact" className="hover:text-[#c1972d]">
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
