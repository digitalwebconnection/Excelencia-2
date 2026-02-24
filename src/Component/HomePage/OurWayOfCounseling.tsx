import { motion } from "framer-motion";
import {
  Ear,
  Users,
  GraduationCap,
  FileCheck,
  Compass,
} from "lucide-react";

export default function OurWayOfCounseling() {
  const steps = [
    {
      icon: <Ear size={26} />,
      title: "Honest Counselling",
      desc: "We provide transparent advice — even when the recommendation is not the option you initially considered.",
      delay: 0,
    },
    {
      icon: <Users size={26} />,
      title: "Student-First Approach",
      desc: "Your goals, finances, and long-term future always come before institutional commissions.",
      delay: 0.1,
    },
    {
      icon: <GraduationCap size={26} />,
      title: "Personalized University Selection",
      desc: "Every university recommendation is carefully matched to your academic profile and career aspirations.",
      delay: 0.2,
    },
    {
      icon: <FileCheck size={26} />,
      title: "Complete Visa Support",
      desc: "Step-by-step assistance from application submission to successful visa approval.",
      delay: 0.3,
    },
    {
      icon: <Compass size={26} />,
      title: "Long-Term Mentorship",
      desc: "Support does not stop at admission — we guide you with clarity and direction toward a successful global career.",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative w-full bg-white pb-14 overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-175 h-175 bg-blue-50/60 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-blue-950 font-bold text-xs mb-4">
            WHY EXCELENCIA INTERNATIONAL
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-slate-900 leading-tight">
            Not Just Admissions.
            <span className="text-blue-950"> Life Decisions.</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-700 font-medium max-w-4xl mx-auto">
            Every student’s journey is unique. Our guidance is built on honesty,
            accountability, and a genuine commitment to your long-term success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: step.delay }}
              viewport={{ once: true }}
              className="group relative rounded-3xl p-4 bg-white border border-slate-200
                         transition-all duration-700 ease-in-out
                         hover:-translate-y-3
                         hover:bg-linear-to-r hover:from-[#c1972d] hover:to-blue-950
                         hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex justify-around">
              <div className="flex items-center  text-center justify-center w-14 h-14 rounded-2xl bg-blue-950 text-white mb-6
                              transition-all duration-700 group-hover:bg-white group-hover:text-blue-950">
                {step.icon}
              </div>
</div>
              {/* Title */}
              <h3 className="text-xl text-center font-bold mb-4 text-slate-900 transition-colors duration-700 group-hover:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-center text-slate-600 transition-colors duration-700 group-hover:text-white text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}