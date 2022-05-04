import React, { useState } from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleRemoveCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const handleChange = (item, d) => {
    const newCart = [...cart];
    const index = newCart.indexOf(item);
    newCart[index] = { ...item };
    newCart[index].amount += d;

    if (newCart[index].amount === 0) {
      newCart[index].amount = 1;
    }
    setCart([...newCart]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} itemCount={cart.length} />
      {show ? (
        <Products
          cart={cart}
          onAdd={handleAddCart}
          onRemove={handleRemoveCart}
        />
      ) : (
        <Cart cart={cart} setCart={setCart} onChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;
