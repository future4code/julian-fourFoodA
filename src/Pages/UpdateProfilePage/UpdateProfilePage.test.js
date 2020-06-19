import React from "react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UpdateProfilePage from "./index";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Verifica elementos na página UpdateProfile", () => {
  test("Verifica input nome", async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    expect(getByLabelText(/nome/i)).toBeInTheDocument();
  });

  test("Verifica input E-mail", async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    expect(getByLabelText(/E-mail/i)).toBeInTheDocument();
  });

  test("Verifica input CPF", async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    expect(getByLabelText(/cpf/i)).toBeInTheDocument();
  });

  test("Verifica Botão Salvar", async () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    const textoEntrar = getAllByText(/salvar/i);
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    expect(textoEntrar[0]).toBeInTheDocument();
  });
});

describe("Valida digitação nos inputs", () => {
  test("Digitar no campo nome", async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    const inputNome = getByLabelText(/nome/i);

    await userEvent.type(inputNome, "nome");

    expect(inputNome).toHaveValue("nome");
  });

  test("Digitar no campo E-mail", async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    const inputNome = getByLabelText(/e-mail/i);

    await userEvent.type(inputNome, "test@tester.com");

    expect(inputNome).toHaveValue("test@tester.com");
  });

  test("Digitar no campo CPF", async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);

    const inputNome = getByLabelText(/cpf/i);

    await userEvent.type(inputNome, "999.999.999-99");

    expect(inputNome).toHaveValue("999.999.999-99");
  });
});

describe("Ao tentar salvar", () => {
  test("Com usuário inválido", async () => {
    axios.post = jest.fn().mockResolvedValue({
      data: [
        {
          message: "Usuário não encontrado",
        },
      ],
    });

    const { getByLabelText, getAllByText } = render(
      <MemoryRouter>
        <UpdateProfilePage />
      </MemoryRouter>
    );

    const inputNome = getByLabelText(/nome/i);
    await userEvent.type(inputNome, "Alex");

    expect(inputNome).toHaveValue("Alex");

    const inputEmail = getByLabelText(/E-mail/i);
    await userEvent.type(inputEmail, "axpalx@future4.com");

    expect(inputEmail).toHaveValue("axpalx@future4.com");

    const inputCpf = getByLabelText(/cpf/i);
    await userEvent.type(inputCpf, "99999999999");

    expect(inputCpf).toHaveValue("99999999999");

    const buttonSalvar = getAllByText(/salvar/i);
    userEvent.Click(buttonSalvar);

    expect(axios.put).not.toHaveBeenCalledWith(
      "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile",
      {
        name: "José",
        email: "axpalx@future4.com",
        cpf: "99999999999",
      }
    );

    await wait(() => expect(axios.put).toHaveBeenCalledTimes(1));

    expect((data) => expect(data.message).toEqual("Usuário não encontrado"));
  });
});
