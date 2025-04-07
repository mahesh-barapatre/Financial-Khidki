import React from "react";
import AchievementCard from "./AchievementCard";

const AchievementSection = ({ achievementInfo }) => {
  console.log(achievementInfo);
  return (
    <div className="flex px-2 md:px-0 justify-center items-center space-x-1 md:space-x-8 my-3 md:m-4">
      {achievementInfo.map((info, i) => (
        <AchievementCard key={i} achievementInfo={info} />
      ))}
    </div>
  );
};

export default AchievementSection;
