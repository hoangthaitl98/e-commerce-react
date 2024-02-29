import {
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import "./DetailPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function DetailPage(props) {
  const data = useLocation();
  const product = data.state;

  const [amountInput, setAmountInput] = useState(1);
  const ctx = useContext(CartContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };

  const addProductToCart = (event) => {
    event.preventDefault();
    const amount = amountInput;
    ctx.addProduct({
      id: product.id,
      name: product.name,
      imgLink: product.imgLink,
      amount: amount,
      price: product.price,
    });
    props.onShowCart();
  };

  return (
    <Container className={"detail-form"}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <img className={"detail-form-image"} src={product.imgLink} alt="" />
          <Carousel responsive={responsive}>
            {product.images.map((img) => (
              <div
                key={img.id}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  margin: "5px",
                  padding: "5px",
                  border: "1px solid #e6e6e6",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={img.url}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl>
            <Grid container rowSpacing={2}>
              <Grid item md={12} xs={12}>
                <Typography variant="h5">
                  {product.name.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography variant="h6">{product.price}đ</Typography>
              </Grid>
              <Grid item md={2}>
                <Typography style={{ textAlign: "left" }} variant="h6">
                  Số lượng
                </Typography>
              </Grid>
              <Grid item md={6}>
                <TextField
                  size="small"
                  type="number"
                  value={amountInput}
                  onChange={amountChangeHandler}
                  min="1"
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  style={{
                    padding: "1em 5em",
                    backgroundColor: "#2c388a",
                    borderRadius: "0",
                  }}
                  variant="contained"
                  onClick={addProductToCart}
                >
                  Mua ngay với giá {product.price}đ
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailPage;
