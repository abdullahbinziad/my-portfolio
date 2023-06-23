import { Button, IconButton, Progress, Typography } from "@material-tailwind/react";
import React from "react";
import { GiGraduateCap, GiShoppingBag } from "react-icons/gi";

const Resume = () => {

    const personalSkills =['Leadership','Pulic Speaking','Team works', 'Negotiation', 'Accounting']


  return (
    <div>
      <div className=" bg-white rounded-2xl space-y-3">
        <div className="p-16 ">
          <h1 className="text-3xl font-bold">Resume</h1>{" "}
          <hr className="bg-btn-grad mt-4" />
          <div className="flex gap-4 py-6">
            <div className=" flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <GiShoppingBag className="text-3xl  text-red-700" />{" "}
                <h1 className="text-2xl font-normal">Education</h1>
              </div>
              <div className="space-y-2 bg-my-grad1 p-6 rounded-md">
                <h5 className="">2018 - 2020 </h5>
                <h1 className="text-2xl font-normal">Higher Secondary</h1>
                <h3 className="text-lg">
                  Satkhira Govt College , Science Group
                </h3>
              </div>
              <div className="space-y-2 bg-my-grad2 p-6 rounded-md">
                <h5 className="">2021 - Present </h5>
                <h1 className="text-2xl font-normal">
                  Bsc in Computer Science and Engineering
                </h1>
                <h3 className="text-lg">Mymensing Engineering College</h3>
              </div>
            </div>

            {/* The Experience Section */}

            <div className=" flex-1 space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <GiGraduateCap className="text-3xl  text-red-700" />{" "}
                <h1 className="text-2xl font-normal">Experience</h1>
              </div>
              <div className="space-y-2 bg-my-grad3 p-6 rounded-md">
                <h5 className="">2018 - 2020 </h5>
                <h1 className="text-2xl font-normal">Higher Secondary</h1>
                <h3 className="text-lg">
                  Satkhira Govt College , Science Group
                </h3>
              </div>
              <div className="space-y-2 bg-my-grad4 p-6 rounded-md">
                <h5 className="">2021 - Present </h5>
                <h1 className="text-2xl font-normal">
                  Bsc in Computer Science and Engineering
                </h1>
                <h3 className="text-lg">Mymensing Engineering College</h3>
              </div>
            </div>
          </div>
        </div>

        {/* start the others Skill  */}
        <div className="p-16 rounded-b-2xl bg-my-gray flex gap-10 justify-between ">
          <div className=" flex-1 space-y-4">
            <div className="flex items-center  mb-3">
              <h1 className="text-2xl font-normal">Software Skill</h1>
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
              <h1 className="text-2xl font-normal">Personal Skill</h1>
            </div>
            <div className=" flex flex-wrap gap-2">

                {
                    personalSkills.map((n,index)=>  <Button disabled  className=" bg-gray-300 border-0  text-gray-00" key={index} variant="outlined">
                    {n}
                  </Button>)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
