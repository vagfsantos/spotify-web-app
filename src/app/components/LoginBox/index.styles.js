import { Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import OpenInNew from "@material-ui/icons/OpenInNew";

export const LoginBox = withStyles({
  root: {
    maxWidth: "500px",
    padding: "60px",
    textAlign: "center"
  }
})(Card);

export const Description = withStyles({
  root: {
    marginTop: "20px",
    marginBottom: "40px"
  }
})(Typography);

export const MusicIcon = withStyles({
  root: {
    marginRight: "5px"
  }
})(LibraryMusic);

export const OpenNewIcon = withStyles({
  root: {
    marginRight: "5px",
    color: "white"
  }
})(OpenInNew);
