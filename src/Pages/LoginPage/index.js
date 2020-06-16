import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  LoginPageContainer,
  LogoImage,
  LoginForm,
  EmailInput,
  PasswordInput,
  EnterButton,
  Entrar
} from './style';
import {} from '../../styles';
import useForm from '../../hooks/useForm';
import {} from '../../requests';
import futureFoodLogo from '../../img/logo-future-eats-invert.png'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA';

const LoginPage = () => {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });
  
  const goToSigUp = () => {
    history.push('/signup');
  };

  const goToHome = () => {
    history.push('/home');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleToLogin = () => {
    login(form);
    resetForm();
  };

  const login = async (body) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, body);
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      goToHome();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginPageContainer>
      <LogoImage>
        <img src={futureFoodLogo} />
      </LogoImage>
        <Entrar>Entrar</Entrar>
      <LoginForm>
        <EmailInput
          value={form.email}
          type='email'
          name='email'
          required
          id="outlined-required"
          label="E-mail"
          variant="outlined"
          placeholder="email@email.com"
          onChange={handleInputChange}
        />
        <PasswordInput
          value={form.password}
          name='password'
          required
          id="outlined-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          placeholder="Mínimo 6 caracteres"
          onChange={handleInputChange}
        />
        <EnterButton 
          onClick={handleToLogin} 
          variant="contained"
          color="primary"  
        >
        Entrar
      </EnterButton>
      </LoginForm>
      <p>Não possui cadastro? <span onClick={goToSigUp}>Clique aqui.</span></p>
    </LoginPageContainer>
  )
}

export default LoginPage;