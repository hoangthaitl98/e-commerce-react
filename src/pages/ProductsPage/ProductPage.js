import {Fragment} from "react";
import {Container, Grid, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductPage.css"

function ProductPage(props) {
    const {products, categories} = props;
    const data = useLocation();
    const category = data.state;
    const productsOfCategory = products.filter((product) => {
        return product.category.id === category.id
    });

    return <Fragment>
        <div className="banner">
            <div className="banner-content"></div>
        </div>
        <Container>
            <Grid container>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <ListItemText primary="DANH MỤC"/>
                        </ListItem>
                        {categories.map(category => <ListItem key={category.id}><Link className="category-item"
                                                                                      to={{
                                                                                          pathname: `/products/${category.name}`,
                                                                                          state: category
                                                                                      }}><ListItemButton><ListItemText
                            primary={category.name}/></ListItemButton></Link></ListItem>)}
                    </List>
                </Grid>
                <Grid item md={9} xs={12}>
                    <Grid container>
                        {productsOfCategory.map(product => <Grid key={product.id} item md={4}><ProductCard
                            product={product}></ProductCard></Grid>)}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Fragment>
}

export default ProductPage;
