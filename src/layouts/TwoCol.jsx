import React from "react";

const TwoCol = ({ leftChild, rightChild }) => {
  return (
    <div className="h-screen px-2 pt-2 pb-4 bg-slate-100 flex">
      <div className="h-full w-1/4 m-1 p-2 bg-teal-500 flex-col rounded-md bg-opacity-20">
        {leftChild}
      </div>
      <div className="h-full w-3/4 m-1 rounded-md flex flex-col">
        {rightChild}
      </div>
    </div>
  );
};

export default TwoCol;
