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
  FaInstagram,
} from "react-icons/fa";
import person from "../../assets/abdullah.png";
import Switcher from "../darkside/Switcher";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainSidear = () => {
  return (
    <div className="flex sticky top-0 justify-between flex-col items-center space-y-3 py-24 ">
      <div className="rounded-md z-10   -mb-40">
        <img  data-aos="fade-down" className="rounded-lg w-48" src={person} alt="" />
      </div>
      <div className="text-center  bg-white dark:bg-my-dark dark:text-white p-6 rounded-xl ">
        <h1 data-aos="zoom-in-up" className="text-2xl mt-36 text-gray-800 font-bold dark:text-white dark:mb-2">Abdullah Bin Ziad</h1>
        <div data-aos="zoom-in-up" className="dark:bg-my-dark-btn rounded-md w-fit mx-auto px-8 py-2 ">
          <h3 className="text-xl dark:text-my-dark-txt ">
            Full Stack Engineer
          </h3>
        </div>
        <div data-aos="zoom-in-down" className="flex  justify-center gap-3 mt-4">
          <a href='https://www.facebook.com/mdabdullahbinziad'  className="p-3  text-blue-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad">
            {" "}
            <FaFacebookF className="" />{" "}
          </a>
          <a href='https://www.instagram.com/abdullahbinziad/' className="p-3  text-blue-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad">
            <FaInstagram className="" />{" "}
          </a>
          <a href='https://abdullahbinziad.com/' className="p-3  text-red-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad">
            {" "}
            <FaWeebly className="" />{" "}
          </a>
          <a href='https://www.linkedin.com/in/abdullahbinziad/' className="p-3  text-blue-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad">
            <FaLinkedinIn className=" " />{" "}
          </a>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className="bg-my-gray dark:bg-my-dark-btn p-3 my-6  rounded-lg">
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white dark:bg-my-dark rounded-md shadow-md  text-purple-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaMobile className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm text-my-dark-txt">Phone</h4>
              <h2 className="text-lg">+8801772065894</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white dark:bg-my-dark rounded-md shadow-md  text-yellow-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaSearchLocation className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm text-my-dark-txt">Location</h4>
              <h2 className="text-lg">Mymensingh Sadar</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white dark:bg-my-dark rounded-md shadow-md  text-red-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaEnvelopeOpenText className="" />{" "}
              </span>
            </div>
            <div className="text-left">
              {" "}
              <h4 className="text-sm text-my-dark-txt">Email</h4>
              <h2 className="text-lg">abdullahbinziad@gmail.com</h2>
            </div>
          </div>

          <hr className="w-full" />
        </div>
        <a href="https://drive.google.com/file/d/12VdgXmHtHr6zODGZVojuCuBq8S7LLEyw/view?usp=drive_link">
          <button data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" w-3/4 mx-auto bg-btn-grad flex gap-3 px-6 py-3 text-white justify-center items-center text-center rounded-2xl">
            <FaDownload /> Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainSidear;
