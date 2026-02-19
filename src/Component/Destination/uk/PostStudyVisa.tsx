import  { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {  Crown, ArrowUpRight } from 'lucide-react';

const PostStudyVisa = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Smooth out the motion for that "luxury" feel
    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const imgScale = useTransform(springScroll, [0, 1], [1.2, 1]);
    const textY = useTransform(springScroll, [0, 1], [50, -50]);

    return (
        <section ref={sectionRef} className="relative  bg-white flex flex-col lg:flex-row overflow-hidden">

            {/* LEFT SIDE: THE IMMERSIVE VISUAL */}
            <div className="lg:w-1/2 min-h-screen bg-white p-12 lg:p-14 flex flex-col justify-center">
                <motion.div style={{ y: textY }} className="max-w-xl">

                    <div className="flex items-center gap-4 mb-12">
                        <div className="bg-linear-to-r from-[#c1972d] to-blue-950 p-4 rounded-2xl">
                            <Crown className="text-white" size={32} />
                        </div>
                        <div>
                            <p className="text-blue-950 font-black text-2xl">Graduate Route</p>
                            <p className="text-gray-400 text-sm font-bold tracking-widest uppercase italic">No Job Offer Required</p>
                        </div>
                    </div>

                    <p className="text-gray-500 text-xl leading-relaxed mb-16 border-l-4 border-[#c1972d] pl-8">
                        The UK Government offers an exclusive pathway for international graduates to remain and build their professional legacy.
                    </p>

                    <div className="grid gap-12">
                        {/* 2 Year Option */}
                        <motion.div
                            whileHover={{ x: 20 }}
                            className="group flex items-center justify-between border-b border-gray-100 pb-10 cursor-pointer"
                        >
                            <div className="flex items-center gap-8">
                                <span className="text-6xl font-black text-blue-950/10 group-hover:text-blue-950 transition-colors">02</span>
                                <div>
                                    <h4 className="text-2xl font-black text-blue-950">Bachelor's / Master's</h4>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">24 Months Unrestricted Access</p>
                                </div>
                            </div>
                            <ArrowUpRight className="text-[#c1972d] opacity-0 group-hover:opacity-100 transition-all" />
                        </motion.div>

                        {/* 3 Year Option */}
                        <motion.div
                            whileHover={{ x: 20 }}
                            className="group flex items-center justify-between border-b border-gray-100 pb-10 cursor-pointer"
                        >
                            <div className="flex items-center gap-8">
                                <span className="text-6xl font-black text-blue-950/10 group-hover:text-blue-950 transition-colors">03</span>
                                <div>
                                    <h4 className="text-2xl font-black text-blue-950">Doctoral / PhD</h4>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mt-1">36 Months Specialized Permit</p>
                                </div>
                            </div>
                            <ArrowUpRight className="text-[#c1972d] opacity-0 group-hover:opacity-100 transition-all" />
                        </motion.div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-8">
                        <button className="bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#c1972d] transition-all transform hover:scale-105 shadow-2xl">
                            Initiate Application
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="alumni" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                <span className="text-blue-950 font-black">5000+</span> Students Processed
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT SIDE: THE DATA & INTERACTION */}

            <div className="relative lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden bg-blue-950">
                <motion.img
                    style={{ scale: imgScale }}
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="UK Professional Landscape"
                />
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-px bg-[#c1972d]" />
                        <span className="text-[#c1972d] font-bold tracking-[0.4em] text-xs uppercase">Elite Status</span>
                    </motion.div>
                    <h2 className="text-white text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter">
                        THE <br /> <span className="text-transparent bg-clip-text bg-linear-to-b from-[#c1972d] to-[#e5c167]">FUTURE</span> <br /> GATEWAY.
                    </h2>
                </div>
            </div>




            {/* FLOATING DECOR */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-gray-100 rounded-full pointer-events-none opacity-50 hidden lg:block"
            />
        </section>
    );
};

export default PostStudyVisa;