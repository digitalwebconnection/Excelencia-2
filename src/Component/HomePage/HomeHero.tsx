import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import video from "../../assets/newvideo.mp4";

const slides = [
  { title: "We guide. We don’t push." },
  { title: "We advise. We don’t manipulate." },
  { title: "We pay attention to where your journey takes you." }
];

export default function HeroWithVideoAndSearchForm() {
  const [stage, setStage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleVideoEnd = () => {
    setTimeout(() => setStage(1), 100);
  };

  /* Fallback if video doesn't end (slow network etc.) */
  useEffect(() => {
    if (stage === 0) {
      const timer = setTimeout(() => {
        setStage(1);
      }, 37000); // 6 sec fallback

      return () => clearTimeout(timer);
    }
  }, [stage]);

  /* Auto slide effect */
  useEffect(() => {
    if (stage === 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <section className="relative w-full h-dvh overflow-hidden">
      <AnimatePresence mode="wait">

        {/* ================= VIDEO INTRO ================= */}
        {stage === 0 && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <video
                src={video}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        )}

        {/* ================= HERO CONTENT ================= */}
        {stage === 1 && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="relative h-full flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/07/53/16/87/360_F_753168793_UeLlYWN1PfAs57EgM9VTq1CepinQKjjI.jpg')",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <p className="text-white font-semibold text-lg">
                Guidance That Puts Your Future First
              </p>

              <h1 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-serif font-extrabold text-white leading-tight">
                Honest, Transparent <br />
                and Personalized Counseling For <br />
                Students who Dream of Studying Abroad.
              </h1>

              {/* SLIDER */}
              <div className="mt-12 max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-lg"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {slides[currentSlide].title}
                    </h3>
                  </motion.div>
                </AnimatePresence>

                {/* DOTS */}
                <div className="flex justify-center mt-6 gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-[#c1972d] scale-125"
                          : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}