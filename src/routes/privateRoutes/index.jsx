import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { mainNavigation } from '../components/Dashboard/Sidebar/data/navigationData';
import { mainRoutes } from '../components/Dashboard/Sidebar/data/routesData';
import RoutesWithLayout from '../components/Dashboard/Sidebar/RoutesWithLayout';
import CssBaseline from '@material-ui/core/CssBaseline';

const PrivateRoutes = () => {
  return (
    <>
      <CssBaseline />
      <RoutesWithLayout
        layout={DashboardLayout}
        routes={mainRoutes}
        LayoutProps={{
          navigationData: mainNavigation,
        }}
      />
    </>
  );
};

export default PrivateRoutes;
