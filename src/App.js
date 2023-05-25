import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RoutesFanor from './routes';

import CustomThemeProvider from './theme/CustomThemeProvider';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <CustomThemeProvider>
      <CssBaseline />

      <Router>
        <RoutesFanor />
      </Router>
    </CustomThemeProvider>
  );
}

export default App;
