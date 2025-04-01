import React from "react";

const Partners = () => {
  const partnersLogo = [
    "../../../public/images/partners/bajaj allianz.png",
    "../../../public/images/partners/chola ms insurance.png",
    "../../../public/images/partners/digit insurance.png",
    "../../../public/images/partners/future general insurance.png",
    "../../../public/images/partners/hdfc ergo.png",
    "../../../public/images/partners/icici lamboard.png",
    "../../../public/images/partners/iffco tokio.png",
    "../../../public/images/partners/magma.png",
    "../../../public/images/partners/National-Insurance.png",
    "../../../public/images/partners/new india.png",
    "../../../public/images/partners/oriental insurance.png",
    "../../../public/images/partners/reliance general.png",
    "../../../public/images/partners/sbi general.png",
    "../../../public/images/partners/shriram.png",
    "../../../public/images/partners/united india.png",
    "../../../public/images/partners/univeral sampo.png",
  ];
  return (
    <div className="w-full bg-white flex flex-col p-8">
      <div className="text-3xl font-bold text-blue-500 mb-5">Our Partners</div>
      <div className="flex justify-evenly flex-wrap items-center space-x-20">
        {partnersLogo.map((logo, i) => (
          <img key={i} className="w-24" src={logo} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
