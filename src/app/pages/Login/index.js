import React, { Component } from "react";
import { connect } from "react-redux";
import { FullPage } from "./index.styles";
import LoginBox from "../../components/LoginBox";
import { SPOTIFY_AUTH_URI } from "../../enums/auth";

class Login extends Component {
  render() {
    const { redirectToAuthenticationURI } = this.props;

    return (
      <FullPage container direction="row" justify="center" alignItems="center">
        <LoginBox onLogin={redirectToAuthenticationURI} />
      </FullPage>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    redirectToAuthenticationURI() {
      window.location.href = SPOTIFY_AUTH_URI;
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
