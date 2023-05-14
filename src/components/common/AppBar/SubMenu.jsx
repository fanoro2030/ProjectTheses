import React, { useState } from 'react';
import {
  makeStyles,
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    justifyContent: 'space-between',
  },
  subMenu: {
    padding: theme.spacing(1),
    width: 200,
  },
}));

const SubMenu = ({ route, className }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        className={className}
        color='inherit'
        onClick={handleClick}
      >
        {route.name}
        <ExpandMoreIcon />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List className={classes.subMenu}>
          {route.subRoutes.map((subRoute) => (
            <ListItem
              key={subRoute.name}
              button
              component='a'
              href={subRoute.url}
              onClick={handleClose}
              className={classes.menuItem}
            >
              <ListItemText primary={subRoute.name} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default SubMenu;
