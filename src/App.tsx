import React, { useState } from "react";
import Cart from "./components/Cart";
import { Product } from "./type";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: "1",
      title: "Product 1",
      price: 10,
      description: "",
      category: "",
      quantity: 1,
    },
    {
      id: "2",
      title: "Product 2",
      price: 15,
      description: "",
      category: "",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id.toString() ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id.toString()));
  };

  return (
    <div className="App">
      <h1>My Online Store</h1>
      <Cart
        // onUpdateQuantity={updateQuantity}
        // onRemove={removeItem}
        id={cartItems[1].category}
        title={cartItems[1].title}
        name={cartItems[1].category}
        price={cartItems[1].price}
        description={cartItems[1].description}
       
      />
    </div>
  );
};

export default App;

// import HomePage from "./Pages/HomePage";

// import { CartProvider } from "react-use-cart";
// // import Cart from "./Pages/Cart";

// // import Footer from "./Pages/Footer";
// import ReactDOM from "react-dom/client";
// import React from "react";
// import { useEffect, useState } from "react";
// // import TotalPrice from "./Pages/TotalPrice";

// import "./App.css";
// import "./homepage.css"

// function App() {
//   const [searchResults, setSearchResults] = useState([]);

//   return (
//     <>
//       <CartProvider>
//         <HomePage />
//         {/* <Cart items={[]} /> */}
//         {/* <Footer /> */}
//       </CartProvider>
//     </>
//   );
// }

// export default App;
