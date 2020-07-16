import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, images, name, price } = product;
  if (!product) {
    return "loading";
  }

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={images[0].src} alt="" className="item__image" />
      </Link>

      <div className="item__description">
        <h3 className="generic-content">{name}</h3>
        <div className="item__price-tag">{price}$</div>
      </div>
    </div>
  );
};

export default Item;
