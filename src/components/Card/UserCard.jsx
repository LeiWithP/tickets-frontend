import React from "react";
import { tareasIniciales } from "../../Data/TestData";

const Usercard = ({ user }) => {
  return (
    <div className="m-3 p-1 flex flex-col bg-white rounded-md hover:shadow-md w-40  bg-gradient-to-br from-cyan-600 to-teal-200">
      <div className="mx-2 mt-2 font-semibold border-b">
        {user.first_name} {user.last_name}
      </div>
      <div className="px-2 text-xs">Tickets Asignados</div>
      <div className="flex pb-1 px-2">
        <div className="flex flex-col text-xs">
          <p>responsable: </p>
          <p>apoyo: </p>
        </div>
        <div className="flex flex-col ml-2">
          <div className="flex mt-1">
            {tareasIniciales.map((tarea) => (
              <div
                key={tarea.id}
                className="w-1 h-3 mr-1 bg-indigo-600 rounded-full"
              ></div>
            ))}
          </div>
          <div className="flex mt-1">
            {tareasIniciales.map((tarea) => (
              <div
                key={tarea.id}
                className="w-1 h-3 mr-1 bg-pink-600 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
