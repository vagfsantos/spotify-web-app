import React from "react";
import { Typography, Card, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import OpenInNew from "@material-ui/icons/OpenInNew";

const LoginBox = withStyles({
  root: {
    maxWidth: "500px",
    padding: "60px",
    textAlign: "center"
  }
})(Card);

const Description = withStyles({
  root: {
    marginTop: "20px",
    marginBottom: "40px"
  }
})(Typography);

const MusicIcon = withStyles({
  root: {
    marginRight: "5px"
  }
})(LibraryMusic);

const OpenNewIcon = withStyles({
  root: {
    marginRight: "5px",
    color: "white"
  }
})(OpenInNew);

export default () => (
  <LoginBox>
    <MusicIcon color="primary" fontSize="large" />
    <Typography inline variant="h3" color="primary">
      MySpot
    </Typography>

    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ex
      erat, sit amet condimentum ligula cursus pharetra. Phasellus ut nunc
      dignissim, cursus ante vitae, laoreet tellus.
    </Description>

    <Button color="primary" size="large" variant="contained">
      <OpenNewIcon fontSize="small" />
      <Typography variant="button">Login with spotify</Typography>
    </Button>
  </LoginBox>
);
