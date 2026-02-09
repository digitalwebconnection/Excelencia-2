
import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye, Users } from "lucide-react";

const values = [
  {
    title: "Honesty",
    desc: "Standing firm in truth, especially when decisions are difficult.",
    icon: ShieldCheck,
  },
  {
    title: "Precision",
    desc: "Making the right choices when outcomes truly matter.",
    icon: Target,
  },
  {
    title: "Transparency",
    desc: "Clear communication when clarity is essential.",
    icon: Eye,
  },
  {
    title: "Student-Centric Support",
    desc: "Supporting students at every step of their global journey.",
    icon: Users,
  },
];

export default function ValuesWePracticeCards() {
  return (
    <section className="relative w-full bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Decorative Line */}
          <div className="flex justify-center items-center mb-6">
            <div className="h-0.5 w-12 bg-blue-950"></div>
            <div className="mx-2 w-3 h-3 border-2 border-blue-950 rounded-full"></div>
            <div className="h-0.5 w-12 bg-blue-950"></div>
          </div>

          <p className="uppercase tracking-[0.35em] text-blue-950 font-semibold text-xs mb-4">
            Values We Practice
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Our values are not written on walls — <br />
            <span className="text-blue-950">they are practiced daily.</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Stepped Card Container */}
                <div className="relative pt-5">

                  {/* Custom Border */}
                  <div className="absolute inset-0 border border-gray-600/20 rounded-2xl group-hover:border-blue-950 transition-colors duration-300 pointer-events-none">
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-white"></div>
                  </div>

                  {/* Icon Box */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-950 flex items-center justify-center z-20
                                  transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-900 shadow-lg">
                    <Icon className="text-white" size={36} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="bg-white px-6 h-50 pt-12 text-center shadow-sm
                                  group-hover:shadow-xl transition-all duration-500 border-x border-b border-transparent">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-4">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-950
                                transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
