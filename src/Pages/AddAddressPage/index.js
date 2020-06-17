import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  FormContainer
} from './style';
import {
  PageContainer,
  FormFormControl,
  FormTextField,
  FormButton
} from '../../styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useForm from '../../hooks/useForm';
import { addAddress } from '../../requests';

const AddAddressPage = () => {

  const { form, onChange } = useForm({
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

  const goToAddAddress = async (event) => {
    event.preventDefault();
    const response = await addAddress(form);
    if (response.user.hasAddress) {
      window.localStorage.setItem('token', response.token);
      history.push('/home');
    }
  }
  
  return (
    <PageContainer>
      <Header />
      <FormContainer onSubmit={goToAddAddress} >
        <p>Meu endereço</p>
        <FormFormControl>
          <FormTextField 
            name='street'
            value={street}
            label='Logradouro'
            placeholder='Rua / Av.'
            type='text'
            onChange={handleInputChange}
            variant='outlined'
            required
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField 
            name='number'
            value={number}
            label='Número'
            placeholder='Número'
            type='number'
            onChange={handleInputChange}
            variant='outlined'
            required
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField 
            name='complement'
            value={complement}
            label='Complemento'
            placeholder='Apto / Bloco'
            type='text'
            onChange={handleInputChange}
            variant='outlined'
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField 
            name='neighbourhood'
            value={neighbourhood}
            label='Bairro'
            placeholder='Bairro'
            type='text'
            onChange={handleInputChange}
            variant='outlined'
            required
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField 
            name='city'
            value={city}
            label='Cidade'
            placeholder='Cidade'
            type='text'
            onChange={handleInputChange}
            variant='outlined'
            required
          />
        </FormFormControl>
        <FormFormControl>
          <FormTextField 
            name='state'
            value={state}
            label='Estado'
            placeholder='Estado'
            type='Estado'
            onChange={handleInputChange}
            variant='outlined'
            required
          />
        </FormFormControl>
        <FormButton 
          type='submit' 
          variant='contained'
          color='primary' 
        >
          Salvar
        </FormButton>
      </FormContainer>
      <Footer />
    </PageContainer>
  )
}

export default AddAddressPage;