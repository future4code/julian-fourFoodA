import { Card, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosOutlined';
import styled from 'styled-components';

const HeaderContainer = styled(Card)`
&&{
  position: relative;
  width: 100%;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 0;
  }
`

const BarTitleContainer = styled.div`
  width: 175px;
  height: 44px;
  margin: 0 auto;
`

const BarTitle = styled.div`
    width: 150px;
    height: 19px;
    font-family: Roboto;
    font-size: 19px;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin: 30px auto 0 auto;
    bottom: 10px;
  `

const BackIcon = styled(ArrowBackIcon)`
  position: absolute;
  left: 16px;
  bottom: 10px;
`
export { HeaderContainer, BarTitle, BarTitleContainer, BackIcon };