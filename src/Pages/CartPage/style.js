import styled from 'styled-components';
import {
  
} from '@material-ui/core';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* > p {
    align-self: center;
    margin: 1em 0 0 0;
    padding: .75em;
  } */
`
export const AddressContainer = styled.div`
  background-color: #eee;
  padding: .5em 0;
`
export const OrderContainer = styled.div`
  > p {
    text-align: center;
    margin: 1.25em 0 2.25em 0;
  }
`
export const TotalContainer = styled.div`
  margin: .5em 1em 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > p {
    margin: .5em 0;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > p {
      margin: .5em 0;
    }
    > p:last-of-type {
      font-weight: bold;
      color: #e8222e;
    }
  }
`
export const PaymentContainer = styled.div`
  margin: 0 1em;
  display: flex;
  flex-direction: column;
`