import React from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import './index.css'
import Degree from './Components/Degree';
import Light from './Components/Light';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Light />
  },
  {
    path: "degree",
    element: <Degree />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
