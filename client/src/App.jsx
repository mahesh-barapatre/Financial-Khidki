import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import CustomerCare from "./Pages/CustomerCare";
import Login from "./Pages/Login";
import Register from "./Pages/SignUp";
import Offers from "./Pages/Offers";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Admin from "./Pages/Admin";
import AddProduct from "./Pages/AddProduct";
import Product from "./Pages/Product";
import ReviewCard from "./components/ReviewCard";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import CustomItemReq from "./Pages/CustomItemReq";
import Claim from "./Pages/Claim";
import RaiseTicket from "./Pages/RaiseTicket";
import AboutUs from "./Pages/AboutUs/AboutUs";
import HealthInsurance from "./Pages/HealthInsurance/HealthInsurance";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthInsurance" element={<HealthInsurance />} />
          <Route path="/help" element={<CustomerCare />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/raise_ticket" element={<RaiseTicket />} />
          {<Route path="/login" element={<Login />} />}

          {<Route path="/register" element={<Register />} />}
          <Route path="/offer" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:id" element={<Product />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customReq" element={<CustomItemReq />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/reviewcard" element={<ReviewCard />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/success/:Urlname/:email/:Urladdress/:Urlmethod/:orderNum"
            element={<Success />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
