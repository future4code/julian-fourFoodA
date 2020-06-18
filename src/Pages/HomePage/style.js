import styled from 'styled-components';
import {
  TextField, Tab, AppBar, Tabs
} from '@material-ui/core';

export const HomePageContainer = styled.div`
`
export const SearchField = styled(TextField)`
&&{
  margin-top: 8px;
  width: 100%;
}
`
export const SearchContainer = styled.div`
margin: 0 16px;
`

export const TabUncap = styled(Tab)`
&&{
  text-transform: none;
  color: black;
  background-color: #fff;
  outline: none;
}
`
export const AppBarClean = styled(AppBar)`
&&{
  outline: none;
  box-shadow: none;
}
`
export const BottomMargin = styled.div`
  margin-bottom: 65px;
`