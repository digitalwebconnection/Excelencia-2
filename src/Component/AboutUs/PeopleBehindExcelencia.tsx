import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { X, Instagram, Linkedin, Facebook } from "lucide-react"
import { useRef, useState } from "react"

const leaders = [
    {
        name: "Imran Huda",
        role: "CEO, Excelencia International",
        description:
            "Leads Excelencia with a focus on clarity, trust, and helping students take confident steps toward international education.",
        image:
            "https://media.licdn.com/dms/image/v2/D4D03AQG60aQfLxVFnw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1670563469313?e=2147483647&v=beta&t=mBLI8Fg6CJLNp_3qWg3YeTosuUlZK9uwm-CVffoXJKA",
        instagram: "#",
        linkedin: "#",
        facebook: "#",
        details: `10 years of experience in the recruitment of international students has earned him a stellar reputation in steering students to the appropriate international education avenues. He is a former employee of a reputable UK university and has had firsthand experience in regard to international admissions standards, academic expectations, and international student engagement strategies.

    In addition to recruiting students, he also has over 20 years of experience in building relationships, leadership,  communication and strategic management. His organizational skills and structured approach allow him to deal with several     students and international agents simultaneously.
        
    Imran is very goal and student-oriented in nature. His communication, presentation and management skills streamline the     complicated process of admissions and visas, ensuring that students and their families clearly understand every step.
        
    Having global exposure and deep knowledge about education systems across countries, he provides informed, ethical and   personalized guidance.
        
    His advice is based on experience, integrity and sincere interest in the success of students.`,
        quotes: [
            "When guidance is built on experience and honesty, success becomes a natural outcome.",
            "Success in global education begins with the courage to guide responsibly."
        ]
    },

    {
        name: "Taranjit Singh",
        role: "Managing Partner, Excelencia International",
        description:
            "Works closely on student guidance and operations to ensure every journey is smooth, structured, and well-supported.",
        image:
            "https://media.licdn.com/dms/image/v2/C4D03AQGrgeJDI-Nr2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1650800143542?e=2147483647&v=beta&t=JADpAoVxqksHZJjDfTDHpbz1Bbow1GPbyRTRiAlSbak",
        instagram: "#",
        linkedin: "#",
        facebook: "#",
        details: `With more than 12 years of experience in the international student recruitment industry at a respected UK university, he has deep insight into international admissions, market forces and global education systems.
His career has enabled him to work across different parts of the world, gaining strong global exposure and understanding what makes student placements successful.
He brings over 21 years of leadership experience in communication, relationship management, sales support and strategic development. His leadership approach is built on compliance, integrity and structured execution.
He is also an accomplished public speaker and effective communicator who motivates teams and strengthens international partnerships.
For him, sustainable growth comes from strong relationships, visionary thinking and ethical practices.`,
        quotes: [
            "Vision builds brands, leadership sustains them, and integrity defines their legacy."
        ]
    }
]

function LeaderCard({ person, index, onClick }: { person: typeof leaders[0]; index: number; onClick: (person: typeof leaders[0]) => void }) {

    const cardRef = useRef<HTMLElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {

        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)

    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <>
            <motion.article
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onClick(person)}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="cursor-pointer group relative bg-white rounded-[2.5rem] p-4 hover:bg-linear-to-r from-[#c1972d] to-blue-950 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-shadow duration-500"
            >

                <div className="relative h-112.5 w-full rounded-4xl overflow-hidden">

                    <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#1a2b3b]/80 via-transparent to-transparent" />

                </div>

                <div className="px-6 py-4 text-[#1a2b3b] group-hover:text-white">

                    <h3 className="text-2xl font-black mb-1">
                        {person.name}
                    </h3>

                    <p className="text-sm font-bold uppercase tracking-widest mb-3">
                        {person.role}
                    </p>

                    <p className="text-sm">
                        {person.description}
                    </p>

                </div>

            </motion.article>
        </>
    )

}

export default function PeopleBehindExcelencia() {

    const [selected, setSelected] = useState<typeof leaders[0] | null>(null)

    return (
        <>
            {/* <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50/50 rounded-full blur-[120px] -z-10" /> <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-[#c1972d]/5 rounded-full blur-[100px] -z-10" /> */}
            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Heading Section */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6" >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900">
                            Our Architects
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-[#1a2b3b] tracking-tighter mb-8" >
                        The People <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c1972d] to-blue-950 italic"> Behind Excelencia
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-7xl mx-auto text-gray-500 text-lg font-medium leading-relaxed" >
                        Bridging the gap between local ambition and global opportunity through structured leadership and empathetic guidance.
                    </motion.p>
                </div>
            </div>
            <section className="relative pb-10 bg-[#fcfcfc]">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {leaders.map((person, index) => (

                            <LeaderCard
                                key={index}
                                person={person}
                                index={index}
                                onClick={setSelected}
                            />

                        ))}

                    </div>

                </div>

                {/* Popup */}

                <AnimatePresence>

                    {selected && (

                        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                                onClick={() => setSelected(null)}
                            />

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            >

                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute right-6 top-6 z-20"
                                >
                                    <X />
                                </button>

                                <div className="grid md:grid-cols-2">

                                    <img
                                        src={selected.image}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="p-4">

                                        <h2 className="text-3xl font-serif font-black mb-2">
                                            {selected.name}
                                        </h2>

                                        <p className="font-bold text-[#c1972d] mb-2">
                                            {selected.role}
                                        </p>
                                        <div className="flex gap-6 mb-2">

                                            <a href={selected.instagram} target="_blank"
                                                className="p-3 rounded-full bg-pink-100 hover:bg-pink-500 hover:text-white transition">
                                                <Instagram size={18} />
                                            </a>

                                            <a href={selected.linkedin} target="_blank"
                                                className="p-3 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition">
                                                <Linkedin size={18} />
                                            </a>

                                            <a href={selected.facebook} target="_blank"
                                                className="p-3 rounded-full bg-blue-100 hover:bg-blue-700 hover:text-white transition">
                                                <Facebook size={18} />
                                            </a>

                                        </div>

                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line ">
                                            {selected.details}
                                        </p>

                                        <div className="space-y-2">

                                            {selected.quotes.map((q, i) => (
                                                <div key={i} className="italic text-sm text-gray-700 border-l-4 border-[#c1972d] pl-4">
                                                    "{q}"
                                                </div>
                                            ))}

                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    )}

                </AnimatePresence>

            </section>
        </>
    )

}