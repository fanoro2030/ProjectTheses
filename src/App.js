import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import store from './store';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Route
        render={({ location }) =>
          isAuthenticated ? (
            <PrivateRoutes />
          ) : (
            <PublicRoutes location={location} />
          )
        }
      />
    </Router>
  );
}

const AppWithProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithProvider;
