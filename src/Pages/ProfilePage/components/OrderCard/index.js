import React from 'react';
import {
  OrderContainer
} from './style';

const OrderCard = (props) => {

  // const { id, name, email, cpf } = props.order;

  return (
    <OrderContainer>
      <p>Bullguer Vila Madalena</p>
      <p>23 outubro 2019</p>
      <p>Subtotal: R$67,00</p>
    </OrderContainer>
  )
}

export default OrderCard;