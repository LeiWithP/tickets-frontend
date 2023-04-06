import React from "react";
import { tareasIniciales } from "../../Data/TestData";

const Usercard = ({ user }) => {
  return (
    <div className="m-3 p-1 flex flex-col bg-white rounded-md hover:scale-95 w-40  bg-gradient-to-br from-cyan-600 to-teal-200 shadow-md">
      <div className="m-2 font-semibold">
        {user.first_name} {user.last_name}
      </div>
      <div className="flex px-2 pb-1">
        <div className="text-xs mr-2">responsable: </div>
        {tareasIniciales.map((tarea) => (
          <div key={tarea.id} className="w-1 h-3 mr-1 bg-indigo-600 rounded-full"></div>
        ))}
      </div>
      <div className="flex px-2 pb-1">
      <div className="text-xs mr-9">apoyo: </div>
        {tareasIniciales.map((tarea) => (
          <div key={tarea.id} className="w-1 h-3 mr-1 bg-pink-600 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default Usercard;
