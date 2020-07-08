import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Content } from "./Components/Pages/Content";
import { Cart } from "./Components/Pages/Cart";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={Content} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}
export default App;
