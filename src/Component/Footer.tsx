
import { motion } from 'framer-motion';
import { ChevronRight, Headset, Database, Clock } from 'lucide-react';
import logo from '../assets/Rectangle.png';
const Footer = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <footer className="bg-slate-950 text-white pt-16 pb-8 px-6 md:px-12 lg:px-24 font-sans">
            {/* Top CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 -mt-28">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900/80 backdrop-blur-md border z-99 border-slate-800 p-8 rounded-2xl flex items-center gap-6 cursor-pointer group"
                >
                    <div className="bg-blue-600 p-4 rounded-xl group-hover:bg-blue-500 transition-colors">
                        <Headset size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Have a Doubt We Can Help</h3>
                        <p className="text-blue-500 flex items-center gap-2 mt-1 font-semibold uppercase text-sm tracking-wider">
                            Book for Consultation <ChevronRight size={16} />
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900/80 z-99 backdrop-blur-md border border-slate-800 p-8 rounded-2xl flex items-center gap-6 cursor-pointer group"
                >
                    <div className="bg-blue-600 p-4 rounded-xl group-hover:bg-blue-500 transition-colors">
                        <Database size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Do You Deserve it Check Now</h3>
                        <p className="text-blue-500 flex items-center gap-2 mt-1 font-semibold uppercase text-sm tracking-wider">
                            Check Eligibility <ChevronRight size={16} />
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

                {/* Brand Column */}
                <motion.div {...fadeInUp}>
                    <h2 className="text-3xl font-extrabold mb-6"><img src={logo} alt="Logo" className="h-18 w-auto" /></h2>
                    <p className="text-slate-400 leading-relaxed mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
               
                </motion.div>

                {/* Services Column */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                    <h4 className="text-xl font-bold mb-2">Our Service</h4>
                    <div className="w-12 h-1 bg-blue-600 mb-6"></div>
                    <ul className="space-y-4">
                        {['Application Processing', 'Client Assistance', 'Language Coaching', 'Post Landing Services', 'Pre Landing Services'].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer group">
                                <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" /> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Links Column */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                    <h4 className="text-xl font-bold mb-2">Useful Links</h4>
                    <div className="w-12 h-1 bg-blue-600 mb-6"></div>
                    <ul className="space-y-4">
                        {['About Us', 'Our Portfolio', 'Pricing Plan', 'Our Services', 'Our Team'].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer group">
                                <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" /> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Trending Posts Column */}
                <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                    <h4 className="text-xl font-bold mb-2">Trending Post</h4>
                    <div className="w-12 h-1 bg-blue-600 mb-6"></div>
                    <div className="space-y-6">
                        {[1, 2].map((post) => (
                            <div key={post} className="flex gap-4 group cursor-pointer">
                                <div className="w-20 h-20 bg-slate-800 rounded-lg overflow-hidden shrink-0">
                                    <img
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post}`}
                                        alt="post"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <h5 className="font-bold leading-tight group-hover:text-blue-400 transition-colors">Provide Best Business Solution in Town</h5>
                                    <p className="text-slate-500 text-xs mt-2 flex items-center gap-1">
                                        <Clock size={12} className="text-blue-600" /> May 12, 2023
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                <p>Copyright 2023. Designed by <span className="text-blue-500 cursor-pointer hover:underline">Excelencia</span></p>
            </div>
        </footer>
    );
};

export default Footer;