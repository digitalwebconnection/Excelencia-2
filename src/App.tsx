import { Routes, Route } from "react-router-dom";

import Header from "./Component/Header-1";
import Footer from "./Component/Footer-1";
import HomeMain from "./Component/HomePage/HomeMain";
import WhatsAppWidget from "./Component/WhatsAppWidget";
import AboutUsMain from "./Component/AboutUs/AboutUsMain";
import ContactUsMain from "./Component/ContactUs/ContactUsMain";
// import FlightAnimation from "./Component/FlightAnimation";
import UkMain from "./Component/Destination/uk/UkMain";

function App() {
  return (
    <>
    {/* <FlightAnimation/> */}
      <Header />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutUsMain/>} />
          <Route path="/contact" element={<ContactUsMain/>} />
          <Route path="/destination/Uk" element={<UkMain/>}/>
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default App;
