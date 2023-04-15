import React from "react";

const UserTable = ({ usuarios }) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead className="w-1/4">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Apellidos
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Correo
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Rol
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Activo
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-teal-700 text-white text-left text-xs font-semibold uppercase tracking-wider">
                Ultima Conexion
              </th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {usuario.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {usuario.username}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {usuario.first_name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {usuario.last_name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {usuario.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {usuario.rol}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {usuario.active ? (
                    <p className="text-gray-900 whitespace-no-wrap">Si</p>
                  ) : (
                    <p className="text-gray-900 whitespace-no-wrap">No</p>
                  )}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {usuario.last_login}
                  </p>
                </td>
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
            Mostrando {usuarios.length} de {usuarios.length}
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

export default UserTable;
