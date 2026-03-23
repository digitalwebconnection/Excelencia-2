
import { Quote, } from 'lucide-react';

const InterviewDetailSection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header - Location & Branding */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
        
            <h2 className="text-4xl font-extrabold text-blue-950 leading-tight">
              Excelencia International <br />
              <span className="text-[#c1972d]">Student Visa Interview Preparation</span>
            </h2>
          </div>
       
        </div>


          {/* Left Column: The Problem & The Mission */}
          <div className=" space-y-8">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 text-blue-100 w-16 h-16 -z-10" />
              <p className="text-xl text-slate-700 leading-relaxed italic">
              University admissions or a student visa often requires clearing a credibility or embassy interview. Excelencia International – Student Visa Interview Preparation in Mumbai, Bandra empowers students to express their authentic selves with confidence and clarity. Many students have stellar academic records yet cannot express their aspirations clearly in an interview. Our experienced counsellors conduct structured mock interview sessions in an environment that closely mimics a real university and visa interview. We empower students in answering some tricky questions about what course to study, what their career goals are, if they’re financially viable for the study, if they’re academically capable, and, of course, following it up with what happens after.</p>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                We prepare you with communication skills, clarity of purpose, and genuine intent — all aspects that matter the most when it comes to procuring your visa. They learn how to avoid common blunders, navigate tough questions, and remain composed even when the pressure is on. We further give individualised feedback to shore up weaknesses before the live interview
              </p>
              <p>
             We, as leading study abroad consultants in Mumbai, know how the right interview training can increase the visa success rate. It is not about practicing the same responses on repeat, but rather making students responsible for their own path and translating it into real-life confidence. 
              </p>
              <p>
                Students walk into interviews fully prepared — and with the right preparation and expert guidance, walk out one step closer to their international education dream.
              </p>
            </div>      

        </div>
      </div>
    </section>
  );
};

export default InterviewDetailSection;