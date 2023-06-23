import React from "react";
import fb from "../../assets/icons/fb.svg";
import twitter from "../../assets/icons/twitter.svg";
import web from "../../assets/icons/web.svg";
import ln from "../../assets/icons/ln.svg";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaWeebly,
  FaLinkedinIn,
  FaPhone,
  FaMobile,
  FaSearchLocation,
  FaMailchimp,
  FaMailBulk,
  FaEnvelopeOpenText,
  FaDownload,
} from "react-icons/fa";
import person from '../../assets/abdullah.png'

const MainSidear = () => {
  return (
    <div className="flex flex-col  items-center space-y-3 my-24">
      <div className="rounded-md z-10   -mb-40">
        <img className="rounded-lg w-48"
          src={person}
          alt=""
        />
      </div>
      <div className="text-center  bg-white p-6 rounded-xl ">
        <h1 className="text-2xl mt-32 font-bold">ABDULLAH BIN ZIAD</h1>
        <h3 className="text-xl ">Full Stack Engineer</h3>
        <div className="flex  justify-center gap-3 mt-4">
          <NavLink className="p-3  text-blue-700 hover:text-white bg-my-gray rounded-md hover:bg-btn-grad">
            {" "}
            <FaFacebookF className="" />{" "}
          </NavLink>
          <NavLink className="p-3  text-blue-700 hover:text-white bg-my-gray rounded-md hover:bg-btn-grad">
            <FaTwitter className="" />{" "}
          </NavLink>
          <NavLink className="p-3  text-red-700 hover:text-white bg-my-gray rounded-md hover:bg-btn-grad">
            {" "}
            <FaWeebly className="" />{" "}
          </NavLink>
          <NavLink className="p-3  text-blue-700 hover:text-white bg-my-gray rounded-md hover:bg-btn-grad">
            <FaLinkedinIn className=" " />{" "}
          </NavLink>
        </div>
        <div className="bg-my-gray px-6 py-6 my-6  rounded-lg">
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white rounded-md shadow-md  text-red-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaMobile className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm">Phone</h4>
              <h2 className="text-lg">+8801772065894</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white rounded-md shadow-md  text-red-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaSearchLocation className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm">Location</h4>
              <h2 className="text-lg">Mymensingh Sadar</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white rounded-md shadow-md  text-red-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaEnvelopeOpenText className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm">Email</h4>
              <h2 className="text-lg">abdullahbinziad@gmail.com</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white rounded-md shadow-md  text-red-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaMobile className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm">Phone</h4>
              <h2 className="text-lg">+8801772065894</h2>
            </div>
          </div>
          <hr className="w-full" />
          
        </div>
        <a href="https://drive.google.com/file/d/12VdgXmHtHr6zODGZVojuCuBq8S7LLEyw/view?usp=drive_link"><button className=" w-3/4 mx-auto bg-btn-grad flex gap-3 px-6 py-3 text-white justify-center items-center text-center rounded-2xl"><FaDownload/> Download Cv</button></a>
      </div>
    </div>
  );
};

export default MainSidear;
