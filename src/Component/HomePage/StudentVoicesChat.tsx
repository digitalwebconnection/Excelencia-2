
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const students = [
  {
    id: 1,
    name: "Ananya",
    location: "UK",
    quote: "I felt heard.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Marcus",
    location: "Canada",
    quote: "They didn’t rush me.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Sarah",
    location: "USA",
    quote: "They explained everything honestly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David",
    location: "Australia",
    quote: "I knew I was making the right decision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

const AUTO_PLAY_INTERVAL = 2000; // 3 seconds

export default function AutoRotatingStudentVoices() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-change logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % students.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="uppercase tracking-widest text-blue-600 font-bold text-xs mb-3"
          >
            Student Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Real stories. Real trust.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Interactive Faces */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {students.map((student, i) => (
              <button
                key={student.id}
                onClick={() => setActiveTab(i)}
                className="relative group focus:outline-none"
              >
                {/* SVG Progress Ring */}
                {activeTab === i && (
                  <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -rotate-90">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-blue-600"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                    />
                  </svg>
                )}

                <motion.div
                  animate={{
                    scale: activeTab === i ? 1.1 : 1,
                    filter: activeTab === i ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  className={`relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 transition-all duration-500 ${activeTab === i ? "border-transparent" : "border-slate-100 opacity-60 group-hover:opacity-100"
                    }`}
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </button>
            ))}
          </div>

          {/* Right: Floating Quote Display */}
          <div className="min-h-62.5 flex flex-col justify-center text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="mb-3">
                  <span className="text-6xl text-blue-100 font-serif leading-none block h-8">“</span>
                  <h3 className="text-3xl md:text-5xl font-medium text-slate-800 italic leading-tight">
                    {students[activeTab].quote}
                  </h3>
                </div>
                <div className="mt-2">
                  <p className="text-lg font-bold text-slate-900">
                    — {students[activeTab].name}
                  </p>
                  <p className="text-slate-500 text-sm tracking-wide uppercase">
                    Studying in {students[activeTab].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}