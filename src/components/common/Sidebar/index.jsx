import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { List } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItems from '../Listitems';
import { useStyles } from './sidebar_navigation.styles';

const SidebarNavigation = ({ data, collapsed, ...props }) => {
  const classes = useStyles();
  const [openIndex, setOpenIndex] = useState(-1);
  const [currentButton, setCurrentButton] = useState(-1);

  const handleClick = (index) => {
    setOpenIndex((openIndex) => {
      if (openIndex === index) {
        return -1;
      } else {
        if (data[index].subRoutes) {
          setCurrentButton(index);
        } else {
          setOpenIndex(-1);
          setCurrentButton(-1);
        }

        return index;
      }
    });
  };

  const handleItemClick = (index) => {
    if (!data[index].subRoutes) {
      setOpenIndex(-1);
      setCurrentButton(-1);
    }
  }

  let renderData = data?.map((item, index) => {
    return (
      <ListItems
        key={index}
        item={item}
        open={openIndex === index}
        onClick={() => handleClick(index)}
        onItemClick={() => handleItemClick(index)}
      />
    );
  });

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
