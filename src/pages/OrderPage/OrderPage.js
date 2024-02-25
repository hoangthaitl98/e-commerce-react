import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import OrderInfo from "../../components/OrderInfo/OrderInfo";

function OrderPage() {
  const data = useLocation();
  const productsInCart = data.state.products;
  const total = data.state.total;

  return (
    <Fragment>
      <OrderInfo products={productsInCart} total={total} />
    </Fragment>
  );
}

export default OrderPage;
