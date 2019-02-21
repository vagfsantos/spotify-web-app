import { withStyles } from "@material-ui/core/styles";
import { ListItem, Avatar, Typography } from "@material-ui/core";

export const Track = withStyles(theme => ({
  root: {
    padding: "15px 0",
    borderBottom: "1px solid #555",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: " center"
    }
  }
}))(ListItem);

export const Image = withStyles({
  root: {
    width: "80px",
    height: "80px"
  }
})(Avatar);

export const TrackTitle = withStyles({
  root: {
    fontSize: "12px",
    fontWeight: "700",
    margin: 0
  }
})(Typography);

export const AlbumName = withStyles({
  root: {
    fontSize: "12px",
    fontWeight: "300",
    margin: 0
  }
})(Typography);

export const ArtirtNames = withStyles({
  root: {
    fontSize: "10px",
    fontWeight: "300",
    fontStyle: "italic",
    margin: 0
  }
})(Typography);
