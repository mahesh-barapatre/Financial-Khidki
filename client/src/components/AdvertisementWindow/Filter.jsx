import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Carousel from "../Carousel";
import { useNavigate } from "react-router-dom";

function Filter() {
  const navigate = useNavigate();

  const img = [
    "https://img.freepik.com/free-vector/couple-winning-prize-man-woman-holding-gift-box-flat-vector-illustration-lottery-present-birthday-party_74855-8307.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/premium-psd/give-away-contest-banner-social-media-post-template_368797-832.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-vector/you-win-game-banner-level-complete-badge-screen-casino-jackpot-with-golden-stars-crown-trumpets_88138-1474.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/premium-psd/creative-giveaway-winner-announcement-social-media-post-instagram-template-premium-psd_148733-137.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-photo/shopping-cart-with-gift-box-icon-promotion-discount-sale-reward-checkout-ecommerce-online-shopping-3d-illustration_56104-2102.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
    "https://img.freepik.com/free-vector/man-paying-online-receiving-cashback-wallet_88138-692.jpg?size=626&ext=jpg&ga=GA1.1.41065760.1682405503&semt=sph",
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
