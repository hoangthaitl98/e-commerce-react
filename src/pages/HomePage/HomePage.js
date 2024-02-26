import Slider from "../../components/Slider/Slider";
import { Fragment } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./HomePage.scss";

function HomePage(props) {
  const { products, categories } = props;

  return (
    <Fragment>
      <Slider></Slider>
      {categories.map((category) => (
        <Container className={"product-list"}>
          <Typography className={"title"} variant="h5">
            <b>{category.name.toUpperCase()}</b>
          </Typography>
          <Grid container className={"content"}>
            {products.map((product) => {
              if (product.category.id === category.id)
                return (
                  <Grid key={product.id} item md={3}>
                    <ProductCard product={product} />
                  </Grid>
                );
              return <></>;
            })}
          </Grid>
        </Container>
      ))}
    </Fragment>
  );
}

export default HomePage;
