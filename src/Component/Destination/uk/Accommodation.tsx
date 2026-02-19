import { motion } from 'framer-motion';
import { Home, Hotel, Users, Heart } from 'lucide-react';

const options = [
  {
    title: "University Halls",
    description: "Managed by the university, offering a great way to meet fellow students in a secure environment.",
    icon: <Hotel className="w-8 h-8" />,
  },
  {
    title: "Private Student Housing",
    description: "Purpose-built modern apartments with premium amenities like gyms and cinema rooms.",
    icon: <Home className="w-8 h-8" />,
  },
  {
    title: "Shared Apartments",
    description: "Independent living in shared flats or houses, perfect for those seeking a local experience.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Homestays",
    description: "Live with a local British family to immerse yourself in the culture and language.",
    icon: <Heart className="w-8 h-8" />,
  }
];

const Accommodation = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c1972d] font-semibold tracking-widest uppercase text-sm"
          >
            Your Home Abroad
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-blue-950 mt-4"
          >
            Accommodation Options in the UK
          </motion.h2>
          <div className="w-24 h-1 bg-[#c1972d] mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-blue-50 text-blue-950 group-hover:bg-linear-to-r from-[#c1972d] to-blue-950 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4 group-hover:text-[#c1972d] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-950 font-medium italic">
            * Accommodation can be arranged before your arrival.
          </p>
          <button className="mt-8 px-8 py-3 bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-semibold rounded-lg hover:bg-[#c1972d] transform transition-all active:scale-95 shadow-lg">
            Book My Stay
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;