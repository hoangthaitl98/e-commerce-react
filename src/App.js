import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import OrderPage from "./pages/OrderPage/OrderPage";
import ProductPage from "./pages/ProductsPage/ProductPage";
import { PRODUCTS } from "./asset/Products";
import { CATEGORIES } from "./asset/Category";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const products = PRODUCTS;
  const categories = CATEGORIES;

  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <Fragment>
      <CartProvider>
        {cartIsShow && (
          <Cart open={cartIsShow} onClose={hideCartHandler}></Cart>
        )}
        <Header
          products={products}
          categories={categories}
          onShowCart={showCartHandler}
        ></Header>
        <Switch>
          <Route path="/" exact>
            <HomePage products={products} categories={categories}></HomePage>
          </Route>
          <Route path="/products/:name">
            <ProductPage
              products={products}
              categories={categories}
            ></ProductPage>
          </Route>
          <Route path="/detail/:id" exact>
            <DetailPage onShowCart={showCartHandler}></DetailPage>
          </Route>
          <Route path="/order">
            <OrderPage></OrderPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </CartProvider>
    </Fragment>
  );
}

export default App;
