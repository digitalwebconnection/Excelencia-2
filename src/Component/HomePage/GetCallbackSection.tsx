
import  { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Minus, Building2 } from 'lucide-react';

const QuietInvitationContactForm = () => {
  const [openOffice, setOpenOffice] = useState('dubai');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    visaType: "Visa Type",
    message: "",
  });

  const offices = [
    {
      id: 'dubai',
      title: 'Dubai Office',
      address: '30 Commercial Road Fratton, Australia',
      email: 'needhelp@company.com',
      phone: '+92 (8800) - 9850',
    },
    { id: 'australia', title: 'Australia Office' },
    { id: 'canada', title: 'Canada Office' },
  ];

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-162.5 z-1 w-full flex flex-col lg:flex-row overflow-hidden font-sans">
      
      {/* LEFT SIDE: Red Diagonal Shape & Form */}
      <div className="relative w-full lg:w-[55%] bg-blue-950 p-8 md:p-16 lg:p-24 z-10 lg:clip-path-right">
        {/* Background Overlay Image (The people working) */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880212319-4627a58c882c?auto=format&fit=crop&q=80')` }}
        />
        
        <div className="relative z-20 max-w-xl">
          <p className="text-white font-bold tracking-widest text-xs mb-4 uppercase flex items-center gap-2">
            Contact Us <span className="h-px w-10 bg-white/50"></span>
          </p>
          
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">A Quiet Invitation</h2>
            <div className="text-white/90 space-y-1 text-lg leading-relaxed font-light">
                <p>If you’re seeking clarity instead of pressure,</p>
                <p>guidance instead of promises,</p>
                <p>and honesty instead of shortcuts —</p>
                <p className="font-bold mt-2 text-white">We’re here.</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" name="name" placeholder="Full Name" 
                onChange={handleChange}
                className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800 placeholder:text-gray-400" 
              />
              <input 
                type="email" name="email" placeholder="Email Address" 
                onChange={handleChange}
                className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800 placeholder:text-gray-400" 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" name="phone" placeholder="Phone" 
                onChange={handleChange}
                className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800 placeholder:text-gray-400" 
              />
              <select 
                name="visaType"
                onChange={handleChange}
                className="bg-white p-4 rounded-2xl outline-none w-full text-gray-500 appearance-none bg-[url('https://cdn0.iconfinder.com/data/icons/ios-7-icons/50/chevron_down-512.png')] bg-size-[12px] bg-position-[right_1rem_center] bg-no-repeat"
              >
                <option>Visa Type</option>
                <option>Business</option>
                <option>Student</option>
              </select>
            </div>
            <textarea 
                name="message" 
                placeholder="Tell us what you’re exploring"  
                onChange={handleChange}
                rows={3}
                className="bg-white rounded-2xl p-4 outline-none w-full text-gray-800 placeholder:text-gray-400"
            ></textarea>
            
            <button className="bg-[#1a1a1a] rounded-2xl text-white font-bold py-4 px-10 hover:bg-black transition-colors uppercase tracking-widest text-sm">
              Begin With a Conversation
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE: Map Background & Office Info */}
      <div className="relative w-full lg:w-[45%] min-h-112.5 bg-gray-100 flex items-center justify-center lg:justify-end lg:pr-20">
        {/* Map Image Background */}
        <div 
          className="absolute inset-0 grayscale contrast-75 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')` }}
        />
        
        {/* Office Accordion Card */}
        <div className="relative w-[90%] md:w-80 bg-white shadow-2xl z-30 animate-fadeIn">
          <div className="p-6 flex justify-between items-center border-b">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900">
              Treck Offices
            </h3>
            <Building2 className="text-[#d91e36]" size={28} />
          </div>

          <div className="divide-y divide-gray-100">
            {offices.map((office) => (
              <div key={office.id}>
                <button 
                  onClick={() => setOpenOffice(office.id)}
                  className="w-full p-4 flex justify-between items-center font-bold text-slate-800 hover:bg-slate-50 transition-colors text-sm"
                >
                  {office.title}
                  {openOffice === office.id ? 
                    <Minus size={16} className="text-gray-400" /> : 
                    <Plus size={16} className="text-[#d91e36]" />
                  }
                </button>
                
                {openOffice === office.id && office.address && (
                  <div className="p-5 pt-0 space-y-4 text-xs text-slate-500 transition-all">
                    <div className="flex gap-3">
                      <MapPin size={16} className="text-[#d91e36] shrink-0" />
                      <p>{office.address}</p>
                    </div>
                    <div className="flex gap-3">
                      <Mail size={16} className="text-[#d91e36] shrink-0" />
                      <p>{office.email}</p>
                    </div>
                    <div className="flex gap-3">
                      <Phone size={16} className="text-[#d91e36] shrink-0" />
                      <p>{office.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style >{`
        @media (min-width: 1024px) {
          .clip-path-right {
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default QuietInvitationContactForm;