import styled from 'styled-components';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

export const PageContainer = styled.div`
  max-width: 420px;
  margin: 0 auto;
`
export const FormFormControl = styled(FormControl)`
  && {
    margin: .5em 0;
  }
`
export const FormTextField = styled(TextField)`
`
export const FormButton = styled(Button)`
  && {
    margin: .5em 0;
  }
`