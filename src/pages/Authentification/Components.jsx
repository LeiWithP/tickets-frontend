import React from "react";

export const TextField = (props) => {
  return (
    <div className="mb-4 text-lg">
      <input
        className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
        type={props.type}
        placeholder={props.placeholder}
        value={props.username}
        onChange={props.onChange}
      />
    </div>
  );
};
