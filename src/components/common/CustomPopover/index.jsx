import React, { useState } from 'react';
import { Popover, List, ListItem, ListItemText } from '@material-ui/core';

const SubMenu = ({ subRoutes, open, anchorEl, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List>
        {subRoutes.map((subItem, subIndex) => (
          <ListItem
            key={subIndex}
            button
            onClick={() => console.log(subItem.url)}
          >
            <ListItemText primary={subItem.name} />
          </ListItem>
        ))}
      </List>
    </Popover>
  );
};

export default SubMenu;
