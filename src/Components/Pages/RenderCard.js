import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { AddContext } from "../../Context/AddContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    width: 400,
    borderRadius: "10px",
    border: "1px solid",
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  plus: {
    marginLeft: "90px",
  },
}));
export const RenderCard = ({ product }) => {
  const classes = useStyles();
  const { remove, increase, decrease } = useContext(AddContext);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.photo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <span>
                    <b> Quantity:{product.quantity}</b>
                  </span>
                </Typography>{" "}
                <b>
                  {" "}
                  <span
                    onClick={() => {
                      increase(product);
                    }}
                  >
                    <i
                      style={{ color: "blue", marginTop: "1px" }}
                      className="medium material-icons"
                    >
                      arrow_drop_up
                    </i>
                  </span>
                </b>
                {product.quantity > 1 && (
                  <b>
                    <span
                      onClick={() => {
                        decrease(product);
                      }}
                    >
                      <i
                        style={{ color: "blue", marginTop: "1px" }}
                        className="medium material-icons"
                      >
                        arrow_drop_down
                      </i>
                    </span>
                  </b>
                )}
              </Grid>
              <Grid item>
                <b>
                  <Button
                    color="secondary"
                    onClick={() => {
                      remove(product.id);
                    }}
                  >
                    remove
                  </Button>
                </b>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <b>Price:{product.price}</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
