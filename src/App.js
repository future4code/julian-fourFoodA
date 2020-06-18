import React, { useState } from 'react';
import Router from './Router';
import { MyTheme } from './themes';
import { CartContext } from './contexts';
import { MuiThemeProvider } from "@material-ui/core";

const App = () => {

  const [cart, setCart] = useState(undefined);
  const [inputModal, setInputModal] = useState('');
  
  const cartValue = { cart, setCart, inputModal, setInputModal };

  return (
    <CartContext.Provider value={cartValue} >
      <MuiThemeProvider theme={MyTheme} >
        <Router />
      </MuiThemeProvider>
    </CartContext.Provider>
  );
}

export default App;
