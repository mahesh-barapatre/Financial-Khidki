import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Carousel from "../Carousel";
import { useNavigate } from "react-router-dom";

function Filter() {
  const navigate = useNavigate();

  const img = [
    "https://raw.githubusercontent.com/mahesh-barapatre/Invest_khidkey_assets/refs/heads/main/ad1.jpg",
    "https://raw.githubusercontent.com/mahesh-barapatre/Invest_khidkey_assets/refs/heads/main/ad2%5D.jpg",
    "https://raw.githubusercontent.com/mahesh-barapatre/Invest_khidkey_assets/refs/heads/main/ad3.jpg",
    "https://raw.githubusercontent.com/mahesh-barapatre/Invest_khidkey_assets/refs/heads/main/ad4.jpg",
    "https://raw.githubusercontent.com/mahesh-barapatre/Invest_khidkey_assets/refs/heads/main/ad5.jpg",
  ];

  return (
    <div className="w-full ">
      <div className="flex flex-col rounded-full text-lg font-semibold text-white p-3 ">
        <Carousel images={img} autoplayInterval={3500} />
      </div>
    </div>
  );
}

export default Filter;
