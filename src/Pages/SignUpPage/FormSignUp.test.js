import React from 'react';
import axios from 'axios';
import FormSignUp from './FormSignUp';
import { render } from '@testing-library/react';

axios.post = jest.fn().mockResolvedValue();

describe("Quando a tela for renderizada", () => {
    test("deve acontecer o seguinte", () => {
        const { getByPlaceholderText, getByTestId } = render(<FormSignUp/>);

        expect(getByPlaceholderText(/Nome e Sobrenome/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/email@email.com/i)).toBeInTheDocument();
        expect(getByPlaceholderText(/000.000.000-00/i)).toBeInTheDocument();
        expect(getByTestId(/password/i)).toBeInTheDocument();
        expect(getByTestId("confirmPassword")).toBeInTheDocument();
    });
});

describe("Quando um usuário for cadastrado", () => {
    test("com sucesso", async () => {
        axios.post = jest.fn().mockResolvedValue();

        const { getByPlaceholderText, getByTestId } = render(<FormSignUp />);
        const inputName = getByPlaceholderText(/Nome e Sobrenome/i);
        const inputEmail = getByPlaceholderText(/email@email.com/i);
        const inputCpf = getByPlaceholderText(/000.000.000-00/i);
        const inputPassword = getByTestId(/password/i);
        const inputConfirmPassword = getByTestId("confirmPassword");
    });
});