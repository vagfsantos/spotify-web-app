import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: green,
    type: "dark"
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
