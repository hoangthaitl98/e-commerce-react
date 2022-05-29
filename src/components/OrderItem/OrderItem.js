import {Grid, Typography} from "@mui/material";
import "./OrderItem.css"

function OrderItem(props) {
    return <Grid className="order-item" container spacing={1}>
        <Grid item md={2} xs={2}>
            <img className="order-item-img" src={props.product.imgLink} alt=""/>
        </Grid>
        <Grid item md={6} xs={6}>
            <Typography variant="body2">{props.product.name}</Typography>
        </Grid>
        <Grid item md={2} xs={2}>
            <Typography variant="body2"> x{props.product.amount}</Typography>
        </Grid>
        <Grid item md={2} xs={2}>
            <Typography variant="body2">{props.product.price * props.product.amount}.000</Typography>
        </Grid>
    </Grid>;
}

export default OrderItem;
