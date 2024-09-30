import React from "react";
import { Link } from "react-router-dom";
import  { useState, useEffect } from "react";
import icons from "../assets/icons.png";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";

import "./homepage.css";

const userUrl = "https://dummyjson.com/products";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const [cartItems, setCartItems] = useState(0);

  const data = searchResults;



  const data_filter = data.filter(
    (filter: any) =>
      filter.category === "beauty" || filter.category === "groceries"
  );

  useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.products);
      });
  }, []);


  const addToCart = () => {
    setCartItems(prevItems => prevItems + 1);
  };

  return (
    <>
      <div>
        <div className="top-header">
          <div className="icon">
            <img src={icons} alt="icon" />
            <Link to="cart">Cart</Link>
          </div>

          <div className="cart">
          <span className="cart-count">0</span>
            <img src={cart} alt="cart" />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}


          </div>
        </div>

        <p className="home-title">
          Welcome to Elaine's Online Outlet, where great products equals great
          value for food and more!
        </p>
      </div>

      <div className="card-container">
        {data_filter.map((product: any) => (
          <div key={product.id} className="card">
      <button onClick={addToCart}>Add to Cart</button>

{/* <button onClick={(e) => setSearchResults(product)}>Add to Cart</button> */}

             <button
              onClick={(e) => {
                setSearchResults([product as never]);

                e.preventDefault();
              }}
            >
            
            </button> 

            <img
              src={product.images}
              className="card-image"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// const addToCart = (product: any) => {
//     const [items, setItems] = useState<any[]>([]);
//     setItems((prevItems: any[]) => [...prevItems, product]);
// };


