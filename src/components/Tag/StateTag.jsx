import React from "react";
import { useState } from "react";

const StateTag = ({ state }) => {
  const [bgColor, setBgColor] = useState(() => {
    switch (state) {
      case "Canceló la reunión":
        return "bg-red-400";
      case "Correciones":
        return "bg-yellow-400";
      case "Revisión por Diseño":
        return "bg-green-300";
      case "en Autorización Cliente":
        return "bg-blue-300";
      case "Terminado":
        return "bg-purple-400";
      case "Proceso":
        return "bg-indigo-400";
      case "Pausa por Cliente":
        return "bg-pink-400";
      case "Registrado":
        return "bg-gray-400";
      case "Asignado":
        return "bg-cyan-400";
      case "Cancelado por GS":
        return "bg-orange-400";
      case "En espera de información":
        return "bg-teal-400";
      case "Cancelado por pago":
        return "bg-lime-400";
      case "Propuesta":
        return "bg-amber-400";
      case "Canceló Cliente":
        return "bg-brown-400";
      case "Pausa por GS":
        return "bg-gray-300";
      default:
        return "bg-gray-400";
    }
  });

  return (
    <div
      className={`rounded-md text-white font-bold text-xs px-1 h-5 ml-2 ${bgColor}`}
    >
      {state}
    </div>
  );
};

export default StateTag;
