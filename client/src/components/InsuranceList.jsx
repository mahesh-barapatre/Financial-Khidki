import React from "react";
import InsuranceCard from "./InsuranceCard";
import InsuranceCardData from "../data/insuranceCardData";

const InsuranceList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 justify-center">
      {InsuranceCardData.map((item, index) => (
        <InsuranceCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default InsuranceList;
