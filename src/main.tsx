import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import Header from "./Pages/Header";
import Cart from "./Pages/Cart";
import Footer from "./Pages/Footer";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Cart />,
  },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <Header />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
