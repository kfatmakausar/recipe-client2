import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, logout } from "../../thunks";
import { AuthFormView } from "../views";
import { Redirect } from "react-router-dom";

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToHome: false,
      redirectToProfile: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
    this.setState({ redirectToProfile: true });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }
    if (this.state.redirectToProfile && this.props.isLoggedIn) {
      return <Redirect to="/profile" />;
    }
    return (
      <AuthFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        userEmail={this.props.userEmail}
      />
    );
  }
}

// Map state to props;
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

// Map state to props;
const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

const mapLogout = (state) => {
  return {
    name: "logout",
    displayName: "Sign out",
    error: state.user.error,
    userEmail: state.user.email,
    isLoggedIn: !!state.user.id,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    loginOrSignup: (email, password, formName) =>
      dispatch(auth(email, password, formName)),
  };
};

const mapDispatchLogout = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormContainer);
export const Logout = connect(mapLogout, mapDispatchLogout)(AuthFormContainer);
