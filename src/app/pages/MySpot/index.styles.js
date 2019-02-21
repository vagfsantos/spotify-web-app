import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const SearchResult = withStyles({
  root: {
    maxWidth: "80%",
    margin: "auto",
    padding: "20px 10px"
  }
})(Paper);
