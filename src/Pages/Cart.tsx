import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'



const Cart = () => {
 

    function navigateToCart(event: React.MouseEvent<HTMLButtonElement>): void {
        throw new Error('Function not implemented.');
    }

   return (
            <button onClick={navigateToCart}>Cart</button>
   )
}

export default Cart;

