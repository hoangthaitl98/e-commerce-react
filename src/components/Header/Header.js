import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./Header.module.css";
import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function Header(props) {
  const cartCtx = useContext(CartContext);
  const numberOfProduct = cartCtx.products.reduce((curNumber, product) => {
    return curNumber + +product.amount;
  }, 0);

  const categories = props.categories;

  return (
    <div className={classes.header}>
      <Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item md={4} xs={12}>
            <img
              src="https://bizweb.dktcdn.net/100/446/202/themes/848642/assets/logo.png?1648632451195"
              alt=""
            ></img>
          </Grid>
          <Grid item md={4} xs={6}>
            <TextField
              size="small"
              fullWidth
              placeholder="search"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={4} xs={6}>
            <Button
              className={classes.cartButton}
              variant="outlined"
              onClick={props.onShowCart}
            >
              <ShoppingCartCheckoutOutlined />
              Giỏ hàng ({numberOfProduct})
            </Button>
          </Grid>
        </Grid>
        <Divider />
        <Stack className={classes.routeList} direction="row" spacing={5}>
          <Link style={{ textDecoration: "none" }} to={{ pathname: `/` }}>
            <Typography variant="body1">TRANG CHỦ</Typography>
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              style={{ textDecoration: "none" }}
              to={{ pathname: `/products/${category.name}`, state: category }}
            >
              <Typography variant="body1">
                {category.name.toUpperCase()}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Container>
      <Divider />
    </div>
  );
}

export default Header;
