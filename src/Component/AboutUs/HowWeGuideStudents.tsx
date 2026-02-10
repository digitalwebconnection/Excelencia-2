import { easeOut, motion } from "framer-motion";
import { 
  Target, 
  Search, 
  GraduationCap, 
  FileCheck2 
} from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Understanding Goals",
    text: "We listen carefully to your aspirations, background, and future plans.",
    icon: Target,
  },
  {
    step: "Step 02",
    title: "Shortlisting Universities",
    text: "Selecting the best-fit universities based on your profile and goals.",
    icon: Search,
  },
  {
    step: "Step 03",
    title: "Course Selection",
    text: "Helping you choose the right course that aligns with career outcomes.",
    icon: GraduationCap,
  },
  {
    step: "Step 04",
    title: "Application & Next Steps",
    text: "Guidance through applications, documentation, and the next milestones.",
    icon: FileCheck2,
  },
];

// Variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function HowWeGuideStudents() {
  return (
    <section className="py-14 bg-[#fcfcfc] relative overflow-hidden">
      {/* Animated Background Watermark */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none flex items-end justify-around grayscale"
      >
         <img src="https://www.transparentpng.com/download/city/PnYm8V-city-silhouette-free-download.png" alt="city" className="w-full h-auto" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Label */}
        <div className="flex flex-col items-center mb-4">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            className="text-center text-xs text-gray-500 uppercase font-bold"
          >
            How We Guide Students
          </motion.p>
          <div className="flex items-center gap-1 mt-2">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} className="h-0.5 bg-blue-950" />
            <div className="w-3 h-3 rounded-full border-2 border-indigo-500" />
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} className="h-0.5 bg-[#c1972d]" />
          </div>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#1e293b]"
        >
          Clear. Supportive. <span className="text-blue-950">Step by Step.</span>
        </motion.h2>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container with Floating Animation */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="relative mb-10"
                >
                  {/* The Main Circle */}
                  <div className="relative z-20 w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110 border border-gray-100 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#c1972d] to-blue-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <Icon className="relative z-10 w-12 h-12 text-blue-950 group-hover:text-white transition-all duration-500 group-hover:rotate-12" />
                    
                    {/* Ripple/Pulse Effect */}
                    <span className="absolute inset-0 rounded-full border-4 border-blue-900/20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000" />
                  </div>

                  {/* Curved Accent Tail */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                        d="M0 0C0 20 20 40 50 40H100" 
                        stroke="#c1972d" 
                        strokeWidth="14" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Connection Line with Path Drawing Effect */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full -translate-y-1/2 -ml-6 pointer-events-none z-0">
                       <svg width="120" height="60" viewBox="0 0 120 60">
                          <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: index * 0.4 }}
                            d="M 0 30 Q 60 -10 120 30" 
                            stroke="#d1d5db" 
                            strokeWidth="2" 
                            strokeDasharray="6 6" 
                            fill="transparent" 
                          />
                          <motion.polygon 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: (index * 0.4) + 1.2 }}
                            points="110,25 120,30 110,35" 
                            fill="#ef4444" 
                          />
                       </svg>
                    </div>
                  )}
                </motion.div>

                {/* Content with Hover Text Shift */}
                <div className="mt-2 transition-transform duration-300 group-hover:-translate-y-1.25">
                  <span className="text-blue-950 font-black text-xs uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mt-3 mb-3 text-[#1e293b] leading-tight min-h-12 flex items-center justify-center group-hover:text-blue-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-60">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}