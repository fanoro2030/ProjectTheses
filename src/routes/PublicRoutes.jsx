import React from 'react';

import PageLandingLayout from '../layouts/PageLanding';
import { homeNavigation } from '../utils/navigationData';
import { homeRoutes } from '../utils/RoutesData';
import RoutesWithLayout from '../utils/RoutesWhitLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from '../theme/CustomThemeProvider';

const PublicRoutes = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <RoutesWithLayout
        layout={PageLandingLayout}
        routes={homeRoutes}
        LayoutProps={{
          navigationHome: homeNavigation,
        }}
      />
    </CustomThemeProvider>
  );
};

export default PublicRoutes;
