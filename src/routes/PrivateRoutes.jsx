import React, { useEffect } from 'react';

import DashboardLayout from '../layouts/DashboardLayout';
import { mainNavigation } from '../utils/navigationData';
import { mainRoutes } from '../utils/RoutesData';
import RoutesWithLayout from '../utils/RoutesWhitLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from '../theme/CustomThemeProvider';

const PrivateRoutes = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <RoutesWithLayout
        layout={DashboardLayout}
        routes={mainRoutes}
        LayoutProps={{
          navigationMain: mainNavigation,
        }}
      />
    </CustomThemeProvider>
  );
};

export default PrivateRoutes;
