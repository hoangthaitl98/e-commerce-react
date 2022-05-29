import {Card, CardContent, Typography} from "@mui/material";
import classes from "./ProductCard.module.css";
import {Link} from "react-router-dom";

function ProductCard(props) {
    const {product} = props
    return <Link style={{textDecoration: "none"}} to={{pathname: `/detail/${product.id}`, state: product}}>
        <Card className={classes.productCard}>
            <CardContent>
                <img className={classes.productImg} src={product.imgLink} alt=""/>
                <Typography>{product.name.toUpperCase()}</Typography>
                <Typography style={{color: "red"}}>{product.price}đ</Typography>
            </CardContent>
        </Card>
    </Link>
}

export default ProductCard;
