import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = (props) => {
  const { cart, setCart, onChange } = props;

  const [price, setPrice] = useState(0);

  const handleRemove = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    handlePrice();
  };

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (total += item.amount * item.price));
    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => onChange(item, -1)}>-</button>
            <button> {item.amount} </button>
            <button onClick={() => onChange(item, 1)}>+</button>
          </div>
          <div>
            <span>Tk {item.price * item.amount}</span>
            <button
              className="removeButton"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of Cart</span>
        <span style={{ paddingRight: "50px" }}> Tk {price}</span>
      </div>
    </article>
  );
};

export default Cart;
