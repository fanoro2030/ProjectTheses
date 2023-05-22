import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
