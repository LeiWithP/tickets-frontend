import React from "react";

const TopBar = ({ topChild, BodyChild }) => {
  return (
    <>
      <div className="h-1/8 w-full rounded-md bg-teal-500 bg-opacity-20">
        {topChild}
      </div>
      <div className="w-full mt-2 rounded-md bg-teal-800 bg-opacity-20 flex grow justify-center">
        {BodyChild}
      </div>
    </>
  );
};

export default TopBar;
