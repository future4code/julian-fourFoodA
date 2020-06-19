import styled from 'styled-components';
import {
} from '@material-ui/core';

export const ProfilePageContainer = styled.div`
  margin-bottom: 65px;
`
export const ProfileContainer = styled.div`
  margin: .5em 0;
`
export const AddressContainer = styled.div`
  background-color: #eee;
  padding: .5em 0;
`
export const OrdersContainer = styled.div`
  margin: 1em;
  > p:first-of-type {
    padding-bottom: .5em;
    margin-bottom: 0;
    border-bottom: 1px solid black;
  }
  > p:last-of-type {
    margin-top: 1.75em;
    text-align: center;
  }
`