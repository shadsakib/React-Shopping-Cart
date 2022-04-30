import React from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const { setShow, itemCount } = props;

  return (
    <nav>
      <div className="nav_box">
        <span className="store_name" onClick={() => setShow(true)}>
          Shopping Basket
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="cart__icon fas fa-cart-plus"></i>
          </span>
          <span>{itemCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
