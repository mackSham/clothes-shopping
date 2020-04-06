import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import { auth } from "./../../firebase/firebase-utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option">CONTACT</Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOG OUT
        </div>
      ) : (
        <Link className="option" to="/signIn/">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
const mapsStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapsStateToProps)(Header);
