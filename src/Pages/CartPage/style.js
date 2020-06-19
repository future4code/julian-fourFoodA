import styled from 'styled-components';
import {
  
} from '@material-ui/core';

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
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
export const RestaurantContainer = styled.div`
  margin: 1em;
  > p {
    color: #b8b8b8;
    margin: .5em;
  }
  > p:first-of-type {
    color: #e8222e;
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