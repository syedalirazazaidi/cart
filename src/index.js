import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ProductsContextProvider from "./Context/DataContext";
import CartContextProvider from "./Context/AddContext";
ReactDOM.render(
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
