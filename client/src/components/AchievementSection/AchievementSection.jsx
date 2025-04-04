import React from "react";
import AchievementCard from "./AchievementCard";

const AchievementSection = ({ achievementInfo }) => {
  console.log(achievementInfo);
  return (
    <div className="flex justify-center items-center space-x-8 m-4">
      {achievementInfo.map((info, i) => (
        <AchievementCard key={i} achievementInfo={info} />
      ))}
    </div>
  );
};

export default AchievementSection;
