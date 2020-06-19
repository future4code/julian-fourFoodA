import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  UpdateProfilePageContainer,
  UpdateProfileForm,
  NameInput,
  EmailInput,
  CpfInput,
  SaveButton,
} from "./style";
import {} from "../../styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import usePrivatePage from "../../hooks/usePrivatePage";
import {} from "../../requests";
import useForm from "../../hooks/useForm";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

const UpdateProfilePage = () => {
  usePrivatePage();

  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const goToProfile = () => {
    history.push("/profile/profileId");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const updateProfile = async () => {
    const token = window.localStorage.getItem("token");
    try {
      const response = await axios.put(`${baseUrl}/profile`, form, {
        headers: {
          auth: token,
        },
      });
      goToProfile();
      console.log(response.data);
    } catch (error) {
      resetForm();
      console.error(error);
    }
  };

  console.log(form);
  return (
    <UpdateProfilePageContainer>
      <Header />
      <UpdateProfileForm>
        <NameInput
          value={form.name}
          type="text"
          name="name"
          required
          id="outlined-required"
          label="Nome"
          variant="outlined"
          placeholder="Nome Sobrenome"
          onChange={handleInputChange}
        />
        <EmailInput
          value={form.email}
          name="email"
          required
          id="outlined-password-input"
          label="E-mail"
          type="text"
          variant="outlined"
          placeholder="email@email.com"
          onChange={handleInputChange}
        />
        <CpfInput
          value={form.cpf}
          name="cpf"
          required
          id="outlined-password-input"
          label="CPF"
          type="text"
          variant="outlined"
          placeholder="000.000.000-00"
          onChange={handleInputChange}
        />
        <SaveButton onClick={updateProfile} variant="contained" color="primary">
          Salvar
        </SaveButton>
      </UpdateProfileForm>
      <Footer />
    </UpdateProfilePageContainer>
  );
};

export default UpdateProfilePage;
