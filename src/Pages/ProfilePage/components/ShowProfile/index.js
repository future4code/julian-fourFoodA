import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  ProfileContainer,
  ProfileIconButton,
  EditIcon
} from './style';

const ShowProfile = (props) => {

  const { id, name, email, cpf } = props.profile;

  const history = useHistory();

  const goToUpdateProfile = () => {
    history.push('/profile/updateprofile');
  }

  return (
    <ProfileContainer>
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{cpf}</p>
      </div>
      <ProfileIconButton onClick={goToUpdateProfile} size='small' >
        <EditIcon color='secondary' />
      </ProfileIconButton>
    </ProfileContainer>
  )
}

export default ShowProfile;