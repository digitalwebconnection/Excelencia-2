import { motion } from "framer-motion";
import { Globe, Target, ShieldCheck, Users, Shield, Zap } from "lucide-react";


export default function VisionMissionSection() {
  return (
    <>
      <section className="relative py-28 bg-slate-950 overflow-hidden text-white">

        {/* background glow */}
        <div className="absolute -top-50 -left-50 w-125 h-125 bg-blue-600/20 blur-[160px] rounded-full" />
        <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-[#c1972d]/20 blur-[160px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative">

          {/* heading */}
          <div className="text-center mb-24">
            <p className="text-[#c1972d] tracking-[0.35em] text-xs uppercase font-bold">
              Excelencia International
            </p>

            <h2 className="text-5xl md:text-7xl font-serif mt-6">
              Vision <span className="text-[#c1972d]">&</span> Mission
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Vision side */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >

              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                className="rounded-3xl shadow-2xl"
              />

              {/* floating card */}
              <div className="absolute -bottom-10 left-10 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl max-w-md">

                <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-blue-600" />
                  <h3 className="text-2xl font-serif">Our Vision</h3>
                </div>

                <p className="text-slate-600 mb-4">
                  To become a globally recognized leader in international
                  education and immigration services.
                </p>

                <p className="text-sm text-slate-500 italic">
                  Helping students pursue global education with clarity,
                  confidence and trusted guidance.
                </p>

              </div>

            </motion.div>

            {/* Mission side */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-[#c1972d]" />
                  <h3 className="text-4xl font-serif">
                    Our Mission
                  </h3>
                </div>

                <p className="text-slate-300 text-lg mb-10">
                  Empower students with personalized, ethical and professional
                  support for studying abroad.
                </p>
              </div>

              {/* mission cards */}

              <div className="space-y-6">

                <div className="flex gap-5 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 bg-[#c1972d] text-black rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="text-slate-300">
                    Provide transparent and accurate guidance throughout
                    the entire study abroad journey.
                  </p>
                </div>

                <div className="flex gap-5 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 bg-[#c1972d] text-black rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="text-slate-300">
                    Help students choose the right countries, universities
                    and visa pathways.
                  </p>
                </div>

                <div className="flex gap-5 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 bg-[#c1972d] text-black rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="text-slate-300">
                    Deliver exceptional service rooted in integrity,
                    expertise and professional excellence.
                  </p>
                </div>

              </div>

              <div className="flex gap-3 pt-6 border-t border-white/10">
                <ShieldCheck className="text-[#c1972d]" />
                <p className="text-slate-400 text-sm italic">
                  Turning global education dreams into real opportunities.
                </p>
              </div>

            </motion.div>

          </div>

        </div>
      </section>
      <CoreValuesSection />
    </>
  );
}





//******************************************/ CoreValuesSection**************************************************************


const values = [
  {
    title: "Integrity",
    desc: "We uphold honesty and ethical practices in all interactions, ensuring trust remains the foundation of our relationships.",
    icon: Shield
  },
  {
    title: "Transparency",
    desc: "We communicate clearly and openly, guiding students through every process with complete clarity and confidence.",
    icon: Target
  },
  {
    title: "Precision",
    desc: "Every recommendation and action we take is informed, accurate, and tailored to your unique profile.",
    icon: Users
  },
  {
    title: "Student-Centric Support",
    desc: "Your goals are our priority we listen, customize our approach, and walk with you at every stage of your global journey.",
    icon: Zap
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-900"
          >
            Our <span className="text-[#c1972d]">Core Values</span>
          </motion.h2>
          <p className="mt-6 max-w-3xl mx-auto text-slate-700">
            At the heart of <b>Excelencia International</b> lie four core values that define how we serve our clients and operate as an organization.
          </p>
        </div>

        {/* Value Cards */}
        <div className="space-y-14 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* The Card */}
                <div className="relative w-full md:w-[85%] bg-white p-10 md:p-8 rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-900/40">

                  {/* Floating Icon Holder */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-20 h-20 md:w-34 md:h-34 bg-linear-to-r from-[#c1972d]  to-blue-950 text-white rounded-full shadow-lg flex items-center justify-center border-8 border-[#f7f3e6] transition-transform duration-500 group-hover:scale-110 z-20
                      ${isLeft ? "-right-10 md:-right-18" : "-left-10 md:-left-18"}
                    `}
                  >
                    <value.icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className={`max-w-4xl ${isLeft ? "text-left" : "text-left md:ml-auto"}`}>
                    <span className="text-[#c1972d] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
                      Value 0{index + 1}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {value.desc}
                    </p>
                  </div>

                  {/* Decorative background number */}
                  <span className="absolute bottom-6 right-10 text-8xl font-black text-slate-50 select-none pointer-events-none">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}