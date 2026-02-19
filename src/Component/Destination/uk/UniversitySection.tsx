import { motion, type Variants } from "framer-motion";

const universities = [
  { name: "Oxford", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzyZ3kdOsne7F01IorCTWmtRbU8LJpc6img&s" },
  { name: "Cambridge", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcB5ggtfrWJsWcO6ihYu4ng6s1enSWi0hG9w&s" },
  { name: "Imperial", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZw2rQWeRPqHCjzka-TOFU00kUJjr1S3us5Q&s" },
  { name: "UCL", logo: "https://www.ucl.ac.uk/brand-and-experience/sites/brand_and_experience/files/styles/all_size_mobile_16_9/public/2025-11/about-brand-logo-hero.png.jpg?itok=5QCfiLR0" },
  { name: "Manchester", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png" },
  { name: "King's College", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zXgGTAxlSFkZhD8JR8GPN_znuUb15eD3Sg&s" },
  { name: "Edinburgh", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/University_of_Edinburgh_ceremonial_roundel.svg/250px-University_of_Edinburgh_ceremonial_roundel.svg.png" },
  { name: "LSE", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCWHe6tXCE9MZwC6usE_qQqi1XMx3yvK8hQ&s" },
];

const scrollVariants: Variants = {
  scrolling: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};

const UniversityLogoScroll = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto py-16 border-y border-blue-950/10 overflow-hidden">

      <div className=" px-6 mb-10">
        <h3 className="text-blue-950 font-semibold uppercase tracking-widest text-xl text-center">
          Partnering with{" "}
          <span className="text-[#c1972d]">World-Class</span> Institutions
        </h3>
      </div>

      <div className="relative overflow-hidden">

        <motion.div
          className="flex w-max"
          variants={scrollVariants}
          animate="scrolling"
        >
          {[...universities, ...universities].map((uni, index) => (
            <div
              key={index}
              className="mx-12 flex items-center justify-center"
            >
              <div className="group   rounded-xl  transition-all duration-500 bg-white shadow-sm hover:shadow-lg">
                
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="h-12 md:h-16 object-contain transition-all duration-500"
                />

              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default UniversityLogoScroll;
