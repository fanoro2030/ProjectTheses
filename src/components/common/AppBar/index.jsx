import React from 'react';
import { useHistory } from 'react-router-dom';
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

const CustomAppBar = ({ position, isPublic, ...props }) => {
  const history = useHistory();

  const handleMenuClick = (url) => {
    history.push(url);
  };

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
          {isPublic && (
            <div>
              {homeNavigation.map((navItem, index) => {
                return (
                  <Button
                    key={index}
                    color='inherit'
                    component={Typography}
                    variant='h6'
                    onClick={() => handleMenuClick(navItem.url)}
                  >
                    {navItem.name}
                  </Button>
                );
              })}
            </div>
          )}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
