import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ProfileIcon from '@material-ui/icons/PersonOutline';
import { Card, Button } from "@material-ui/core";
import styled from 'styled-components';

const FooterContainer = styled(Card)`
&&{
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55px;
  box-shadow: 0 0 20px #333;
  }
`
const BarButton = styled(Button)`
&&{
  width: 100%;
}
`

const CartStlIcon = styled(CartIcon)`
&&{
  font-size: 30px;
}
`
const HomeStlIcon = styled(HomeIcon)`
&&{
  font-size: 30px;
}
`
const ProfileStlIcon = styled(ProfileIcon)`
&&{
  font-size: 30px;
}
`


export { FooterContainer, CartStlIcon, HomeStlIcon, ProfileStlIcon, BarButton }