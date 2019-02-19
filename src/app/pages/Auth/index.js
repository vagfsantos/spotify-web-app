import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import auth from "../../services/auth";

class Auth extends Component {
  state = {
    shouldRedirect: false,
    hasError: false
  };

  componentDidMount() {
    this.fetchTokenFromURI();
  }

  fetchTokenFromURI() {
    const hash = window.location.hash || "";
    const tokenString = hash.split(/&/)[0] || "";
    const token = tokenString.split(/=/)[1];

    if (token) {
      auth.setToken(token);
      return this.setState({ shouldRedirect: true });
    }

    window.alert("Error: Please try to login again!");
    this.setState({ hasError: true });
  }

  render() {
    return this.state.shouldRedirect ? (
      <Redirect to="/" />
    ) : this.state.hasError ? (
      <Redirect to="/login" />
    ) : (
      <p>loading...</p>
    );
  }
}

export default Auth;
