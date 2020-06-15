import React from 'react';
import {
  UpdateAddressPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const UpdateAddressPage = () => {

  // usePrivatePage();

  return (
    <UpdateAddressPageContainer>
      <Header />
      UpdateAddressPage
      <Footer />
    </UpdateAddressPageContainer>
  )
}

export default UpdateAddressPage;