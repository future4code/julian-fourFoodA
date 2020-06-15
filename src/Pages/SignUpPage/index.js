import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SignUpPageContainer,
  TopBar,
  ArrowBack,
  MainContainer,
  Form,
  Input,
  SendButton
} from './style';
import {} from '../../styles';
import useForm from '../../hooks/useForm';
import {} from '../../requests';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SignUpPage = () => {
  const classes = useStyles();

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
      <TopBar>
        <ArrowBack />
      </TopBar>
      <MainContainer>
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/2420CEFD-BBDE-49C8-91E3-A49B116851E9.svg" alt="Logo Ifuture" />
        <p>Cadastrar</p>
        <Form className={classes.root}>
          <Input
            required
            id="filled-required"
            label="Nome"
            placeholder="Nome e sobrenome"
            variant="outlined"
            color="secondary"
           />
           <Input
            required
            id="filled-required"
            label="E-mail"
            placeholder="email@email.com"
            variant="outlined"
            color="secondary"
           />
           <Input
            required
            id="filled-required"
            label="CPF"
            placeholder="000.000.000-00"
            variant="outlined"
            color="secondary"
           />
           <Input
            required
            id="filled-required"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            variant="outlined"
            color="secondary"
           />
           <Input
            required
            id="filled-required"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            variant="outlined"
            color="secondary"
           />
           <SendButton variant="contained" color="secondary">Criar</SendButton>
        </Form>
      </MainContainer>   
    </SignUpPageContainer>
  )
}

export default SignUpPage;