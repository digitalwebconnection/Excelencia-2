

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bell, Search } from "lucide-react";
import logo from "../assets/Rectangle.png";


export default function BlueLuxuryHeader() {
  const [open, setOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn] = useState(true);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { label: "About" },
    { label: "Pages", dropdown: ["Our Story", "Team", "Careers"] },
    { label: "Categories", dropdown: ["Education", "Business", "Tech"] },
    { label: "Mega Menu", dropdown: ["Admissions", "Universities", "Services"] },
    { label: "Blog" },
    { label: "Contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${scrolled
          ? "bg-blue-950/90 backdrop-blur-xl border-b border-white/5 py-2 shadow-2xl"
          : "bg-blue-950 py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex items-center justify-between">

          {/* 1. LOGO */}
        
          <img src={logo} alt="Logo" className="h-20" />

          {/* 2. NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1">
            {menu.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setOpen(idx)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${open === idx ? "text-[#c1972d] bg-white/5" : "text-white hover:text-white"
                  }`}>
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${open === idx ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {item.dropdown && open === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 w-56 bg-[#0f172a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 mt-2"
                    >
                      {item.dropdown.map((sub, i) => (
                        <a
                          key={i}
                          href="#"
                          className="flex items-center group/item px-4 py-3 text-sm text-white hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c1972d] mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* 3. PROFILE & SEARCH */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-blue-100/50 hover:text-[#c1972d] transition-colors">
              <Search size={20} />
            </button>

            {isLoggedIn ? (
              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                {/* Notification */}
                <button className="relative p-2 text-blue-100/50 hover:text-white transition group">
                  <Bell size={20} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#c1972d] rounded-full ring-2 ring-[#020617]" />
                </button>

                {/* Profile Toggle */}
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-1 pr-4 rounded-full cursor-pointer hover:border-[#c1972d]/50 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-[#c1972d] to-amber-200 flex items-center justify-center text-[#020617] font-bold text-xs">
                      JD
                    </div>
                    <span className="text-xs font-bold text-white hidden sm:block">Login</span>
                    <ChevronDown size={12} className="text-gray-500" />
                  </motion.div>


                </div>
              </div>
            ) : (
              <button className="bg-[#c1972d] text-[#020617] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300 shadow-lg shadow-[#c1972d]/20">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

