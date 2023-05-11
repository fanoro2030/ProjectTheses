import React from 'react';
import CustomAppBar from './components/common/AppBar';
import DashboardLayout from './layouts/DashboardLayout';
import PageLandingLayout from './layouts/PageLanding';

function App() {
  return (
    <div>
      <PageLandingLayout />
      {/*<DashboardLayout />*/}
    </div>
  );
}

export default App;
