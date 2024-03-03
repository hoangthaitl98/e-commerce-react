import {
  Divider,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Cart.scss";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { KeyboardArrowLeft } from "@mui/icons-material";
import ThemeButton from "../Button/Button";

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
      <div className={"cart"}>
        <div>
          <h3>Giỏ hàng của bạn</h3>
          <Divider />
        </div>
        {products.length === 0 && (
          <div style={{ textAlign: "center" }}>Giỏ hàng của bạn đang trống</div>
        )}
        {products.length !== 0 && (
          <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Sản phẩm</TableCell>
                  <TableCell align="center">Đơn giá</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell align="center">Thành tiền</TableCell>
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
          </TableContainer>
        )}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="exit-btn">
            <KeyboardArrowLeft />
            <h4>Tiếp tục mua hàng</h4>
          </div>
          <h4>Tổng: {cartCtx.total}.000đ </h4>
        </Stack>

        <div>
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
              <ThemeButton onClick={props.onClose} style={{ width: "100%" }}>
                Thanh toán đơn hàng
              </ThemeButton>
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
