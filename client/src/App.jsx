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
import MotorForm from "./Pages/Forms/MotorForm.jsx";
import InsuranceForm from "./Pages/Forms/HealthForm.jsx";
import TravelInsuranceForm from "./Pages/Forms/TravelForm.jsx";
import SMEInsuranceForm from "./Pages/Forms/SMEForm.jsx";
import InvestmentForm from "./Pages/Forms/InvestmentForm.jsx";
import TrackTicket from "./Pages/Ticket/TrackTicket.jsx";
import CreateTicketForm from "./Pages/Ticket/CreateTicket.jsx";
import BecomePartnerForm from "./Pages/BecomeOurAgent.jsx";
import OtherInsuranceForm from "./Pages/Forms/OtherInsuranceForm.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="mb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<CustomerCare />} />

          <Route path="/healthInsurance" element={<HealthInsurance />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/raise_ticket" element={<RaiseTicket />} />

          <Route path="/vechicleform" element={<VehicleForm />} />
          <Route path="/motorform" element={<MotorForm />} />
          <Route path="/smeform" element={<SMEInsuranceForm />} />

          <Route path="/healthform" element={<InsuranceForm />} />
          <Route path="/travelform" element={<TravelInsuranceForm />} />
          <Route path="/otherform" element={<OtherInsuranceForm />} />
          <Route path="/investmentform" element={<InvestmentForm />} />
          <Route path="/track" element={<TrackTicket />} />
          <Route path="/createticket" element={<CreateTicketForm />} />
          <Route path="/becomeourAgent" element={<BecomePartnerForm />} />

          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
