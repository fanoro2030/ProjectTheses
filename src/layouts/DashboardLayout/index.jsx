import React from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import { useStylesDashboardLayout } from './dashboard_layout.styles';

const DashboardLayout = ({ children }) => {
  const classes = useStylesDashboardLayout();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <div className={classes.root}>
      <CustomAppBar
        position='left'
        handleDrawerToggle={handleDrawerToggle}
        className={classes.appBar}
      />
      <Hidden smDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
          className={classes.sidebar}
        />
      </Hidden>
      <Hidden mdUp>
        <SidebarNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='left'
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

export default DashboardLayout;
