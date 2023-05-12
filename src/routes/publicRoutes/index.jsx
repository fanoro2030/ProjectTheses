import React from 'react';
import PageLandingLayout from '../../layouts/PageLanding';
import { homeNavigation } from '../../utils/navigationData';
import { homeRoutes } from '../../utils/RoutesData';
import RoutesWithLayout from '../../utils/RoutesWhitLayout';
import CssBaseline from '@material-ui/core/CssBaseline';

const PublicRoutes = () => {
  return (
    <>
      <CssBaseline />
      <RoutesWithLayout
        layout={PageLandingLayout}
        routes={homeRoutes}
        LayoutProps={{
          navigationHome: homeNavigation,
        }}
      />
    </>
  );
};

export default PublicRoutes;
