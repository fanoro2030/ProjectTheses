import React, { useState } from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden, Box } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import { useStylesPageLayout } from './page_landing.styles';
const PageLandingLayout = ({ children }) => {
  const classes = useStylesPageLayout();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <div className={classes.root}>
      <CustomAppBar
        position='right'
        handleDrawerToggle={handleDrawerToggle}
        className={classes.appBar}
      />
      <Hidden xlDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
          className={classes.sidebar}
        />
      </Hidden>
      <Hidden xlUp>
        <SidebarNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='right'
          className={classes.sidebar}
        />
      </Hidden>
      <main className={classes.content}>
        <div />
        {children}
      </main>
    </div>
  );
};

export default PageLandingLayout;
