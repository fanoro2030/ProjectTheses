import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './app_bar.styles';
const CustomAppBar = ({ position, ...props }) => {
  const classes = useStyles({ position });

  return (
    <AppBar
      position='fixed'
      className={props.appBar}
    >
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='end'
            onClick={() => props.handleDrawerToggle()}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
