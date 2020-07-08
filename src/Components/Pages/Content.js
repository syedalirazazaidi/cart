import React, { useContext } from "react";
import "../../App.css";
import { ProductsContext } from "../../Context/DataContext";
import { AddContext } from "../../Context/AddContext";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(4),
    size: 1,
    color: "gray",
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));
export const Content = () => {
  const classes = useStyles();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(AddContext);
  let itemList = products.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.photo} width={10} alt={item.photo} />
          <span className="card-title">{item.title}</span>
        </div>
        <div className="card-content">
          <p>{item.name}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
          <span to="/">
            <Tooltip
              title="Add to cart"
              aria-label="add to cart"
              onClick={() => {
                addToCart(item);
              }}
            >
              <Fab className={classes.absolute}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">{itemList}</div>
    </div>
  );
};
