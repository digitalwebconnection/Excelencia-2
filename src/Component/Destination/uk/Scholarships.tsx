import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Award, Landmark, Globe } from 'lucide-react';

const scholarshipData = [
    {
        title: "Chevening Scholarships",
        category: "UK",
        count: "FULLY FUNDED",
        description: "Prestigious awards for future leaders to pursue any eligible master's degree at any UK university.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", // London
        icon: <Award size={14} />,
    },
    {
        title: "Commonwealth Scholarships",
        category: "UK",
        count: "PARTIAL/FULL COVER",
        description: "Designed for students from Commonwealth countries who could not otherwise afford to study in the UK.",
        image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=800", // Tower Bridge
        icon: <Globe size={14} />,
    },
    {
        title: "University Merit Awards",
        category: "UK",
        count: "150+ INSTITUTIONS",
        description: "Academic excellence scholarships offered by specific universities to high-achieving international students.",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800", // University Hall
        icon: <Landmark size={14} />,
    },
    {
        title: "Global Study Grants",
        category: "UK",
        count: "TUITION ASSISTANCE",
        description: "Financial aid opportunities that help cover tuition fees partially or fully for talented international applicants.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // Students
        icon: <GraduationCap size={14} />,
    }
];

const ScholarshipCard = ({ item, index }: { item: typeof scholarshipData[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col overflow-hidden rounded-2xl group h-112.5 shadow-2xl"
        >
            {/* Image Section */}
            <div className="relative h-[45%] overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-3 left-5 text-[#c1972d] font-bold text-2xl opacity-80">
                    {item.category}
                </span>
            </div>

            {/* Content Section */}
            <div className="h-[55%] bg-[#0f203d] p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#c1972d] transition-colors">
                        {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#c1972d] text-[10px] font-bold tracking-widest mb-4">
                        {item.icon}
                        {item.count}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {item.description}
                    </p>
                </div>

                <button className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#c1972d] transition-colors w-fit group/btn">
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
            </div>
        </motion.div>
    );
};

const Scholarships = () => {
    return (
        <section className="relative py-14 overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="https://media.istockphoto.com/id/491522385/photo/group-of-students-studying-about-global-issues.jpg?s=612x612&w=0&k=20&c=SpEMvKvAg5v42IHRYU1chArcWhoYvYVmtI2DxooezsU="
                    alt="UK Background"
                    className="w-full  h-full object-cover"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-0 z-10">
                {/* Updated Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[#c1972d] font-bold text-xs tracking-[0.2em] uppercase">
                            International Funding
                        </span>
                        <h2 className="text-5xl font-black text-white mt-2 leading-tight">
                            Scholarships in <br /> the United Kingdom
                        </h2>
                        <p className="mt-4 text-gray-500 font-medium italic">
                            Scholarships may cover tuition fees partially or fully.
                        </p>
                    </div>

                    <button className="bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-[#c1972d]/40 transform hover:-translate-y-1">
                        Check Your Eligibility <ArrowRight size={20} />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {scholarshipData.map((item, index) => (
                        <ScholarshipCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Scholarships;