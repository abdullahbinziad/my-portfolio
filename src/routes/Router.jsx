import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/home/Home";
import Resume from "../page/resume/Resume";
import Works from "../page/works/Works";
import Blogs from "../page/blogs/Blogs";
import Contacts from "../page/contact/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/resume",
        element: <Resume></Resume>,
      },
      {
        path: "/works",
        element: <Works></Works>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);
