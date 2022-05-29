import {Button, Container, FormControl, Grid, TextField, Typography} from "@mui/material";
import classes from "./DetailProduct.module.css";
import {useContext, useState} from "react";
import CartContext from "../../context/CartContext";

function DetailProduct(props) {
    const {product} = props;
    const [amountInput, setAmountInput] = useState(1);
    const ctx = useContext(CartContext);

    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);
    }

    const addProductToCart = (event) => {
        event.preventDefault();
        const amount = amountInput;
        ctx.addProduct({
            id: props.product.id,
            name: props.product.name,
            imgLink: props.product.imgLink,
            amount: amount,
            price: props.product.price
        });
        props.onShowCart();
    }

    return <Container className={classes.detailForm}>
        <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
                <img className={classes.detailFormImage} src={product.imgLink} alt=""/>
            </Grid>
            <Grid item md={6} xs={12}>
                <FormControl>
                    <Grid container rowSpacing={2}>
                        <Grid item md={12} xs={12}>
                            <Typography variant="h5">{product.name.toUpperCase()}</Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant="h6">{product.price}đ</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography style={{textAlign: "left"}} variant="h6">Số lượng</Typography>
                        </Grid>
                        <Grid item md={6}>
                            <TextField size="small" type="number" value={amountInput} onChange={amountChangeHandler}
                                       min="1"/>
                        </Grid>
                        <Grid item md={12}>
                            <Button style={{
                                padding: "1em 5em",
                                backgroundColor: "darkblue",
                                borderRadius: "0"
                            }}
                                    variant="contained" onClick={addProductToCart}>
                                Mua ngay với giá {product.price}đ
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </Grid>
        </Grid>
    </Container>
}

export default DetailProduct;
