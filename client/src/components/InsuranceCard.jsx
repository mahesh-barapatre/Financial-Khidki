import React from "react";
import { Icon } from "@iconify/react";

const InsuranceCard = ({ title, description, image }) => {
  return (
    <div className="m-4">
      <div className="bg-blue-50 shadow-md rounded-xl flex flex-col items-center overflow-hidden min-h-[100px]">
        <p className="text-xs w-full text-center bg-green-300 ">
          {description}
        </p>

        <Icon icon={image} width={"70"}></Icon>
      </div>
      <h3 className="text-center mt-2">{title}</h3>
    </div>
  );
};

export default InsuranceCard;
