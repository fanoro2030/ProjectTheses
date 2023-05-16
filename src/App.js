import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageLandingLayout from './layouts/PageLanding';
import PrivateRoutes from './routes/privateRoutes';
import PublicRoutes from './routes/publicRoutes';
function App() {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
}

export default App;
