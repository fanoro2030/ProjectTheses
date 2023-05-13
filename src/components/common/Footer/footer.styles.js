import { makeStyles } from "@material-ui/core";
import background from "../../../assets/fonts/images/Author_project.jpg";
export const useStyles = makeStyles((theme) => ({
  content_footer: {
    backgroundImage: `url(${background})`,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
  },

  paperstyle: {
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid orange",
    width: "100%",
    padding: theme.spacing(1),
  },
  image_github: {
    backgroundColor: "green",
    width: "2rem",
    height: "2rem",
    display: "flex",
    borderRadius: "50%",
  },
}));
