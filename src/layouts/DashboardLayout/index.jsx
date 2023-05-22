import React from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Hidden, Box } from '@material-ui/core';
import { Container } from '../../components/common/Container';
import useDrawer from '../../hooks/useDrawer';
import { useStylesDashboardLayout } from './dashboard_layout.styles';

const DashboardLayout = ({ navigationMain, children }) => {
  const classes = useStylesDashboardLayout();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <Container>
      <CustomAppBar
        position='left'
        handleDrawerToggle={handleDrawerToggle}
        appBar={classes.appBar}
        isPrivateRoute={true}
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
          hideExpandIcon={true}
        />
      </Hidden>

      <Box className={classes.content}>
        <Box className={classes.toolbar} />
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};

export default DashboardLayout;
