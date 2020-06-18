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
import FullPageLoading from '../../components/FullPageLoading';
import ShowProfile from './components/ShowProfile';
import ShowAddress from './components/ShowAddress';
import OrderCard from './components/OrderCard';
import usePrivatePage from '../../hooks/usePrivatePage';
import {
  getProfile,
  getOrdersHistory
} from '../../requests';

const ProfilePage = () => {

  usePrivatePage();

  const [profile, setProfile] = useState(undefined);

  const [ordersHistory, setOrdersHistory] = useState(undefined);

  useEffect(() => {
    goToGetProfile();
  }, [setProfile]);

  useEffect(() => {
    goToOrdersHistory();
  }, [setOrdersHistory]);

  const goToGetProfile = async () => {
    getProfile()
    .then(response => {
      setProfile(response.user);
    })
    .catch(error => {
      console.error(error);
    })
  }

  const goToOrdersHistory = async () => {
    getOrdersHistory()
    .then(response => {
      setOrdersHistory(response.orders);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <PageContainer>
      <Header />
      {(profile && ordersHistory) ? (
        <ProfilePageContainer>
          <ProfileContainer>
            {profile && <ShowProfile profile={profile} />}
          </ProfileContainer>
          <AddressContainer>
            {profile && <ShowAddress address={profile.address} />}
          </AddressContainer>
          <OrdersContainer>
            <p>Histórico de pedidos</p>
            {ordersHistory && (ordersHistory.length > 0 ? (
              ordersHistory.map(order => (
                <OrderCard order={order} key={order.expiresAt} />
              ))
            ) : <p>Você não realizou nenhum pedido</p>
            )}
          </OrdersContainer>
        </ProfilePageContainer>
      ) : <><FullPageLoading/></> }
      <Footer />
    </PageContainer>
  )
}

export default ProfilePage;