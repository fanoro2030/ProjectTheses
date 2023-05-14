import React, { useState } from 'react';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { useStyles } from './custom_button.styles';
const CustomButton = ({ size, color, variant, label, href, subRoutes }) => {
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
        variant={variant || 'contained'}
        size={size || 'large'}
        color={color || 'primary'}
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
          variant={variant || 'contained'}
          size={size || 'large'}
          color={color || 'primary'}
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
