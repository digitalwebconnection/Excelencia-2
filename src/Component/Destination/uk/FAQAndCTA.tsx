import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, GraduationCap } from 'lucide-react';

const faqData = [
  {
    question: "Is the UK safe for international students?",
    answer: "Yes, the UK is globally recognized for its safety and inclusivity. Universities offer dedicated 24/7 security, student support services, and comprehensive orientations to help you settle in safely."
  },
  {
    question: "Can students stay after graduation?",
    answer: "Absolutely. Through the Graduate Route, students can stay and work, or look for work, for a period of 2 years (3 years for PhD graduates) after completing their studies."
  },
  {
    question: "How long does UK master’s take?",
    answer: "Typically, a Master’s degree in the UK takes 1 year to complete. This intensive format allows you to gain a world-class qualification faster and return to the workforce sooner."
  },
  {
    question: "Is IELTS mandatory?",
    answer: "While most universities require IELTS, many accept alternative tests like Duolingo or TOEFL. In some cases, if you have high marks in English during your secondary education, the requirement may be waived."
  }
];

const FAQAndCTA = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-white pt-14 ">
      <div className="max-w-7xl mx-auto px-6 ">
        
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
            Frequently Asked <span className="text-[#c1972d]">Questions</span>
          </h2>
          <p className="text-slate-500 mt-4">Everything you need to know about your journey to the UK.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto mb-32">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${activeIdx === index ? 'border-[#c1972d] shadow-lg shadow-[#c1972d]/5' : 'border-slate-100 hover:border-slate-300'}`}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold transition-colors ${activeIdx === index ? 'text-[#c1972d]' : 'text-blue-950'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-transform duration-300 ${activeIdx === index ? 'bg-[#c1972d] text-white rotate-180' : 'bg-slate-50 text-blue-950'}`}>
                  {activeIdx === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIdx === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        
      </div>
      <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-blue-950 p-4 md:p-6 text-center overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0  bg-[#c1972d]/20 rounded-full -translate-x-10 -translate-y-10 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-20 translate-y-20 blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#c1972d] text-white rounded-2xl  rotate-3 shadow-xl">
              <GraduationCap size={32} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Start Your UK Study  Journey Today
            </h2>
            
            <p className="text-blue-200 text-lg mb-4 leading-relaxed">
              Get expert guidance, shortlist top universities, and secure your UK admission with confidence. Your future starts here.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-8 py-5 rounded-full font-bold text-lg flex items-center gap-3 mx-auto transition-all shadow-2xl"
            >
              Book Your Free Consultation Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
        
          </div>
        </motion.div>
    </section>
  );
};

export default FAQAndCTA;