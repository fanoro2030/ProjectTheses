import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';

import { useStyles } from './sidebar_navigation.styles';
const SidebarNavigation = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
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
