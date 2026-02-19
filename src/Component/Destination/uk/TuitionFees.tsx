import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feeData = [
  {
    id: "01",
    category: "Undergraduate",
    price: "£10,000 – £20,000",
    description: "The foundation of your global career starts here. Accessible excellence across all major UK faculties.",
    accent: "bg-blue-950",
  },
  {
    id: "02",
    category: "Postgraduate",
    price: "£11,000 – £25,000",
    description: "Mastery and specialized research in world-leading UK institutions. Designed for future experts.",
    accent: "bg-[#c1972d]",
  },
  {
    id: "03",
    category: "Global MBA",
    price: "£15,000 – £40,000",
    description: "Strategic leadership training for the next generation of global executives and entrepreneurs.",
    accent: "bg-blue-950",
  },
];

const KineticTuition: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoCycleTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle logic
  useEffect(() => {
    if (!isPaused) {
      autoCycleTimer.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % feeData.length);
      }, 4000); // Change every 5 seconds
    }

    return () => {
      if (autoCycleTimer.current) clearInterval(autoCycleTimer.current);
    };
  }, [isPaused]);

  return (
    <section className="relative bg-white flex flex-col justify-center overflow-hidden py-20 px-6 md:px-12">
      {/* Background Kinetic Element - Large ID Number */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.04, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="absolute right-[-5%] top-[10%] text-[45vw] font-black text-blue-950 leading-none select-none"
          >
            {feeData[activeIndex].id}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <header className="mb-20 flex flex-col md:flex-row md:items-end gap-8">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#c1972d] font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
            >
              Academic Session 2026 / 2027
            </motion.p>
            <h2 className="text-blue-950 font-bold text-5xl md:text-7xl  tracking-tight leading-[1.1]">
              Invest in 
              <span className="font-serif  font-normal text-[#c1972d]"> Future Merit.</span>
            </h2>
          </div>
          <div className="md:w-1/3 border-l-2 border-[#c1972d] pl-6 py-2">
            <p className="text-blue-950/60 text-sm leading-relaxed italic">
              Indicative annual investment for international students across Tier 1 UK institutions.
            </p>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interaction Menu */}
          <nav 
            className="flex flex-col space-y-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {feeData.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className="group cursor-pointer py-8 border-b border-blue-950/5 relative"
              >
                {/* Timer Bar (Only visible for active item) */}
                {activeIndex === index && !isPaused && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute -bottom-px left-0 h-0.5 bg-[#c1972d] z-20"
                  />
                )}
                {/* Static Gold line for active even when paused */}
                {activeIndex === index && isPaused && (
                  <div className="absolute -bottom-px left-0 h-0.5 w-full bg-[#c1972d] z-20" />
                )}
                
                <div className="flex items-center gap-8">
                  <span className={`text-sm font-mono transition-all duration-500 ${activeIndex === index ? "text-[#c1972d] scale-125" : "text-blue-950/50"}`}>
                    {item.id}
                  </span>
                  <h3 className={`text-3xl md:text-5xl font-light transition-all duration-700 ${activeIndex === index ? "text-blue-950 translate-x-4" : "text-blue-950/30 group-hover:text-blue-950/60"}`}>
                    {item.category}
                  </h3>
                </div>
              </div>
            ))}
          </nav>

          {/* Dynamic Content Display Area */}
          <div className="relative min-h-100 flex items-center lg:items-start justify-center flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="w-full text-center lg:text-left"
              >
                <div className="mb-8 inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-[#c1972d]"></span>
                  <span className="text-[#c1972d] text-[10px] font-black uppercase tracking-[0.3em]">Estimated Range</span>
                </div>
                
                <div className="text-6xl md:text-8xl font-black text-blue-950 tracking-tighter mb-6 leading-none">
                  {feeData[activeIndex].price.split(' – ')[0]}
                </div>
                
                <div className="text-xl md:text-2xl text-blue-950/40 font-light mb-10 flex items-center justify-center lg:justify-start gap-4">
                  <span>Up to</span>
                  <span className="text-blue-950 font-semibold">{feeData[activeIndex].price.split(' – ')[1]}</span>
                </div>

                <p className="text-blue-950/60 max-w-xl mx-auto lg:mx-0 text-xl leading-relaxed font-light">
                  {feeData[activeIndex].description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#c1972d" }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-12 px-12 py-3 bg-linear-to-r from-[#c1972d] to-blue-950 rounded-full     text-white font-bold text-xs uppercase tracking-[0.3em] transition-colors duration-300 flex items-center gap-4 mx-auto lg:mx-0"
                >
                  View Details
                  <span className="text-lg">→</span>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Bottom Status bar */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center opacity-30">
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-950">
          UK Higher Education System
        </div>
        <div className="flex gap-2">
          {feeData.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${activeIndex === i ? "w-8 bg-[#c1972d]" : "w-2 bg-blue-950/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KineticTuition;