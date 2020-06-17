import styled from 'styled-components';
import {
  TextField
} from '@material-ui/core';

export const EmptySearch = styled.div`
font-style: Roboto;
margin-top: 12px;
text-align: center;
font-size: 16px;
`

export const SearchPageContainer = styled.div`
`

export const SearchField = styled(TextField)`
&&{
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
}
`

export const SearchContainer = styled.div`
margin: 0 16px;
`
