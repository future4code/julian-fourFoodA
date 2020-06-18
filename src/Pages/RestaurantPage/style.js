import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const RestaurantPageContainer = styled.div``;

export const RestaurantTopContainer = styled.div`
  width: 100%;
  height: 44px;
  background-color: white;
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
`;

export const ContainerBotao = styled.div`
  width: 30px;
  margin-right: 110px;
`;

export const CardRestaurante = styled(Card)`
  margin: 17px auto;
  box-shadow: none;
`;

export const ContainerPrincipais = styled.p`
  margin: 0 23px;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`;

export const CardProduto = styled.div`
  display: flex;
  border: 1px solid #b8b8b8;
  width: 328px;
  height: 112px;
  margin: 8px 0 0 23px;
  border-radius: 8px;
  position: relative;
  padding: 0;
`;

export const CardDescricaoProduto = styled.div`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  padding: 0;
  width: 100%;
  height: 112px;
  justify-content: space-between;
`;

export const Ingredientes = styled.span`
  font-size: 12px;
  grid-column: 1 / span 2;
`;

export const ImgProduto = styled.img`
  width: 96px;
  height: 112px;
  margin-right: 17px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const BotaoAdicionar = styled.button`
  width: 90px;
  height: 31px;
  position: absolute;
  justify-self: end;
  align-self: flex-end;
  border: 1px solid black;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  grid-column-start: 2;
  grid-row-start: 3;
  background-color: #fff;
  bottom: 0;
  right: 0;
`;

export const TopDescricao = styled.div`
  width: 100%;
`;

export const Quantidade = styled.span`
  display: block;
  color: red;
  font-size: 18px;
  border: 1px solid red;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  float: right;
  grid-column-start: 2;
  justify-self: end;
  width: 15px;
  height: 30px;
  padding: 0 5px 0 10px;
`;

export const Preco = styled.span`
  grid-row-start: 3;
`;

export const NomeProduto = styled.span`
  color: red;
  font-weight: bold;
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ModalContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 80%;
  height: 30%;
  color: black;
  align-self: center;
  padding-left: 50px;
`;

export const SelectModal = styled.select`
  margin: 0 auto;
  width: 80%;
  font-size: 20px;
`;

export const BotaoModal = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: blue;
  font-size: 15px;
  padding-left: 48px;
  margin-top: 50px;
`;
