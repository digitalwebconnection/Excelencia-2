
import { easeOut, motion } from 'framer-motion';
import { Clock, Calendar, Briefcase, Info, ArrowUpRight } from 'lucide-react';

const WorkOpportunities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <section className="relative py-18 bg-white overflow-hidden font-sans">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0h1000v1000H0z" fill="none"/>
          <path d="M50 50h900v900H50z" fill="url(#grid)" stroke="#0f203d" strokeWidth="0.5"/>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Typography & Visual Hook */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="lg:col-span-5"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="w-12 h-0.5 bg-[#c1972d]"></span>
              <span className="text-[#c1972d] font-bold tracking-[0.3em] text-xs uppercase">Career & Balance</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black text-blue-950 leading-[1.1] mb-8">
              Work While <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c1972d] to-[#e5c167]">You Study</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Unlock the potential of the UK job market. Gain professional local experience and supplement your living costs with regulated work permissions.
            </motion.p>

            <motion.div variants={itemVariants} className="relative p-8 rounded-3xl bg-blue-950 overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Briefcase size={80} className="text-white" />
              </div>
              <h4 className="text-white font-bold text-xl mb-2 italic">Pro-Tip:</h4>
              <p className="text-blue-200 text-sm leading-relaxed">
                Part-time roles are highly valued by UK employers as they demonstrate time management and cultural integration.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Regulation Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            
            {/* Card 1: Term Time */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[2.5rem] border border-gray-900/30 shadow-[0_20px_50px_rgba(15,32,61,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-950 mb-8">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Term Time</h3>
                <p className="text-[#c1972d] text-4xl font-black mb-4">20 Hours</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Maximum weekly allowance during academic sessions to ensure study focus.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-blue-950 font-bold text-xs uppercase tracking-widest">
                <Info size={14} className="text-[#c1972d]" /> Strictly Monitored
              </div>
            </motion.div>

            {/* Card 2: Holiday Break */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-linear-to-br from-white to-gray-50 p-8 rounded-[2.5rem] border border-gray-900/30 shadow-[0_20px_50px_rgba(15,32,61,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#c1972d]/10 flex items-center justify-center text-[#c1972d] mb-8">
                  <Calendar size={28} />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Holidays</h3>
                <p className="text-blue-950 text-4xl font-black mb-4">Full-Time</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Work unlimited hours during official university breaks and summer periods.
                </p>
              </div>
              <div className="mt-8 group cursor-pointer flex items-center gap-2 text-[#c1972d] font-bold text-xs uppercase tracking-widest">
                Check Dates <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>

            {/* Wide Banner Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="sm:col-span-2 bg-[#c1972d] p-4 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#c1972d]/20"
            >
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl">Financial Independence</h4>
                  <p className="text-white/80 text-sm">Jobs help manage living expenses & gain skills.</p>
                </div>
              </div>
              <button className="bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-white hover:text-blue-950 transition-all duration-300">
                Explore Job Portal
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Simple internal icon for the banner
const TrendingUp = ({ className, size }: { className?: string, size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default WorkOpportunities;