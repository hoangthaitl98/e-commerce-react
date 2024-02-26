import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { KeyboardArrowLeft } from "@mui/icons-material";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./OrderPage.scss";

function OrderPage() {
  const data = useLocation();
  const productsInCart = data.state.products;
  const total = data.state.total;

  const [inputInfo, setInputInfo] = useState({
    email: "",
    fullname: "",
    phoneNumber: "",
    address: "",
  });

  function inputInfoHandler(event) {
    const name = event.target.value;
    const value = event.target.value;
  }

  return (
    <Container className="order">
      <FormControl className="order-form">
        <Grid container spacing={2}>
          <Grid item md={7} className="order-form-info">
            <Typography variant="h5">Thông tin nhận hàng</Typography>
            <TextField
              name="email"
              value={inputInfo.email}
              size="small"
              placeholder="Email"
              className="order-info-form-input"
              onChange={inputInfoHandler}
            />
            <TextField
              name="fullname"
              value={inputInfo.fullname}
              size="small"
              placeholder="Họ và tên"
              className="order-info-form-input"
              onChange={inputInfoHandler}
            />
            <TextField
              name="phoneNumber"
              value={inputInfo.phoneNumber}
              size="small"
              placeholder="Số điện thoại"
              className="order-info-form-input"
              onChange={inputInfoHandler}
            />
            <TextField
              name="address"
              value={inputInfo.address}
              size="small"
              placeholder="Địa chỉ"
              className="order-info-form-input"
              onChange={inputInfoHandler}
            />
          </Grid>
          <Grid item md={5} className="order-product-list">
            <Typography variant="h5">Đơn hàng</Typography>
            <Divider />
            {productsInCart.map((product) => (
              <OrderItem key={product.id} product={product} total={total} />
            ))}
            <Divider />
            <Typography variant="h6">Tổng cộng: {total}.000</Typography>
          </Grid>
          <Grid item md={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button>
                {" "}
                <KeyboardArrowLeft />
                Tiếp tục mua hàng
              </Button>
              <Button variant="contained">Xác nhận</Button>
            </Stack>
          </Grid>
        </Grid>
      </FormControl>
    </Container>
  );
}

export default OrderPage;
