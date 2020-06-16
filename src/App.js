import React from 'react';
import Router from './Router';
import { MyTheme } from './themes';
import { MuiThemeProvider } from "@material-ui/core";

const App = () => {
  return (
    <MuiThemeProvider theme={MyTheme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
