import React from 'react';
import {
  HomePageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const HomePage = () => {

  // usePrivatePage();

  return (
    <HomePageContainer>
      <Header />
      HomePage
      <Footer />
    </HomePageContainer>
  )
}

export default HomePage;