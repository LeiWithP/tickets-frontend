import React from "react";

const Usercard = ({ user, index }) => {
  return (
    <div className="m-3 p-1 flex bg-white rounded-md hover:scale-95 w-40  bg-gradient-to-br from-cyan-600 to-teal-200 shadow-md">
      <div className="m-2 font-semibold">
        {user.first_name} {user.last_name}
      </div>
    </div>
  );
};

export default Usercard;
