import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AddressContainer,
  AddressIconButton,
  EditIcon
} from './style';

const ShowAddress = (props) => {

  const history = useHistory();

  const goToUpdateAddress = () => {
    history.push('/profile/updateaddress')
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