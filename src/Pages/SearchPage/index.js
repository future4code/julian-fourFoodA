import React from 'react';
import {
  SearchPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const SearchPage = () => {

  // usePrivatePage();

  return (
    <SearchPageContainer>
      <Header />
      SearchPage
      <Footer />
    </SearchPageContainer>
  )
}

export default SearchPage;