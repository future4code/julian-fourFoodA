import React from 'react';
import {
  CartPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const CartPage = () => {

  // usePrivatePage();

  return (
    <CartPageContainer>
      <Header />
      CartPage
      <Footer />
    </CartPageContainer>
  )
}

export default CartPage;