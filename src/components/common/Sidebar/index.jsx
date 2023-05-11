import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';

import { useStyles } from './sidebar_navigation.styles';
const SidebarNavigation = (props) => {
  const classes = useStyles();

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

      <Divider />
    </Drawer>
  );
};

export default SidebarNavigation;
