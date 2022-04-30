import React from "react";
import items from "../data";
import Product from "./Product";
import "../styles/Products.css";

const Products = (props) => {
  const { onAdd, onRemove } = props;

  return (
    <section>
      {items.map((item) => (
        <Product key={item.id} item={item} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Products;
