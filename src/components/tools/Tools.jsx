import { Chip } from "@material-tailwind/react";
import React from "react";

const Tools = () => {
  const tools = [
    "VS Code ",
    " git",
    " Figma",
    " XD",
    "Netlify ",
    "Vercel ",
    "Heroku ",
    "Postman ",
    "Chrome Dev Tools",
  ];

  return (
    <div>
        <h1 className="text-lg py-2 font-semibold  dark:text-white">Tools:</h1>
        <div className="flex gap-2 flex-wrap ">
      {tools.map((n) => (  <div className="border mx-auto p-2 rounded-md "><p className=" dark:text-white">{n}</p></div>))}
    </div>
    </div>
  );
};

export default Tools;
