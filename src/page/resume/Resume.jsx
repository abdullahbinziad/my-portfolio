import {
  Button,
  IconButton,
  Progress,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { GiGraduateCap, GiShoppingBag } from "react-icons/gi";

const Resume = () => {
  const personalSkills = [
    "Leadership",
    "Pulic Speaking",
    "Team works",
    "Negotiation",
    "Accounting",
  ];

  return (
    <div className="md:p-0 p-2">
      <div className=" bg-white dark:bg-my-dark rounded-2xl space-y-3 ">
        <div className="md:p-16 p-5 ">
          <h1 className="text-3xl font-bold dark:text-white">Resume</h1>{" "}
          <hr className="bg-btn-grad mt-4" />
          <div className="md:flex  space-y-6 gap-4 py-6">
            <div className=" md:flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-3 ">
                <GiShoppingBag className="text-3xl  text-red-700" />{" "}
                <h1 className="text-2xl font-normal dark:text-white ">
                  Education
                </h1>
              </div>
              <div className="space-y-2 dark:bg-my-dark-btn bg-my-grad1 p-6 rounded-md dark:text-gray-400">
                <h5 className="">2018 - 2020 </h5>
                <h1 className="text-2xl font-normal dark:text-gray-300">
                  Higher Secondary
                </h1>
                <h3 className="text-lg">
                  Satkhira Govt College , Science Group
                </h3>
              </div>
              <div className="space-y-2 dark:bg-my-dark-btn bg-my-grad2 p-6 rounded-md dark:text-gray-400">
                <h5 className="">2021 - Present </h5>
                <h1 className="text-2xl font-normal dark:text-gray-300">
                  Bsc in Computer Science and Engineering
                </h1>
                <h3 className="text-lg">Mymensing Engineering College</h3>
              </div>
            </div>

            {/* The Experience Section */}
            <div className=" md:flex-1 space-y-4 ">
            <div className="flex items-center gap-3 mb-3 ">
                <GiGraduateCap className="text-3xl  text-red-700" />{" "}
                <h1 className="text-2xl font-normal dark:text-white ">
                  Experience
                </h1>
              </div>
              <div className="space-y-2 dark:bg-my-dark-btn bg-my-grad3 p-6 rounded-md dark:text-gray-400">
                <h5 className="">July 2022 - Oct 2022 </h5>
                <h1 className="text-2xl font-normal dark:text-gray-300">
                  {" "}
                  Web Developer
                </h1>
                <h3 className="text-lg">Authentic IT Solution</h3>
              </div>
              <div className="space-y-2 dark:bg-my-dark-btn bg-my-grad4 p-6 rounded-md dark:text-gray-400">
                <h5 className=""> Feb 2023 - Present </h5>
                <h1 className="text-2xl font-normal dark:text-gray-300">
                  Full Stack Developer
                </h1>
                <span> (Team Work)</span>

                <h3 className="text-lg">MEC Computer Club</h3>
              </div>
            </div>
           
          </div>
        </div>

        {/* start the others Skill  */}
        <div className="md:p-16 p-10 rounded-b-2xl bg-my-gray dark:bg-my-dark-btn md:flex space-y-10 gap-10 justify-between ">
          <div className=" flex-1 space-y-4">
            <div className="flex items-center  mb-3">
              <h1 className="text-2xl font-normal dark:text-white">
                Software Skill
              </h1>
            </div>
            <div className="flex w-full flex-col gap-4">
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="gray" variant="h6">
                    Visual Studio Code
                  </Typography>
                  <Typography color="blue" variant="h6">
                    75%
                  </Typography>
                </div>
                <Progress color="green" value={75} />
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="gray" variant="h6">
                    Postman
                  </Typography>
                  <Typography color="blue" variant="h6">
                    70%
                  </Typography>
                </div>
                <Progress color="red" value={70} />
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="gray" variant="h6">
                    Figma
                  </Typography>
                  <Typography color="blue" variant="h6">
                    70%
                  </Typography>
                </div>
                <Progress color="amber" value={70} />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="gray" variant="h6">
                    Adobe Photoshop
                  </Typography>
                  <Typography color="blue" variant="h6">
                    60%
                  </Typography>
                </div>
                <Progress color="purple" value={60} />
              </div>
            </div>
          </div>

          {/* start the personal Skill  */}
          <div className=" flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-2xl font-normal dark:text-white">
                Personal Skill
              </h1>
            </div>
            <div className=" flex flex-wrap gap-2">
              {personalSkills.map((n, index) => (
                <Button
                  disabled
                  className=" bg-gray-300 border-0  text-gray-00"
                  key={index}
                  variant="outlined"
                >
                  {n}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
