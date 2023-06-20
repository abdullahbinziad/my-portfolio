import { Chip } from "@material-tailwind/react";
import React from "react";

const Tools = () => {
  const tools = [
    "VS Code ",
    " git",
    " Figma",
    "Adobe XD",
    "Netlify ",
    "Vercel ",
    "Heroku ",
    "Postman ",
    "Chrome Dev Tools",
  ];

  return (
    <div>
        <h1 className="text-lg py-2 font-semibold">Tools:</h1>
        <div className="flex gap-4 ">
      {tools.map((n) => (  <span className="border py-1">{n}</span>))}
    </div>
    </div>
  );
};

export default Tools;
