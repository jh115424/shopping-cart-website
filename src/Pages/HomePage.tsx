import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import icons from "../assets/icons.png";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";
// import "./cartItems.css"
import "./homepage.css";

const userUrl = "https://dummyjson.com/products";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);

  const [cartItems, setCartItems] = useState(0);

  const data = searchResults;

  const data_filter = data.filter(
    (filter: any) =>
      filter.category === "beauty" ||
      filter.category === "groceries" ||
      filter.category === "electronics"
  );

  useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.products);
      });
  }, []);

  const addToCart = () => {
    setCartItems((prevItems) => prevItems + 1);
  };
  const subtractToCart = () => {
    setCartItems((prevItems) => prevItems - 1);
  };

  return (
    <>
      <div>
        <div className="top-header">
          <div className="icon">
            <img src={icons} alt="icon" />
          </div>

          <div className="cart">
            <span className="cart-count"></span>
            <Link to="cart">
              <img src={cart} alt="cart"></img>
            </Link>
            {cartItems && <span className="cart-count">{cartItems}</span>}
            {/* {cartItems > 0 && <span className="cart-count">{cartItems}</span>} */}
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
            <button onClick={subtractToCart}>Remove from Cart</button>

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
