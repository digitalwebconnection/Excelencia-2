import { Routes, Route } from "react-router-dom";

import Header from "./Component/Header-1";
import Footer from "./Component/Footer-1";
import HomeMain from "./Component/HomePage/HomeMain";
import WhatsAppWidget from "./Component/WhatsAppWidget";
import AboutUsMain from "./Component/AboutUs/AboutUsMain";

function App() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutUsMain/>} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}

export default App;
