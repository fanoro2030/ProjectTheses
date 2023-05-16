import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
function App() {
  return (
    <Router>
      <PrivateRoutes />
    </Router>
  );
}

export default App;
