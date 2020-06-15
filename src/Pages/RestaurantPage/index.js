import React from 'react';
import {
  RestaurantPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const RestaurantPage = () => {

  // usePrivatePage();

  return (
    <RestaurantPageContainer>
      <Header />
      RestaurantPage
      <Footer />
    </RestaurantPageContainer>
  )
}

export default RestaurantPage;