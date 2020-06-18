import React from 'react';
import {
  PaymentContainer,
  PaymentFormControl,
  PaymentControlLabel,
  PaymentRadioGroup,
  PaymentRadio
} from './style';

const PaymentMethod = (props) => {

  const [paymentMethod, setPaymentMethod] = props.payment;

  return (
    <PaymentContainer>
      <p>Forma de pagamento</p>
      <PaymentFormControl>
        <PaymentRadioGroup
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
        >
          <PaymentControlLabel 
            value='cash' 
            control={<PaymentRadio />} 
            label='Dinheiro' 
          />
          <PaymentControlLabel 
            value='creditcard' 
            control={<PaymentRadio />} 
            label='Cartão de crédito' 
          />
        </PaymentRadioGroup>
      </PaymentFormControl>
    </PaymentContainer>
  )
}

export default PaymentMethod;