import { Grid } from "@mui/material";
import "./OrderItem.scss";

function OrderItem(props) {
  return (
    <Grid className="order-item" container spacing={1}>
      <Grid item md={2} xs={2}>
        <img className="order-item-img" src={props.product.imgLink} alt="" />
      </Grid>
      <Grid item md={6} xs={6}>
        <div>{props.product.name}</div>
      </Grid>
      <Grid item md={2} xs={2}>
        <div> x{props.product.amount}</div>
      </Grid>
      <Grid item md={2} xs={2}>
        <div>{props.product.price * props.product.amount}.000</div>
      </Grid>
    </Grid>
  );
}

export default OrderItem;
