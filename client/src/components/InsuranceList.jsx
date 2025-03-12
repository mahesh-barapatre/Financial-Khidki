import React from "react";
import InsuranceCard from "./InsuranceCard";
import InsuranceCardData from "../data/insuranceCardData";
import { useDispatch } from "react-redux";
import { openHam } from "../store/HamBurgerBtnSlice";

const InsuranceList = () => {
  const dispatch = useDispatch();
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
      <div
        onClick={() => dispatch(openHam())}
        className="flex md:hidden h-fit m-2 rounded-full justify-center items-center flex-row hover:text-white cursor-pointer hover:bg-blue-500 text-blue-500 border-solid border-blue-500 border-2 p-1"
      >
        <div>view all products</div>
      </div>
    </div>
  );
};

export default InsuranceList;
