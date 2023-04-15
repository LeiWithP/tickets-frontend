import React from "react";

const HeaderTable = ({ tablename }) => {
  return (
    <div className=" flex items-center justify-between pb-6">
      <div>
        <h1 className="text-gray-600 font-semibold text-2xl">{tablename}</h1>
        {/* <span className="text-xs">Todos los tickets</span> */}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex bg-gray-50 items-center p-2 rounded-md">
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
          <input
            className="bg-gray-50 outline-none ml-1 block "
            type="text"
            name=""
            id=""
            placeholder="buscar..."
          />
        </div>
        <div className="lg:ml-40 ml-10 space-x-8">
          <button className="bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
            Filtrar
          </button>
          <button className="bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125">
            Crear
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
