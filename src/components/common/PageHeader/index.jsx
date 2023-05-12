import React from "react";
import { Box, Toolbar, Typography, Grid, Card } from "@material-ui/core";
import { useStyles } from "./page_header.styles";

const PageHeader = (props) => {
  const classes = useStyles();
  const { title, icon, children } = props;

  return (
    <Grid container>
      <Box position="fixed" width="100%" zIndex={2}>
        <Toolbar variant="dense" className={classes.toolbar}>
          {" "}
          <Card className={classes.pageIcon}>{icon}</Card>
          {title && (
            <Typography variant="h6" noWrap className={classes.headerTitle}>
              {title}
            </Typography>
          )}
          {children}
        </Toolbar>
      </Box>
      <Toolbar variant="dense" />
    </Grid>
  );
};

export default PageHeader;
