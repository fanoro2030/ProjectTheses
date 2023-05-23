import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';

import CustomThemeProvider from './theme/CustomThemeProvider';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />

      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
