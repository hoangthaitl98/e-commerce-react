import {useLocation} from "react-router-dom";
import DetailProduct from "../../components/DetailProduct/DetailProduct";

function DetailPage(props) {
    const data = useLocation();
    const product = data.state;

    return <div>
        <DetailProduct onShowCart={props.onShowCart} product={product}></DetailProduct>
    </div>
}

export default DetailPage;
