

import { motion } from "framer-motion";
import { Compass, Target, MoveRight } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    title: "Our Vision",
    icon: <Compass className="text-blue-600" size={28} />,
    bg: "bg-blue-50",
    accent: "from-blue-600 via-indigo-500 to-blue-400",
    headline: "Clarity. Confidence.",
    subHeadline: "Global Opportunity.",
    description: "We envision a world where students approach international education with clarity and confidence — not pressure or confusion.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // Team/Collaboration image
    badge: "Future-Ready Students"
  },
  {
    title: "Our Mission",
    icon: <Target className="text-indigo-600" size={28} />,
    bg: "bg-indigo-50",
    accent: "from-indigo-600 via-purple-500 to-indigo-400",
    headline: "Ethical guidance.",
    subHeadline: "Thoughtful decisions.",
    description: "To guide students ethically and professionally through their journey — always acting in the student’s best interest.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", // Graduation/Success image
    badge: "Integrity First"
  }
];

export default function VisionMissionSection() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden pb-14">
      {/* Abstract Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {cards.map((card, idx) => (
            <FlipCard key={idx} card={card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-112.5 perspective-[1500px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full transform-3d"
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0   w-full h-full backface-hidden bg-white rounded-3xl p-10 shadow-xl shadow-black/50 border border-slate-900/40 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-3 ${card.bg} rounded-2xl`}>
              {card.icon}
            </div>
            <span className="uppercase tracking-[0.3em] text-slate-400 font-bold text-xs">
              {card.title}
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 mb-6">
            {card.headline}
            <br />
            <span className={`text-transparent bg-clip-text bg-linear-to-r ${card.accent}`}>
              {card.subHeadline}
            </span>
          </h2>

          <p className="text-slate-500 leading-relaxed text-lg font-medium">
            {card.description}
          </p>

          <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm">
            Flip to see more <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* BACK SIDE (Image and Overlay) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src={card.image} 
            alt={card.title} 
            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
          
          {/* Content on back */}
          <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center">
            <div className="p-4 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-md">
                {/* Clone icon with white color for contrast */}
 {index === 0 ? <Compass className="text-white" size={32} /> : <Target className="text-white" size={32} />}
            </div>
            <motion.span 
              animate={{ y: isFlipped ? 0 : 20, opacity: isFlipped ? 1 : 0 }}
              className="px-4 py-1.5 bg-white text-slate-900 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            >
              {card.badge}
            </motion.span>
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-slate-200 max-w-xs">
                Empowering the next generation of global citizens through transparency and trust.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}