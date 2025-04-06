import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import CustomerCare from "./Pages/CustomerCare";
import Claim from "./Pages/Claim";
import RaiseTicket from "./Pages/RaiseTicket";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HealthInsurance from "./Pages/HealthInsurance/HealthInsurance.jsx";
import VehicleForm from "./Pages/VechicleForm/VechicleForm.jsx";
import SideNav from "./components/Header/SideNav.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthInsurance" element={<HealthInsurance />} />
          <Route path="/help" element={<CustomerCare />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/raise_ticket" element={<RaiseTicket />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/vechicleform" element={<VehicleForm />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
