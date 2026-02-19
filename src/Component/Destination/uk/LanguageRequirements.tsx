import { motion } from "framer-motion";
import {
  CheckCircle2,
  Layers,
  School,
  GraduationCap,
} from "lucide-react";

const EnglishRequirements = () => {
  const requirements = [
    {
      id: 1,
      title: "Accepted Tests",
      icon: <Layers size={24} />,
      content: ["IELTS", "PTE Academic", "TOEFL (Some Universities)"],
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
      type: "list",
    },
    {
      id: 2,
      title: "Undergraduate",
      icon: <School size={24} />,
      score: "6.0 - 6.5",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
      type: "score",
    },
    {
      id: 3,
      title: "Postgraduate",
      icon: <GraduationCap size={24} />,
      score: "6.5 - 7.0",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
      type: "score",
    },
  ];

  return (
    <section className="bg-blue-950 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight">
            English Language Requirements
          </h2>
          <p className="text-[#c1972d] text-xs tracking-[0.3em] uppercase mt-4">
            Hover to View Details
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {requirements.map((req, index) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative h-105 rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-2xl"
            >

              {/* Background Image */}
              <img
                src={req.image}
                alt={req.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Blue Overlay */}
              <div className="absolute inset-0 bg-blue-950/50 group-hover:bg-blue-950/85 transition-all duration-500" />

              {/* Default Visible Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-opacity duration-500 group-hover:opacity-0">

                <div className="w-16 h-16 bg-[#c1972d] rounded-2xl flex items-center justify-center text-white shadow-lg mb-6">
                  {req.icon}
                </div>

                <h3 className="text-white text-2xl font-bold">
                  {req.title}
                </h3>
              </div>

              {/* Hover Reveal Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

                {req.type === "list" ? (
                  <ul className="space-y-4">
                    {req.content?.map((item) => (
                      <li
                        key={item}
                        className="flex  gap-3 text-white text-sm "
                      >
                        <CheckCircle2 className="text-[#c1972d] w-4 h-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div>
                    <p className="text-5xl font-black text-[#c1972d] tracking-tight">
                      {req.score}
                    </p>
                    <p className="text-white/70 text-xs uppercase tracking-widest mt-3">
                      IELTS Score
                    </p>
                  </div>
                )}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EnglishRequirements;
