import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Hidden,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import { homeNavigation } from '../../../utils/navigationData';
const CustomAppBar = ({ position, ...props }) => {
  const location = useLocation();
  const publicRoutes = homeNavigation.filter((route) => route.public);
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
        {publicRoutes.map((route) => (
          <Button
            key={route.name}
            color='inherit'
            component={Typography}
            variant='h6'
            onClick={() => console.log(route.url)}
            style={{
              display: location.pathname === route.url ? 'none' : 'block',
            }}
          >
            {route.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
