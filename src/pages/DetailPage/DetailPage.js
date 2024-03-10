import { Breadcrumbs, Container, Divider, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import "./DetailPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ThemeButton from "../../components/Button/Button";
import { sizes } from "../../asset/Size";
import SelectImg from "../../asset/images/select-pro.png";
import PolicyImg from "../../asset/images/policy_image.svg";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

function DetailPage(props) {
  const data = useLocation();
  const product = data.state;

  const [amountInput, setAmountInput] = useState(1);
  const [activeId, setActiveId] = useState();
  const [selectedImage, setSelectedImage] = useState();
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

  const increaseAmount = () => {
    setAmountInput((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (amountInput > 1) {
      setAmountInput((prev) => prev - 1);
    }
  };

  return (
    <>
      <Divider />
      <Container>
        <Breadcrumbs className="breadcrums">
          <Link to={{ pathname: "/" }}>
            <div className="breadcrumbs-title">Trang chủ</div>
          </Link>
          <Link
            to={{
              pathname: `/products/${product.category.name}`,
              state: product.category,
            }}
          >
            <div className="breadcrumbs-title">{product.category.name}</div>
          </Link>
          <Link
            to={{
              pathname: `/detail/${product.name}`,
              state: product,
            }}
          >
            <div className="breadcrumbs-title">{product.name}</div>
          </Link>
        </Breadcrumbs>
      </Container>
      <Divider />
      <Container className={"detail-form"}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <div className="avatar-image">
              <img
                className={"detail-form-image"}
                src={selectedImage ? selectedImage?.url : product.imgLink}
                alt=""
              />
            </div>
            <Carousel responsive={responsive}>
              {product.images?.map((img) => (
                <div
                  key={img.id}
                  className={
                    img.id === selectedImage?.id
                      ? "carousel-item selected"
                      : "carousel-item"
                  }
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img.url} alt="" />
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container rowSpacing={2}>
              <Grid className="info-item" item md={12} xs={12}>
                <h2>{product.name.toUpperCase()}</h2>
              </Grid>
              <Grid className="info-item" item md={12} xs={12}>
                <h2>{product.price}đ</h2>
              </Grid>
              <Grid className="info-item" item md={12}>
                <div style={{ fontWeight: "500", textAlign: "left" }}>
                  Tình trạng: <span style={{ color: "#ffd525" }}>Còn hàng</span>{" "}
                </div>
              </Grid>
              <Grid item lg={12} className="info-item size">
                <div>Kích thước: </div>
                {sizes.map((size) => (
                  <div
                    key={size.id}
                    className={
                      activeId === size.id ? "size-item active" : "size-item"
                    }
                    onClick={() => setActiveId(size.id)}
                  >
                    {size.name}
                    {activeId === size.id && <img src={SelectImg} alt="" />}
                  </div>
                ))}
              </Grid>
              <Grid className="info-item quantity" item lg={12}>
                <Grid item md={2}>
                  <div style={{ textAlign: "left" }}>Số lượng:</div>
                </Grid>
                <Grid item md={6}>
                  <div className="quantity-input">
                    <div className="quantity-button" onClick={decreaseAmount}>
                      <Remove className="quantity-icon" />
                    </div>
                    <div className="quantity-value">{amountInput}</div>
                    <div className="quantity-button" onClick={increaseAmount}>
                      <Add className="quantity-icon" />
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid item md={12} className="info-item">
                <div style={{ fontWeight: "500", textAlign: "left" }}>
                  Gọi đặt mua: <span style={{ color: "red" }}>0826137137</span>{" "}
                </div>
              </Grid>
              <Grid item md={12}>
                <ThemeButton className="btn-order" onClick={addProductToCart}>
                  <div className="btn-title">
                    Mua ngay với giá {product.price}đ
                  </div>
                  <div className="btn-sub-title">Đặt mua giao hàng tận nơi</div>
                </ThemeButton>
              </Grid>
              <Grid item md={12} className="info-item">
                <img style={{ height: "35px" }} src={PolicyImg} alt="" />
                <div style={{ fontWeight: "500", textAlign: "left" }}>
                  CAM KẾT{" "}
                  <span style={{ fontWeight: "bold" }}>100% CHÍNH HÃNG</span>{" "}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DetailPage;
