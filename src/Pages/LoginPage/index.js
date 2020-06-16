import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LoginPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useForm from '../../hooks/useForm';
import {} from '../../requests';

const LoginPage = () => {

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();
  
  return (
    <LoginPageContainer>
      LoginPage
    </LoginPageContainer>
  )
}

export default LoginPage;