import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import TableSwitchE from "./TableSwitchE";
import PageAnimation from "./PageAnimation";
import ViewAnimation from "./ViewAnimation";

const TwoColSwitchE = (props) => {
  const [isTable, setIsTable] = useState(false);

  const handleTable = () => {
    setIsTable(!isTable);
    //console.log(isTable);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <PageAnimation>
        <div className="h-screen p-8 bg-behind-1 flex flex-col">
          <div className="h-full w-full pb-4">
            <TableSwitchE
              name={props.name}
              isTable={isTable}
              form={props.form}
              onChange={handleTable}
              onCreate={props.onCreate}
            />
            {isTable ? (
              <div>{props.swap}</div>
            ) : (
              <div className="h-full py-4 flex">
                <div
                  className={`h-full w-${props.leftSize} m-1 p-2 bg-gradient-to-b from-white to-behind-1 flex-col rounded-md`}
                >
                  <ViewAnimation>
                    {props.leftChild}
                  </ViewAnimation>
                </div>
                <div
                  className={`h-full w-${props.rightSize} my-1 mx-6 flex flex-col overflow-hidden`}
                >
                  {props.rightChild}
                </div>
              </div>
            )}
          </div>
        </div>
      </PageAnimation>
    </div>
  );
};

export default TwoColSwitchE;