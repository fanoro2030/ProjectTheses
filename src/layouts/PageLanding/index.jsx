import React, { useState } from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden, Box } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import { useStylesPageLayout } from './page_landing.styles';
const PageLandingLayout = ({ navigationHome, children }) => {
  const classes = useStylesPageLayout();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <div className={classes.root}>
      <CustomAppBar
        position='right'
        handleDrawerToggle={handleDrawerToggle}
        appBar={classes.appBar}
      />
      <Hidden xlDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
          drawerPaper={classes.drawerPaper}
          data={navigationHome}
        />
      </Hidden>
      <Hidden xlUp>
        <SidebarNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='right'
          drawerPaper={classes.drawerPaper}
          data={navigationHome}
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
