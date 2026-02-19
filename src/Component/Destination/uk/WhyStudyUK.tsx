
import { motion } from "framer-motion";
import { 
  GraduationCap,  
  ShieldCheck, 
  TrendingUp, 
  Award 
} from "lucide-react";

const WhyStudyUK = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Shortened Degrees",
      desc: "2–3 year undergraduate degrees and 1 year master’s programs to save you time and tuition.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Global Reputation",
      desc: "Home to some of the world's oldest and most prestigious, globally ranked universities.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Graduate Route",
      desc: "Benefit from a 2-Year Post Study Work Visa to kickstart your career in the UK market.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Safe & Inclusive",
      desc: "Study in a multicultural and safe environment designed for international student success.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative py-14 bg-white overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#c1972d]/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto  relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-[#c1972d] uppercase bg-[#c1972d]/10 rounded-lg">
              Why the UK?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mb-6">
              World-Class Education <br />
              <span className="text-[#c1972d]">Internationally Respected</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              The United Kingdom is home to some of the world's oldest and most prestigious universities. 
              A UK qualification is highly valued by employers worldwide, offering you a significant 
              competitive edge in the global job market.
            </p>

            {/* Feature List */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "2–3 year undergraduate degrees",
                "1 year master’s programs",
                "Globally ranked universities"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-950 flex items-center justify-center group-hover:bg-[#c1972d] transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-950 font-semibold">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-slate-500/30 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-3xl hover:border-[#c1972d]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-950 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-linear-to-r from-[#c1972d] to-blue-950 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyStudyUK;