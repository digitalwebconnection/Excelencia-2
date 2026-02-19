
const ContactHero = () => {
  return (
    <section className="relative bg-slate-900 py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[70%] bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[70%] bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Let’s build something <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">extraordinary</span> together.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Have a question, a project idea, or just want to say hello? Our team is 
          ready to help you scale your next big thing.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25">
            Get in Touch
          </button>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg border border-slate-700 transition-all duration-300">
            View Documentation
          </button>
        </div>

        {/* Trust Indicators / Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800">
          <div>
            <p className="text-3xl font-bold text-white">99%</p>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Support</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">150+</p>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">2hr</p>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;