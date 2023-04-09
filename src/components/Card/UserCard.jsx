import React from "react";
import { tareasIniciales } from "../../Data/TestData";

const Usercard = ({ user, onClick }) => {
  return (
    <div
      className="m-3 p-1 flex flex-col rounded-md hover:shadow-md w-40  bg-white snap-start"

      onClick={onClick}
    >
      <div className="mx-2 mt-2 font-semibold border-b">
        {user ? user.first_name : 'Nombres'} {user ? user.last_name : 'Apellidos'}
      </div>
      <div className="px-2 pt-0.5 text-xs font-semibold">Tickets Asignados</div>
      <div className="flex pb-1 px-2">
        <div className="flex flex-col text-xs font-normal">
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
