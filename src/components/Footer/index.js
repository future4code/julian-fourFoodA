import React, { useState } from "react";
import { useHistory } from 'react-router'
import { FooterContainer, CartStlIcon, HomeStlIcon, ProfileStlIcon, BarButton } from "./style";

const Footer = () => {

  const history = useHistory();

  const currentPage = history.location.pathname;

  return (
    <FooterContainer>
      <BarButton 
        onClick={() => history.push('/home')} 
        size='large'
        color={(currentPage === '/home') ? 'primary' : 'default'}
      >
        <HomeStlIcon data-testid="Home"/>
      </BarButton>
      <BarButton 
        onClick={() => history.push('/cart')} 
        size='large'
        color={(currentPage === '/cart') ? 'primary' : 'default'}
      >
        <CartStlIcon data-testid="Cart"/>
      </BarButton>
      <BarButton 
        onClick={() => history.push('/profile')} 
        size='large'
        color={(currentPage === '/profile') ? 'primary' : 'default'}
      >
        <ProfileStlIcon data-testid="Profile"/>
      </BarButton>
    </FooterContainer>
  );
};

export default Footer;
