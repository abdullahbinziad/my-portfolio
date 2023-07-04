import React from "react";
import MainSidear from "../components/sidebar/MainSidear";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import JumpButton from "../components/jump/JumpButton";

const MainLayout = () => {
  return (
    <div className=" bg-bg-image bg-no-repeat bg-cover dark:bg-bg-image-dark bg-fixed font-font-rubik">
      <div className=" container mx-auto md:flex justify-center gap-6 ">
        <div className="  ">
          <MainSidear></MainSidear>
        </div>
        <div className=" md:w-2/3 md:py-20 space-y-2 flex flex-col">
            <Navbar></Navbar>
          <Outlet></Outlet>
          <JumpButton></JumpButton>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
