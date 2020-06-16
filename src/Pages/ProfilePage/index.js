import React, { useState, useEffect } from 'react';
import {
  ProfilePageContainer,
  ProfileContainer,
  AddressContainer,
  OrdersContainer
} from './style';
import {
  PageContainer
} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShowProfile from './components/ShowProfile';
import ShowAddress from './components/ShowAddress';
import OrderCard from './components/OrderCard';
import usePrivatePage from '../../hooks/usePrivatePage';
import axios from 'axios';

const ProfilePage = () => {

  // usePrivatePage();

  const [profile, setProfile] = useState(undefined);

  const [ordersHistory, setOrdersHistory] = useState(undefined);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile', {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setProfile(response.data.user);
    })
    .catch(error => {
      console.error(error);
    });
  }, [setProfile]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/orders/history', {
      headers: {
        auth: token
      }
    })
    .then(response => {
      setOrdersHistory(response.data.orders);
    })
    .catch(error => {
      console.error(error);
    });
  }, [setOrdersHistory]);

  return (
    <PageContainer>
      <Header />
      <ProfilePageContainer>
        <ProfileContainer>
          {profile && <ShowProfile profile={profile} />}
        </ProfileContainer>
        <AddressContainer>
          {profile && <ShowAddress address={profile.address} />}
        </AddressContainer>
        <OrdersContainer>
          <p>Histórico de pedidos</p>
          {/* {ordersHistory && (ordersHistory.length > 0 ? (
            ordersHistory.map(order => (
              <OrderCard order={order} />
            ))
          ) : <p>Você não realizou nenhum pedido</p>
          )} */}
          <OrderCard />
          <OrderCard />
        </OrdersContainer>
      </ProfilePageContainer>
      <Footer />
    </PageContainer>
  )
}

export default ProfilePage;