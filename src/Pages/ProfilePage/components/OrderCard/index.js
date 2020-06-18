import React from 'react';
import {
  OrderContainer
} from './style';

const OrderCard = (props) => {

  const { restaurantName, totalPrice, createdAt, expiresAt } = props.order;

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  const formatDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    let month = newDate.getMonth();
    months.forEach((monthOfYear, idx) => {
      if (idx === month) {
        month = monthOfYear;
      }
    })
    const year = newDate.getFullYear();
    return `${day} ${month} ${year}`
  }

  return (
    <OrderContainer>
      <p>{restaurantName}</p>
      <p>{formatDate(createdAt)}</p>
      <p>{`Subtotal: R$${totalPrice.toFixed(2)}`}</p>
    </OrderContainer>
  )
}

export default OrderCard;