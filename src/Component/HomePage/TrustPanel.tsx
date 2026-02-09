
import { ShieldCheck, Wallet, BarChart3, Handshake } from "lucide-react";

export default function ParentsPeaceOfMind() {
  return (
    <section className="relative bg-linear-to-br from-[#F3F8FF] via-[#F7FBF9] to-[#EEF4F8] py-10 px-6 overflow-hidden">
      
      {/* Subtle animated line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-300 to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT — IMAGE COLLAGE */}
        <div className="grid grid-cols-2 gap-4 relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvZZmk0H_T_dEr7mKFJuKb2cwlr9jHAXplg&s"
            className="rounded-2xl object-cover w-full h-full"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CUuV1X-RVgU8A0Jf6zKWrcceaqg3wXmbWw&s"
            className="rounded-2xl object-cover w-full h-full"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcF2AwnqfvpuGCvdtf2CEU1cdaj7wK20ReGQ&s"
            className="rounded-2xl col-span-2 object-cover w-full h-65"
            alt=""
          />

          {/* Decorative ring */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-8 border-blue-400/40" />
        </div>

        {/* RIGHT — CONTENT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">
            For Parents, With Care
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Because trust matters as much as dreams.
          </h2>

          <p className="text-gray-600 mb-6">
            This journey isn’t taken alone.  
            It’s shared by families who care deeply about safety, clarity, and the future.
          </p>

          <p className="font-medium text-gray-800 mb-8">
            We guide students forward —  
            and keep parents confidently informed at every step.
          </p>

          {/* Bullet Trust Points */}
          <ul className="space-y-3 mb-10">
            <TrustPoint icon={<ShieldCheck />} text="Safety-first decisions" />
            <TrustPoint icon={<Wallet />} text="Transparent finances" />
            <TrustPoint icon={<BarChart3 />} text="Clear long-term outcomes" />
            <TrustPoint icon={<Handshake />} text="Continuous parent communication" />
          </ul>

          <button className="rounded-full bg-linear-to-r from-[#c1972d]  to-blue-950 px-8 py-4 text-white font-semibold  transition">
            Talk to Our Counsellor →
          </button>
        </div>
      </div>
    </section>
  );
}

function TrustPoint({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 text-gray-700">
      <span className="text-green-600">{icon}</span>
      {text}
    </li>
  );
}
