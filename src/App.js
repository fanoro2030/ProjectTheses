import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Route
        path='/'
        exact
        render={() => (isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />)}
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
