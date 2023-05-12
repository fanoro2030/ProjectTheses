import React from 'react';

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

  let renderData = data?.map((item, index) => {
    return <ListItems item={item} />;
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
