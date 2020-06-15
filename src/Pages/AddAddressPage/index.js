import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AddAddressPageContainer
} from './style';
import {} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useForm from '../../hooks/useForm';
import {} from '../../requests';

const AddAddressPage = () => {

  const { form, onChange, resetForm } = useForm({
    street: '',
    number: '',
    complement:'',
    neighbourhood: '',
    city: '',
    state: ''
  });

  const { street, number, complement, neighbourhood, city, state } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();
  
  return (
    <AddAddressPageContainer>
      <Header />
      AddAddressPage
      <Footer />
    </AddAddressPageContainer>
  )
}

export default AddAddressPage;