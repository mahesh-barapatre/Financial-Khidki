import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="border border-slate-400 flex px-12 py-5 space-y-5 flex-col w-full">
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full text-sm">
        <div className="flex flex-col space-y-3 justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">Company</h6>
          <p onClick={() => navigate("/becomeourAgent")}>Become our Agent</p>
          <p onClick={() => navigate("/aboutus")}>About Us</p>

          <p>Contact us</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">Insurance</h6>
          <p>General Insurance</p>
          <p onClick={() => navigate("/motorform")}>Motor Insurance</p>
          <p
            className="cursor-pointer"
            onClick={() => navigate("/healthInsurance")}
          >
            Life Insurance
          </p>
          <p className="cursor-pointer" onClick={() => navigate("/travelform")}>
            Travel Insurance
          </p>
          <p>Term Insurance</p>
          <p
            className="cursor-pointer"
            onClick={() => navigate("/investmentform")}
          >
            Investment
          </p>
          <p className="cursor-pointer" onClick={() => navigate("/smeform")}>
            SME Insurance
          </p>
          <p
            className="cursor-pointer"
            onClick={() => navigate("/healthInsurance")}
          >
            Health Insurance
          </p>
          <p>Other Insurance</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">Resources</h6>
          <p>Articles</p>
          <p>Customer reviews</p>
          <p>Insurance companies</p>

          <p>Event Gallery</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">
            Calculators
          </h6>
          <p>MF Return Calculator</p>
          <p>SIP Calculator</p>
          <p>Insurance Premium Calculator</p>
        </div>
      </div>
      <h6 className="font-extrabold text-xs mx-auto">
        © Copyright 2008-2025 financialkhidki.com. All Rights Reserved.
      </h6>
    </div>
  );
}

export default Footer;
