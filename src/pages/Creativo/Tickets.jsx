import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CreativoContext } from "../../context/CreativoContext";

const TicketsList = () => {
  const { tickets } = useContext(CreativoContext);
  return (
    <div class="bg-white p-8 rounded-md w-full">
      <div class=" flex items-center justify-between pb-6">
        <div>
          <h2 class="text-gray-600 font-semibold">Tickets</h2>
          <span class="text-xs">Todos los tickets</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex bg-gray-50 items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              class="bg-gray-50 outline-none ml-1 block "
              type="text"
              name=""
              id=""
              placeholder="buscar..."
            />
          </div>
          <div class="lg:ml-40 ml-10 space-x-8">
            <button class="bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Filtrar
            </button>
            <button class="bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
              Crear
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead className="w-1/4">
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    ID
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Nombre
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Fecha Solicitud
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Empresa
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                    Prioridad
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {ticket.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {ticket.peticion}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {ticket.fecha_solicitud}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {ticket.empresa}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {
                      (() => {
                        switch (ticket.prioridad) {
                          case "1":
                            return (
                              <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">Urgente</span>
                              </span>
                            );
                            case "2":
                            return (
                              <span class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">Importante</span>
                              </span>
                            );
                            case "3":
                            return (
                              <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">Normal</span>
                              </span>
                            );
                            case "4":
                            return (
                              <span class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                <span
                                  aria-hidden
                                  class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                                ></span>
                                <span class="relative">Programado</span>
                              </span>
                            );
                          default:
                            return (
                              <div
                                className="card-rows no_work"
                                key={ticket.id}
                              ></div>
                            );
                        }
                      })
                      ()
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span class="text-xs xs:text-sm text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div class="inline-flex mt-2 xs:mt-0">
                <button class="text-sm text-indigo-50 transition duration-150 hover:bg-extra bg-primary font-semibold py-2 px-4 rounded-l">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button class="text-sm text-indigo-50 transition duration-150 hover:bg-extra bg-primary font-semibold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsList;
