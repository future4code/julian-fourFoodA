import React from "react";
import axios from "axios";
import { render, fireEvent, wait, within, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchPage from "./index";
import { MemoryRouter } from "react-router-dom";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Testes gerais", () => {
  test("Renderização incial", async () => {
    const {
      getByPlaceholderText,
      getByLabelText,
      findByText,
      getByTestId,
      getByText,
    } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    const input = getByPlaceholderText("Restaurante");
    expect(input).toBeInTheDocument();
    expect(getByText("Busque por nome de restaurante")).toBeInTheDocument();
    expect(getByTestId("Home")).toBeInTheDocument();
    expect(getByTestId("Cart")).toBeInTheDocument();
    expect(getByTestId("Profile")).toBeInTheDocument();
    expect(getByTestId("Search")).toBeInTheDocument();
    expect(getByTestId("HeaderContainer")).toBeInTheDocument();
    expect(getByTestId("HeaderText")).toBeInTheDocument();
});
test("Busca", async () => {

    jest.setTimeout(30000);

    axios.get = jest.fn().mockResolvedValue({
        data:
            {"restaurants":[{"id":"1","category":"Árabe","name":"Habibs","shipping":6,"description":"Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.","address":"Rua das Margaridas, 110 - Jardim das Flores","logoUrl":"http://soter.ninja/futureFoods/logos/habibs.jpg","deliveryTime":60},{"id":"10","description":"Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.","address":"Travessa Reginaldo Pereira, 130 - Ibitinga","logoUrl":"http://soter.ninja/futureFoods/logos/tadashii.png","deliveryTime":50,"category":"Asiática","name":"Tadashii","shipping":13},{"id":"2","deliveryTime":15,"category":"Hamburguer","name":"McDonalds","shipping":19,"description":"McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.","address":"Avenida dos Papagaios, 1350 - Sta. Efigênia","logoUrl":"http://soter.ninja/futureFoods/logos/mcdonalds.png"},{"id":"3","description":"Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica","address":"Rua Barão do Rio Branco, 98 - Centro","logoUrl":"http://soter.ninja/futureFoods/logos/cantinamammaperrotta.jpg","deliveryTime":20,"category":"Italiana","name":"Cantina Mamma Perrotta","shipping":2},{"id":"4","category":"Sorvetes","name":"Sorveteria Bacio di Latte","shipping":10,"description":"Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!","address":"Travessa Junqueira de Melo, 315 - Marginal","logoUrl":"http://soter.ninja/futureFoods/logos/baciodilatte.png","deliveryTime":45},{"id":"5","category":"Carnes","name":"Outback Steakhouse","shipping":18,"description":"Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano","address":"Alameda dos Marsupiais, 505 - Humaitá","logoUrl":"http://soter.ninja/futureFoods/logos/outback.png","deliveryTime":20},{"id":"6","name":"Sotero Cozinha Original","shipping":4,"description":"Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.","address":"Rua Dorival Caymmi, 149 - Alto dos Ibirás","logoUrl":"http://soter.ninja/futureFoods/logos/sotero.jpg","deliveryTime":40,"category":"Baiana"},{"id":"7","category":"Petiscos","name":"Boteco de Portal","shipping":18,"description":"O bar tem um cardápio recheado de petiscos que acompanham o chope para o bate-papo num ambiente agradável.Amigos e amigas, temos o prazer de convidar vocês para conhecer nosso espaço!","address":"Avenida das Andorinhas, 333 - Sta. Efigênia","logoUrl":"http://soter.ninja/futureFoods/logos/botecodeportal.jpg","deliveryTime":20},{"id":"8","description":"Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.","address":"Rua Visconde de Mauá, 990 - Centro","logoUrl":"http://soter.ninja/futureFoods/logos/chun-li.jpg","deliveryTime":30,"category":"Asiática","name":"Chun-Li","shipping":17},{"id":"9","category":"Mexicana","name":"Mexicaníssimo","shipping":3,"description":"Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos.","address":"Largo dos Jaguarés, 12 - Nova Bragança","logoUrl":"http://soter.ninja/futureFoods/logos/mexicanissimo.png","deliveryTime":20}]}
    });
    
    const {
        getByPlaceholderText,
        getByRole,
        getAllByRole,
        getByLabelText,
        queryByRole,
        findByText,
        getByTestId,
        getByText,
    } = render(
        <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);
    
    const input = getByPlaceholderText("Restaurante");

    await wait(()=> userEvent.type(input, "Hab"));

    expect(input).toHaveValue("Hab");

    expect(getByRole('restCard')).toBeInTheDocument()
    expect(getAllByRole('restCard')).toHaveLength(1)

    fireEvent.change(input, '')
    
    await wait(()=> userEvent.type(input, "m"));

    expect(getAllByRole('restCard')).toHaveLength(3)

    fireEvent.change(input, '')
    
    await wait(()=> userEvent.type(input, "xpto"));

    expect(queryByRole('restCard')).not.toBeInTheDocument()
    expect(getByText('Não encontramos :(')).toBeInTheDocument()
  });
});
