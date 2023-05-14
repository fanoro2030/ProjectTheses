import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const CustomButton = ({ label, href, subRoutes }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        aria-controls='sub-routes'
        aria-haspopup='true'
        className={classes.button}
        color='primary'
        component='a'
        href={href}
        onClick={subRoutes && handleMenuClick}
      >
        {label}
        {subRoutes && <ExpandMoreIcon />}
      </Button>
      {subRoutes && (
        <Menu
          id='sub-routes'
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {subRoutes.map((subRoute, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component='a'
              href={subRoute.url}
            >
              {subRoute.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default CustomButton;
