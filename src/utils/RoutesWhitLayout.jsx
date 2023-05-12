import React from 'react';
import Spinner from '../components/common/Spinner';
import Routes from './Routes';
const RoutesWithLayout = ({ layout: Layout, routes, LayoutProps }) => {
  return (
    <Layout {...LayoutProps}>
      <React.Suspense fallback={<Spinner />}>
        <Routes routes={routes} />
      </React.Suspense>
    </Layout>
  );
};

export default RoutesWithLayout;
