import { Routes, Route } from "react-router-dom";

// This Is All Import Of rhe section 

import Header from "./Component/Header-1";
import Footer from "./Component/Footer-1";
import HomeMain from "./Component/HomePage/HomeMain";
import WhatsAppWidget from "./Component/WhatsAppWidget";
import AboutUsMain from "./Component/AboutUs/AboutUsMain";
import ContactUsMain from "./Component/ContactUs/ContactUsMain";
import FlightAnimation from "./Component/FlightAnimation";
// import UkMain from "./Component/Destination/uk/UkMain";
import ServicesMain from "./Component/Services/ServicesMain";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <>
      <FlightAnimation />{/* This is animation of flight  */}

      <Header />{/*  this is Header  */}

      {/*this is all pages path can be opened any Page by holding the Ctrl key and right-clicking with your mouse. */}

      <main className="pt-20"> {/* Space Beetwin Header and Hero section of the page  */}

        <Routes> {/* This is Route For page Change in website like chnage the path  */}

          <Route path="/" element={<HomeMain />} /> {/* Home page and path is  / */}
          <Route path="/about" element={<AboutUsMain />} />{/* About us page and path is /about  */}
          <Route path="/Services" element={<ServicesMain />} />{/*  Service page and path is /Services */}
          {/* <Route path="/destination/Uk" element={<UkMain />} /> */}
          <Route path="/contact" element={<ContactUsMain />} />{/* Contact page and path is /contact  */}

        </Routes>

      </main>

      <Footer />{/* This Is Footr  */}
      <ScrollToTop />

      <WhatsAppWidget />{/* This is WhatsApp Integraction  */}
    </>
  );
}

export default App;
