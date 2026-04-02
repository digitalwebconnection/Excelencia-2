interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    description?: string;
    image?: string;
    ctaText?: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#c1972d] font-semibold mb-3 uppercase text-sm tracking-wide">
            {data.subtitle}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            {data.title}
          </h1>

          {data.description && (
            <p className="text-gray-600 text-lg mb-6">
              {data.description}
            </p>
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-linear-to-r from-[#c1972d]  to-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow">
              {data.ctaText || "Get Started"}
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              View Courses
            </button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-gray-400 mt-6">
            Trusted by 10,000+ students worldwide
          </p>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-90 object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-500">Visa Success Rate</p>
            <h3 className="text-xl font-bold text-[#c1972d]">95%</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;