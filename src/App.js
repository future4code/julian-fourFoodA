import React, { useReducer } from 'react';
import Router from './Router';
import { MyTheme } from './themes';
import { MuiThemeProvider } from "@material-ui/core";
import FullAddressContext from './contexts/FullAddressContext';
import { fullAddressReducer, initialState } from './reducers/fullAddress';

const App = () => {
  const [state, dispatch] = useReducer(fullAddressReducer, initialState);
  return (
    <FullAddressContext.Provider value={{address: state.address, dispatch: dispatch}}>
      <MuiThemeProvider theme={MyTheme}>
        <Router />
      </MuiThemeProvider>
    </FullAddressContext.Provider>
  );
}

export default App;
