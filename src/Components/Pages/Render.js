import React from "react";
import { Link } from "react-router-dom";
export const Render = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "25px",
        marginLeft: "20px",
        marginTop: "100px",
        fontWeight: "bold",
        boxSizing: "border-box",
        flex: 1,
        fontSize: 15,
        top: 0,
      }}
    >
      <p>
        Your Cart Is Empty{" "}
        <Link to="/" style={{ color: "red" }}>
          Go to Store{" "}
        </Link>
      </p>
    </div>
  );
};
