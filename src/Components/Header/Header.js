import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartIcon from "./cart.png";
import "./Header.css";
import { AddContext } from "../../Context/AddContext";
export const Header = () => {
  const { itemsCount} = useContext(AddContext);
  const numItem = itemsCount;
  return (
    <div className="container">
      <ul className="flex">
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/cart">Cart({numItem})</Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
