import { CalendarDays, Clock, MapPin } from "lucide-react";

interface IntakeSectionProps {
  data: {
    title: string;
    list: string[];
  };
}

const IntakeSection = ({ data }: IntakeSectionProps) => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Icon */}
        <div className=" items-center text-center gap-4 mb-12">

          <h2 className="text-5xl font-bold text-slate-900 tracking-tight">
            {data.title}
          </h2>
          <p className="mt-2 text-center text-slate-400 text-sm font-medium">
            Application deadlines usually fall 3-4 months prior to these dates.
          </p>
        </div>

        <div className="grid gap-8">
          {data.list.map((item, i) => {
            // Splitting the string to style the "Intake Name" differently
            const [month, description] = item.split(" – ");

            return (
              <div
                key={i}
                className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-3xl border border-slate-500/20 bg-slate-200/50 hover:bg-white hover:shadow-2xl shadow-black shado-xl hover:shadow-indigo-100/50 transition-all duration-300"
              >
                {/* Visual "Step" Counter */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-black shadow-sm group-hover:bg-[#c1972d] group-hover:text-white group-hover:border-[#c1972d] transition-all duration-300">
                  <CalendarDays size={28} />
                </div>

                <div className="grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-800">
                      {month}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 text-xs font-bold uppercase tracking-wider">
                      Intake {i + 1}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-600 italic">
                    <Clock size={18} className="mt-1 shrink-0 text-slate-400" />
                    <p className="text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Subtle Decorative Arrow for desktop */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <MapPin size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
          
        {/* Footer Note */}

      </div>
    </section>
  );
};

export default IntakeSection;