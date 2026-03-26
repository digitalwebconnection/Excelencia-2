import { useEffect, useRef, useState } from "react";

const DocumentationCards = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const features = [
        {
            title: "Academic Documents",
            desc: "Transcripts and certificates prepared as per international standards.",
            icon: "🎓",
        },
        {
            title: "Statement of Purpose",
            desc: "Expert review and guidance to craft a powerful SOP.",
            icon: "📝",
        },
         {
            title: "Letters of Recommendation",
           desc: "Structured LORs that strengthen your profile credibility.",
            icon: "📄",
        },
        {
            title: "Resume Building",
            desc: "Globally accepted resume formats for universities.",
            icon: "💼",
        },
        {
            title: "Financial Proof",
            desc: "Accurate documentation for visa fund requirements.",
            icon: "💰",
        },
        {
            title: "Application Documents",
            desc: "Complete and verified application file submission.",
            icon: "📂",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="bg-white py-10 md:pb-14 px-6 md:px-12 lg:px-10"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                
                <div
                    className={`text-center mb-4 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-950">
                        Documentation That{" "}
                        <span className="text-[#c1972d]">Gets You Approved</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-7xl mx-auto text-base md:text-lg">
                        The personal statement is one of the most determining documents for getting into a university; thus, it has to be one of those that also require students to have a visa. Our Study Abroad Document Verification Services in Mumbai help every consultation to be of a global standard and add value to your application.    Incomplete or ill-prepared documents delay many students or lead to visa denials. Here at Excelencia International, we remove that risk with our expert document guidance.
                        Our professionals make certain that your statement of purpose conveys all of your objectives, plans, and actual reasons to study. An excellent SOP is pivotal for both admission and visa success.
                  
                    </p>
                </div>


                {/* Cards Showcase */}

                <div
                    className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="text-3xl mb-4">{item.icon}</div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#c1972d] transition">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Accent Line */}
                            <div className="mt-4 h-0.5 w-0 bg-[#c1972d] group-hover:w-full transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Highlight Section */}

                <div
                    className={`mt-10 max-w-7xl mx-auto text-white  bg-linear-to-r from-[#c1972d]  to-blue-950 border border-[#c1972d]/30 rounded-2xl p-8 text-center transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <h3 className="text-xl md:text-2xl font-semibold  mb-4">
                        A Strong SOP Can Change Everything
                    </h3>
                    <p className=" leading-relaxed">
                        We will guide you through document sorting, reviewing, and consolidating for submission. This discipline not only creates credibility but also prevents costly errors.
                    </p>
                    {/* Bottom Line */}
                    <div
                        className={`mt-2 text-center transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <p className="">
                            We want this documentation to be easy to use, well-organized, and stress-free, enabling the highest chance of your success.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DocumentationCards;