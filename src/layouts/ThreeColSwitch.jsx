import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import TableSwitch from "./TableSwitch";

const ThreeColSwitch = (props) => {
  const [isTable, setIsTable] = useState(false);

  const handleTable = () => {
    setIsTable(!isTable);
    //console.log(isTable);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="h-screen p-8 bg-behind-1 flex flex-col">
          <div className="h-full w-full pb-4">
            <div className="h-1/4">
              <div className="h-1/4">
                <TableSwitch
                  name={props.name}
                  isTable={isTable}
                  onChange={handleTable}
                  form={props.form}
                />
              </div>
              <div className="h-3/4 flex space-x-4">
                {props.upperChild}
              </div>
            </div>

            <div className="h-3/4 ">
              {isTable ? (
                <div>{props.swap}</div>
              ) : (
                <div className="h-full py-4 flex">
                  <div
                    className={`h-full w-${props.leftSize} m-1 p-2 bg-gradient-to-b from-white to-behind-1 flex-col rounded-md`}
                  >
                    <motion.div
                      className="h-full w-full overflow-hidden"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {props.leftChild}
                    </motion.div>
                  </div>
                  <div
                    className={`h-full w-full my-1 mx-6 flex flex-col overflow-y-auto`}
                  >
                    {props.rightChild}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThreeColSwitch;