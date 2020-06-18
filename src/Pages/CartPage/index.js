import React, { useState, useEffect, useContext } from 'react';
import {
  FormContainer,
  AddressContainer,
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
import ShowAddress from './components/ShowAddress';
import PaymentMethod from './components/PaymentMethod';
import usePrivatePage from '../../hooks/usePrivatePage';
import { CartContext } from '../../contexts';
import { getProfile, placeOrder } from '../../requests';

const CartPage = () => {

  // usePrivatePage();

  const { cart, setCart } = useContext(CartContext);

  // const body = [
  //   {
  //     products: [{
  //       "id": "CnKdjU6CyKakQDGHzNln",
  //       "quantity": 10
  //     }, {
  //       "quantity": 1,
  //       "id": "KJqMl2DxeShkSBevKVre"
  //     }],
  //     paymentMethod: 'creditcard'
  //   }
  // ];

  const [shippingAddress, setShippingAddress] = useState(undefined);

  const [paymentMethod, setPaymentMethod] = useState('creditcard');

  const payment = [paymentMethod, setPaymentMethod];

  // const cart = {
  //   "products": [
  //     {
  //       "id": "XHhajKAtvIH2Dq6F83PX",
  //       "description": "Laranja, Acerola ou Maçã",
  //       "price": 7.9,
  //       "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
  //       "name": "Suco",
  //       'quantity': 4
  //     },
  //     {
  //       "id": "xhq0QgZXklGSmaBDy6KQ",
  //       "description": "Esfiha deliciosa, receita secreta do Habibs.",
  //       "price": 1,
  //       "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
  //       "name": "Bibsfiha carne",
  //       'quantity': 2
  //     }
  //   ],
  //   "id": "1",
  //   "address": "Rua das Margaridas, 110 - Jardim das Flores",
  //   "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
  //   "deliveryTime": 60,
  //   "name": "Habibs",
  //   "shipping": 6
  // }

  const { id, name, products, address, logoUrl, deliveryTime, shipping } = cart

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
    products.forEach(product => {
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

  return (
    <PageContainer>
      <Header />
      <FormContainer>
        <AddressContainer>
          <ShowAddress address={shippingAddress} />
        </AddressContainer>
        <OrderContainer>
          {products.length ? products.map(product => (
            <ProductCard key={product.id} product={product} showModal={() => null} remove={removeProduct} />
          )) : <p>Carrinho vazio</p>}
          <TotalContainer>
            <p>SUBTOTAL</p>
            <div>
              <p>{`Frete R$${shipping.toFixed(2)}`}</p>
              <p>{`R$${subtotal.toFixed(2)}`}</p>
            </div>
          </TotalContainer>
        </OrderContainer>
        <PaymentContainer>
          <PaymentMethod payment={payment} />
          <FormButton 
            type='submit'
            color='primary' 
            variant='contained' 
          >
            Confirmar
          </FormButton>
        </PaymentContainer>
      </FormContainer>
      <Footer />
    </PageContainer>
  )
}

export default CartPage;