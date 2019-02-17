import React, { Component } from "react";
import { Grid, withStyles } from "@material-ui/core";
import LoginBox from "../../components/LoginBox";

const FullPage = withStyles({
  container: {
    height: "100vh"
  }
})(Grid);

class Login extends Component {
  render() {
    return (
      <FullPage container direction="row" justify="center" alignItems="center">
        <LoginBox />
      </FullPage>
    );
  }
}

export default Login;
