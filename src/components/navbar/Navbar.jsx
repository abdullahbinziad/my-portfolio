import React from "react";
import { FaAddressCard, FaBlog, FaBookReader, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Switcher from "../darkside/Switcher";

const Navbar = () => {
  return (
    <div  className="md:flex  z-10 items-center gap-8 justify-end">
       <Switcher></Switcher>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="flex  justify-start gap-3 bg-white dark:bg-my-dark px-6 py-4 rounded-md">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray  rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad dark:bg-my-dark-btn dark:text-gray-400 bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaHome className="text-xl" />
          <h1 className="">Home</h1>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray  rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md "
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad dark:bg-my-dark-btn dark:text-gray-400 bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaBookReader className="text-xl" />
          <h1 className="">Resume</h1>
        </NavLink>
        <NavLink
          to="works"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray  rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad dark:bg-my-dark-btn dark:text-gray-400 bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaHome className="text-xl" />
          <h1 className="">Works</h1>
        </NavLink>

        {/* comment the blog  */}
        {/* <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray  rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad dark:bg-my-dark-btn dark:text-gray-400 bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaBlog className="text-xl" />
          <h1 className="">Blogs</h1>
        </NavLink> */}
        <NavLink
          to="contacts"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray  rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad dark:bg-my-dark-btn dark:text-gray-400 bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaAddressCard className="text-xl" />
          <h1 className="">Contacts</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
