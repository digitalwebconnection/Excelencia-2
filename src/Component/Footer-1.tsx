
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Code2 } from "lucide-react";
import logo from "../assets/image.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] border-t border-[#c1972d]">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <img src={logo} alt="Excelencia International" className="w-66 mb-2" />
          <p className="text-black text-sm leading-relaxed">
            Excelencia International helps students achieve their global
            education dreams with trusted university partnerships and expert
            guidance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-blue-950 font-semibold text-lg mb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-black text-sm">
            {[
              "About Us",
              "Universities",
              "Study MBBS Abroad",
              "Our Services",
              "Careers",
              "Blog",
              "Contact Us",
            ].map((link, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#c1972d] transition"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-blue-950 font-semibold text-lg mb-2">
            Our Services
          </h4>
          <ul className="space-y-2 text-black text-sm">
            {[
              "Study Abroad Counseling",
              "University Admissions",
              "Visa Assistance",
              "Education Loans",
              "Scholarship Guidance",
            ].map((service, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#c1972d] transition"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-blue-950 font-semibold text-lg mb-2">
            Contact Us
          </h4>

          <div className="space-y-3 text-black text-sm">
            <p className="flex items-start gap-2">
              <MapPin size={40} className="text-[#c1972d]" />
              Elco Arcade, D Wing, Office No. 45, First Floor, Near Almeida Park, Bandra West, Mumbai 400050
            </p>

            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[#c1972d]" />
              +91 97697 87211
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[#c1972d]" />
              queries@excelenciaint.com
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="bg-linear-to-r from-[#c1972d] to-blue-950 p-[1.5px] rounded-full hover:from-blue-950 hover:to-[#c1972d] transition"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#0b1f3a] hover:bg-[#c1972d] hover:text-[#0b1f3a] transition cursor-pointer">
                  <Icon size={18} />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-[#010d20] border-[#020f24]">
        <div className="max-w-7xl  mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-white">
          <p>
            © {new Date().getFullYear()} Excelencia International. All Rights Reserved.
          </p>
          <p className="flex px-0 me-0 md:me-25 md:px-10 items-center  gap-2    text-white text-[13px] md:text-sm">
            <Code2 className="w-6 h-6 text-[#c1972d]" />
            <p>
              Developed by <a href="https://digitalwebconnection.com/" target="_blank" className="text-[#c1972d] font-semibold">Digital Web Connection</a>
            </p>

          </p>
          
        </div>
      </div>

    </footer>
  );
};

export default Footer;
