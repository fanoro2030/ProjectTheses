import React from "react";
import { Box, Grid, Hidden, Typography} from "@material-ui/core";
import { useStyles } from "./slider.styles";
import Image_Slider from "../../../assets/fonts/images/logo_firts.png";
import Image_Slider1 from "../../../assets/fonts/images/logo_country.png";

const Slider = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.content_slider}>
      <Grid container className={classes.items_slider}>
        <Hidden xsDown>
          {" "}
          <Box
            component="img"
            src={Image_Slider}
            className={classes.image_logo_plant}
          />
        </Hidden>
        <Grid className={classes.content_tittle}>
          <Typography className={classes.typography}>
            MINISTERIO DE DESARROLLO
          </Typography>
          <Typography className={classes.typography}>
            RURAL Y TIERRAS
          </Typography>
          <Typography className={classes.typography}>
            DEPARTAMENTAL POTOSÍ
          </Typography>
        </Grid>

        <Hidden xsDown>
          <Box
            component="img"
            src={Image_Slider1}
            className={classes.image_country}
          />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Slider;
