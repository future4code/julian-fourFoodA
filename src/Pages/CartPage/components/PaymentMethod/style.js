import styled from 'styled-components';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core';

export const PaymentContainer = styled.div`
  > p {
    margin: 0;
    padding: .5em 0;
    border-bottom: 1px solid black;
  }
`
export const PaymentFormControl = styled(FormControl)`
  && {
    margin: .25em 0 .75em 0;
  }
`
export const PaymentControlLabel = styled(FormControlLabel)`
  && {
    height: 1em;
    margin: .5em 0;
  }
`
export const PaymentRadioGroup = styled(RadioGroup)`
`
export const PaymentRadio = styled(Radio)`
  && {
    padding: 0;
  }
`