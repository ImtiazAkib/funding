import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import PartnershipPrograms from "./components/PartnershipPrograms/PartnershipPrograms";
import Contact from "./components/Contact/Contact";
import GmfApplication from "./components/GmfApplication/GmfApplication";
import Products from "./components/Products/Products";
import CommonPage from "./components/CommonPage/CommonPage";
import {
  unsecuredLoans,
  merchantCashAdvance,
  equipmentFinancing,
  linesOfCredit,
  creditCardProcessing,
  creditRepair,
  debtConsolidation,
  termLoans,
} from "./info";
import IdentityTheft from "./components/IdentityTheft/IdentityTheft";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/unsecured-loans"
          element={<CommonPage info={unsecuredLoans} />}
        />
        <Route
          path="/merchant-cash-advance"
          element={<CommonPage info={merchantCashAdvance} />}
        />
        <Route
          path="/equipment-financing"
          element={<CommonPage info={equipmentFinancing} />}
        />
        <Route
          path="/lines-of-credit"
          element={<CommonPage info={linesOfCredit} />}
        />
        <Route
          path="/credit-card-processing"
          element={<CommonPage info={creditCardProcessing} />}
        />
        <Route
          path="/credit-repair"
          element={<CommonPage info={creditRepair} />}
        />
        <Route
          path="/debt-consolidation"
          element={<CommonPage info={debtConsolidation} />}
        />
        <Route path="/term-loans" element={<CommonPage info={termLoans} />} />
        <Route path="/identity-theft" element={<IdentityTheft />} />
        <Route path="/gmf-application" element={<GmfApplication />} />
        <Route path="/partnership-programs" element={<PartnershipPrograms />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
