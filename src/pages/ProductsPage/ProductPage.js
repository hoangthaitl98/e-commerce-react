import { Fragment } from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductPage.scss";

function ProductPage(props) {
  const { products, categories } = props;
  const data = useLocation();
  const category = data.state;

  const productsOfCategory = products.filter((product) => {
    return product.category.id === category.id;
  });

  return (
    <Fragment>
      <div className="banner">
        <div className="banner-content"></div>
      </div>
      <Container>
        <Grid container>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <ListItemText primary="DANH MỤC" />
              </ListItem>
              {categories.map((category) => (
                <ListItem key={category.id}>
                  <Link
                    className="category-item"
                    to={{
                      pathname: `/products/${category.name}`,
                      state: category,
                    }}
                  >
                    <ListItemButton>
                      <ListItemText primary={category.name} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item md={9} xs={12}>
            <div className="filter-right">
              <div>Xếp theo:</div>
              <div className="radio-btn">
                <input type="radio" id="nameA-Z" name="filter" value={1} />
                <label for="nameA-Z">Từ A-Z</label>
              </div>
              <div className="radio-btn">
                <input type="radio" id="nameZ-A" name="filter" value={2} />
                <label for="nameZ-A">Từ Z-A</label>
              </div>
              <div className="radio-btn">
                <input type="radio" id="priceASC" name="filter" value={3} />
                <label for="priceASC">Giá thấp đến cao</label>
              </div>
              <div className="radio-btn">
                <input type="radio" id="priceDESC" name="filter" value={4} />
                <label for="priceDESC">Giá cao đến thấp</label>
              </div>
            </div>
            <Grid container>
              {productsOfCategory.map((product) => (
                <Grid key={product.id} item md={4}>
                  <ProductCard product={product}></ProductCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default ProductPage;
