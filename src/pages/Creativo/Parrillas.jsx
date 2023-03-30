import React from "react";

const Parrillas = () => {
  return (
    <div>
      <h1>Parrillas</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <a href="#">
      <div class="my-2 mx-2 max-w-sm p-6 hover:scale-95 bg-gradient-to-r from-primary to-green-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nombre del Ticket
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          informacion del ticket
        </p>
        <div className="my-2 w-24 text-xs rounded-3xl border-none bg-green-300 text-center shadow-lg">
          Completado
        </div>
      </div>
    </a>
  );
};

export default Parrillas;
