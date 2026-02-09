
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import video from "../../assets/newvideo.mp4";
export default function HeroWithVideoAndSearchForm() {
  const [showHero, setShowHero] = useState(false);

  const handleVideoEnd = () => {
    setTimeout(() => setShowHero(true), 100);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {!showHero ? (
          /* ================= VIDEO INTRO ================= */
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <video
              src={video}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>
        ) : (
          /* ================= HERO CONTENT ================= */
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/07/53/16/87/360_F_753168793_UeLlYWN1PfAs57EgM9VTq1CepinQKjjI.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 z-0" />

            {/* CENTER CONTENT */}
            <div className="relative z-10 text-center px-6">
              <p className="text-white font-semibold text-lg">
                Welcome to Excelenci
              </p>

              <h1 className="mt-4 text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
                Adventure & <br /> Experience The Travel
              </h1>

              <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
                The leap into electronic typesetting, remaining essentially unchanged.
                It was popularised, trust with our company
              </p>
            </div>

            {/* SEARCH BAR */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white rounded-full shadow-2xl px-6 py-5 z-20"
            >
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">

                {/* Location */}
                <div className="flex items-center gap-3 flex-1 min-w-45">
                  <MapPin className="text-blue-950 w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-900">Degree</p>
                   <select className="outline-none text-sm font-semibold text-gray-800 bg-transparent">
                    <option>Select Degree</option>
                      <option>MSC</option>
                      <option>MBA</option>
                      <option>BSC</option>
                      <option>BBA</option>
                    </select>
                  </div>
                </div>

                <div className="hidden lg:block h-8 w-px bg-gray-200" />

                {/* Type */}
                <div className="flex items-center gap-3 flex-1 min-w-40">
                  <Briefcase className="text-blue-950 w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-900">Contrary  </p>
                    <select className="outline-none text-sm font-semibold text-gray-800 bg-transparent">
                      <option>Select Contrary</option>
                      <option>UK</option>
                      <option>USA</option>
                      <option>UAE</option>
                      <option>Other.</option>
                    </select>
                  </div>
                </div>

                <div className="hidden lg:block h-8 w-px bg-gray-200" />

                {/* Date */}
                <div className="flex items-center gap-3 flex-1 min-w-35">
                  <Calendar className="text-blue-950 w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-900">Intake </p>
                    <input
                      type="date"
                      className="outline-none text-sm font-semibold text-gray-800 bg-transparent"
                    />
                  </div>
                </div>
                <div className="hidden lg:block h-8 w-px bg-gray-200" />
                {/* Search */}
                <button className="ml-auto flex items-center gap-2 bg-linear-to-r from-[#c1972d]  to-blue-950  transition text-white px-8 py-4 rounded-full font-semibold">
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
