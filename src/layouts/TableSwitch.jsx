import React from "react";
import { useState } from "react";
import Emergente from "../pages/Views/Emergente";

const TableSwitch = ({ name, isTable, onChange }) => {
  return (
    <div className="w-full h-16 flex fixed ">
      <div
        onClick={onChange}
        className="w-1/6 ml-1 mb-6 bg-primary rounded-md font-semibold text-2xl text-center text-secondary hover:scale-105 hover:bg-extra hover:text-white"
      >
        {isTable ? (
          <div className="h-full flex items-center justify-center">Tabla</div>
        ) : (
          <div className="h-full flex items-center justify-center">Ventana</div>
        )}
      </div>
      <div className="flex grow items-center justify-between pb-6 pl-4">
        <h1 className="text-gray-600 font-semibold text-2xl">{name}</h1>
        <div className="flex items-center justify-end">
          {isTable ? (
            <>
              <div className="flex bg-gray-50 items-center p-2 rounded-md h-11">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
<<<<<<< HEAD
                <input
                  className="bg-gray-50 outline-none ml-1 block h-9"
                  type="text"
                  name=""
                  id=""
                  placeholder="buscar..."
                />
=======
                
>>>>>>> 3ea8ef1470c0c4634b03d20789c9aec305ceb255
              </div>
            </>
          ) : (
            <div></div>
          )}
          <div className="ml-10 space-x-8">
            <button className="bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
              Filtrar
            </button>
          </div>
          <Emergente />
        </div>
      </div>
    </div>
  );
};

export default TableSwitch;
