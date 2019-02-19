import React, { Component } from "react";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { BrowserRouter, Route } from "react-router-dom";
import store from "../state-manager/store";
import theme from "./theme";

import Login from "./pages/Login";
import Auth from "./pages/Auth";
import MySpot from "./pages/MySpot";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Route exact path="/" component={MySpot} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/auth" component={Auth} />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
