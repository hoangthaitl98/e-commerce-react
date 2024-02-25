import {
  Button,
  Grid,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./CartItem.module.css";
import { Add, Remove } from "@mui/icons-material";

function CartItem(props) {
  const { product } = props;

  return (
    <TableRow>
      <TableCell>
        <Grid container>
          <Grid item md={2}>
            <img className={classes.cartItemImg} src={product.imgLink} alt="" />
          </Grid>
          <Grid item md={10}>
            {product.name}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>
        <Stack className={classes.cartItemAction} direction="row" spacing={1}>
          <Button onClick={props.onRemove}>
            <Remove />
          </Button>
          <Typography>{product.amount}</Typography>
          <Button onClick={props.onAdd}>
            <Add />
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default CartItem;
