
import HomePage from "./Pages/HomePage";

import { CartProvider } from "react-use-cart";
import Cart from "./Pages/Cart";

// import Footer from "./Pages/Footer";
import ReactDOM from "react-dom/client";
import React from "react";
import { useEffect, useState } from "react";
// import TotalPrice from "./Pages/TotalPrice";

import "./App.css";
import "./homepage.css"

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <CartProvider>
        <HomePage />
        <Cart />
        {/* <Footer /> */}
      </CartProvider>
    </>
  );
}

export default App;
