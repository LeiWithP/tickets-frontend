import React from "react";
import { useState } from "react";

const StateTag = ({ state }) => {
  const [bgColor, setBgColor] = useState(() => {
    switch (state) {
      case "urgente":
        return "bg-red-600";
      case "importante":
        return "bg-yellow-500";
      case "normal":
        return "bg-green-400";
      case "programado":
        return "bg-blue-500";
      default:
        return "bg-gray-400";
    }
  });

  return (
    <div
      className={`rounded-md text-white font-bold text-xs px-1 h-5 ${bgColor}`}
    >
      {state}
    </div>
  );
};

export default StateTag;
