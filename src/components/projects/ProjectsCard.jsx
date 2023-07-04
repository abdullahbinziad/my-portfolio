import React from "react";
import './style.css';
import {
    FaGithub,
   
  } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsCard = (props) => {
    const {projecTitle, projectsType, category, date, liveLink, github, images, features, technolgy, shortDescription

    } = props.project
  return (
    <div data-aos="zoom-in"  data-aos-duration="2000" className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn">
      <div className="relative w-full h-60 overflow-hidden">
        <div  className="imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
          <img
            src={images[0]}
            alt=""
            className="object-cover object-top w-full"
          />
        </div>
      </div>
      <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
      <div className="flex justify-between">
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">{projecTitle}</h2>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">{projectsType}</h2>
      </div>
        <p className="my-3 dark:text-gray-400">
        {
           shortDescription.slice(0,125)
        }......
        </p>
      </div>
      <div className="tech  p-5 relative border-t border-white/10">
       
        <p className="uppercase dark:text-gray-400"> <span className="font-bold">Technolohy:  </span> 
         {
technolgy
         }
         
        </p>
       <div data-aos="fade-up" className="flex justify-between mt-2">
     <Link to={liveLink}>  <button className="myBtn px-6 py-2 bg-btn-grad"> Live Link</button></Link>
       <Link to={github}> <button className="myBtn px-6 py-2 bg-btn-grad flex items-center gap-1"><FaGithub/> Github</button></Link>
       </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
