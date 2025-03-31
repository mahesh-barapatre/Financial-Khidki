import React from "react";
import { Icon } from "@iconify/react";

const InsuranceCard = ({ title1, title2, description, icon, img }) => {
  return (
    <div className="m-4">
      <div className="flex flex-col items-center min-h-[100px]">
        <p className="text-xs text-white w-3/5 text-center bg-green-500 rounded-sm">
          {description}
        </p>
        {icon ? (
          <Icon icon={icon} width={"70"} />
        ) : (
          <img src={img} className="w-20" alt="img" />
        )}
      </div>
      <h3 className="text-lg text-center">{title1}</h3>
      <h3 className="text-sm text-center text-gray-700">{title2}</h3>
    </div>
  );
};

export default InsuranceCard;
