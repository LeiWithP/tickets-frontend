import React from "react";

const User = ({ usuario }) => {
  return (
    <div
      className={`mx-2 mb-4 p-2 h-fit bg-secondary bg-opacity-20 rounded-md hover:scale-95 flex flex-col shadow-md`}
    >
      <div className="flex pb-2 border-b border-black justify-between">
        <p className="px-1 bg-secondary text-white rounded-lg">{usuario.id}</p>
        <p className="ml-4 font-semibold">{usuario.username}</p>
        <p className="ml-4 font-semibold">{usuario.rol}</p>
      </div>
      <div className="flex flex-col text-base h-auto font-medium mt-2">
        <p>{usuario.email}</p>
        <p>
          {usuario.first_name} {usuario.last_name}
        </p>
      </div>
    </div>
  );
};

export default User;
