import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}