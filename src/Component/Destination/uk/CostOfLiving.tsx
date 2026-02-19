import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Building2, Train } from "lucide-react";

const livingData = [
  {
    city: "London",
    price: "£1,200 – £1,500",
    tagline: "The Global Hub",
    context: "High-density living with unmatched career and cultural opportunities.",
    icon: <Building2 className="w-12 h-12" />,
    metrics: [
      { label: "Accommodation", value: 85 },
      { label: "Social Life", value: 95 },
      { label: "Transport", value: 90 },
    ],
  },
  {
    city: "Outside London",
    price: "£800 – £1,200",
    tagline: "Regional Excellence",
    context: "Thriving student cities like Manchester, Leeds, and Edinburgh.",
    icon: <Train className="w-12 h-12" />,
    metrics: [
      { label: "Accommodation", value: 45 },
      { label: "Social Life", value: 75 },
      { label: "Transport", value: 60 },
    ],
  },
];

const GeographicLens: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Animations based on scroll
  const rotateLens = useTransform(smoothProgress, [0, 1], [0, 180]);
  const opacityLondon = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const opacityRegions = useTransform(smoothProgress, [0.6, 1], [0, 1]);
  const scaleLens = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div ref={containerRef} className="relative h-[160vh] bg-white">
      {/* Sticky Stage */}
      <div className="sticky top-0 py-20 w-full flex items-center justify-center overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-px bg-blue-950/5 rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-px bg-blue-950/5 -rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-0 grid lg:grid-cols-2 gap-6 items-center relative z-10">
          
          {/* Left Side: The Interactive Lens */}
          <div className="relative flex justify-center items-center">
            <motion.div 
              style={{ rotate: rotateLens, scale: scaleLens }}
              className="w-60 h-60 md:w-100 md:h-100 rounded-full border border-blue-950/10 p-4 flex items-center justify-center relative"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 border-t-2 border-[#c1972d] rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
              
              <div className="w-full h-full rounded-full bg-blue-950/5 border border-blue-950/5 flex items-center justify-center overflow-hidden relative">
                 {/* This content flips/rotates inside */}
                 <motion.div style={{ rotate: useTransform(rotateLens, r => -r) }} className="text-center">
                    <AnimatePresence mode="wait">
                       <motion.div
                          key={Math.round(smoothProgress.get())}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[#c1972d]"
                       >
                          {smoothProgress.get() < 0.5 ? livingData[0].icon : livingData[1].icon}
                       </motion.div>
                    </AnimatePresence>
                    <div className="mt-4 text-blue-950 font-black text-3xl tracking-tighter uppercase">
                       UK Living
                    </div>
                 </motion.div>
              </div>

              {/* Orbital Points */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#c1972d] rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-blue-950 rounded-full" />
            </motion.div>
          </div>

          {/* Right Side: The Data Reveal */}
          <div className="relative h-96 flex flex-col justify-center">
            
            {/* Section 1: London */}
            <motion.div style={{ opacity: opacityLondon }} className="absolute inset-0">
              <span className="text-[#c1972d] font-bold tracking-[0.3em] uppercase text-xs">Geography Alpha</span>
              <h2 className="text-blue-950 text-7xl font-light mt-2 mb-6 tracking-tighter  font-serif">
                {livingData[0].city}
              </h2>
              <div className="text-5xl font-black text-blue-950 mb-6">{livingData[0].price}</div>
              <p className="text-blue-950/60 text-lg max-w-sm leading-relaxed border-l-2 border-[#c1972d] pl-6">
                {livingData[0].context}
              </p>
            </motion.div>

            {/* Section 2: Regional */}
            <motion.div style={{ opacity: opacityRegions }} className="absolute inset-0">
              <span className="text-blue-950/40 font-bold tracking-[0.3em] uppercase text-xs">Geography Beta</span>
              <h2 className="text-blue-950 text-7xl font-light mt-2 mb-6 tracking-tighter  font-serif">
                {livingData[1].city}
              </h2>
              <div className="text-5xl font-black text-[#c1972d] mb-6">{livingData[1].price}</div>
              <p className="text-blue-950/60 text-lg max-w-sm leading-relaxed border-l-2 border-blue-950 pl-6">
                {livingData[1].context}
              </p>
            </motion.div>

          </div>
        </div>

        {/* Scroll Progress Indicator (Bottom) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-10">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-950/20">London</div>
          <div className="w-48 h-px bg-blue-950/10 relative">
             <motion.div 
              style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
              className="absolute h-full bg-[#c1972d]" 
             />
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-950/20">Regions</div>
        </div>
      </div>
    </div>
  );
};

export default GeographicLens;