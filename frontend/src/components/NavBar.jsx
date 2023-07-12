import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function NavBar() {
  const cartData = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "10px",
        borderBottom: "2px solid"
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
      </div>
      <span className="cartCount">Cart Items : {cartData.length}</span>
    </div>
  );
}
