import React, { useState } from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden, Box } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import { useStyles } from './page_landing.styles';
const PageLandingLayout = ({ children }) => {
  const classes = useStyles();

  const [mobileOpen, handleDrawerToggle] = useDrawer();

  return (
    <div className={classes.root}>
      <CustomAppBar
        position='right'
        handleDrawerToggle={handleDrawerToggle}
      />
      <Hidden smDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
        />
      </Hidden>
      <Hidden mdUp>
        <SidebarNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />{' '}
      </Hidden>
      <main className={classes.content}>
        <div />
        {children}
      </main>
    </div>
  );
};

export default PageLandingLayout;
