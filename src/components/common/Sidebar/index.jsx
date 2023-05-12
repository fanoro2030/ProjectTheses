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
  const [open, setOpen] = useState(false);
  const handleClick = (index) => {
    setOpenIndex((openIndex) => {
      if (openIndex === index) {
        return -1; // Si se hace clic en el botón padre actualmente abierto, ciérralo
      } else {
        // Si se hace clic en un botón padre diferente, ciérralo y abre el nuevo botón padre
        // Además, cierra cualquier otro botón padre que esté abierto
        data.forEach((item, i) => {
          if (item.subRoutes) {
            if (i === index) {
              setOpen(true);
              if (openIndex !== -1 && data[openIndex].subRoutes) {
                setOpenIndex(-1);
                setOpen(false);
              }
            } else {
              setOpenIndex(-1);
              setOpen(false);
            }
          } else if (openIndex === i) {
            setOpen(false);
          }
        });
        return index;
      }
    });
  };

  let renderData = data.map((item, index) => (
    <ListItems
      key={index}
      item={item}
      open={openIndex === index}
      onClick={() => handleClick(index)}
      setParentOpen={setOpen}
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
