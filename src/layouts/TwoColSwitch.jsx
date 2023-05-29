import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import TableSwitch from "./TableSwitch";
import PageAnimation from "./PageAnimation";
import ViewAnimation from "./ViewAnimation";

const TwoColSwitch = (props) => {
  const [isTable, setIsTable] = useState(false);

  const handleTable = () => {
    setIsTable(!isTable);
    //console.log(isTable);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      {/* <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      > */}
      <PageAnimation>
        <div className="h-screen p-8 bg-behind-1 flex flex-col">
          <div className="h-full w-full pb-4">
            <TableSwitch
              name={props.name}
              isTable={isTable}
              onChange={handleTable}
            />
            <div className="h-12" />
            {isTable ? (
              <div>{props.swap}</div>
            ) : (
              <div className="h-full py-4 flex">
                <div
                  className={`h-full w-${props.leftSize} m-1 p-2 bg-gradient-to-b from-white to-behind-1 flex-col rounded-md`}
                >
                  {/* <motion.div
                    className="h-full w-full overflow-hidden"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  > */}
                  <ViewAnimation>
                    {props.leftChild}
                  {/* </motion.div> */}
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
      {/* </motion.div> */}
    </div>
  );
};

export default TwoColSwitch;
