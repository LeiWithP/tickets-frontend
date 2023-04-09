import React from "react";

const ThreeCol = ({ leftChild, middleChild, rightChild }) => {
  return (
    <div className="h-full p-1 bg-slate-100 flex">
      <div className="h-full w-1/4 m-1 p-2 bg-teal-500 flex-col rounded-md bg-opacity-20">
        {leftChild}
      </div>
      <div className="h-full w-2/4 m-1 p-2 bg-teal-800 flex-col grow rounded-md bg-opacity-20">
        {middleChild}
      </div>
      <div className="h-full w-1/8 m-1 p-2 bg-teal-500 rounded-md flex-col bg-opacity-20">
        {rightChild}
      </div>
    </div>
  );
};

export default ThreeCol;
