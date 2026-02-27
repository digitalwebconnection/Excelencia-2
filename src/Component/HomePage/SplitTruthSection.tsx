
import { motion } from "framer-motion";
import { Check, X } from "lucide-react"; // npm install lucide-react
import image from "../../assets/DO.png"
import image1 from "../../assets/DON'T.png"

const whatWeDo = ["We guide", "We advise", "We support"];
const whatWeDont = ["We pressure", "We decide for students", "We sell dreams"];

export default function SplitTruthSection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-10">

      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000')", // Educational/Nature background
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-black/85 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">

        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8+"
        >
          <h2 className="text-white text-4xl md:text-5xl font-black font-serif tracking-tight mb-4">
            Honest Guidance. <span className="text-[#c1972d]">No Hidden Agendas.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20 items-stretch">

          {/* LEFT: WHAT WE DO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-slate-900/40 backdrop-blur-md border border-white/20 rounded-3xl px-8 pb-8  flex flex-col"
          >
            <h3 className="text-blue-400  justify-center -mt-16 text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <img src={image} alt="" className="w-40"/>
            </h3>

            <svg width="0" height="0">
              <defs>
                <linearGradient id="goldBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c1972d" />
                  <stop offset="100%" stopColor="#172554" />
                </linearGradient>
              </defs>
            </svg>
            <ul className="space-y-6">
              {whatWeDo.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center ps-30 gap-4 text-[#c1972d] text-xl md:text-2xl font-medium"
                >
                  <Check
                    className="w-6 h-6 text-green-600  shrink-0 "
             
                    strokeWidth={6}
                  />

                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: WHAT WE DON'T */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl px-8 pb-8 flex flex-col"
          >
            <h3 className="text-blue-400  -mt-16 justify-center text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-2">
              <img src={image1} alt="" className="w-40"/>
            </h3>
            <ul className="space-y-6">
              {whatWeDont.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center ps-22 gap-4 text-[#c1972d] text-xl md:text-2xl font-medium "
                >
                  <X className="text-red-600  w-6 h-6 shrink-0" strokeWidth={6} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-full bg-linear-to-r from-[#c1972d]  to-blue-950 text-white font-semibold text-lg md:text-xl shadow-2xl shadow-blue-900/50">
            Our role is to help students choose wisely — not quickly.
          </div>
        </motion.div>

      </div>
    </section>
  );
}