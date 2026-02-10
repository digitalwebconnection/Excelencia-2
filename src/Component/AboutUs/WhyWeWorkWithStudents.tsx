import { motion } from "framer-motion"
import { Globe, ArrowRight } from "lucide-react"

export default function WhyWeWorkWithStudents() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: IMAGE STACK DESIGN (Matching your reference) */}
        <div className="relative h-125 md:h-150">
          
          {/* Top-Left Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-2/3 aspect-4/5 z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
              alt="Student" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom-Right Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 right-0 h-110 w-2/3 aspect-4/5 z-20 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="https://ex-coders.com/html/visaway/assets/img/home-1/about/about-02.jpg" 
              alt="Counseling Session" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Floating Passports/Tickets icon */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 z-30 w-24 md:w-32 opacity-90 drop-shadow-lg"
          >
             <div className="bg-[#c1972d] p-2 rounded-lg -rotate-12 absolute top-0 right-0 shadow-md">
                <Globe className="text-white w-8 h-8 opacity-50" />
             </div>
             <div className="bg-blue-950 p-2 rounded-lg rotate-12 absolute top-4 right-6 shadow-md border border-white/20">
                <Globe className="text-white w-8 h-8 opacity-50" />
             </div>
          </motion.div>

          {/* Floating Plane Illustration at bottom left */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.4 }}
            className="absolute -bottom-10 -left-10 z-0 pointer-events-none"
          >
            <svg width="300" height="200" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 L180 20" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" strokeDasharray="4 4" />
                <path d="M10 80 Q 50 10 190 40" stroke="currentColor" strokeWidth="1" className="text-gray-200" fill="none" />
            </svg>
          </motion.div>

          
        </div>

        {/* RIGHT: CONTENT (Unchanged design, updated icons) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 text-blue-950 text-sm font-medium tracking-wide">
            About Our Consultancy
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 uppercase">
            Turning Study Abroad
            <span className="text-[#c1972d]"> Dreams</span> <br /> <span className="text-blue-950">Into Reality</span>
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            We Guide Students With Expert Visa Consulting, Ensuring A Smooth Process 
            From Application To Approval, Turning Study Abroad Aspirations Into Life-Changing Opportunities.
          </p>

          {/* Feature points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Global Reach-",
                desc: "Expanding Opportunities Worldwide",
                icon: Globe
              },
              {
                title: "Global Reach-",
                desc: "Expanding Opportunities Worldwide",
                icon: Globe
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950 leading-tight">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-gray-600 font-medium">
                <span className="text-blue-950">≫</span> Fastest Visa Form Processing With Skilled Immigration Agents
            </li>
            <li className="flex items-center gap-3 text-gray-600 font-medium">
                <span className="text-blue-950">≫</span> Partnership With International Educational Institutions
            </li>
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center text-white gap-4 bg-linear-to-r from-[#c1972d] to-blue-950 border border-gray-200 pl-8 pr-2 py-2 rounded-full font-bold shadow-sm hover:shadow-md transition-all"
          >
            GET STARTED
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-950  transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}