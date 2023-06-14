import React from "react";
import { FaAddressCard, FaBlog, FaBookReader, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end">
      <div className="flex  justify-start gap-3 bg-white px-6 py-4 rounded-md">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaHome />
          <h1 className="">Home</h1>
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md "
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaBookReader />
          <h1 className="">Resume</h1>
        </NavLink>
        <NavLink
          to="works"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaHome />
          <h1 className="">Works</h1>
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaBlog />
          <h1 className="">Blogs</h1>
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive, isPending }) =>
            isPending
              ? "flex w-24 flex-col items-center gap-2 px-2 py-4  bg-my-gray rounded-md hover:text-white"
              : isActive
              ? "bg-btn-grad flex w-24 flex-col items-center gap-2 px-2 py-4 text-white rounded-md"
              : "flex w-24 flex-col items-center gap-2 px-2 py-4 hover:bg-btn-grad bg-my-gray rounded-md hover:text-white"
          }
        >
          <FaAddressCard />
          <h1 className="">Contacts</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
