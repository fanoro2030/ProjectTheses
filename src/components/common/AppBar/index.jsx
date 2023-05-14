import React from 'react';

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
import SubMenu from './SubMenu';

const CustomAppBar = ({ position, isPublic, ...props }) => {
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
        <Hidden smDown>
          {isPublic &&
            homeNavigation.map((route) => {
              if (!route.subRoutes) {
                return (
                  <Button
                    key={route.url}
                    color='inherit'
                    className={classes.listContainer}
                    href={route.url}
                  >
                    {route.name}
                  </Button>
                );
              } else {
                return (
                  <SubMenu
                    key={route.url}
                    route={route}
                    className={classes.listr}
                  />
                );
              }
            })}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
