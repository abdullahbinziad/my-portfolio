import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpertisePlay from "../../components/carosul/ExpertisePlay";
import ComfortabePlay from "../../components/carosul/ComfortabePlay";
import Tools from "../../components/tools/Tools";

const Home = () => {
  return (
    <div className="p-2 md:p-0">
      <div className="md:p-16 p-8 bg-white dark:bg-my-dark rounded-2xl space-y-3">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold dark:text-white">About Me</h1>{" "}
          <hr className="bg-btn-grad mt-4 " />
          <h3 className="md:text-lg  py-5 dark:text-gray-400">
            Highly motivated and detail-oriented Junior Frontend Developer with
            a passion for creating interactive and user-friendly web
            applications using React. Seeking a challenging position to leverage
            my skills and contribute to the success of a dynamic organization.
            <br />
            <br />
            My aim is to bring across your message and identity in the most
            creative way. I created web Application for many famous brand
            companies.
          </h3>
        </div>
        <div>
          <h1 className="md:text-3xl text-2xl font-bold dark:text-white">Expertise </h1>
          <hr className="bg-btn-grad mt-4" />
          <div className="">
            <div className=" p-6 rounded-lg">
              <ExpertisePlay></ExpertisePlay>
            </div>
          </div>
        </div>
        <div className="">
             <div><ComfortabePlay></ComfortabePlay></div>
             <div className=""><Tools></Tools></div>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
