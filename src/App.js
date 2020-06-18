
import React, { useState, useReducer } from 'react';

import Router from './Router';
import { MyTheme } from './themes';
import { CartContext } from './contexts';
import { MuiThemeProvider } from "@material-ui/core";
import FullAddressContext from './contexts/FullAddressContext';
import { fullAddressReducer, initialState } from './reducers/fullAddress';

const App = () => {

  const [cart, setCart] = useState(undefined);
  const [inputModal, setInputModal] = useState('');
  const [state, dispatch] = useReducer(fullAddressReducer, initialState);
  
  const cartValue = { cart, setCart, inputModal, setInputModal };

  return (
    <CartContext.Provider value={cartValue} >
      <FullAddressContext.Provider value={{address: state.address, dispatch: dispatch}}>
        <MuiThemeProvider theme={MyTheme}>
          <Router />
        </MuiThemeProvider>
      </FullAddressContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
