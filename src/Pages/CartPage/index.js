import React, { useState, useEffect, useContext } from 'react';
import {
  FormContainer,
  AddressContainer,
  RestaurantContainer,
  OrderContainer,
  TotalContainer,
  PaymentContainer
} from './style';
import {
  PageContainer,
  FormButton
} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import FullPageLoading from '../../components/FullPageLoading';
import ShowAddress from './components/ShowAddress';
import PaymentMethod from './components/PaymentMethod';
import usePrivatePage from '../../hooks/usePrivatePage';
import { CartContext } from '../../contexts';
import { getProfile, placeOrder } from '../../requests';

const CartPage = () => {

  usePrivatePage();

  const { cart, setCart } = useContext(CartContext);

  const [shippingAddress, setShippingAddress] = useState(undefined);

  const [paymentMethod, setPaymentMethod] = useState('creditcard');

  const payment = [paymentMethod, setPaymentMethod];

  useEffect(() => {
    getShippingAddress()
  }, [setShippingAddress]);

  const getShippingAddress = async () => {
    getProfile()
    .then(response => {
      setShippingAddress(response.user.address);
    })
    .catch(error => {
      console.error(error);
    })
  }

  const getSubtotal = () => {
    let subtotal = 0;
    (cart ? cart.products : []).forEach(product => {
      subtotal += product.quantity * product.price;
    })
    return subtotal
  }

  const subtotal = getSubtotal();

  const removeProduct = (productToRemove) => {
    const newCart = cart.products.filter(product => (
      product.id !== productToRemove.id
    ));
    setCart({ ...cart, products: newCart});
  }

  const goToPlaceOrder = (event) => {
    event.preventDefault();
    const products = (cart ? cart.products : []).map(product => (
      { id: product.id, quantity: product.quantity }
    ));
    const body = { products, paymentMethod }
    placeOrder(body, cart.id)
    .then(response => {
      setCart(undefined);
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <PageContainer>
      <Header />
      {shippingAddress ? (
        <FormContainer onSubmit={goToPlaceOrder} >
          <AddressContainer>
            <ShowAddress address={shippingAddress} />
          </AddressContainer>
          <OrderContainer>
            {(cart ? ((cart.products || []).length ? (
              <RestaurantContainer>
                <p>{cart.name}</p>
                <p>{cart.address}</p>
                <p>{`${cart.deliveryTime} min`}</p>
              </RestaurantContainer>
            ) : null) : null)}
            {(cart ? cart.products : []).length ? cart.products.map(product => (
              <ProductCard key={product.id} product={product} showModal={() => null} remove={removeProduct} />
            )) : <p>Carrinho vazio</p>}
            <TotalContainer>
              <p>SUBTOTAL</p>
              <div>
                <p>{`Frete R$${(cart ? (cart.products.length ? cart.shipping.toFixed(2) : '0,00') : '0,00')}`}</p>
                <p>{`R$${(cart? (cart.products.length ? (subtotal + cart.shipping).toFixed(2) : '00,00') : '00,00')}`}</p>
              </div>
            </TotalContainer>
          </OrderContainer>
          <PaymentContainer>
            <PaymentMethod payment={payment} />
            <FormButton 
              type='submit'
              color='primary' 
              variant='contained' 
              disabled={(cart ? (cart.products.length ? false : true) : true)}
            >
              Confirmar
            </FormButton>
          </PaymentContainer>
        </FormContainer>
      ) : <><FullPageLoading/></> }
      <Footer />
    </PageContainer>
  )
}

export default CartPage;