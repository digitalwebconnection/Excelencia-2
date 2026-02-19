import { motion } from "framer-motion";

const courses = [
  "Business & Management",
  "Data Science & AI",
  "Engineering",
  "Law",
  "Medicine & Healthcare",
  "Finance & Accounting",
  "Creative Arts & Design",
  "Hospitality & Tourism",
  "Cyber Security",
  "Public Health",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const PopularCoursesUK = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">

      {/* Subtle Gold Glow */}
      <div className="absolute -top-32 -right-32 w-112.5 h-112.5 bg-[#c1972d]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
            Popular Courses in the{" "}
            <span className="text-[#c1972d]">United Kingdom</span>
          </h2>

          <p className="text-lg text-blue-950/70 leading-relaxed">
            The UK is known for academic excellence across diverse and
            industry-driven fields of study.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-blue-950/10 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-linear-to-r from-[#c1972d] to-blue-950 transition-all duration-500"
            >
              {/* Gold Accent Top Line */}
              <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-transparent via-[#c1972d] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#c1972d]/10 border  border-[#c1972d]/30 group-hover:border-white mb-6">
                <span className="text-[#c1972d] group-hover:text-white font-bold text-xl">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-blue-950  group-hover:text-white font-semibold text-lg leading-snug">
                {course}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PopularCoursesUK;
