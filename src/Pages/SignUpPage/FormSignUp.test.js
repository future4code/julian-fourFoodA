import React from 'react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import FormSignUp from './FormSignUp';
import { render, wait } from '@testing-library/react';

axios.post = jest.fn().mockResolvedValue();

describe("Quando a tela for renderizada", () => {
    test("deve aparecer os itens", () => {
        const { getByTestId, getByPlaceholderText, getByText } = render(<FormSignUp/>);

        expect(getByPlaceholderText(/Nome e Sobrenome/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/email@email.com/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/000.000.000-00/i)).toBeInTheDocument();
        expect(getByTestId("password")).toBeInTheDocument();
        expect(getByTestId("confirm")).toBeInTheDocument();
        expect(getByText(/Criar/i)).toBeInTheDocument();
    });
});

describe("Quando um usuário for cadastrado", () => {
    test("com sucesso", async () => {
        axios.post = jest.fn().mockResolvedValue();

        const { getByPlaceholderText, getByTestId, getByText } = render(<FormSignUp />);
        const inputName = getByPlaceholderText(/Nome e Sobrenome/i);
        const inputEmail = getByPlaceholderText(/email@email.com/i);
        const inputCpf = getByPlaceholderText(/000.000.000-00/i);
        const inputPassword = getByTestId ("password");
        const inputConfirmPassword = getByTestId ("confirm");
        const button = getByTestId("btn-signup");

        userEvent.type(inputName, "José");
        expect(inputName).toHaveValue("José");
        userEvent.type(inputEmail, "jd@gmail.com");
        expect(inputEmail).toHaveValue("jd@gmail.com");
        userEvent.type(inputCpf, "093.443.213-22");
        expect(inputCpf).toHaveValue("093.443.213-22");
        await userEvent.type(inputPassword, "mengo");
        expect(inputPassword).toHaveValue("mengo");
        await userEvent.type(inputConfirmPassword, "mengo");
        expect(inputConfirmPassword).toHaveValue("mengo");
        expect(inputPassword && inputConfirmPassword).toHaveValue("mengo")
        userEvent.click(button);

        expect(axios.post).toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup", {
            name: "José",
            email: "jd@gmail.com",
            cpf: "093.443.213-22",
            password: "mengo"
        });

        await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));


    });

    test("e der um erro", async () => {
        axios.post = jest.fn().mockResolvedValue();

        const { getByPlaceholderText, getByTestId, getByText } = render(<FormSignUp />);
        const inputName = getByPlaceholderText(/Nome e Sobrenome/i);
        const inputEmail = getByPlaceholderText(/email@email.com/i);
        const inputCpf = getByPlaceholderText(/000.000.000-00/i);
        const inputPassword = getByTestId ("password");
        const inputConfirmPassword = getByTestId ("confirm");
        const button = getByTestId("btn-signup");

        userEvent.type(inputName, "José");
        expect(inputName).toHaveValue("José");
        userEvent.type(inputEmail, "jd@gmail.com");
        expect(inputEmail).toHaveValue("jd@gmail.com");
        userEvent.type(inputCpf, "093.443.213-22");
        expect(inputCpf).toHaveValue("093.443.213-22");
        await userEvent.type(inputPassword, "mengo");
        expect(inputPassword).toHaveValue("mengo");
        await userEvent.type(inputConfirmPassword, "mengo");
        expect(inputConfirmPassword).toHaveValue("mengo");
        expect(inputPassword && inputConfirmPassword).toHaveValue("mengo")
        userEvent.click(button);

        expect(axios.post).not.toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup", {
            name: "José",
            email: "jd@gmail.com",
            cpf: "093.443.213-22",
            password: "meng"
        });

        await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));


    });
});