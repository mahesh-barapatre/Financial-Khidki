import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const AchievementCard = ({ achievementInfo }) => {
  return (
    <div
      className="relative bg-sky-100 flex justify-center items-center py-4 px-2"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <Icon icon={achievementInfo.image} width={"40"} className="m-3"></Icon>
      <div className="flex flex-col">
        <div className="text-xl ">{achievementInfo.title1}</div>
        <div className="text-sm text-gray-600">{achievementInfo.title2}</div>
      </div>
    </div>
  );
};

export default AchievementCard;
