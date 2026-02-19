import { motion } from 'framer-motion';
import { 
  UserCheck, 
  ListChecks, 
  FileText, 
  MailOpen, 
  ShieldCheck, 
  PlaneTakeoff 
} from 'lucide-react';

const steps = [
  {
    title: "Profile Evaluation",
    desc: "In-depth analysis of your academic and professional background.",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "University Shortlisting",
    desc: "Curating a list of top-tier UK universities tailored to your goals.",
    icon: <ListChecks className="w-6 h-6" />,
  },
  {
    title: "SOP & Documentation",
    desc: "Expert guidance on crafting compelling statements and paperwork.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Admission Support",
    desc: "Seamless handling of applications and offer letter follow-ups.",
    icon: <MailOpen className="w-6 h-6" />,
  },
  {
    title: "Visa Filing",
    desc: "Comprehensive support for a stress-free UK student visa process.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Arrival Assistance",
    desc: "Pre-departure briefings and post-arrival settlement support.",
    icon: <PlaneTakeoff className="w-6 h-6" />,
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-8 bg-[#c1972d]" />
              <span className="text-[#c1972d] font-bold tracking-widest text-xs uppercase">Your Success Story</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-blue-950 leading-tight"
            >
              Why Choose Us for <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-950 to-[#c1972d]">
                UK Admission?
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 lg:max-w-xs text-sm leading-relaxed border-l-2 border-[#c1972d] pl-6"
          >
            Our expert counsellors ensure smooth processing from initial application to your first day on campus.
          </motion.p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[#c1972d]/10 transition-all duration-500"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-8 bg-blue-950 text-white text-xs font-bold px-3 py-1 rounded-full group-hover:bg-[#c1972d] transition-colors">
                Step 0{index + 1}
              </div>

              <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 text-blue-950 group-hover:scale-110 group-hover:bg-linear-to-r from-[#c1972d] to-blue-950 group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-[#c1972d] transition-colors">
                {step.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Decorative Dot for the "Path" */}
              <div className="hidden lg:block absolute -bottom-10.75 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-200 border-4 border-white group-hover:bg-[#c1972d] group-hover:scale-150 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;