import { useState } from "react";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import Header from "./Pages/Header";
import Cart from "./Pages/Cart";
// import Footer from "./Pages/Footer";
import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";
// import TotalPrice from "./Pages/TotalPrice";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
