import React from "react";

const Partners = () => {
  const partnersLogo = [
    "/images/partners/bajaj allianz.png",
    "/images/partners/chola ms insurance.png",
    "/images/partners/digit insurance.png",
    "/images/partners/future general insurance.png",
    "/images/partners/hdfc ergo.png",
    "/images/partners/icici lamboard.png",
    "/images/partners/iffco tokio.png",
    "/images/partners/magma.png",
    "/images/partners/National-Insurance.png",
    "/images/partners/new india.png",
    "/images/partners/oriental insurance.png",
    "/images/partners/reliance general.png",
    "/images/partners/sbi general.png",
    "/images/partners/shriram.png",
    "/images/partners/united india.png",
    "/images/partners/univeral sampo.png",
  ];
  return (
    <div className="w-full bg-white flex flex-col p-8 md:pl-20">
      <div className="text-3xl font-bold text-blue-500 mb-5">Our Partners</div>
      <div className="grid grid-cols-3 md:grid-cols-5 items-center align-middle space-y-4">
        {partnersLogo.map((logo, i) => (
          <img key={i} className="md:w-24 w-20" src={logo} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
