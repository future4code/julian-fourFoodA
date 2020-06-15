import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export const SignUpPageContainer = styled.div`
`

export const TopBar = styled.div` 
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`
export const ArrowBack = styled(ArrowBackIosIcon)`
  margin: 0.6rem 0;
  margin-left: 1rem;
`
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled(TextField)`
  
`
export const SendButton = styled(Button)`
  width: 14rem;
`