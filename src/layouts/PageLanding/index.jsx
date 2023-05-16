import React from 'react';
import CustomAppBar from '../../components/common/AppBar';
import SidebarNavigation from '../../components/common/Sidebar';
import { Container } from '../../components/common/Container';
import { Content } from '../../components/common/Content';
import { Hidden } from '@material-ui/core';
import useDrawer from '../../hooks/useDrawer';
import Slider from '../../components/common/Slider';
import Footer from '../../components/common/Footer';
import { useStylesPageLayout } from './page_landing.styles';
const PageLandingLayout = ({ navigationHome, children }) => {
  const classes = useStylesPageLayout();
  const [mobileOpen, handleDrawerToggle] = useDrawer();
  return (
    <Container>
      <Slider />
      <CustomAppBar
        position='right'
        handleDrawerToggle={handleDrawerToggle}
        appBar={classes.appBar}
        data={navigationHome}
      />
      <Hidden xlDown>
        <SidebarNavigation
          variant='permanent'
          mobileOpen={false}
          drawerPaper={classes.drawerPaper}
          data={navigationHome}
          hideExpandIcon={true}
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
          hideExpandIcon={true}
        />
      </Hidden>
      <Content className={classes.page_layout}>
        {children} <Footer />
      </Content>
    </Container>
  );
};

export default PageLandingLayout;
