import React from "react";
import FormInput from "./../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButtom from "./../custom-button/custom-button.component";

//Firebase Imports
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Error in Sign in User", error);
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButtom type="submit">SIGN IN</CustomButtom>
            <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN Google
            </CustomButtom>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
