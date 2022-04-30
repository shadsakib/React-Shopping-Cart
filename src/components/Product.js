import React from "react";
import "../styles/Product.css";

const Product = ({ item, onAdd, onRemove }) => {
  const { title, info, price, image } = item;
  return (
    <div className="product">
      <div className="image_box">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{info}</p>
        <p style={{ fontWeight: "bold" }}> Tk {price} </p>
        <button className="cart__addButton" onClick={() => onAdd(item)}>
          Add to Cart
        </button>
        <button
          className="cart__removeButton"
          onClick={() => onRemove(item.id)}
        >
          {" "}
          Remove from Cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
