import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Plus,
  ArrowRight,
} from "lucide-react";

interface SectionItem {
  title: string;
  content: string;
}

interface SectionProps {
  data: {
    title: string;
    intro: string;
    sections: SectionItem[];
    highlights: string[];
  };
}

const EducationSection = ({ data }: SectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ AUTO SLIDER
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === data.sections.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, data.sections.length]);

  return (
    <section className="relative py-14 bg-white overflow-hidden">

      {/* 🔥 NEW HEADER (TITLE + INTRO) */}
      <div className="max-w-6xl mx-auto text-center mb-20 px-6">
        <p className="text-[#c1972d] font-semibold uppercase tracking-wide text-sm mb-3">
          Education System
        </p>

        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto text-gray-950 mb-4">
          {data.title}
        </h2>

        <p className="text-gray-600 text-lg">
          {data.intro}
        </p>
      </div>

      

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="relative z-10">
            <motion.div
              key={data.sections[activeIndex].title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
            

              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-none">
                {data.sections[activeIndex].title}
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-[#c1972d] pl-6">
                {data.sections[activeIndex].content}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mb-10">
                {data.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 bg-slate-800 rounded-lg text-sm font-semibold text-white"
                  >
                    #{h}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="flex items-center gap-4 bg-linear-to-r from-[#c1972d]  to-blue-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all group">
                Book Consultation
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            {/* Pagination */}
            <div className="flex gap-3 mt-12">
              {data.sections.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    setIsPaused(true);
                  }}
                  className={`h-2 transition-all duration-500 rounded-full ${
                    activeIndex === i ? "w-12 bg-[#c1972d]" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE ORB */}
          <div className="relative flex justify-center items-center h-125">

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-112.5 h-112.5 border border-dashed border-slate-200 rounded-full"
            />

            {/* Center Icon */}
            <div className="relative w-64 h-64 bg-[#c1972d] rounded-full shadow-xl  shadow-black flex items-center justify-center overflow-hidden">
              <GraduationCap size={150} className="text-white z-10" />

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-white/20"
              />
            </div>

            {/* Floating Buttons */}
            {data.sections.map((_, i) => {
              const angle = (i * 360) / data.sections.length;

              return (
                <motion.button
                  key={i}
                  animate={{ rotate: angle }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-full h-full flex justify-center origin-center"
                  onClick={() => {
                    setActiveIndex(i);
                    setIsPaused(true);
                  }}
                >
                  <motion.div
                    animate={{ rotate: -angle }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                      activeIndex === i
                        ? "bg-slate-900 text-white scale-125"
                        : "bg-blue-950 text-[#c1972d] hover:text-blue-600"
                    }`}
                    style={{ transform: "translateY(-225px)" }}
                  >
                    <Plus
                      size={24}
                      className={`${
                        activeIndex === i ? "rotate-45" : ""
                      } transition-transform`}
                    />
                  </motion.div>
                </motion.button>
              );
            })}

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;