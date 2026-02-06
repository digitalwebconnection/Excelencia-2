"use client";
import image from "../../assets/imranji.png"
import { motion} from "framer-motion";
import { Check, MoveRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Hook for counting up animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

export default function ImmigrationHeroSection() {
  const containerRef = useRef(null);
  const count = useCountUp(40);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050810] text-white py-20"
    >
    {/* BACKGROUND ELEMENTS */}
<div className="absolute inset-0 z-0 overflow-hidden">
  {/* 1. Animated Gradient Mesh */}
  <motion.div 
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-900/30 rounded-full blur-[120px]" 
  />
  <motion.div 
    animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-800/20 rounded-full blur-[100px]" 
  />

  {/* 2. Tactical Grid Overlay */}
  <div 
    className="absolute inset-0 opacity-[0.03]" 
    style={{ 
      backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
      backgroundSize: '50px 50px' 
    }}
  />

  {/* 3. Floating Particles (Small Dots) */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-500 rounded-full"
      initial={{ 
        x: Math.random() * 100 + "%", 
        y: Math.random() * 100 + "%", 
        opacity: Math.random() 
      }}
      animate={{
        y: ["-10%", "110%"],
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
        delay: i * 2
      }}
    />
  ))}

  {/* 4. Original SVG Wave with subtle pulse */}
  <motion.svg 
    animate={{ opacity: [0.15, 0.25, 0.15] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute inset-0 w-full h-full" 
    viewBox="0 0 1440 800" 
    fill="none"
  >
    <path d="M-100 800C200 600 400 900 800 500C1200 100 1600 300 1600 300V0H-100V800Z" fill="url(#grad)" />
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </motion.svg>
</div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDEBAR MENU (2 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="hidden lg:flex lg:col-span-2 flex-col gap-8"
        >
          {["Home Protection", "Corporate Security", "Solution for Partners", "Build Privacy-First"].map((text, i) => (
            <motion.div 
              key={text}
              whileHover={{ x: 10 }}
              className={`group flex items-center justify-between cursor-pointer transition-colors ${i === 1 ? "text-blue-500 font-bold" : "text-gray-400 hover:text-white"}`}
            >
              <span className="text-base tracking-wide">{text}</span>
              <MoveRight className={`w-5 h-5 transition-transform ${i === 1 ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CENTER IMAGE WITH BLUE ARC (5 cols) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            {/* The Signature Blue Arc */}
            <svg 
               viewBox="0 0 100 100" 
               className="absolute -inset-10 w-[120%] h-[120%] z-0 animate-[spin_20s_linear_infinite] opacity-80"
            >
              <circle 
                cx="50" cy="50" r="48" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
                className="text-blue-600"
                strokeDasharray="180 360"
                strokeLinecap="round"
              />
            </svg>

            {/* Main Circular Image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-80 h-80 md:w-112.5 md:h-112.5 rounded-full overflow-hidden border-8 border-[#050810] shadow-2xl z-10"
            >
              <img 
                src={image}
                alt="Consultant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-bold text-lg">//</span>
            <span className="uppercase tracking-[0.3em] text-blue-500 text-xs font-bold">Our Benefits</span>
          </div>

          <h2 className="text-5xl md:text-5xl font-bold leading-[1.1]">
            Help You From <span className="font-light">Start</span> <br />
            <span className="text-gray-400">End Immigration</span> <br />
            Visa.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Our team can assist you in transforming your business through 
            latest tech capabilities to stay ahead of the curve.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-4">
            {/* Animated Stat */}
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-medium mb-1">Processing Costs By</span>
              <div className="text-7xl md:text-8xl font-black text-blue-600 flex items-baseline">
                {count}%
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              {["Abroad Education", "Visa process faster", "Immigration Consult"].map((item) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="shrink-0 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Check className="w-3 h-3 text-blue-500 group-hover:text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}