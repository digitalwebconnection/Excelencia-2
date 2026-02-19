import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Microscope, Award, LineChart, ArrowRight } from "lucide-react";

const educationPathways = [
  {
    level: "Foundation Programs",
    duration: "6 Months - 1 Year",
    description: "The bridge between your current qualifications and UK university entry requirements.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-[#c1972d]/40 to-amber-500/40",
    gridSpan: "md:col-span-3",
    // Replace these URLs with your actual images
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpa8PVPxVg2IaF1ZG2O7H5GCuolyuMCmsM2w&s", 
  },
  {
    level: "Undergraduate",
    duration: "3 Years",
    description: "Comprehensive BA/BSc degrees focusing on specialized subjects with practical industry exposure.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-blue-500/40 to-indigo-500/40",
    gridSpan: "md:col-span-3",
    bgImage: "https://study-uk.britishcouncil.org/_next/image?url=https%3A%2F%2Fucarecdn.com%2F254c0ba9-d82c-4f00-9aaa-0c14f0dae75b%2F-%2Fcrop%2F1773x996%2F0%2C41%2F-%2Fpreview%2F-%2Fformat%2Fauto%2F&w=3840&q=75",
  },
  {
    level: "Postgraduate",
    duration: "1 Year",
    description: "Intensive MSc, MA, or MBA programs designed for rapid career acceleration.",
    icon: <LineChart className="w-6 h-6" />,
    color: "from-purple-500/40 to-pink-500/40",
    gridSpan: "md:col-span-2",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  },
  {
    level: "PhD / Research",
    duration: "3 - 4 Years",
    description: "Leading-edge research opportunities at top-ranked global laboratories.",
    icon: <Microscope className="w-6 h-6" />,
    color: "from-emerald-500/40 to-teal-500/40",
    gridSpan: "md:col-span-2",
    bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
  },
  {
    level: "Diplomas",
    duration: "Varies",
    description: "Specialized professional certifications for specific skill sets.",
    icon: <Award className="w-6 h-6" />,
    color: "from-rose-500/40 to-orange-500/40",
    gridSpan: "md:col-span-2",
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
];

const EducationSystemUK = () => {
  return (
    <section className="relative w-full py-10 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
        
        {/* Header omitted for brevity, same as your original */}
        <div className="text-center max-w-4xl mx-auto mb-16">
           <h2 className="text-4xl md:text-6xl font-extrabold font-serif text-slate-900 mb-6">
            A World-Class <span className="text-blue-900">Framework</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {educationPathways.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover" // Triggers children with "hover" variant
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.gridSpan} group relative min-h-77.5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 flex flex-col justify-end transition-all duration-500`}
            >
              {/* --- IMAGE BACKGROUND LAYER --- */}
              <motion.div 
                variants={{
                  hover: { scale: 1.1, opacity: 1 }
                }}
                initial={{ scale: 1, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 z-0"
              >
                {/* Dark Overlay to keep text readable */}
                <div className="absolute inset-0 bg-blue-950/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={item.bgImage} 
                  alt={item.level}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* --- CONTENT LAYER --- */}
              <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-900 group-hover:bg-linear-to-r from-[#c1972d] to-blue-950 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                <div className="text-xs font-bold text-[#c1972d] mb-2 uppercase tracking-widest group-hover:text-amber-300">
                  {item.duration}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                  {item.level}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
                  {item.description}
                </p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-white transition-all">
                  View Program <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Decorative Corner Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${item.color} blur-2xl opacity-50 group-hover:opacity-0 transition-opacity`} />
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section... (Keep your existing code) */}
      </div>
    </section>
  );
};

export default EducationSystemUK;