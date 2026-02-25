import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, ChevronRight } from "lucide-react";
import video from "../../assets/newvideo.mp4";

const slides = [
  { title: "We guide. We don’t push." },
  { title: "We advise. We don’t manipulate." },
];

export default function HeroWithVideoAndSearchForm() {
  // Stages: 0 = Video, 1 = Hero/Search, 2 = Honest Guidance Content
  const [stage, setStage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleVideoEnd = () => {
    setTimeout(() => setStage(1), 100);
  };

  /* Auto slide effect for Hero */
  useEffect(() => {
    if (stage === 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {/* ================= STAGE 0: VIDEO INTRO ================= */}
        {stage === 0 && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <video
              src={video}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0" />
          </motion.div>
        )}

        {/* ================= STAGE 1: HERO CONTENT ================= */}
        {stage === 1 && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="relative h-full flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('https://t4.ftcdn.net/jpg/07/53/16/87/360_F_753168793_UeLlYWN1PfAs57EgM9VTq1CepinQKjjI.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 text-center px-6">
              <p className="text-white font-semibold text-lg">Guidance That Puts Your Future First</p>
              <h1 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-serif font-extrabold text-white leading-tight">
                Honest, Transparent <br /> and Personalized Counseling For <br /> Students who Dream of Studying Abroad.
              </h1>

              <div className="mt-12 max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg"
                  >
                    <h3 className="text-2xl font-bold text-white">{slides[currentSlide].title}</h3>
                  </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="flex justify-center mt-6 gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${currentSlide === index ? "bg-[#c1972d] scale-125" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Transition Trigger to Page 3 */}
              <button
                onClick={() => setStage(2)}
                className="mt-8 text-[#c1972d] flex items-center gap-2 mx-auto font-bold hover:underline"
              >
                Learn More About Our Philosophy <ChevronRight size={20} />
              </button>
            </div>

            {/* SEARCH BAR */}
            <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white rounded-full shadow-2xl px-6 py-5 z-20 flex flex-wrap lg:flex-nowrap items-center gap-6">
              <div className="flex items-center gap-3 flex-1 min-w-45">
                <MapPin className="text-blue-950 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-900">Degree</p>
                  <select className="outline-none text-sm font-semibold text-gray-800 bg-transparent">
                    <option>MSC</option><option>MBA</option><option>BSC</option><option>BBA</option>
                  </select>
                </div>
              </div>
              <div className="hidden lg:block h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-3 flex-1 min-w-40">
                <Briefcase className="text-blue-950 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-900">Country</p>
                  <select className="outline-none text-sm font-semibold text-gray-800 bg-transparent">
                    <option>UK</option><option>USA</option><option>UAE</option>
                  </select>
                </div>
              </div>
              <div className="hidden lg:block h-8 w-px bg-gray-200" />
              <button className="ml-auto bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-8 py-4 rounded-full font-semibold">
                Submit
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* ================= STAGE 2: DETAILED CONTENT PAGE ================= */}
        {stage === 2 && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative  h-full flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('https://career-advice.jobs.ac.uk/wp-content/uploads/london-e1634207674493-1170x630.jpg.optimal.jpg')", // High quality study-themed background
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 max-w-6xl px-8 text-center md:text-left">

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[#c1972d] text-3xl md:text-5xl font-serif text-center font-bold mb-8 leading-tight"
              >
                Your Dream Deserves Honest Guidance
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-100 text-lg md:text-xl leading-relaxed space-y-6"
              >
                <p>
                  Deciding to study abroad may be one of the most beneficial and life-changing decisions a student ever makes.
                  It affects more than just the course of your education - it has its effects on your
                  <strong> career advancement, international exposure, and long-term future opportunities.</strong>
                </p>
                <p>
                  Right counselling not only helps you select the right course to match your career ambitions but also guides
                  you in choosing universities that best suit your profile. Proper guidance will lead to a very good strategy
                  that increases the chances of admission as well as visa success.
                </p>
                <p className="font-light italic text-gray-300">
                  Studying abroad is not just about getting a degree; it is about securing a global future,
                  and the right direction is all important.
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => setStage(1)}
                className="mt-10 border border-[#c1972d] text-[#c1972d] px-6 py-2 rounded-full hover:bg-linear-to-r from-[#c1972d] to-blue-950  hover:text-white transition"
              >
                Back to Search
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}