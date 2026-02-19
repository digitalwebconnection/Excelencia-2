import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  CircleDollarSign, 
  Languages, 
  GraduationCap, 
  ArrowUpRight,
  Navigation
} from 'lucide-react';

const VisaPremium = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "CAS Issuance",
      label: "Foundation",
      desc: "Your official sponsorship record from a licensed UK university.",
      icon: <ShieldCheck size={32} />,
      details: "This 13-digit reference number is essential for your application."
    },
    {
      title: "Proof of Funds",
      label: "Financials",
      desc: "Evidence of tuition fees and monthly living expenses for your stay.",
      icon: <CircleDollarSign size={32} />,
      details: "Requires a 28-day consecutive balance in your bank account."
    },
    {
      title: "English Mastery",
      label: "Linguistic",
      desc: "Certification of your ability to thrive in a British academic setting.",
      icon: <Languages size={32} />,
      details: "Commonly fulfilled via IELTS Academic or PTE scores."
    },
    {
      title: "Academic History",
      label: "Credentials",
      desc: "A verified portfolio of your past educational achievements.",
      icon: <GraduationCap size={32} />,
      details: "Original transcripts and degree certificates are mandatory."
    },
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] py-24 px-8 flex items-center overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: THE ANCHOR */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-12 bg-[#c1972d]" />
              <span className="text-[#c1972d] font-bold tracking-[0.3em] uppercase text-xs">2026 Academic Protocol</span>
            </div>
            
            <h2 className="text-7xl font-black text-blue-950 leading-[0.9] mb-5">
              UK <br /> 
              <span className="text-[#c1972d]  font-serif font-light">Student</span> <br /> 
              Visa Process.
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-5">
              A meticulously structured gateway for international scholars entering the UK's premier institutions.
            </p>

            <div className="p-6 bg-linear-to-r from-[#c1972d] to-blue-950 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-blue-950 text-xs font-bold uppercase tracking-widest mb-1">Processing Time</p>
                  <p className="text-3xl font-bold">3 – 4 Weeks</p>
                </div>
                <Navigation className="text-[#c1972d] group-hover:rotate-45 transition-transform duration-500" size={40} />
              </div>
              {/* Animated Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c1972d]/10 rounded-full blur-3xl group-hover:bg-[#c1972d]/20 transition-all" />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: THE INTERACTIVE VAULT */}
        <div className="lg:col-span-7 grid gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className={`p-4 rounded-[3rem] transition-all duration-500 flex items-center justify-between border ${
                hoveredIndex === idx 
                ? 'bg-white border-transparent shadow-2xl shadow-blue-900/10 scale-[1.02]' 
                : 'bg-transparent border-slate-200 shadow-none scale-100'
              }`}>
                <div className="flex gap-8 items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === idx ? 'bg-linear-to-r from-[#c1972d] to-blue-950 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                      hoveredIndex === idx ? 'text-[#c1972d]' : 'text-slate-400'
                    }`}>
                      {step.label}
                    </span>
                    <h3 className={`text-2xl font-bold transition-colors ${
                      hoveredIndex === idx ? 'text-blue-950' : 'text-slate-600'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className={`transition-all duration-500 ${hoveredIndex === idx ? 'rotate-0 opacity-100' : '-rotate-45 opacity-20'}`}>
                   <ArrowUpRight size={28} className="text-[#c1972d]" />
                </div>
              </div>

              {/* Expandable Detail Section */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-10"
                  >
                    <div className="pt-4 pb-8 pl-24">
                       <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                          {step.desc} <br />
                          <span className="text-blue-950 font-bold mt-2 inline-block italic">
                            Pro-tip: {step.details}
                          </span>
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisaPremium;