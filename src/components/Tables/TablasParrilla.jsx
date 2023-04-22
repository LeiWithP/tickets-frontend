import React from "react";
import TableSection from "./TableSection";
import TableHeader from "./TableHeader";

const TablasParrillas = ({ parrillas }) => {
    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead className="w-1/4">
                        <tr>
                            <TableHeader column="ID" />
                            <TableHeader column="Fecha" />
                            <TableHeader column="Objetivo" />
                            <TableHeader column="Tema" />
                            <TableHeader column="Copy" />
                            <TableHeader column="Diseño" />
                            <TableHeader column="Nuevo" />
                            <TableHeader column="Republicacion" />
                            <TableHeader column="Link del Diseño" />
                            <TableHeader column="Tipos de contenido" />
                            <TableHeader column="Plataforma" />
                            <TableHeader column="Elaborado por" />
                            <TableHeader column="#Ticket" />
                        </tr>
                    </thead>
                    <tbody>
                        {parrillas.map((parrilla) => (
                            <tr key={ticket.id}>
                                <TableSection info={parrilla.id} />
                                <TableSection info={parrilla.fecha} />
                                <TableSection info={parrilla.objetivo} />
                                <TableSection info={parrilla.tema} />
                                <TableSection info={parrilla.copy} />
                                <TableSection info={parrilla.diseño} />
                                <TableSection info={parrilla.nuevo} />
                                <TableSection info={parrilla.repubicacion} />
                                <TableSection info={parrilla.link_diseño} />
                                <TableSection info={parrilla.tipos_contenido} />
                                <TableSection info={parrilla.plataforma} />
                                <TableSection info={parrilla.elaboraado} />
                                <TableSection info={parrilla.ticket} />
                                {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {(() => {
                        switch (ticket.prioridad) {
                          case "1":
                            return (
                              <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Urgente</span>
                              </span>
                            );
                          case "2":
                            return (
                              <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Importante</span>
                              </span>
                            );
                          case "3":
                            return (
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Normal</span>
                              </span>
                            );
                          case "4":
                            return (
                              <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Programado</span>
                              </span>
                            );
                          default:
                            return (
                              <div
                                classNameName="card-rows no_work"
                                key={ticket.id}
                              ></div>
                            );
                        }
                      })()}
                    </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span className="text-xs xs:text-sm text-gray-900">
                        Mostrando {parrillas.length - parrillas.length + 1} de {parrillas.length}
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        <button className="text-sm text-indigo-50 transition duration-150 hover:bg-extra bg-primary font-semibold py-2 px-4 rounded-l">
                            Anterior
                        </button>
                        &nbsp; &nbsp;
                        <button className="text-sm text-indigo-50 transition duration-150 hover:bg-extra bg-primary font-semibold py-2 px-4 rounded-r">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TablasParrillas;
