import React from "react";
import { Product } from "../type";
import CartItem from "../Pages/CartItem";
// import {CartItem } from '../CartItem';

interface CartProps {
  //   items: Product[];
  id: string;
  name: string;
  title: string;
  price: number;
  description: string;
//   onUpdateQuantity: (id: number, newQuantity: number) => void;
//   onRemove: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({
  id,
  name,
  title,
  price,
//   onUpdateQuantity,
//   onRemove,
}) => {
  const total = price;

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {price === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Cart
           
            key={id}
            id={id}
            title={title}
            name={name}
            price={price}
            // onUpdateQuantity={onUpdateQuantity}
            // onRemove={onRemove}
            description={""}
          />
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
