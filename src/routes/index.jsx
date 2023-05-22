import React from 'react';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { useSelector } from 'react-redux';

function Routes() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />;
}

export default Routes;
