import React from "react";
import {Outlet} from "react-router-dom";
import Drawer from "../../components/LeftDrawer/Drawer";
import Side from "../../components/LeftDrawer/Side";

export const MainLayout = ({ 
    left: Left,
    right: Right }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <Side setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Left/>
      </Drawer>
      <div className="ml-auto lg:w-[95%] xl:w-[90%] 2xl:w-[95%]">
          <Outlet/>
      </div>
    </>
  )
}

export default MainLayout;
