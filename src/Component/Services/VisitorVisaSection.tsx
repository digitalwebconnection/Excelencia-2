import { Plane, FileText, Globe, Users, CheckCircle2 } from 'lucide-react';

const VisitorVisaSection = () => {
  return (
    <div className=" py-14 px-0 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
              Visitor Visa <span className="text-[#c1972d]">Assistance</span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <Plane size={64} className="text-blue-950 opacity-10 -rotate-12" />
          </div>
        </div>

        <div className="grid gap-10">

          {/* Paragraph 1 - Context */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#c1972d] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative bg-white border-2 border-[#c1972d] p-6 md:p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 bg-blue-950 rounded-2xl flex items-center justify-center text-[#c1972d] shrink-0">
                  <Users size={28} />
                </div>
                <p className="text-xl text-blue-950 leading-relaxed font-semibold">
                  This help is important, especially if the students are abroad. Excelencia International also offers Visitor Visa Assistance in Mumbai, Maharashtra to assist parents and family members on holiday (visa) who are planning to visit their families abroad.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 2 & 3 - Documentation & Guidance (Side by Side) */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-950 p-8 md:p-10 rounded-2xl text-white shadow-xl">
              <FileText className="text-[#c1972d] mb-6" size={32} />
              <p className="text-sm md:text-base leading-loose text-slate-300">
                Need to have appropriate documentation, proof of funds, travel intent demonstration, and immigration documents that you are eligible to get the visa. Mistakes — even minor ones — can lead to visa denials.” With the help of our experienced consultants, applicants walk through each step of the application process to submit as complete and accurate an application as possible.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-2xl shadow-sm hover:border-[#c1972d] transition-colors">
              <CheckCircle2 className="text-[#c1972d] mb-6" size={32} />
              <p className="text-sm md:text-base leading-loose text-slate-600">
                We also provide guidance for the submission of visitor visa documents, such as invitation letters, financial statements, travel itineraries, accommodation information, and supporting papers requested by embassies. Our team helps applicants to establish a genuine travel purpose and strong ties in India, two of the most decisive factors for granting a visa.
              </p>
            </div>
          </div>

          {/* Paragraph 4 - Global Reach */}
          <div className="bg-slate-100 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border-l-8 border-[#c1972d]">
            <div className="shrink-0">
              <Globe size={48} className="text-blue-950" />
            </div>
            <p className="text-lg text-blue-950 font-medium leading-relaxed italic">
              As a trustworthy visa consultancy in Bandra, we know what each embassy demands from citizens of different nationalities for the UK, USA, Canada, Australia, and the Schengen countries. We guide you thoroughly on timelines, processing, and interviews if necessary.
            </p>
          </div>

          {/* Paragraph 5 - Conclusion */}
          <div className="relative bg-blue-950 text-white p-4 md:p-6 rounded-2xl text-center overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c1972d] opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <p className="text-xl md:text-2xl font-light leading-snug max-w-7xl mx-auto relative z-10">
              We want to make the visa application process as hassle free as possible, so that families can be safe in the knowledge they are doing this part of their reunion right. With good preparation and documentation, parents can travel to their children and join them in their global achievements.
            </p>
            <button className="mt-8 bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-black px-12 py-4 rounded-full transition-all   tracking-widest text-sm">
              Start Your Reunion
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisitorVisaSection;