import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import PartnershipPrograms from "./components/PartnershipPrograms/PartnershipPrograms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnership-programs" element={<PartnershipPrograms />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
