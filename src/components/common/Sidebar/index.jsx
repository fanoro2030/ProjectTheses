import React, { useState } from 'react';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Divider,
  Drawer,
} from '@material-ui/core';
import ListItems from '../Listitems';
import { useStyles } from './sidebar_navigation.styles';
const SidebarNavigation = ({ data, ...props }) => {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(-1);

  const handleClick = (index) => {
    setOpenIndex((openIndex) => {
      if (openIndex === index) {
        return -1; // Si se hace clic en el botón padre actualmente abierto, ciérralo
      } else {
        return index; // Si se hace clic en un botón padre diferente, ciérralo y abre el nuevo botón padre
      }
    });
  };

  let renderData = data.map((item, index) => (
    <ListItems
      key={index}
      item={item}
      open={openIndex === index}
      onClick={() => handleClick(index)}
    />
  ));

  return (
    <Drawer
      variant={props.variant}
      classes={{
        paper: props.drawerPaper,
      }}
      anchor={props.anchor}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List
        className={classes.list}
        component='nav'
      >
        {renderData}
      </List>
    </Drawer>
  );
};

export default SidebarNavigation;
