import React from 'react';
import axios from 'axios';
import { render, wait, getAllByPlaceholderText, getByText, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom';

import HomePage from './index'
import goToSearchPage from './index'


const mockHistoryPush = jest.fn();
    
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
            push: mockHistoryPush,
        }),
}));

describe("Ao renderizar a tela 'HomePage'", () => {
    test("Input 'pesquisar' aparece na tela", () => {
        const { getByPlaceholderText } = render(
                                                <MemoryRouter>
                                                    <HomePage />
                                                </MemoryRouter>
                                                );
        expect(mockHistoryPush).toHaveBeenCalledTimes(0)

        expect(getByPlaceholderText('Restaurante')).toBeInTheDocument();
    });

    test("'Menu' e 'categorias' aparecem na tela", () => {
        const { getByTestId } = render(
                                            <MemoryRouter>
                                                <HomePage />
                                            </MemoryRouter>
                                            );
        expect(mockHistoryPush).toHaveBeenCalledTimes(0)

        expect(getByTestId('Hamburguer')).toBeInTheDocument();
        expect(getByTestId('Asiática')).toBeInTheDocument();
        expect(getByTestId('Italiana')).toBeInTheDocument();
        expect(getByTestId('Sorvetes')).toBeInTheDocument();
        expect(getByTestId('Carnes')).toBeInTheDocument();
        expect(getByTestId('Baiana')).toBeInTheDocument();
        expect(getByTestId('Petiscos')).toBeInTheDocument();
        expect(getByTestId('Mexicana')).toBeInTheDocument();
    });
/**
    test("Com retorno de 'Restaurante'", async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: {
                    "restaurants": [
                      {
                        "id": "1",
                        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                        "shipping": 6,
                        "address": "Rua das Margaridas, 110 - Jardim das Flores",
                        "name": "Habibs",
                        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                        "deliveryTime": 60,
                        "category": "Árabe"
                      }
                    ]
                }
            
        });
        
        
        const { getByText } = render(
                                    <MemoryRouter>
                                        <HomePage />
                                    </MemoryRouter>
                                    );
                                    
        expect(mockHistoryPush).toHaveBeenCalledTimes(0);
        
        await wait(() => expect(getByText("Habibs")).toHaveBeenCalled());
                                    
        await wait(() => expect(axios.get).toHaveBeenCalled());

    }, 10000);

*/
});