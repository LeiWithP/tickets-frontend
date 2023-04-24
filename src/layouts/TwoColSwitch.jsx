import React from "react";
import { useState } from "react";
import TableSwitch from "./TableSwitch";

const TwoColSwitch = (props) => {
  const [isTable, setIsTable] = useState(false);

  const handleTable = () => {
    setIsTable(!isTable);
    //console.log(isTable);
  };

  return (
    <div className="h-screen p-8 bg-behind-1 flex flex-col">
      <div className="h-full w-full pb-4">
      <TableSwitch name={props.name} isTable={isTable} onChange={handleTable} />
      <div className="h-12" />
      {isTable ? (
        <div>{props.swap}</div>
      ) : (
        <div className="h-full py-4 flex">
          <div className={`h-full w-${props.leftSize} m-1 p-2 bg-gradient-to-b from-white to-behind-1 flex-col rounded-md`}>
            {props.leftChild}
          </div>
          <div className={`h-full w-${props.rightSize} my-1 mx-6 flex flex-col`}>
            {props.rightChild}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default TwoColSwitch;
