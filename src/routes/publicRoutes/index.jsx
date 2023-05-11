import React from 'react';
import PageLayout from '../layouts/PageLayout';
import { homeNavigation } from '../components/Dashboard/Sidebar/data/navigationData';
import { homeRoutes } from '../components/Dashboard/Sidebar/data/routesData';
import RoutesWithLayout from '../components/Dashboard/Sidebar/RoutesWithLayout';
import CssBaseline from '@material-ui/core/CssBaseline';

const PublicRoutes = () => {
  return (
    <>
      <CssBaseline />
      <RoutesWithLayout
        layout={PageLayout}
        routes={homeRoutes}
        LayoutProps={{
          navigationData: homeNavigation,
        }}
      />
    </>
  );
};

export default PublicRoutes;
