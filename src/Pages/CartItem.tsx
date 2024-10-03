import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { Product } from "../type";
import TotalPrice from "./TotalPrice";


interface CartProps {
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemove: (id: number) => void;
  id: string;
  title: string;
  name: string;
  price: number;
  category: string;
  description: string;
  // data: Product[];
}

const CartItem: React.FC<CartProps> = ({
  id,
  title,
  price,
  description,
  category,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="cart-item">
      <h3>{category}</h3>
      <p>{title}</p>
      <p>Description:{description}</p>
      <p>Price:${price}</p>
      <p>Quantity:</p>
      <input
        type="number"
        defaultValue={1}
        min={1}
        onChange={(e) =>
          onUpdateQuantity(parseInt(id), parseInt(e.target.value))
        }
      />
      <button onClick={() => onRemove(parseInt(id))}>Remove</button>
    </div>
  );
};
export default CartItem;

// const Cart: React.FC<CartProps> = ({product}) => {
//     const totalPrice = product.reduce((total, item) => total + item.price * item.quantity, 0);

//     const navigateToCart = useNavigate();



// return (
//       <>

//         <div className="cart">

//              <h2>Your Cart</h2>
//             {product.length === 0 ? (
//                 <p>Your cart is empty</p>
//             ) : (
//                 <>
//                 <ul>
//                     {product.map((item: CartItem) => (
//                         <li key={item.id}>
//                             {item.name} - ${item.price.toFixed(2)} x {item.quantity}
//                         </li>
//                     ))}
//                     </ul>
//                     <p>Total: ${totalPrice.toFixed(2)}</p>
//                 </>
//             )}

//         </div>

//          <div>
//            <button onClick={() => navigateToCart('/cart')}>Cart</button>
//          </div>
//          </>

// )}
// export default Cart;

// const item: CartItem = {
//   id: '1',
//   title: 'Product Name',
//   price: 10,
//   quantity: 1,
//   // ... other required properties
// };
