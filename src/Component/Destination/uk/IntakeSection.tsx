
import { motion } from 'framer-motion';

const intakes = [
  {
    season: "September",
    type: "Primary Intake",
    description: "The largest intake with the most course options and scholarship opportunities.",
    icon: "🎓",
  },
  {
    season: "January",
    type: "Secondary Intake",
    description: "Ideal for students who missed the autumn deadline or need more preparation time.",
    icon: "❄️",
  },
  {
    season: "May",
    type: "Limited Universities",
    description: "A niche intake for specific postgraduate and fast-track professional courses.",
    icon: "🌱",
  },
];

const IntakeSection = () => {
  return (
    <section className="bg-white py-4 px-6 md:px-0 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-950/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-blue-950 text-4xl md:text-5xl font-bold leading-tight">
              Major <span className="text-[#c1972d]">Intakes</span> in the UK
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Planning your journey early is the key to success. We recommend applying 
              <span className="font-bold text-blue-950"> 6–8 months </span> in advance.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block h-px flex-1 bg-gray-200 mx-8 mb-4"
          />
        </div>

        {/* Intake Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {intakes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white border border-gray-900/20 shadow-2xl shadow-blue-950/5 rounded-2xl group transition-all"
            >
              {/* Accent Numbering */}
              <span className="absolute top-6 right-8 text-6xl font-black text-blue-950/15 group-hover:text-[#c1972d]/80 transition-colors">
                0{index + 1}
              </span>

              <div className="text-4xl mb-6">{item.icon}</div>
              
              <h3 className="text-blue-950 text-2xl font-bold mb-1">
                {item.season}
              </h3>
              <p className="text-[#c1972d] font-semibold tracking-wide text-sm uppercase mb-4">
                {item.type}
              </p>
              
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Glow Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#c1972d] transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-linear-to-r from-[#c1972d] to-blue-950 text-white text-sm font-medium">
            Pro Tip: September 2026 applications are now opening!
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntakeSection;