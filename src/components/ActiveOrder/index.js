import React, { useState, useEffect } from 'react';
import {
  ActiveOrderContainer,
  OrderContainer,
  ScheduleIcon
} from './style';
import { getActiveOrder } from '../../requests';

const ActiveOrder = () => {

  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(() => {
    goToActiveOrder();
  }, [setActiveOrder])

  const goToActiveOrder = async () => {
    getActiveOrder()
    .then(response => {
      setActiveOrder(response.order);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <ActiveOrderContainer>
      {activeOrder ? (
        <OrderContainer>
          <ScheduleIcon />
          <div>
            <p>Pedido em andamento</p>
            <p>{activeOrder.restaurantName}</p>
            <p>{`SUBTOTAL R$${activeOrder.totalPrice.toFixed(2)}`}</p>
          </div>
        </OrderContainer>
      ) : null}
    </ActiveOrderContainer>
  )
}

export default ActiveOrder;