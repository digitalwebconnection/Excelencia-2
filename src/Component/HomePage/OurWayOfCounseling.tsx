
import { motion } from "framer-motion";
import { Ear, UserCheck, Route } from "lucide-react";

export default function OurWayOfCounseling() {
  const steps = [
    {
      icon: <Ear size={26} />,
      title: "We listen first",
      desc: "Before advice. Before options. Before paperwork. We begin by understanding the student — their story, concerns, and readiness for the journey ahead.",
      delay: 0,
    },
    {
      icon: <UserCheck size={26} />,
      title: "We understand deeply",
      desc: "Academic background, financial comfort, long-term goals, and personal preparedness — every detail matters before any recommendation is made.",
      delay: 0.1,
    },
    {
      icon: <Route size={26} />,
      title: "We guide with purpose",
      desc: "Only after clarity comes guidance. Our advice is thoughtful, ethical, and aligned with what truly serves the student’s future.",
      delay: 0.2,
    },
  ];

  return (
    <section className="relative w-full bg-white  overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 w-175 h-175 bg-blue-50/60 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-blue-950 font-bold text-xs mb-4">
            Our Way of Counseling
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Counseling begins with 
            <span className="text-blue-950"> listening.</span>
          </h2>
            <p className="text-lg md:text-xl text-slate-700 font-medium max-w-5xl mx-auto">
            At Excelencia International, counseling is not a process —
            it’s a responsibility we take personally.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: step.delay }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl p-8 bg-white border border-slate-900/40
                         transition-all duration-1000 ease-in-out hover:-translate-y-3 hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:shadow-2xl"
            >
            
              <div className="relative z-10">
                {/* Icon Container with slow color swap */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-950 text-white mb-6
                                transition-all duration-700 ease-in-out group-hover:bg-white group-hover:text-blue-950">
                  {step.icon}
                </div>

                {/* Text transitions synced to 700ms */}
                <h3 className="text-xl font-bold mb-4 text-slate-900 transition-colors duration-700 ease-in-out group-hover:text-white">
                  {step.title}
                </h3>

                <p className="leading-relaxed text-slate-600 transition-colors duration-700 ease-in-out group-hover:text-blue-100">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}