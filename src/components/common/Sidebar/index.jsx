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
        return -1;
      } else {
        data.forEach((item, i) => {
          if (item.subRoutes) {
            if (i === index) {
              setOpen(true);
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

  const handleNonNestedItemClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
      setOpen(true); // Abre el SidebarNavigation cuando se hace clic en un ListItem sin subrutas
    }
  };

  let renderData = data.map((item, index) => (
    <ListItems
      key={index}
      item={item}
      open={openIndex === index}
      onClick={() => handleClick(index)}
      setParentOpen={setOpen}
      handleNonNestedItemClick={() => handleNonNestedItemClick(index)}
    />
  ));

  return (
    <Drawer
      variant={props.variant}
      classes={{
        paper: props.drawerPaper,
      }}
      anchor={props.anchor}
      open={open || props.open} // Abre el SidebarNavigation cuando se hace clic en un ListItem sin subrutas
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
