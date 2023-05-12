import React from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import { useStylesDashboardLayout } from './dashboard_layout.styles';

const DashboardLayout = ({ navigationMain, children }) => {
  const classes = useStylesDashboardLayout();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <div className={classes.root}>
      <CustomAppBar
        position='left'
        handleDrawerToggle={handleDrawerToggle}
        appBar={classes.appBar}
      />
      <Hidden smDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
          drawerPaper={classes.drawerPaper}
          data={navigationMain}
        />
      </Hidden>
      <Hidden mdUp>
        <SidebarNavigation
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor='left'
          drawerPaper={classes.drawerPaper}
          data={navigationMain}
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
