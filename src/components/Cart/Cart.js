import {
  Box,
  Button,
  Divider,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { KeyboardArrowLeft } from "@mui/icons-material";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const products = cartCtx.products;
  const total = cartCtx.total;

  const cartProductAddHandler = (id) => {
    cartCtx.increaseAmount(id);
  };

  const cartProductRemoveHandler = (id) => {
    cartCtx.decreaseAmount(id);
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.cart}>
        <Typography variant="h6">Giỏ hàng của bạn</Typography>
        <Divider />
        {products.length === 0 && (
          <Typography variant="body1">Giỏ hàng của bạn đang trống</Typography>
        )}
        {products.length !== 0 && (
          <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Sản phẩm</TableCell>
                  <TableCell align="center">Đơn giá</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartCtx.products.map((product) => (
                  <CartItem
                    onAdd={cartProductAddHandler.bind(null, product.id)}
                    onRemove={cartProductRemoveHandler.bind(null, product.id)}
                    key={product.id}
                    product={product}
                  ></CartItem>
                ))}
              </TableBody>
            </Table>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5">Tổng: </Typography>
              <Typography variant="h5">{cartCtx.total}.000đ </Typography>
            </Stack>
          </TableContainer>
        )}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={props.onClose}>
            <KeyboardArrowLeft />
            Tiếp tục mua hàng
          </Button>
          {products.length !== 0 && (
            <Link
              to={{
                pathname: "/order",
                state: {
                  products: products,
                  total: total,
                },
              }}
            >
              <Button onClick={props.onClose} variant="contained">
                Đặt hàng
              </Button>
            </Link>
          )}
        </Stack>
      </Box>
    </Modal>
  );
}

export default Cart;
