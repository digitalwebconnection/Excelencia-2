import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Linkedin, ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const leaders = [
    { 
        name: "Imran Huda", 
        role: "CEO, Excelencia International", 
        description: "Leads Excelencia with a focus on clarity, trust, and helping students take confident steps toward international education.", 
        image: "https://media.licdn.com/dms/image/v2/D4D03AQG60aQfLxVFnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670563469313?e=2147483647&v=beta&t=mBLI8Fg6CJLNp_3qWg3YeTosuUlZK9uwm-CVffoXJKA" 
    }, 
    { 
        name: "Taranjit Singh", 
        role: "Managing Partner, Excelencia International", 
        description: "Works closely on student guidance and operations to ensure every journey is smooth, structured, and well-supported.", 
        image: "https://media.licdn.com/dms/image/v2/C4D03AQGrgeJDI-Nr2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650800143542?e=2147483647&v=beta&t=JADpAoVxqksHZJjDfTDHpbz1Bbow1GPbyRTRiAlSbak" 
    }
]

function LeaderCard({ person, index }: { person: typeof leaders[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Mouse tracking for 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative bg-white rounded-[2.5rem] p-4 hover:bg-linear-to-r from-[#c1972d] to-blue-950 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-shadow duration-500"
        >
            {/* Image Container */}
            <div className="relative h-112.5 w-full rounded-4xl overflow-hidden" style={{ transform: "translateZ(50px)" }}>
                <motion.img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a2b3b]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Glassmorphism LinkedIn Button */}
                <motion.a
                    href="#"
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#1a2b3b] transition-all duration-300 shadow-xl"
                >
                    <Linkedin size={20} />
                </motion.a>

                {/* Bottom Left Badge */}
                <div 
                    className="absolute bottom-8 left-8 text-white"
                    style={{ transform: "translateZ(40px)" }}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <span className="h-px w-6 bg-white/50" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">Founder</span>
                    </div>
                    <h4 className="text-xl font-bold">{person.name.split(' ')[0]}</h4>
                </div>
            </div>

            {/* Content Area */}
            <div className="px-6 py-2 text-[#1a2b3b] group-hover:text-white" style={{ transform: "translateZ(20px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-black  tracking-tight mb-1 group-hover:text-blue-950 transition-colors">
                            {person.name}
                        </h3>
                        <p className="text-sm font-bold  uppercase tracking-widest">
                            {person.role}
                        </p>
                    </div>
                    <div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-blue-950 group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={18} />
                    </div>
                </div>

                <p className="group-hover:text-white leading-relaxed text-sm font-medium">
                    {person.description}
                </p>
            </div>
        </motion.article>
    );
}

export default function PeopleBehindExcelencia() {
    return (
        <section className="relative py-12 bg-[#fcfcfc] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-[#c1972d]/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Heading Section */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900">
                            Our Architects
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-[#1a2b3b] tracking-tighter mb-8"
                    >
                        The People <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c1972d] to-blue-950 italic">
                            Behind Excelencia
                        </span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-7xl mx-auto text-gray-500 text-lg font-medium leading-relaxed"
                    >
                        Bridging the gap between local ambition and global opportunity 
                        through structured leadership and empathetic guidance.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {leaders.map((person, index) => (
                        <LeaderCard key={index} person={person} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}