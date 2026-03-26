import { Quote, CheckCircle2, MessageSquare, ShieldCheck, GraduationCap } from 'lucide-react';

const InterviewDetailSection = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#c1972d]" />,
      title: "Mock Environment",
      desc: "Simulated sessions that mimic real embassy and university pressure."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c1972d]" />,
      title: "Tricky Question Mastery",
      desc: "Deep dives into financial viability, intent, and post-study goals."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#c1972d]" />,
      title: "Individual Feedback",
      desc: "Personalized coaching to shore up weaknesses before the live interview."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl text-center mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#c1972d] uppercase mb-3">
            Mumbai - Bandra Expert Coaching
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            Excelencia International <br />
            <span className="text-[#c1972d] ">Student Visa Interview Preparation</span>
          </h3>
       
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Quote className="absolute -top-4 -left-10 text-[#c1972d] w-20 h-20 z-0" />
              <p className="relative z-10 text-xl text-slate-700 leading-relaxed italic">
                 "University admissions or a student visa often requires clearing a credibility or embassy interview. 
                Excelencia International empowers students to express their authentic selves with confidence and clarity."
              </p>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Many students have stellar academic records yet struggle to express their aspirations clearly. 
                Our experienced counsellors in <span className="font-semibold text-blue-950">Mumbai, Bandra</span> conduct 
                structured mock sessions in an environment that closely mimics real-world scenarios.
              </p>
              <p>
                It is not about practicing the same responses on repeat. We make students 
                <span className="text-blue-950 font-medium"> responsible for their own path</span>, 
                translating their genuine intent into real-life confidence that resonates with visa officers.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                {['Communication Skills', 'Clarity of Purpose', 'Genuine Intent'].map((skill) => (
                  <span key={skill} className="flex items-center gap-2 bg-blue-950 text-[#c1972d] px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-6">What We Target:</h4>
                    <div className="space-y-6">
                        {features.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="bg-white/10 p-3 rounded-lg h-fit">
                                    {item.icon}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white">{item.title}</h5>
                                    <p className="text-blue-100 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative background circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c1972d]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="p-6 border-l-4 border-[#c1972d] bg-white">
                <p className="text-slate-600 italic">
                    "Students walk into interviews fully prepared — and walk out one step closer to their international education dream."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterviewDetailSection;