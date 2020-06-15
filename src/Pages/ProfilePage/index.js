import React from 'react';
import {
  ProfilePageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import usePrivatePage from '../../hooks/usePrivatePage';
import {} from '../../requests';

const ProfilePage = () => {

  // usePrivatePage();

  return (
    <ProfilePageContainer>
      <Header />
      ProfilePage
      <Footer />
    </ProfilePageContainer>
  )
}

export default ProfilePage;