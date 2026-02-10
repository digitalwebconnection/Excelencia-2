import { motion } from "framer-motion"
import { Check, Phone } from "lucide-react"

export default function GlobalEducationPersonalAttention() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full max-w-lg mx-auto">
            
            {/* Main Image with specific curved border design */}
            <div className="relative z-10 rounded-t-full rounded-b-[50px] overflow-hidden border-12 border-white shadow-2xl">
              <img
                src="https://bracketweb.com/treck-html/main-html/assets/images/resources/about-two-img-1.jpg"
                alt="Student Guidance"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Red Decorative Outer Border (from image_f255f9) */}
            <div className="absolute -inset-4 border-2 border-blue-950 rounded-t-full rounded-b-[60px] z-0 opacity-80" />

            {/* Background Dotted Map Effect Placeholder */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-20 -z-10 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] bg-size-[16px_16px]" />

            {/* Experience Badge (Refined from image_f255f9) */}
            <motion.div 
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute bottom-10 -left-8 z-20 bg-white shadow-2xl rounded-2xl p-6 flex items-center gap-4 border-l-4 border-blue-950"
            >
              <div className="relative">
                <h4 className="text-5xl font-extrabold text-blue-950 leading-none">
                  28
                </h4>
                {/* Decorative lines next to number */}
                <div className="absolute -top-2 -right-2 space-y-1">
                    <div className="w-4 h-1 bg-blue-950 rotate-45" />
                    <div className="w-4 h-1 bg-blue-950 rotate-45" />
                </div>
              </div>
              <p className="text-xs font-bold text-gray-800 uppercase tracking-tighter leading-tight">
                Years of <br /> Experience
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Subtitle with Decorative Line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-0.5 w-10 bg-blue-950" />
            <p className="text-xs tracking-[0.3em] uppercase text-gray-900 font-bold">
              About Treck Agency
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1] text-gray-900">
            Providing the Best Visa <br />
            <span className="text-blue-950">Services to Clients</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            While universities and opportunities are global, the way we guide
            students is always personal. There is no one-size-fits-all advice —
            every decision is shaped around your goals.
          </p>

          {/* Feature List (Icon circles from image_f255f9) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-950 transition-colors duration-300 shadow-sm">
                <Check className="w-5 h-5 text-blue-950 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-800 text-sm">
                Ready to Help <br /> You in Immigration
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-950 transition-colors duration-300 shadow-sm">
                <Check className="w-5 h-5 text-blue-950 group-hover:text-white" />
              </div>
              <p className="font-bold text-gray-800 text-sm">
                Works Fast & We're <br /> Cost Effective
              </p>
            </div>
          </div>

          {/* Progress Bar (Matching image_f255f9) */}
          <div className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex justify-between items-end mb-3">
              <span className="text-sm font-black text-gray-900 uppercase tracking-wider">Satisfaction Rate</span>
              <span className="text-sm font-black text-blue-950">90%</span>
            </div>
            <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full bg-linear-to-r from-[#c1972d] to-blue-950 relative"
              >
                {/* Glowing tip of progress bar */}
                <div className="absolute right-0 top-0 h-full w-2 bg-white/30" />
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-lg text-white font-black text-sm uppercase tracking-widest bg-linear-to-r from-[#c1972d] to-blue-950 hover:bg-blue-950 transition-all duration-300 shadow-lg shadow-red-600/20"
            >
              Discover More
            </motion.button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center shadow-sm bg-white  transition-colors">
                <Phone className="w-6 h-6 text-blue-950" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Have Question?</p>
                <p className="text-xl font-black text-gray-900">+91 8800 9850</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}