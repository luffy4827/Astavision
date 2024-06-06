import KYC from "./components/KYC";
import Navbar from "./components/Navbar";
import Footer from "./section/Footer";
import Services from "./section/Services";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Hero from "./section/Hero";
import About from "./section/About";
import Career from "./section/Career";
import Contact from "./section/Contact";

export default function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/kyc" element={<KYC />} />
        </Routes>
        <Hero />
        <Services />
        <About />
        <Career />
        <Contact />
      <Footer />
      </BrowserRouter>
    </main>
  )
}