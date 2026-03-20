import { Quote, Globe,  Navigation } from 'lucide-react';

const LuxuryEditorialServices = () => {
  return (
    <div className="bg-white font-serif selection:bg-[#c1972d]/20 selection:text-blue-950">
      
      {/* Editorial Header */}
      <header className="py-14 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-8">
          <div className="max-w-6xl text-center mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tighter mb-8 leading-none">
              Beyond 
              <span className="text-[#c1972d]"> The Visa.</span>
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight">
              Our service goes way beyond getting your visa approved at Excelencia International. In Mumbai, our detailed Pre and Post-Arrival Services take care of students by ensuring that they are completely prepared to move and settle in their study destination.
            </p>
          </div>
         
        </div>
      </header>

      {/* Main Narrative Content */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Logistics & Pre-Departure */}
          <div className="lg:col-span-7 space-y-16">
            <div className="relative group">
              <span className="absolute -left-6 top-0 text-7xl font-serif text-[#c1972d]/20 transition-colors group-hover:text-[#c1972d]/40">"</span>
              <p className="text-xl text-slate-600 leading-loose pl-4 border-l-2 border-slate-100 italic">
                Moving to another country is not just about booking a flight. Students need to get accommodation, get travel guidelines, carry important documents, experience a foreign exchange, and experience a culture. Our pre-departure guidance sessions include travel packing checklists, airport procedures, health insurance requirements, accommodation options, and student support systems abroad.
              </p>
            </div>

            <div className="bg-blue-950 p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
               <Globe className="absolute -right-12 -bottom-12 text-[#c1972d]/10 w-64 h-64" />
               <p className="text-lg leading-relaxed text-blue-50 relative z-10">
                We go beyond by providing advice on forex services, SIM cards, banking setup, and local transportation info so that you feel at home. For many students, studying abroad is the first time they’re living on their own — and our mentorship ensures they can make that transition seamlessly.
               </p>
            </div>
          </div>

          {/* Right Column: Long Term Mentorship */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-10 border-2 border-dashed border-[#c1972d]/30 rounded-[4rem] relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 text-[#c1972d] font-bold text-xs tracking-widest  ">
                Expert Counsel
              </div>
              <p className="text-lg text-blue-950 leading-relaxed font-bold">
                Once we arrive, we are still available to help with students if they encounter any academic challenges and/or difficulties acclimatizing or issues with housing. We at Excelencia International educate our students and provide them with long-term mentorship because we are not a short-term service company, but the best study abroad consultants in Mumbai and Bandra.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center text-white">
                <Navigation size={20} />
              </div>
              <p className="text-sm font-bold text-slate-400   tracking-widest">Global Success Roadmap</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Signature Conclusion */}
      <section className="">
        <div className="max-w-7xl mx-auto text-center">
          <Quote className="mx-auto text-[#c1972d] mb-10" size={48} />
          <h3 className="text-2xl md:text-3xl font-black text-blue-950 leading-[1.1] mb-12">
            We are committed to making sure students arrive at their destination safely and flourish within the new context. Because real success is more than just leaving home — it’s reflecting, evolving, and prospering across the world.
          </h3>
          <button className="inline-block px-12 py-5 bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-bold text-lg rounded-full shadow-xl shadow-[#c1972d]/20 hover:bg-blue-950 transition-colors duration-500">
            Start Your Evolution
          </button>
        </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-12 border-t border-slate-100 flex justify-center">
        <div className="flex items-center gap-4 text-xs font-bold text-slate-400   tracking-widest">
          <span>Strategic Planning</span>
          <span className="w-1 h-1 rounded-full bg-[#c1972d]"></span>
          <span>Expert Counsel</span>
          <span className="w-1 h-1 rounded-full bg-[#c1972d]"></span>
          <span>Mumbai/Bandra</span>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryEditorialServices;