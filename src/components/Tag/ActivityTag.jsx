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
      case "Diseño Gráfico":
        return "bg-purple-400";
      case "Video":
        return "bg-indigo-400";
      case "Video - Grabación":
        return "bg-pink-400";
      case "Fotografía":
        return "bg-gray-400";
      case "Redes Sociales":
        return "bg-cyan-400";
      case "ADM-Gestión":
        return "bg-orange-400";
      case "Auto-Capacitación":
        return "bg-teal-400";
      case "Capacitación":
        return "bg-lime-400";
      case "Video- Animación":
        return "bg-amber-400";
      case "Copy":
        return "bg-brown-400";
      case "Presentación":
        return "bg-blue-400";
      case "Envio Material":
        return "bg-pink-300";
      case "Mantenimiento":
        return "bg-indigo-300";
      case "Diseño Editorial":
        return "bg-green-400";
      case "Revisión de Cuentas":
        return "bg-yellow-300";
      case "Diseño-Correcciones":
        return "bg-gray-300";
      case "Grabación Voz":
        return "bg-red-300";
      case "Contacto Cliente":
        return "bg-cyan-300";
      case "Hacer Café":
        return "bg-orange-300";
      case "Edición-Correcciones":
        return "bg-amber-300";
      case "Cobranza":
        return "bg-purple-300";
      case "Pago Nómina":
        return "bg-teal-300";
      case "Compra Insumos":
        return "bg-lime-300";
      case "Acomodo Insumos":
        return "bg-brown-300";
      case "Reunión con Cliente":
        return "bg-blue-300";
      case "Limpieza":
        return "bg-indigo-200";
      case "Diseño-Actualizaciones":
        return "bg-green-200";
      case "Networking":
        return "bg-yellow-200";
      case "Actualización":
        return "bg-gray-200";
      case "Re - Edición":
        return "bg-pink-200";
      case "Ayuda":
        return "bg-red-200";
      case "Audio - Edición":
        return "bg-cyan-200";
      case "Cotización":
        return "bg-orange-200";
      case "Configuración":
        return "bg-amber-200";
      case "Gestoria Proveedores":
        return "bg-purple-200";
      case "Foto y Video":
        return "bg-brown-200";
      case "Soporte Digital":
        return "bg-blue-200";
      case "Planeación":
        return "bg-indigo-100";
      case "Video- Edición":
        return "bg-green-100";
      case "Fotografía - Revelado":
        return "bg-yellow-100";
      case "Facturación":
        return "bg-gray-100";
      case "Captura de Datos":
        return "bg-pink-100";
      case "Diseño y Redes Sociales":
        return "bg-red-100";
      case "Publicación -Blog":
        return "bg-blue-100";
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
