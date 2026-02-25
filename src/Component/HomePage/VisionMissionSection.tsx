import { motion } from "framer-motion";
import {  Target, ShieldCheck, Globe, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    title: "Our Vision",
    icon: <Globe className="text-blue-600" size={24} />,
    bg: "bg-blue-50",
    accent: "from-blue-600 via-indigo-500 to-blue-400",
    headline: "Global Leadership.",
    subHeadline: "Clarity & Confidence.",
    // Full text from image_3df27e.png
    description: "To be a globally recognized leader in international education and immigration services. We strive to simplify the complexities of studying abroad so that students can embark on their academic journeys with clarity and confidence.",
    footer: "We envision a future where every student, regardless of background, has access to quality guidance and seamless processes,and the support they need to thrive in world-class universities and secure international opportunities.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    badge: "The Future"
  },
  {
    title: "Our Mission",
    icon: <Target className="text-blue-600" size={24} />,
    bg: "bbg-blue-50",
    accent: "from-blue-600 via-indigo-500 to-blue-400",
    headline: "Empowering Students.",
    subHeadline: "Ethical Support.",
    // Full text from image_3df521.png
    description: "Our mission at Excelencia International is to empower every student with personalized, ethical, and professional support as they pursue educational goals overseas.",
    points: [
      { id: "1", text: "Providing accurate and transparent guidance through every stage." },
      { id: "2", text: "Helping students make informed decisions about countries & visas." },
      { id: "3", text: "Delivering exceptional service rooted in integrity and expertise." }
    ],
    footer: "By offering thoughtful counseling and reliable support, we make the study-abroad process easier turning aspirations into achievements.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    badge: "The Commitment"
  }
];

export default function VisionMissionSection() {
  return (
    <section className="relative w-full bg-[#fafafa] py-24 overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-amber-100 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#c1972d] font-bold tracking-[0.3em] uppercase text-xs"
          >
            Excelencia International
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif mt-4 text-slate-900"
          >
            The Foundation of <span className="italic">Success</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <FlipCard key={idx} card={card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ card }: { card: any; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-162.5 w-full perspective-[2000px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full transform-3d shadow-2xl rounded-[2.5rem]"
      >
        {/* FRONT SIDE: VISUAL BRANDING */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <motion.div 
               animate={{ y: isFlipped ? 20 : 0, opacity: isFlipped ? 0 : 1 }}
               className="space-y-4"
            >
              <span className="px-6 py-1.5 bg-[#c1972d] text-white rounded-full text-[12px] font-black uppercase tracking-widest">
                {card.badge}
              </span>
              <h3 className="text-5xl font-serif text-white">{card.title}</h3>
              <p className="text-slate-200 text-lg max-w-sm font-light">
                Discover how we are redefining the landscape of global education.
              </p>
              <div className="pt-6 flex items-center gap-3 text-[#c1972d] font-bold">
                <span className="text-sm uppercase tracking-tighter">View Full Details</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* BACK SIDE: FULL DATA FROM IMAGES */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between border border-slate-100"
        >
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className={`p-4 ${card.bg} rounded-2xl text-slate-900`}>
                {card.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Excelencia Strategy
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              {card.headline} <br/>
              <span className={`text-transparent bg-clip-text bg-linear-to-r ${card.accent}`}>
                {card.subHeadline}
              </span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-base mb-8">
              {card.description}
            </p>

            {/* If it's the Mission Card, show the 1-2-3 points from image_3df521.png */}
            {card.points && (
              <div className="grid grid-cols-1 gap-4 mb-8">
                {card.points.map((p: any) => (
                  <div key={p.id} className="flex gap-4 items-start p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#c1972d] text-white text-[10px] flex items-center justify-center font-bold">
                      {p.id}
                    </span>
                    <p className="text-xs font-bold text-slate-700 leading-tight">{p.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100">
             <div className="flex items-start gap-3">
               <ShieldCheck className="text-[#c1972d] shrink-0" size={20} />
               <p className="text-sm text-slate-500 italic">
                 "{card.footer}"
               </p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}