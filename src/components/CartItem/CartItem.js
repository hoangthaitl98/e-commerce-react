import { Grid, TableCell, TableRow } from "@mui/material";
import "./CartItem.scss";
import { Add, Remove } from "@mui/icons-material";

function CartItem(props) {
  const { product } = props;

  return (
    <TableRow>
      <TableCell>
        <Grid container>
          <Grid item md={2}>
            <img className="cart-item-img" src={product.imgLink} alt="" />
          </Grid>
          <Grid item md={10}>
            {product.name}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>
        <div className="cart-item-action">
          <div className="action-button" onClick={props.onRemove}>
            <Remove className="action-icon" />
          </div>
          <div className="amount">{product.amount}</div>
          <div className="action-button" onClick={props.onAdd}>
            <Add className="action-icon" />
          </div>
        </div>
      </TableCell>
      <TableCell>{product.price * product.amount}.000đ</TableCell>
    </TableRow>
  );
}

export default CartItem;
