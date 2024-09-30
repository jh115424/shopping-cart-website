import HomePage from "./Pages/HomePage";

import  Cart  from "./Pages/Cart";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },


  {
    path: "cart",
    element: <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
