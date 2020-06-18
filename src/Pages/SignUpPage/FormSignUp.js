import React, { useState } from 'react';
import clsx from 'clsx';
import axios from 'axios'
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { Form } from './style';
import {
    FormFormControl,
    FormTextField,
    FormButton
  } from '../../styles';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const FormSignUp = () => {
  const history = useHistory();
  let [typePass, setTypePass] = useState('password');
  const classes = useStyles();


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { form, onChange } = useForm({
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

  
  const changeType = () => {
    if(typePass === 'password') {
      setTypePass('text')
    }
    if(typePass === 'text') {
      setTypePass('password')
    }
  }

  const signUp = async (body) => {
    try {
      const response = await axios.post(`${baseUrl}/signup`, body);
      alert("Usuário cadastrado com sucesso!")
      localStorage.setItem('token', response.data.token)
      history.push('/addaddress')

    } catch (error) {
      alert("Algo deu errado, tente novamente.")
      return error.response;
    }
  }

  const bodyRequest = {
    "name": name,
    "email": email,
    "cpf": cpf,
    "password": confirmPassword
  }

  const signUpSubmit = async (event) => {
    event.preventDefault();
    if(password === confirmPassword) {
      await signUp(bodyRequest)
    } else {
      alert("Por favor, insira uma senha igual nos campos de senha e confirmação:")
    }
  }

  return (
      <div>
          <Form onSubmit={signUpSubmit}>
          <FormFormControl>
            <FormTextField
              required
              label="Nome"
              placeholder="Nome e sobrenome"
              variant="outlined"
              color="secondary"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
           </FormFormControl>
           <FormFormControl>
            <FormTextField
              required
              label="E-mail"
              placeholder="email@email.com"
              variant="outlined"
              color="secondary"
              name="email"
              value={email}
              onChange={handleInputChange}
              inputProps={{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+[.]?[a-z]{2,}$", title:"Insira um e-mail válido"}}
            />
           </FormFormControl>
           <FormFormControl>
            <FormTextField
              required
              label="CPF"
              placeholder="000.000.000-00"
              variant="outlined"
              color="secondary"
              name="cpf"
              value={cpf}
              onChange={handleInputChange}
              inputProps={{pattern:"[0-9]{3}[.]{1}?[0-9]{3}[.]{1}?[0-9]{3}[-]{1}?[0-9]{2}", title:"Insira um CPF válido"}}
            />
           </FormFormControl>
           <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel data-testeid="password" htmlFor="outlined-adornment-password">Senha *</InputLabel>
            <OutlinedInput
              required
              type={typePass}
              value={password}
              name="password"
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={changeType}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {typePass === 'text' ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
           <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel data-testid="confirmPassword" htmlFor="outlined-adornment-password">Confirmar *</InputLabel>
            <OutlinedInput
              required
              type={typePass}
              value={confirmPassword}
              name="confirmPassword"
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={changeType}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {typePass === 'text' ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
           <FormButton type="submit" variant="contained" color="primary" >Criar</FormButton>
        </Form>
      </div>
  )
}

export default FormSignUp;