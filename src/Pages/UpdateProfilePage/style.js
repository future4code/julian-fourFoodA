import styled from 'styled-components';
import {
  TextField
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const UpdateProfilePageContainer = styled.div`
  min-height: 667px;
  width: 375px;
  text-align: center;
`

export const UpdateProfileForm = styled.form`
  margin-top: 24px;
  width: 91.47%;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
`

export const NameInput = styled(TextField)`
  height: 56px;
  width: 100%;
  &&{
    margin-bottom:8px;
  }
`

export const EmailInput = styled(TextField)`
width: 100%;
  &&{
    margin-top: 8px;
    margin-bottom:8px;
  }
`

export const CpfInput = styled(TextField)`
  height: 56px;
  width: 100%;
  &&{
    margin-top: 8px;
    margin-bottom:8px;
  }
`

export const SaveButton = styled(Button)`
  height: 42px;
  width: 100%;
  &&{
    margin-top: 8px;
  }
`