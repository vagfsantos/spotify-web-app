import React from "react";
import { Typography, Button } from "@material-ui/core";
import { LoginBox, MusicIcon, Description, OpenNewIcon } from "./index.styles";

export default ({ onLogin }) => (
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

    <Button
      onClick={onLogin}
      color="primary"
      size="large"
      variant="contained"
      data-test="login-button"
    >
      <OpenNewIcon fontSize="small" />
      <Typography variant="button">Login with spotify</Typography>
    </Button>
  </LoginBox>
);
