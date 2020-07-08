import React, { useContext } from "react";
import { AddContext } from "../../Context/AddContext";
import { RenderCard } from "./RenderCard";
import { Render } from "./Render";
export const Cart = () => {
  const { cartItems, total } = useContext(AddContext);
  const item = cartItems.length;
  return (
    <div>
      <span
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <b>Total Amount : ({total.toFixed(1)})</b>
      </span>
      <hr />
      {item ? (
        cartItems.map((productItem, index) => (
          <RenderCard key={index} product={productItem} />
        ))
      ) : (
        <Render />
      )}
    </div>
  );
};
