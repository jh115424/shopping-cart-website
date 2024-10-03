import HomePage from "./Pages/HomePage";

import Cart from "./Pages/CartItem";

import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import CartItem from "./Pages/CartItem";
import TotalPrice from "./Pages/TotalPrice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: (
      <Cart
        id="1"
        category={"Electronics"}
        title={"Laptop"}
        price={999}
        description={"A laptop"}
        onUpdateQuantity={function (id: number, newQuantity: number): void {
          console.log(`Updating quantity of item ${id} to ${newQuantity}`);
        } }
        onRemove={function (id: number): void {
          throw new Error("Function not implemented.");
        } }
        name={""}      />
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
