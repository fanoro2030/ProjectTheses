import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import DashboardLayout from '../layouts/DashboardLayout';
import { mainNavigation } from '../utils/navigationData';
import { mainRoutes } from '../utils/RoutesData';
import RoutesWithLayout from '../utils/RoutesWhitLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from '../theme/CustomThemeProvider';

const PrivateRoutes = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default PrivateRoutes;
