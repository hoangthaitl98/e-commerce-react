import React, { useState } from "react";

const CartContext = React.createContext({
  products: [],
  total: 0,
  open: false,
  addProduct: (product) => {},
  deleteProduct: (id) => {},
  clearCart: () => {},
});

export const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const addProduct = (product) => {
    setTotal(total + +product.price * product.amount);

    const existingCartProductIndex = products.findIndex(
      (item) => item.id === product.id
    );

    const existingCartProduct = products[existingCartProductIndex];

    let updatedProducts;
    if (existingCartProduct) {
      let updatedProduct;
      updatedProduct = {
        ...existingCartProduct,
        amount: +existingCartProduct.amount + +product.amount,
      };
      updatedProducts = [...products];
      updatedProducts[existingCartProductIndex] = updatedProduct;
    } else {
      updatedProducts = products.concat(product);
    }
    setProducts([...updatedProducts]);
  };

  const deleteProduct = (id) => {
    const existingCartProductIndex = products.findIndex(
      (product) => product.id === id
    );
    const existingCartProduct = products[existingCartProductIndex];
    let updateItems;
    if (existingCartProduct.amount === 1) {
      console.log(id);
      updateItems = products.filter((product) => product.id !== id);
    } else {
      const updatedItem = {
        ...existingCartProduct,
        amount: existingCartProduct.amount - 1,
      };
      updateItems = [...products];
      updateItems[existingCartProductIndex] = updatedItem;
    }
    setProducts([...updateItems]);
    setTotal(total - existingCartProduct.price);
  };

  const increaseAmount = (id) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].amount = +products[i].amount + 1;
        setTotal(total + +products[i].price);
      }
    }
  };
  //
  // const decreaseAmount = (id) => {
  //     for (let i = 0; i < products.length; i++) {
  //         if (products[i].id === id){
  //             products[i].amount = +products[i].amount - 1;
  //             setTotal(total - +products[i].price);
  //         }
  //     }
  // }

  const openCart = () => {
    setOpen(true);
  };
  const closeCart = () => {
    setOpen(false);
  };

  const data = {
    products,
    total,
    open,
    addProduct,
    increaseAmount,
    decreaseAmount: deleteProduct,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
