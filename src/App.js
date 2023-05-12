import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomAppBar from './components/common/AppBar';
import DashboardLayout from './layouts/DashboardLayout';
import PageLandingLayout from './layouts/PageLanding';
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';
function App() {
  return (
    <Router>
      <PrivateRoutes />
    </Router>
  );
}

export default App;
