import React from 'react';

import DashboardLayout from '../layouts/DashboardLayout';
import { mainNavigation } from '../utils/navigationData';
import { mainRoutes } from '../utils/RoutesData';
import RoutesWithLayout from '../utils/RoutesWhitLayout';

const PrivateRoutes = () => {
  return (
    <>
      <RoutesWithLayout
        layout={DashboardLayout}
        routes={mainRoutes}
        LayoutProps={{
          navigationMain: mainNavigation,
        }}
      />
    </>
  );
};

export default PrivateRoutes;
