import React from "react";
import { useState } from "react";
import TableSwitch from "./TableSwitch";

const TwoColSwitch = ( props ) => {
  const [isTable, setIsTable] = useState(false);

  const handleTable = () => {
    setIsTable(!isTable);
    //console.log(isTable);
  };

  return (
    <div className="h-screen p-8 bg-slate-100 flex flex-col">
      <TableSwitch name={props.name} isTable={isTable} onChange={handleTable} />
      <div className="h-12" />
      {isTable ? (
        <div>{props.swap}</div>
      ) : (
        <div className="h-full flex">
        <div className="h-full w-1/4 m-1 p-2 bg-teal-500 flex-col rounded-md bg-opacity-20">
          {props.leftChild}
        </div>
        <div className="h-full w-3/4 m-1 rounded-md flex flex-col">
          {props.rightChild}
        </div>
      </div>
      )}
      
    </div>
  );
};

export default TwoColSwitch;
