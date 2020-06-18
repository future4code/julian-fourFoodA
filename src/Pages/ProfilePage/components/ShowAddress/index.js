import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  AddressContainer,
  AddressIconButton,
  EditIcon
} from './style';
import FullAddressContext from '../../../../contexts/FullAddressContext';

const ShowAddress = (props) => {
  const [address, setAddress] = useState({})
  const fullAddressContext = useContext(FullAddressContext);

  const history = useHistory();

  useEffect(() => {
    getFullAddress();
  }, [])

  const goToUpdateAddress = () => {

    fullAddressContext.dispatch({type: "SET_FULL_ADDRESS", address: address})
    history.push('/profile/updateAddress')
  }

  const getFullAddress = async () => {
    try {
      const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile/address', {
        headers: {
          auth: localStorage.token
        }
      })
      setAddress(response.data.address);
    } catch (error) {
      return error.response;
    }
  }

  return (
    <AddressContainer>
      <div>
        <p>Endereço cadastrado</p>
        <p>{props.address}</p>
      </div>
      <AddressIconButton onClick={goToUpdateAddress} >
        <EditIcon color='secondary' />
      </AddressIconButton>
    </AddressContainer>
  )
}

export default ShowAddress;