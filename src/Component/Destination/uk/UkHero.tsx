import { motion } from "framer-motion";

const UKStudyHero = () => {
  return (
    <section className="relative w-full  flex items-center bg-linear-to-br from-blue-950 via-[#0b1120] to-blue-950 overflow-hidden">

      {/* ===== Background Effects ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-125 h-125 bg-[#c1972d]/15 rounded-full blur-[160px]" />
        <div className="absolute -bottom-32 -right-32 w-125 h-125 bg-blue-600/15 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-10 grid lg:grid-cols-12 gap-16 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <div className="lg:col-span-7">

          {/* Admissions Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#c1972d] animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium text-slate-300 tracking-wider uppercase">
              2025–26 Admissions Open
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8"
          >
            Your Gateway to <br />
            <span className="bg-linear-to-r from-[#c1972d] to-blue-950 text-transparent bg-clip-text">
              British Excellence
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Join a legacy of innovation. Access world-leading faculty, a
            <span className="text-white font-medium"> 2-year Graduate Route visa</span>,
            and qualifications that command global respect.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button className="group relative px-8 py-4 bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-bold rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#c1972d]/30">
              Start Your Application
            </button>

            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-md transition-all">
              Book Expert Call
            </button>
          </motion.div>

          {/* Trust Metrics */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-2xl font-bold text-white">160+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Universities
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Visa Success
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">£2k–5k</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Scholarships
              </div>
            </div>
          </div>

        </div>

        {/* ===== RIGHT VISUAL ===== */}
        <div className="lg:col-span-5 relative hidden lg:block">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Image Card */}
            <div className="relative p-2 rounded-[2.5rem] bg-linear-to-r from-[#c1972d] to-blue-950 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80"
                alt="London Campus"
                className="rounded-4xl w-full h-145 object-cover"
              />
            </div>

            {/* Floating Visa Card */}
            <div className="absolute -right-8 top-1/8 bg-[#1e293b]/95 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-xl">
              <p className="text-white font-semibold text-sm">
                ✔ Post-Study Work Visa
              </p>
              <p className="text-slate-400 text-xs">Up to 2 Years</p>
            </div>

            {/* Floating Universities Card */}
            <div className="absolute -left-10 bottom-10 bg-white p-5 rounded-2xl shadow-xl max-w-55">
              <p className="text-slate-900 font-bold text-sm mb-2">
                Top Rated Universities
              </p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                  +50
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default UKStudyHero;
