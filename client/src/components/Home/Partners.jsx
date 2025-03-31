import React from "react";

const Partners = () => {
  const partnersLogo = ["../../../public/images/coin.png"];
  return (
    <div className="w-full bg-white flex flex-col items-center p-4">
      <div className="text-3xl font-bold text-blue-500">Our Partners</div>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {partnersLogo.map((logo, i) => (
          <img key={i} className="w-24" src={logo} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
