import { useState } from 'react';
import { Mail, Phone, MapPin, Plus, Minus, Building2 } from 'lucide-react';

const QuietInvitationContactForm = () => {
  const [openOffice, setOpenOffice] = useState(1);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const offices = [
    {
      id: 1,
      title: "India Office",
      address:
        "Elco Arcade, D Wing, Office No. 45, First Floor, Near Almeida Park, Bandra West, Mumbai 400050",
      email: "queries@excelenciaint.com",
      phone: "+91 97697 87211",
    },
    {
      id: 2,
      title: "UAE Office",
      address:
        "Building A1, Dubai Digital Park, Dubai Silicon Oasis, United Arab Emirates",
      email: "queries@excelenciaint.com",
      phone: "+91 97697 87211",
    },
  ];

  interface Web3FormsResponse {
    success: boolean;
  }

  // ✅ VALIDATION FUNCTION
  const validate = (formData: FormData) => {
    let newErrors = { name: "", phone: "" };

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    if (!name || name.trim().length < 3) {
      newErrors.name = "Enter a valid name (min 3 characters)";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name should not contain numbers or special characters";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian number";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone;
  };

  // ✅ UPDATED SUBMIT FUNCTION WITH AUTO-CLEAR
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Capture the form element reference immediately
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (!validate(formData)) return;

    setLoading(true);
    setResult("Sending...");

    formData.append("access_key", "99f8361f-e5e4-493d-ae0a-6f3acd3d4274");
    formData.append("subject", "New Visa Inquiry Lead");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: Web3FormsResponse = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        
        // 1. Reset the physical HTML form fields
        formElement.reset(); 
        
        // 2. Clear any validation error states
        setErrors({ name: "", phone: "" });

        // 3. Clear the "Success" message automatically after 5 seconds
        setTimeout(() => {
          setResult("");
        }, 5000);

      } else {
        setResult("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("❌ Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-1 w-full flex flex-col lg:flex-row overflow-hidden font-sans">

      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-[55%] bg-blue-950 p-8 md:p-6 lg:p-15 max-w-7xl mx-auto z-10">

        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-multiply"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880212319-4627a58c882c?auto=format&fit=crop&q=80')` }}
        />

        <div className="relative z-20 max-w-xl">
          <p className="text-white font-bold tracking-widest text-xs mb-4 uppercase flex items-center gap-2">
            Contact Us <span className="h-px w-10 bg-white/50"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#c1972d] mb-6">
            It All Begins With A Conversation
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  maxLength={10}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <select
                name="visaType"
                required
                className="bg-white p-4 rounded-2xl outline-none w-full text-gray-800"
              >
                <option value="">Visa Type</option>
                <option value="Business">Business</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us what you’re exploring"
              required
              rows={3}
              className="bg-white rounded-2xl p-4 outline-none w-full text-gray-800"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-linear-to-r from-[#c1972d] to-blue-950 rounded-2xl text-white font-bold py-4 px-10 uppercase tracking-widest text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : "Begin With a Conversation"}
            </button>

            {result && (
              <p className={`text-sm mt-2 font-medium ${result.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full lg:w-[45%] min-h-112.5 bg-gray-100 flex items-center justify-center lg:justify-end lg:pr-20">
        <div
          className="absolute inset-0 grayscale contrast-75 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')` }}
        />

        <div className="relative w-[90%] md:w-80 bg-white shadow-2xl z-30">
          <div className="p-6 flex justify-between items-center border-b">
            <h3 className="text-xl font-bold">Track Offices</h3>
            <Building2 className="text-[#c1972d]" size={28} />
          </div>

          <div className="divide-y divide-gray-100">
            {offices.map((office) => (
              <div key={office.id}>
                <button
                  onClick={() => setOpenOffice(office.id)}
                  className="w-full p-4 flex justify-between items-center font-bold text-sm text-left"
                >
                  {office.title}
                  {openOffice === office.id ? <Minus size={16}/> : <Plus size={16}/>}
                </button>

                {openOffice === office.id && (
                  <div className="p-5 pt-0 space-y-4 text-xs text-slate-500">
                    <div className="flex gap-3">
                      <MapPin size={16} className="shrink-0 text-[#c1972d]" />
                      <p>{office.address}</p>
                    </div>
                    <div className="flex gap-3">
                      <Mail size={16} className="shrink-0 text-[#c1972d]" />
                      <p>{office.email}</p>
                    </div>
                    <div className="flex gap-3">
                      <Phone size={16} className="shrink-0 text-[#c1972d]" />
                      <p>{office.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuietInvitationContactForm;