import React from "react";
import MainSidear from "../components/sidebar/MainSidear";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className=" bg-bg-image bg-fixed">
      <div className=" container mx-auto flex justify-between gap-10 ">
        <div className="  ">
          <MainSidear></MainSidear>
        </div>
        <div className=" w-2/3 my-20 space-y-2 flex flex-col">
            <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
