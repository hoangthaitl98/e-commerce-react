import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";
import { Fragment } from "react";

function HomePage(props) {
  const { products, categories } = props;

  return (
    <Fragment>
      <Slider></Slider>
      {categories.map((category) => (
        <Products
          key={category}
          category={category}
          products={products}
          categories={categories}
        ></Products>
      ))}
    </Fragment>
  );
}

export default HomePage;
