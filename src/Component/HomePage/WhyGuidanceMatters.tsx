"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Plus } from "lucide-react";

export default function WhyGuidanceMatters() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* IMAGE COMPOSITION SIDE */}
          <div className="relative">
            {/* Dotted Decorative Border */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-dashed border-emerald-200 rounded-4xl -z-10 hidden lg:block" />

            <div className="relative flex items-center">
              {/* Main Vertical Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-5/5 rounded-4xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1502920514313-52581002a659"
                  alt="Traveller"
                  className="h-137.5 w-full object-cover"
                />
              </motion.div>

              {/* Overlapping Circular Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -right-10 -top-10 w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden hidden md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Trust Card (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute -left-10 bottom-0 bg-white rounded-xl p-4 flex items-center gap-3 shadow-xl border border-gray-100"
              >
                <div className="bg-blue-950 rounded-full p-1">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Trusted Guidance</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Students & Migrants Worldwide</p>
                </div>
              </motion.div>

              {/* Overlapping Arrow Action (Bottom Right) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 right-[0%] bg-blue-950 h-20 w-20 rounded-full border-8 border-white flex items-center justify-center shadow-lg cursor-pointer"
              >
                <ArrowUpRight className="text-white" size={32} />
              </motion.div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-950 font-bold tracking-widest uppercase text-sm">
              Why Guidance Matters
            </span>

            <h2 className="mt-4 text-5xl font-extrabold text-gray-900 leading-[1.1]">
              Why Guidance <br /> Matters
            </h2>

            <div className="mt-8 space-y-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              <p>
                <span className="block text-gray-900 font-semibold">Information is everywhere today.</span>
                <span className="block text-gray-900 font-semibold">Wisdom is not.</span>
              </p>
              <p>
                University options, countries, visas, and timelines can feel
                endless — but without the right guidance, choices become rushed
                decisions.
              </p>
              <p className="text-gray-900 font-medium">
                True guidance doesn’t push. It aligns.
              </p>
            </div>

            {/* Bottom CTA & Stats Group */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-950 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-200 transition-colors hover:bg-blue-600"
              >
                Start Your Journey
              </motion.button>

              <div className="flex items-center gap-4">
                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-50 flex items-center justify-center text-blue-950">
                    <Plus size={16} />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-none">18k+</p>
                  <p className="text-xs text-gray-500">Individual Traveller</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Graphic (The faint palm tree/map vibe) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
           <path fill="#059669" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.5,-31.3,86.7,-15.7,85.2,-0.9C83.7,14,77.5,27.9,69.1,40.3C60.7,52.7,50.1,63.5,37.5,70.9C24.9,78.3,10.4,82.3,-3.8,88.9C-18,95.5,-31.9,104.7,-44.2,101.9C-56.5,99.1,-67.2,84.3,-74.4,70.1C-81.6,55.9,-85.3,42.3,-88.3,28.6C-91.3,14.9,-93.6,1,-91.7,-12.3C-89.8,-25.6,-83.7,-38.4,-74.8,-49.2C-65.9,-60,-54.2,-68.8,-41.7,-76.6C-29.2,-84.4,-15.8,-91.2,-0.6,-90.2C14.6,-89.2,29.2,-80.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}