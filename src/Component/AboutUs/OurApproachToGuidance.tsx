import { motion } from "framer-motion";
import { Check, Award, ShieldCheck, Star } from "lucide-react";

const awards = [
  {
    year: "2020",
    title: "Best Consulting",
    subtitle: "The Best Choice",
    icon: <Star className="w-8 h-8 text-white" />,
  },
  {
    year: "2022",
    title: "Visa Guarantee",
    subtitle: "100% Guaranteed",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    year: "2018",
    title: "Quality Management",
    subtitle: "Premium Quality",
    icon: <Award className="w-8 h-8 text-white" />,
  },
];

const checkmarks = [
  "Professional Consultants",
  "100% Guarantee Approvals",
  "Affordable Fees",
];

export default function AgencyAwards() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#c1972d_0%,transparent_50%)] opacity-20" />
        {/* Confetti/Particle placeholders - You can replace with an image or CSS shapes */}
        <div className="absolute top-10 right-1/4 w-2 h-2 bg-red-500 rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#c1972d] rounded-full animate-bounce" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-red-600" />
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase font-bold">
              They Trust Us
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
            Our Agency <span className="text-red-600">Awards</span> & <br /> Achievements
          </h2>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex-1">
              <p className="text-gray-400 leading-relaxed">
                We're Trusted by <span className="text-red-500 font-bold">68,000+</span> Satisfied Clients Across the World for Best Visa & Immigration.
              </p>
            </div>
            <div className="flex-1 space-y-3">
              {checkmarks.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-md bg-red-600/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Award Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-red-600/30 transition-all duration-500 shadow-2xl"
            >
              <span className="text-[10px] tracking-widest text-gray-500 uppercase mb-6 font-bold">
                {award.year} Award
              </span>

              {/* Custom SVG Seal Badge */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* Rotating Outer Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-red-600/40 rounded-full" 
                />
                
                {/* Solid Scaloped Border (The Seal) */}
                <div className="absolute inset-1 bg-red-600 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center overflow-hidden">
                   {/* Badge Inner Text Overlay */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                      <div className="border-2 border-white/30 rounded-full p-2">
                        {award.icon}
                      </div>
                   </div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-center leading-tight mb-2">
                {award.title}
              </h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                {award.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}