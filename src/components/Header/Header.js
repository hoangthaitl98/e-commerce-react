import { Container, Divider, Grid, Stack } from "@mui/material";
import {
  ShoppingCartCheckoutOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  const [activeRoute, setActiveRoute] = useState(0);

  const cartCtx = useContext(CartContext);
  const numberOfProduct = cartCtx.products.reduce((curNumber, product) => {
    return curNumber + +product.amount;
  }, 0);

  const categories = props.categories;

  return (
    <div className={"header"}>
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
            <input className="input-search" placeholder="Tìm kiếm" />
            <span>
              <button className="search-btn">
                <SearchOutlined className="search-icon"></SearchOutlined>
              </button>
            </span>
          </Grid>
          <Grid item md={4} xs={6}>
            <div className={"cart-button"} onClick={props.onShowCart}>
              Giỏ hàng
              <ShoppingCartCheckoutOutlined style={{ fontSize: "18px" }} />
              <div className="cart-badge">{numberOfProduct}</div>
            </div>
          </Grid>
        </Grid>
        <Divider />
        <Stack className={"route-list"} direction="row" spacing={5}>
          <Link to={{ pathname: `/` }}>
            <h3
              className={`route-title ${
                activeRoute === 0 ? "active-route" : ""
              }`}
              onClick={() => setActiveRoute(0)}
            >
              TRANG CHỦ
            </h3>
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={{ pathname: `/products/${category.name}`, state: category }}
            >
              <h3
                className={`route-title ${
                  activeRoute === category.id ? "active-route" : ""
                }`}
                onClick={() => setActiveRoute(category.id)}
              >
                {category.name.toUpperCase()}
              </h3>
            </Link>
          ))}
        </Stack>
      </Container>
      <Divider />
    </div>
  );
}

export default Header;
