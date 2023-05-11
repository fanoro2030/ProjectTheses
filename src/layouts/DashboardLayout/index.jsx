import React from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import { useStyles } from './dashboard_layout.styles';
const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <div className={classes.root}>
      <CustomAppBar
        position='left'
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
          anchor='left' // Añadir esta propiedad
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
