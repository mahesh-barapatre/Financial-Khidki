import React from "react";
import InsuranceCard from "./InsuranceCard";
import InsuranceCardData from "../../data/insuranceCardData";
import { useDispatch } from "react-redux";
import { openHam } from "../../store/HamBurgerBtnSlice";

const InsuranceList = ({ title, CardData }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-center shadow-lg rounded-2xl bg-white p-10 m-3">
        {CardData.map((item, index) => (
          <InsuranceCard
            key={index}
            title1={item.title1}
            title2={item.title2}
            description={item.description}
            icon={item.icon}
            img={item.img}
          />
        ))}
        <div
          onClick={() => dispatch(openHam())}
          className="flex h-full m-2 rounded-full justify-center items-center flex-row  text-blue-500 "
        >
          <div className="hover:text-white cursor-pointer hover:bg-blue-500 border-solid border-blue-500 border-2 p-1">
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
