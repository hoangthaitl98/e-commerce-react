import {Container, Grid, Typography} from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Products.module.css";

function Products(props) {
    const {products, category} = props;
    return <Container className={classes.productList}>
        <Typography className={classes.productListTitle} variant="h5"><b>{category.name.toUpperCase()}</b></Typography>
        <Grid container className={classes.productListContent}>
            {products.map(product => {
                if (product.category.id === category.id) return <Grid key={product.id} item md={3}><ProductCard
                    product={product}></ProductCard></Grid>
            })}
        </Grid>
    </Container>
}

export default Products;
