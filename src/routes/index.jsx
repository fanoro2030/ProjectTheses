import React from 'react';
import { useLocation } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function Routes() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? <PrivateRoutes /> : <PublicRoutes />;
}

export default Routes;
