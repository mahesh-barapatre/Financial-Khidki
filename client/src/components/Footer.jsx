import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="border border-slate-400 flex px-12 py-5 space-y-5 flex-col w-full">
      <div className="flex justify-evenly items-start w-full text-sm">
        <div className="flex flex-col space-y-3 justify-evenly h-full">
          <h6 className="text-slate-400 uppercase font-semibold">Company</h6>
          <p>About Us</p>
          <p>Sitemap</p>
          <p>Careers</p>
          <p>Legal & Admin policies</p>
          <p>ISNP</p>
          <p>Contact us</p>
          <p>Verify your advisor</p>
          <p>Investor Relations</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full">
          <h6 className="text-slate-400 uppercase font-semibold">Insurance</h6>
          <p>General Insurance</p>
          <p>Life Insurance</p>
          <p>Term Insurance</p>
          <p>Investment</p>
          <p>Health Insurance</p>
          <p>Other Insurance</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full">
          <h6 className="text-slate-400 uppercase font-semibold">Resources</h6>
          <p>Articles</p>
          <p>Customer reviews</p>
          <p>Insurance companies</p>
          <p>Newsroom</p>
          <p>Awards</p>
          <p>PB Life</p>
        </div>
        <div className="flex flex-col space-y-3 text-start justify-evenly h-full">
          <h6 className="text-slate-400 uppercase font-semibold">
            Calculators
          </h6>
          <p>SIP Calculator</p>
          <p>Income Tax Calculator</p>
          <p>Compound Interest Calculator</p>
          <p>NPS Calculator</p>
          <p>Term Insurance Calculator</p>
          <p>HLV Calculator</p>
          <p>Life Insurance Calculator</p>
          <p>Health Insurance Calculator</p>
          <p>Travel Insurance Calculator</p>
          <p>Car Insurance Calculator</p>
          <p>Bike Insurance Calculator</p>
        </div>
      </div>
      <h6 className="font-extrabold text-xs mx-auto">
        © Copyright 2008-2025 financialkhidki.com. All Rights Reserved.
      </h6>
    </div>
  );
}

export default Footer;
