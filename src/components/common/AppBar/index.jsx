import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@material-ui/icons';
import { useStyles } from './app_bar.styles';
import { homeNavigation } from '../../../utils/navigationData';
import useCollapse from '../../../hooks/useCollapse';
const CustomAppBar = ({ position, isPublic, ...props }) => {
  const history = useHistory();
  const classes = useStyles({ position });
  const [isOpen, setIsOpen] = useState({});

  const handleMenuClick = (url) => {
    history.push(url);
  };

  const toggle = (index) => {
    setIsOpen({ ...isOpen, [index]: !isOpen[index] });
  };

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
                if (navItem.isMenu) {
                  return (
                    <React.Fragment key={index}>
                      <ListItem
                        button
                        onClick={() => toggle(index)}
                      >
                        <ListItemIcon>{navItem.icon}</ListItemIcon>
                        <ListItemText primary={navItem.name} />
                        {isOpen[index] ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        in={isOpen[index]}
                        timeout='auto'
                        unmountOnExit
                      >
                        {navItem.subRoutes.map((subRoute, subIndex) => (
                          <Button
                            key={subIndex}
                            color='inherit'
                            component={Typography}
                            variant='h6'
                            className={classes.subMenuButton}
                            onClick={() => handleMenuClick(subRoute.url)}
                          >
                            {subRoute.name}
                          </Button>
                        ))}
                      </Collapse>
                    </React.Fragment>
                  );
                }
                return (
                  <Button
                    key={index}
                    color='inherit'
                    component={Typography}
                    variant='h6'
                    className={classes.menuButton}
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
