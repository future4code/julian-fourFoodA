import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import AddAddressPage from '../Pages/AddAddressPage';
import HomePage from '../Pages/HomePage';
import RestaurantPage from '../Pages/RestaurantPage';
import CartPage from '../Pages/CartPage';
import ProfilePage from '../Pages/ProfilePage';
import UpdateProfilePage from '../Pages/UpdateProfilePage';
import UpdateAddressPage from '../Pages/UpdateAddressPage';
import SearchPage from '../Pages/SearchPage';
import OpeningPage from '../Pages/OpeningPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={OpeningPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/addaddress" component={AddAddressPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/restaurant/:restaurantId" component={RestaurantPage}/>
        <Route exact path="/cart" component={CartPage}/>
        <Route exact path='/profile' component={ProfilePage}/>
        <Route exact path='/profile/updateprofile' component={UpdateProfilePage}/>
        <Route exact path='/profile/updateaddress' component={UpdateAddressPage}/>
        <Route exact path='/search' component={SearchPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
