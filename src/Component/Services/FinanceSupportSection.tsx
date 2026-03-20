
import { Landmark, ShieldCheck, Globe, BadgeCheck, Lightbulb } from 'lucide-react';

const FinanceEditorialSection = () => {
    return (
        <div className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header - Mumbai Mention */}
                <div className="text-center mb-6">
                    <h2 className="text-5xl font-black text-blue-950 mb-4 tracking-tight">
                        Finance <span className='text-[#c1972d]'> Support</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-950 mx-auto rounded-full"></div>
                </div>

                <div className="grid gap-8">

                    {/* Paragraph 1 - Full Text */}
                    <div className="bg-white p-8 md:p-10 rounded-4xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 w-16 h-16 bg-blue-50 text-[#c1972d] rounded-2xl flex items-center justify-center">
                            <Landmark size={32} />
                        </div>
                        <p className="text-xl text-slate-700 leading-relaxed font-medium">
                            Cost is one of the primary worries students and parents have when it comes to international education. Our Education Finance Support at Excelencia International in Mumbai, Maharashtra, clarifies your tuition fees, living expenses, and funding options so you start your study abroad experience on the right track!
                        </p>
                    </div>

                    {/* Paragraph 2 - Full Text */}
                    <div className="bg-blue-950 p-8 md:p-10 rounded-4xl shadow-xl text-white flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 w-16 h-16 bg-[#c1972d] text-white rounded-2xl flex items-center justify-center">
                            <ShieldCheck size={32} />
                        </div>
                        <p className="text-lg leading-relaxed opacity-95">
                            Studying the curriculum overseas will demand some financial planning, covering tuition deposits, accommodation fees, visa charges, insurance and travel costs. Our experts guide families through how the entire financial framework works, and assist them with a realistic budget plan.
                        </p>
                    </div>

                    {/* Paragraph 3 - Full Text */}
                    <div className="bg-white p-8 md:p-10 rounded-4xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 w-16 h-16 bg-blue-50 text-[#c1972d] rounded-2xl flex items-center justify-center">
                            <BadgeCheck size={32} />
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Assistance in education loan advice, scholarship info, sponsorship documents, and financial affidavit. To avoid delays or refusals, our team helps ensure that financial documents comply with both embassy and university standards.
                        </p>
                    </div>

                    {/* Paragraph 4 - Full Text */}
                    <div className="bg-blue-950 p-8 md:p-10 rounded-4xl shadow-2xl text-white flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 w-16 h-16 bg-[#c1972d]     text-white rounded-2xl flex items-center justify-center">
                            <Globe size={32} />
                        </div>
                        <p className="text-lg leading-relaxed text-slate-300">
                            Being one of the top student visa consultants in Bandra, we have all the latest updates regarding individual countries like the UK, USA, Canada, and Australia when it comes to visa and its financial requirements. We help students understand how to maintain accurate bank statements, what GIC (if applicable) is required, and how to prepare strong financial proof.
                        </p>
                    </div>

                    {/* Paragraph 5 - Full Text */}
                    <div className="bg-white p-8 md:p-10 rounded-4xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                        <div className="shrink-0 w-16 h-16 bg-blue-50 text-[#c1972d] rounded-2xl flex items-center justify-center">
                            <Lightbulb size={32} />
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed italic">
                            We believe in a simple and tangible approach. Funding options are clearly explained so families can decide about funding without stress or confusion. Well, students get ready for their visa approval because of the proper financial preparation, and it also provides confidence and security to the student before traveling.
                        </p>
                    </div>

                    {/* Paragraph 6 - Full Text Conclusion */}
                    <div className="mt-8  text-center">

                        <p className="text-2xl md:text-3xl font-bold text-blue-950 leading-tight max-w-7xl mx-auto">
                            With proper strategic planning, right financial decisions equipped with expert counsel, International study becomes a realistic investment towards viable global futures.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FinanceEditorialSection;