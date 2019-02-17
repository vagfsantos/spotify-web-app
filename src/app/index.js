import React, { Component } from "react";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import store from "../state-manager/store";
import theme from "./theme";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Login />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
