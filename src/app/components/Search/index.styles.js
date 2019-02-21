import { withStyles } from "@material-ui/core/styles";
import { Paper, RadioGroup } from "@material-ui/core";

export const SearchBox = withStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      minHeight: "400px"
    },

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "80%",
    margin: "100px auto 30px",
    padding: "20px 10px"
  }
}))(Paper);

export const Radios = withStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  }
}))(RadioGroup);
