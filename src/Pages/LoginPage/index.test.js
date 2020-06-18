import React from 'react';
import axios from 'axios';
import { render, wait } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoginPage from './index'
import futureFoodLogo from '../../img/logo-future-eats-invert.png'

import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe("Ao renderizar a tela 'LoginPage", () => {
    
    test("Img 'futureFoodLogo' aparece na tela", () => {
        const logo = shallow(<LoginPage />);

        expect(logo.find("img").prop("src")).toEqual(futureFoodLogo);
    });

    test("Text 'entrar' aparece na tela", () => {
        const { getAllByText } = render(<LoginPage />);

        const textoEntrar = getAllByText(/entrar/i);

        expect(textoEntrar[0]).toBeInTheDocument();
    });
    
    test("Input 'e-mail' aparece na tela", () => {
        const { getByLabelText } = render(<LoginPage />);

        expect(getByLabelText(/E-mail/i)).toBeInTheDocument();
    });

    test("Input 'senha' aparece na tela", () => {
        const { getByLabelText } = render(<LoginPage />);

        expect(getByLabelText(/Senha/i)).toBeInTheDocument();
    });

    test("Button 'entrar' aparece na tela", () => {
        const { getByTestId } = render(<LoginPage />);

        expect(getByTestId(/btn-entrar/i)).toBeInTheDocument();
    });

    test("Text 'Não possui cadastro?' aparece na tela", () => {
        const { getByText } = render(<LoginPage />);

        expect(getByText(/Não possui cadastro/i)).toBeInTheDocument();
    });

    test("Text 'Clique aqui' aparece na tela", () => {
        const { getByText } = render(<LoginPage />);

        expect(getByText(/Clique aqui/i)).toBeInTheDocument();
    });

});

describe("Ao digitar nos 'Inputs'", () => {
    
    test("Digitar no campo 'e-mail'", async () => {
        const { getByLabelText } = render(<LoginPage />);
        
        const inputEmail = getByLabelText(/E-mail/i);

        await userEvent.type(inputEmail, 'test@tester.com');

        expect(inputEmail).toHaveValue('test@tester.com');
    });

    test("Digitar no campo 'senha'", async () => {
        const { getByLabelText } = render(<LoginPage />);
        
        const inputPassword = getByLabelText(/senha/i);

        await userEvent.type(inputPassword, 'senhaTeste');

        expect(inputPassword).toHaveValue('senhaTeste');
    });

});



const mockHistoryPush = jest.fn();
    
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
            push: mockHistoryPush,
        }),
}));
describe("Ao clicar em 'Não possui cadastro'", () => {
    test("Clicar em 'Clique aqui'", () => {
    
    const { getByText } = render(
                                <MemoryRouter>
                                    <LoginPage />
                                </MemoryRouter>
                                );
 
        const linkClickHere = getByText(/Clique aqui/i);
 
        userEvent.click(linkClickHere);
 
        expect(mockHistoryPush).toHaveBeenCalledWith('/signup');
         
        });
        
    });

describe("Ao tentar logar", () => {
    test("Com usuário inválido", async () => {
        axios.post = jest.fn().mockResolvedValue({
            data: [
                {
                    "message": "Usuário não encontrado"
                }
            ]
        });

        const { getByLabelText, getByTestId } = render(<LoginPage />);

        const inputEmail = getByLabelText(/E-mail/i);
        await userEvent.type(inputEmail, 'astroboy@future4.com');

        expect(inputEmail).toHaveValue('astroboy@future4.com');

        const inputPassword = getByLabelText(/senha/i);
        await userEvent.type(inputPassword, '123456');

        expect(inputPassword).toHaveValue('123456');

        const buttonEntrar = getByTestId(/btn-entrar/i);
        userEvent.click(buttonEntrar);

        expect(axios.post)
        .not.toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login', {
            email: 'astrodev@future4.com',
            password: '123456'
        });

        await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));

        expect(data => expect(data.message).toEqual("Usuário não encontrado"))
        
    });

    test("Com usuário com formato de e-mail inválido", async () => {
        const { 
            getByLabelText, 
            getByTestId, 
            } = render(<LoginPage />);

        global.alert = jest.fn();
        
        const inputEmail = getByLabelText(/E-mail/i);
        await userEvent.type(inputEmail, 'astroboy@future5');
        
        expect(inputEmail).toHaveValue('astroboy@future5');
        
        const inputPassword = getByLabelText(/senha/i);
        await userEvent.type(inputPassword, '123456');
        
        expect(inputPassword).toHaveValue('123456');
        
        const buttonEntrar = getByTestId(/btn-entrar/i);
        userEvent.click(buttonEntrar);
        
        expect(global.alert).toHaveBeenCalledTimes(1);
        
    },);

    test("Com senha inválida", async () => {
        axios.post = jest.fn().mockResolvedValue({
            data: [
                {
                    "message": "Senha incorreta"
                }
            ]
        });

        const { getByLabelText, getByTestId } = render(<LoginPage />);

        const inputEmail = getByLabelText(/E-mail/i);
        await userEvent.type(inputEmail, 'astrodev@future4.com');

        expect(inputEmail).toHaveValue('astrodev@future4.com');

        const inputPassword = getByLabelText(/senha/i);
        await userEvent.type(inputPassword, '321654');

        expect(inputPassword).toHaveValue('321654');

        const buttonEntrar = getByTestId(/btn-entrar/i);
        userEvent.click(buttonEntrar);

        expect(axios.post)
        .not.toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login', {
            email: 'astrodev@future4.com',
            password: '123456'
        });

        await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));

        expect(data => expect(data.message).toEqual("Senha incorreta"))
        
    });



    test("Com email e senha validos", async () => {
        axios.post = jest.fn().mockResolvedValue({
            data: [
                {
                    "user": {
                      "id": "De8UACSFgFySnKdXm5hI",
                      "name": "Astrodev",
                      "email": "astrodev@future4.com",
                      "cpf": "111.111.111-11",
                      "hasAddress": true
                    },
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRlOFVBQ1NGZ0Z5U25LZFhtNWhJIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTU3NDY1ODQ2OX0.vLTbd7E-RX1LsGs0AOcPX0k2opC6ny7r1FoEmrlf0J0"
                }
            ]
        });

        const { getByLabelText, getByTestId } = render(<LoginPage />);

        const inputEmail = getByLabelText(/E-mail/i);
        await userEvent.type(inputEmail, 'astrodev@future4.com');

        expect(inputEmail).toHaveValue('astrodev@future4.com');

        const inputPassword = getByLabelText(/senha/i);
        await userEvent.type(inputPassword, '123456');

        expect(inputPassword).toHaveValue('123456');

        const buttonEntrar = getByTestId(/btn-entrar/i);
        userEvent.click(buttonEntrar);

        expect(axios.post)
        .toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login', {
            email: 'astrodev@future4.com',
            password: '123456'
        });
        
        const token = window.localStorage.getItem('token');
        console.log(token);

        await wait(() => expect(axios.post).toHaveBeenCalledTimes(1));

        expect(data => expect(data).toEqual({
            "user": {
              "id": "De8UACSFgFySnKdXm5hI",
              "name": "Astrodev",
              "email": "astrodev@future4.com",
              "cpf": "111.111.111-11",
              "hasAddress": true
            },
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkRlOFVBQ1NGZ0Z5U25LZFhtNWhJIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTU3NDY1ODQ2OX0.vLTbd7E-RX1LsGs0AOcPX0k2opC6ny7r1FoEmrlf0J0"
        }
        ))
        
    }, 10000);

});
