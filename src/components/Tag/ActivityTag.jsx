import React from "react";
import { useState } from "react";

export const ActivityTag = ({ activity }) => {
  const [bgColor, setBgColor] = useState(() => {
    switch (activity) {
      case "Web":
        return "bg-red-400";
      case "Evento":
        return "bg-yellow-400";
      case "3D":
        return "bg-green-300";
      case "Edición Fotografía":
        return "bg-blue-300";
      default:
        return "bg-gray-400";
    }
  });

  return (
    <div
      className={`rounded-md text-white font-bold text-xs px-1 h-5 ml-2 ${bgColor}`}
    >
      {activity}
    </div>
  );
};

export default ActivityTag;
