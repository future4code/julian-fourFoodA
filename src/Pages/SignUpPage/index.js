import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SignUpPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useForm from '../../hooks/useForm';
import {} from '../../requests';

const SignUpPage = () => {

  const { form, onChange, resetForm } = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, cpf, password, confirmPassword } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();
  
  return (
    <SignUpPageContainer>
      <Header />
      SignUpPage
      <Footer />
    </SignUpPageContainer>
  )
}

export default SignUpPage;