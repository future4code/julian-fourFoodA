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

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
        <Route exact path='/addaddress'>
          <AddAddressPage />
        </Route>
        <Route exact path='/home'>
          <HomePage />
        </Route>
        <Route exact path='/restaurant/:restaurantId'>
          <RestaurantPage />
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/profile/:profileId'>
          <ProfilePage />
        </Route>
        <Route exact path='/profile/:profileId/updateProfile'>
          <UpdateProfilePage />
        </Route>
        <Route exact path='/profile/:profileId/updateAddress'>
          <UpdateAddressPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;