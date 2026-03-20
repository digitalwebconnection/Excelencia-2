import { Compass, BarChart4, Globe2, Lightbulb, MapPin, Award } from 'lucide-react';

const CareerGuidanceSection = () => {
  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-[#c1972d]/30">
      {/* Top Header Bar */}
      <div className="bg-blue-950 py-4 px-6 border-b border-[#c1972d]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#c1972d]">
            <MapPin size={16} />
            <span className="text-[10px] font-bold tracking-[0.2em]  ">Bandra, Mumbai Center</span>
          </div>
          <div className="hidden md:flex gap-6 text-white/60 text-[10px] font-bold tracking-widest  ">
            <span>UK</span> <span>USA</span> <span>Canada</span> <span>Australia</span>
          </div>
        </div>
      </div>

      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle Background Ornament */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 skew-x-12 translate-x-32"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Visual & Core Title */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-block p-3 bg-blue-950 rounded-2xl shadow-xl">
                <Compass className="text-[#c1972d] w-10 h-10" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-blue-950 leading-[0.9] tracking-tighter">
                Career <br />
                <span className="text-[#c1972d]">Guidance</span>
              </h2>
              
              {/* Paragraph 1 - Full Text */}
              <div className="relative pl-8 border-l-4 border-[#c1972d]">
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  The relevance of course selection, though not solely based on interest, is critical to career growth and employability both nationally and globally. This is where, at Excelencia International, our Career Guidance for Study Abroad in Mumbai gives you the right direction for your educational demands according to international job prospects and opportunities.
                </p>
              </div>
              
              {/* ROI Badge */}
              <div className="bg-blue-950 p-6 rounded-3xl text-white flex items-center gap-6 shadow-2xl border-b-4 border-[#c1972d]">
                <BarChart4 size={40} className="text-[#c1972d] shrink-0" />
                <p className="text-sm font-bold   tracking-widest leading-relaxed">
                  High Return on Investment & Career Security
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Paragraph 2 - Full Text */}
              <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 border-t-4 border-t-blue-950">
                <div className="flex items-start gap-6">
                  <Lightbulb className="text-[#c1972d] shrink-0" size={28} />
                  <p className="text-slate-600 leading-loose">
                    Students interested in a major might choose based solely on trends or peer pressure rather than the career outcomes and challenges associated with it. This is followed by in-depth discussions with our trained counsellors to get to know their unique strengths, passions, academic history, and future goals. Advising based on this analysis, with courses that have excellent employment prospects and are relevant globally.
                  </p>
                </div>
              </div>

              {/* Paragraph 3 - Full Text */}
              <div className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:border-[#c1972d] transition-all">
                <div className="flex items-start gap-6">
                  <Globe2 className="text-blue-950 shrink-0" size={28} />
                  <p className="text-slate-600 leading-loose">
                    We examine areas of industry growth, salary trends, skill requirements, and post-study work avenues in the top destinations, including the UK, USA, Canada, and Australia. Such a strategy introduces students to degrees that lead to high return on investment and career security.
                  </p>
                </div>
              </div>

              {/* Paragraph 4 - Full Text */}
              <div className="group bg-blue-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Award size={120} className="text-[#c1972d]" />
                </div>
                <p className="text-slate-300 leading-loose relative z-10">
                  We are among the top study abroad consultancy in Mumbai, Bandra that aims to make not students, but global citizens for a better world. Before the students leave India, they know which specialisation to choose, what their job prospects would look like, and how they can carve out their professional journey even when they are with us through our career counselling.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 5 - Final Footer Statement */}
          <div className=" pt-16 border-t border-slate-100 text-center">
            <div className="max-w-7xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight">
                Designed effectively, international education becomes a strong platform for <span className="text-[#c1972d]">lifelong success</span> as students gain clarity, confidence, and direction with the right course and career roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerGuidanceSection;