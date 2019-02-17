import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import LoginBox from "../../components/LoginBox";
import { SPOTIFY_AUTH_URI } from "../../enums/auth";

const FullPage = withStyles({
  container: {
    height: "100vh"
  }
})(Grid);

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
