import React, { useState } from "react";
import { useHistory } from 'react-router'
import { FooterContainer, CartStlIcon, HomeStlIcon, ProfileStlIcon, BarButton } from "./style";

const Footer = () => {

  const history = useHistory();

  return (
    <FooterContainer>
      <BarButton onClick={() => history.push('/home')} size='large'><HomeStlIcon/></BarButton>
      <BarButton onClick={() => history.push('/cart')} size='large'><CartStlIcon/></BarButton>
      <BarButton onClick={() => history.push(`/profile`)} size='large'><ProfileStlIcon/></BarButton>
    </FooterContainer>
  );
};

export default Footer;
