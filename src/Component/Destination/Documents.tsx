import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import {
    FileText,
    ShieldCheck,
    CreditCard,
    FileCheck,
    CheckCircle2,
} from "lucide-react";

interface ListSectionProps {
    data: {
        title: string;
        subtitle?: string;
        list: string[];
    };
}

// ICON MAPPING
const getIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("passport")) return <FileCheck size={26} />;
    if (t.includes("financial") || t.includes("bank"))
        return <CreditCard size={26} />;
    if (t.includes("health") || t.includes("medical"))
        return <ShieldCheck size={26} />;
    return <FileText size={26} />;
};

// ANIMATION VARIANTS
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easeOut },
    },
};

const Documents = ({ data }: ListSectionProps) => {
    const [completed, setCompleted] = useState<number[]>([]);
    const [step, setStep] = useState(0);

    // 🔥 ODD-EVEN WAVE ANIMATION LOOP
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => prev + 1);
        }, 2000); // speed control

        return () => clearInterval(interval);
    }, []);

    const toggleComplete = (i: number) => {
        setCompleted((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        );
    };

    const total = data.list.length;
    const progress = Math.round((completed.length / total) * 100);

    return (
        <section className="relative py-12  overflow-hidden font-sans">
            {/* BACKGROUND GLOW */}

            <div className="max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <div className="max-w-2xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-950 mb-6"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-xl"
                    >
                        {data.subtitle ||
                            "Flawless documentation ensures a flawless visa application."}
                    </motion.p>
                </div>

                {/* PROGRESS BAR */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-10 backdrop-blur-xl rounded-3xl p-8"
                >
                    <div className="flex justify-between items-center text-sm font-semibold mb-4">
                        <span className="text-slate-600">
                            <span className="font-bold text-slate-950">
                                {completed.length}
                            </span>{" "}
                            / {total} Documents Verified
                        </span>

                        <motion.span
                            key={progress}
                            className="text-2xl font-black text-[#c1972d]"
                        >
                            {progress}%
                        </motion.span>
                    </div>

                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-linear-to-r from-[#c1972d] to-blue-950"
                        />
                    </div>
                </motion.div>
            </div>

            {/* GRID */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto"
            >
                {data.list.map((item, i) => {
                    const isOptional = item.toLowerCase().includes("if required");
                    const isDone = completed.includes(i);
                    const title = item.replace("(if required)", "").trim();

                    // 🔥 WAVE LOGIC
                    const isActive = (i + step) % 2 === 0;

                    return (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            animate={
                                isActive
                                    ? {
                                        y: -12,
                                        scale: 1.05,
                                        boxShadow:
                                            "0 20px 40px rgba(37,99,235,0.15)",
                                    }
                                    : {
                                        y: 0,
                                        scale: 1,
                                        boxShadow: "0 0px 0px rgba(0,0,0,0)",
                                    }
                            }
                            whileHover={{
                                y: -14,
                                scale: 1.08,
                                boxShadow:
                                    "0 25px 50px rgba(37,99,235,0.25)",
                            }}
                            transition={{ duration: 0.5 }}
                            className={`relative cursor-pointer group rounded-3xl p-8 border transition-all duration-500 ${isDone
                                ? "bg-white text-black"
                                : isActive
                                    ? "bg-linear-to-r from-[#c1972d] to-blue-950 text-white border-transparent shadow-xl"
                                    : "bg-white/80 border-slate-200 hover:border-blue-200"
                                }`}
                            onClick={() => toggleComplete(i)}
                        >
                            {/* 🔥 ACTIVE GLOW */}
                            {isActive && (
                                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/40 animate-pulse pointer-events-none" />
                            )}

                            {/* ICON */}
                            <div className="mb-6 relative">
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDone
                                        ? "bg-white text-black"
                                        : "bg-blue-50 text-blue-600"
                                        }`}
                                >
                                    {getIcon(item)}
                                </div>

                                <AnimatePresence>
                                    {isDone && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-white p-1 rounded-full"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="text-[#c1972d]"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* TITLE */}
                            <h3 className="font-bold text-lg mb-3">
                                {title}
                            </h3>

                            {/* STATUS */}
                            <div className="flex justify-between   mt-6 pt-4 border-t text-xs">
                                <span
                                    className={`px-3 py-1 rounded-full ${isOptional
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {isOptional ? "Optional" : "Mandatory"}
                                </span>

                                <span className="font-mono text-xl">
                                    {i + 1}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Documents;