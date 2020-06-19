
import React from "react";
import { useHistory } from 'react-router';
import ActiveOrder from '../ActiveOrder';
import { FooterContainer, CardFooterContainer, CartStlIcon, HomeStlIcon, ProfileStlIcon, BarButton } from "./style";


const Footer = () => {
  const history = useHistory();

  const currentPage = history.location.pathname;

  return (
    <FooterContainer>

      <ActiveOrder />
      <CardFooterContainer>
        <BarButton 
          onClick={() => history.push('/home')} 
          size='large'
          color={(currentPage === '/home') ? 'primary' : 'default'}
        >
          <HomeStlIcon/>
        </BarButton>
        <BarButton 
          onClick={() => history.push('/cart')} 
          size='large'
          color={(currentPage === '/cart') ? 'primary' : 'default'}
        >
          <CartStlIcon/>
        </BarButton>
        <BarButton 
          onClick={() => history.push('/profile')} 
          size='large'
          color={(currentPage === '/profile') ? 'primary' : 'default'}
        >
          <ProfileStlIcon/>
        </BarButton>
      </CardFooterContainer>
    </FooterContainer>
  );
};

export default Footer;
