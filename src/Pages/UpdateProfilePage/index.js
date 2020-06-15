import React from 'react';
import {
  UpdateProfilePageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const UpdateProfilePage = () => {

  // usePrivatePage();

  return (
    <UpdateProfilePageContainer>
      <Header />
      UpdateProfilePage
      <Footer />
    </UpdateProfilePageContainer>
  )
}

export default UpdateProfilePage;