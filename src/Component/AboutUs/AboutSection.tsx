import { motion } from "framer-motion";

const sections = [
  {
    title: "Life-Changing Global Education Journey",
    content:
      "At Excelencia International, we understand that studying abroad is not just a journey of  enrollment; it’s a life-changing experience that influences one's profession, advances  confidence, and introduces one to global doors of opportunity. Our goal is to offer expert advice  and guidance to students who wish to pursue further education in other countries, and as one of  the top student visa consultants in Mumbai, Maharashtra, India, we are committed to  helping you decide on the best course and university options. We realize selecting a country,  course, and university can be difficult, but with our transparent and ethical guidance, we will  help you to navigate your way through the process.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFuwjTasqsp7rCGGKt_J98NxviiZsz0nep6A&s",
  },
  {
    title: "Personalized & Ethical Counseling",
    content:
      "We are inspired by the notion that every student is entitled to reliable advice and ethical guidance. We're not an ordinary agency that does admissions and never looks back. Our  expert counselors assess students’ profiles, their career aspirations, as well as their personal &  financial constraints, to help them make an informed decision and send them abroad, selecting the right course/university while bearing in mind the future compliance. Students may be planning to study in the UK, USA, Canada, Australia, Europe, and other prominent sites of education all over the world; we provide customized guidance matching their aspirations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdutl9GMSm6VNxjV0BM8zmLzesQBliVzQ6sw&s",
  },
  {
    title: "Complete Study Abroad Support",
    content:
      "As a study abroad consultancy in Bandra, Mumbai, we offer full assistance towards career counseling, country and university selection, application guidance, Statement of Purpose (SOP) assistance, documentation support, education loan assistance, scholarship advice, and visa processing for students. Our visa professionals are well-versed with the prevailing immigration regulations and global education trends to ensure that our students have a higher probability of success. From the very first counseling session to the day when students fly overseas, we continue to partner with them in their journey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBd0-dDdM7r4_OuZ6j9yiuNuaWsEWVXgOQg&s",
  },
  {
    title: "Transparency & Trust at Every Step",
    content:
      "The real difference at Excelencia International is our dedication to being ethical and transparent. We help students make the right choices—even if it means discouraging options that might not be a good fit. We provide counseling with no pressure, manipulation, or unrealistic claims. We place emphasis on transparency so students and their parents are comfortable and informed at every stage.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7drSyH3M1HgqQ8fQr8zH1_mxUWTKjO3C8Q&s",
  },
  {
    title: "Trusted Partner for Global Success",
    content:
      "For years, we have been assisting students in getting admissions at the most sought-after institutes and coming up with positive student visas. We’re committed to be the most trusted student visa consultants in India, offering individual services, ethical guidance, and long-term mentoring. At Excelencia International, the proof of success lies not only in admission numbers and visas but also in those who flourish globally and create sustainable international careers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXT_VAyJKReyGEdvbAfsyKq4a13CWqYdmBA&s",
  },
   {
    title: "Turning Study Abroad Dreams into Reality",
    content:
      "Excelencia International is an overseas education and immigration consultancy committed to helping students and young professionals turn their global ambitions into reality. Since our founding, we have evolved from a focused study-abroad advisory into a trusted partner for international academic and immigration journeys.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Mvjscnm2MFa3nvDgViTsQXhQGUYi1vOB-Q&s",
  },
   {
    title: "End-to-End Student Visa Guidance",
    content:
      "We deliver tailored support from initial counseling to successful visa approvals. At Excelencia International, we believe that every student deserves strategic guidance, transparent processes, and dedicated assistance, and we work relentlessly to provide just that at every step of your international education journey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkWLZGCWOFmETf28SMZaOVwnuVIZYy-T1G6g&s",
  },
];

const AboutSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            // Logic to determine entry direction based on index
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image Container with Hover Effect */}
            <motion.div
              className={`${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative group">
                {/* Decorative background element */}
                <div className="absolute -inset-2 bg-blue-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>                
                <img
                  src={`${section.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={section.title}
                  className="relative rounded-2xl shadow-2xl w-full h-80 md:h-96 object-cover transform transition duration-500"
                />
              </div>
            </motion.div>

            {/* Text Content with Staggered Fade-in */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
              >
                {section.title}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#c1972d] pl-4">
                  {section.content}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;