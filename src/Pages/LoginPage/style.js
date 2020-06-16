import styled from 'styled-components';
import {
  TextField  
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const LoginPageContainer = styled.div`
  min-height: 667px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.div`
margin-bottom: 28px;
`

export const LoginForm = styled.form`
  width: 91.47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmailInput = styled(TextField)`
  width: 100%;
  &&{
    margin-top: 8px;
    margin-bottom:8px;
  }
`

export const PasswordInput = styled(TextField)`
  width: 100%;
  &&{
    margin-top: 8px;
    margin-bottom:8px;
  }
`

export const EnterButton = styled(Button)`
  height: 42px;
  width: 100%;
  &&{
    background-color: #e8222e;
    margin-top: 8px;
    margin-bottom:28px;
  }
`

export const Entrar = styled.p`
  margin-bottom: 12px;
` 