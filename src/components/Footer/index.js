import React, { useState } from "react";
import { useHistory } from 'react-router'
import { FooterContainer, CartStlIcon, HomeStlIcon, ProfileStlIcon, BarButton } from "./style";

const Footer = () => {

  const history = useHistory();

  return (
    <FooterContainer>
      <BarButton onClick={() => history.push('/home')} size='big'><HomeStlIcon/></BarButton>
      <BarButton onClick={() => history.push('/cart')} size='big'><CartStlIcon/></BarButton>
      <BarButton onClick={() => history.push(`/profile`)} size='big'><ProfileStlIcon/></BarButton>
    </FooterContainer>
  );
};

export default Footer;
