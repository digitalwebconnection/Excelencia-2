"use client";

import { motion } from "framer-motion";

export default function StudentVisionSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-blue-950">
      
      {/* Background Image */}
      <motion.img
        src="https://travelpro-wp.laralink.com/wp-content/uploads/2024/03/banner_bg.jpeg"
        alt="Students journey"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/40 to-black/50" />

      {/* Content */}
      <div className="relative flex items-center justify-end z-10 h-full  ">

        <div className="max-w-2xl   px-6 md:px-6">
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm w-55 tracking-widest bg-blue-950 px-5 py-1 rounded-2xl text-white uppercase mb-4"
          >
            How We See Students
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-4xl md:text-6xl font-serif font-semibold text-white leading-tight"
          >
            We don’t see applications. <br />
            <span className="text-blue-950">We see people.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-blue-100 leading-relaxed"
          >
            We see ambition mixed with uncertainty, dreams balanced with responsibility,
            and families hoping to make the right choice for the future.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-4 text-base md:text-lg text-white"
          >
            Every student’s journey is personal — and we treat it that way.
          </motion.p>

          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 h-0.5 bg-blue-950"
          />
        </div>
      </div>
    </section>
  );
}
