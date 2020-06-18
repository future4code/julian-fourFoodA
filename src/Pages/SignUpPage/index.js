import React from 'react';
import Header from '../../components/Header';
import {
  SignUpPageContainer,
  MainContainer
} from './style';
import FormSignup from './FormSignUp';


const SignUpPage = () => {
    
  return (
    <SignUpPageContainer>
      <Header />
      <MainContainer>
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg" alt="Logo Ifuture" />
        <p>Cadastrar</p>
        <FormSignup />
      </MainContainer>   
    </SignUpPageContainer>
  )
}

export default SignUpPage;