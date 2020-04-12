import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length === 0 ? (
        <span className="empty-message">Your Cart is empty</span>
      ) : (
        cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id}></CartItem>
        ))
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
