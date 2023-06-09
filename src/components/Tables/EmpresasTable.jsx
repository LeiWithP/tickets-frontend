import React from "react";
import { motion } from "framer-motion";
import TableSection from "./TableSection";
import TableHeader from "./TableHeader";
import ViewAnimation from "../../layouts/ViewAnimation";

const EmpresasTable = ({ empresas }) => {
  return (
    <div className="h-full w-full overflow-hidden">
      {/* <motion.div
        className="h-full w-full overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      > */}
      <ViewAnimation>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead className="w-1/4">
                <tr>
                  <TableHeader column="ID" />
                  <TableHeader column="empresa" />
                  <TableHeader column="peticion" />
                  <TableHeader column="medio origen" />
                  <TableHeader column="levanta ticket" />
                  <TableHeader column="cliente solicita" />
                  <TableHeader column="fecha limite" />
                  <TableHeader column="prioridad" />
                  <TableHeader column="fecha solicitud " />
                  <TableHeader column="servidor ubicacion" />
                  <TableHeader column="actividad" />
                  <TableHeader column="uso" />
                  <TableHeader column="encargado" />
                  <TableHeader column="apoyo" />
                  <TableHeader column="estado" />
                  <TableHeader column="fecha entrega" />
                  <TableHeader column="info cliente" />
                  <TableHeader column="observaciones" />
                  <TableHeader column="correcciones" />
                  <TableHeader column="error" />
                  <TableHeader column="tipo error" />
                </tr>
              </thead>
              <tbody>
                {empresas.map((empresa) => (
                  <tr key={empresa.id}>
                    <TableSection info={empresa.id} />
                    <TableSection info={empresa.empresa} />
                    <TableSection info={empresa.peticion} />
                    <TableSection info={empresa.medio_origen} />
                    <TableSection info={empresa.levanta_ticket} />
                    <TableSection info={empresa.cliente_solicita} />
                    <TableSection info={empresa.fecha_limite} />
                    <TableSection info={empresa.prioridad} />
                    <TableSection info={empresa.fecha_solicitud} />
                    <TableSection info={empresa.servidor_ubicacion} />
                    <TableSection info={empresa.actividad} />
                    <TableSection info={empresa.uso} />
                    <TableSection info={empresa.encargado} />
                    <TableSection info={empresa.apoyo} />
                    <TableSection info={empresa.estado} />
                    <TableSection info={empresa.fecha_entrega} />
                    <TableSection info={empresa.info_cliente} />
                    <TableSection info={empresa.observaciones} />
                    <TableSection info={empresa.correcciones} />
                    <TableSection info={empresa.error} />
                    <TableSection info={empresa.tipo_error} />
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
                Mostrando {empresa.length} de {empresa.length}
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
      </ViewAnimation>
      {/* </motion.div> */}
    </div>
  );
};

export default EmpresasTable;
