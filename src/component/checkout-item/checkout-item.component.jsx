import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <div className="name">{name}</div>
    <div className="quantity">{quantity}</div>
    <div className="price">{price}</div>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
