import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      <Router>
        <Route
          path='/presentation'
          exact
          render={() =>
            isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />
          }
        />
      </Router>
    </Provider>
  );
}

export default App;
