import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard(props) {
  const { product } = props;
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{ pathname: `/detail/${product.name}`, state: product }}
    >
      <Card className={"product-card"}>
        <CardContent className="content">
          <img
            className="product-img"
            src={product.imgLink}
            alt={product.name}
          />
          <img
            className="product-img-after"
            src={
              product?.images[0]?.url
                ? product?.images[0]?.url
                : product.imgLink
            }
            alt={product.name}
          />
          <h5 className="product-title">{product.name.toUpperCase()}</h5>
          <h6 className="product-price">{product.price}đ</h6>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductCard;
