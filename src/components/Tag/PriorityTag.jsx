import React from "react";
import { useState } from "react";

const PriorityTag = ({ priority }) => {
  const [bgColor, setBgColor] = useState(() => {
    switch (priority) {
      case "URGENTE":
        return "bg-red-600";
      case "Importante":
        return "bg-yellow-500";
      case "Normal":
        return "bg-green-500";
      case "Programado":
        return "bg-blue-500";
      default:
        return "bg-gray-400";
    }
  });

  return (
    <div
      className={`rounded-md text-white font-bold text-xs px-1 h-5 ${bgColor}`}
    >
      {priority}
    </div>
  );
};

export default PriorityTag;
