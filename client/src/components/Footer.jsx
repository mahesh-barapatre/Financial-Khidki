import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="border-t-2 border-gray-300 flex px-12 py-5 space-y-5 flex-col w-full bg-white">
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full text-sm pt-3">
        <div className="flex flex-col space-y-3 justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">Company</h6>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/becomeourAgent")}
          >
            Become our Agent
          </p>
          <p className="cursor-pointer" onClick={() => handleClick("/aboutus")}>
            About Us
          </p>

          <p className="cursor-pointer" onClick={() => handleClick("/help")}>
            Contact us
          </p>
          <p className="cursor-pointer" onClick={() => handleClick("/")}>
            Articles
          </p>
          <p>Customer reviews</p>

          <p>Event Gallery</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">Insurance</h6>

          <p
            className="cursor-pointer"
            onClick={() => handleClick("/motorform")}
          >
            Motor Insurance
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/healthform")}
          >
            Life Insurance
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/travelform")}
          >
            Travel Insurance
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/healthform")}
          >
            Term Insurance
          </p>

          <p className="cursor-pointer" onClick={() => handleClick("/smeform")}>
            SME Insurance
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/healthform")}
          >
            Health Insurance
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/otherform")}
          >
            Other Insurance
          </p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">Investment</h6>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/investmentform")}
          >
            Open Demat
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/investmentform")}
          >
            Mutual Funds
          </p>
          <p
            className="cursor-pointer"
            onClick={() => handleClick("/investmentform")}
          >
            Fixed Deposit
          </p>

          <p
            className="cursor-pointer"
            onClick={() => handleClick("/investmentform")}
          >
            Loan
          </p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full mb-3">
          <h6 className="text-slate-400 uppercase font-semibold">
            Calculators
          </h6>
          <p
            onClick={() => {
              handleClick("/sipcalc");
              // window.open(
              //   "https://groww.in/calculators/mutual-fund-returns-calculator",
              //   "_blank",
              // );
            }}
            className="cursor-pointer"
          >
            MF Return Calculator
          </p>
          <p
            onClick={() => {
              window.open(
                "https://www.uiic.in/CustomerPortalWeb/PremiumCalculator/data/MotorQuote.html#/motorQuote?agentId=",
                "_blank",
              );
            }}
            className="cursor-pointer"
          >
            Insurance Premium Calculator
          </p>
          <img
            src="/bhima_financial_khidkey.jpg"
            alt="bhima"
            className="w-60 object-fit rounded-3xl cursor-pointer"
            onClick={() => {
              window.open("https://bimabharosa.irdai.gov.in/", "_blank");
            }}
          />
        </div>
      </div>

      <h6 className="font-extrabold text-xs mx-auto">
        © Copyright 2008-2025 financialkhidkey.com. All Rights Reserved.
      </h6>
    </div>
  );
}

export default Footer;
