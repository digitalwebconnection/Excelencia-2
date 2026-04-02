import { useState } from "react";
import { X } from "lucide-react";

interface Point {
  title: string;
  description: string;
  image: string;
  full: string;
}

interface SectionProps {
  data: {
    title: string;
    intro?: string;
    points: Point[];
  };
}

const icons = ["🎓", "⏱️", "💼", "🌍", "🤝", "🏙️"];

const WhyStudy = ({ data }: SectionProps) => {
  const [selected, setSelected] = useState<Point | null>(null);

  return (
    <section className="py-10 bg-linear-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center  mb-16">
          <h2 className="text-3xl max-w-3xl mx-auto md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>

          {data.intro && (
            <p className="text-gray-600 text-lg">
              {data.intro}
            </p>
          )}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.points.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="cursor-pointer group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 hover:-translate-y-1"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#c1972d] text-2xl mb-4 group-hover:scale-110 transition">
                {icons[index]}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <p className="text-[#c1972d] text-sm mt-3 font-medium">
               Open Details →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

          <div className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative animate-fadeIn">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <X />
            </button>

            {/* IMAGE */}
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-96 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                {selected.title}
              </h3>

              <p className="text-gray-600 whitespace-pre-line">
                {selected.full}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyStudy;