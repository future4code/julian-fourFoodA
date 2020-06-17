import React, { useState, useEffect } from "react";
import {
  RestaurantPageContainer,
  RestaurantTopContainer,
  ContainerBotao,
  CardRestaurante,
  ContainerPrincipais,
  CardProduto,
  CardDescricaoProduto,
  Ingredientes,
  ImgProduto,
  BotaoAdicionar,
  Quantidade,
  Preco,
  NomeProduto,
  SelectModal,
  BotaoModal,
} from "./style";
import { useHistory } from 'react-router'
import usePrivatePage from "../../hooks/usePrivatePage";
import { getRestaurantDetail } from "../../requests";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { useForm } from "../../hooks/useForm";
import Header from '../../components/Header'
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "./Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 328,
    maxHeight: 218,
  },
}));

const RestaurantPage = ({ match }) => {
  // usePrivatePage();
  const classes = useStyles();
  const [listaRestaurante, setListaRestaurante] = useState([]);
  const [listaProdutos, setListaProdutos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { form, onChange, resetForm } = useForm({
    quantidadeproduto: "",
  });
  const restaurantId = match.params.restaurantId;
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  const carregaDetalhes = () => {
    getRestaurantDetail(restaurantId)
      .then((response) => {
        console.log("Peguei detalhes", response);
        setListaRestaurante(response.restaurant);
        setListaProdutos(response.restaurant.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    carregaDetalhes();
  }, []);

  const acompanhamento = listaProdutos.filter((acompanhamentos) => {
    return acompanhamentos.category === "Acompanhamento";
  });

  const bebida = listaProdutos.filter((bebidas) => {
    return bebidas.category === "Bebida";
  });

  const produtos = listaProdutos.filter((produtos) => {
    return (
      produtos.category !== "Acompanhamento" && produtos.category !== "Bebida"
    );
  });

  return (
    <RestaurantPageContainer>
      <Header/>

      <CardRestaurante className={classes.root}>
        <CardMedia
          component="img"
          alt="Imagem Hamburger"
          height="120"
          image={listaRestaurante.logoUrl}
          title="Imagem Hamburger"
        />
        <Typography variant="body2" color="error" component="p">
          <b>{listaRestaurante.name}</b>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {listaRestaurante.category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span>{listaRestaurante.deliveryTime} min - </span>
          <span> Frete R${listaRestaurante.shipping}</span>
          <p>{listaRestaurante.address}</p>
        </Typography>
      </CardRestaurante>
      <ContainerPrincipais>
        <b>Principais</b>
      </ContainerPrincipais>
      {produtos.map((produtos) => (
        <CardProduto key={produtos.id}>
          <ImgProduto src={produtos.photoUrl} alt="imagem produto" />
          <CardDescricaoProduto>
            <NomeProduto>{produtos.name}</NomeProduto>
            <Quantidade>{form.quantidadeproduto}</Quantidade>

            <Ingredientes>{produtos.description}</Ingredientes>

            <Preco>
              <b>R${produtos.price}</b>
            </Preco>
            <BotaoAdicionar onClick={() => setIsModalVisible(true)}>
              adicionar
            </BotaoAdicionar>
            {isModalVisible ? (
              <Modal>
                <p>Selecione a quantidade desejada</p>
                <SelectModal
                  type="number"
                  name="quantidadeproduto"
                  value={form.quantidadeproduto}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    0
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </SelectModal>
                <BotaoModal onClick={() => setIsModalVisible(false)}>
                  ADICIONAR AO CARRINHO
                </BotaoModal>
              </Modal>
            ) : null}
          </CardDescricaoProduto>
        </CardProduto>
      ))}

      <ContainerPrincipais>
        <b>Acompanhamentos</b>
      </ContainerPrincipais>
      {acompanhamento.map((categorias) => (
        <CardProduto key={categorias.id}>
          <ImgProduto src={categorias.photoUrl} alt="imagem produto" />
          <CardDescricaoProduto>
            <NomeProduto>{categorias.name}</NomeProduto>
            <Quantidade>2</Quantidade>

            <Ingredientes>{categorias.description}</Ingredientes>

            <Preco>
              <b>R${categorias.price}</b>
            </Preco>
            <BotaoAdicionar onClick={() => setIsModalVisible(true)}>
              adicionar
            </BotaoAdicionar>
            {isModalVisible ? (
              <Modal>
                <p>Selecione a quantidade desejada</p>
                <SelectModal
                  type="number"
                  name="quantidadeproduto"
                  value={form.quantidadeproduto}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    0
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </SelectModal>
                <BotaoModal onClick={() => setIsModalVisible(false)}>
                  ADICIONAR AO CARRINHO
                </BotaoModal>
              </Modal>
            ) : null}
          </CardDescricaoProduto>
        </CardProduto>
      ))}
      <ContainerPrincipais>
        <b>Bebidas</b>
      </ContainerPrincipais>
      {bebida.map((bebidas) => (
        <CardProduto key={bebidas.id}>
          <ImgProduto src={bebidas.photoUrl} alt="imagem produto" />
          <CardDescricaoProduto>
            <NomeProduto>{bebidas.name}</NomeProduto>
            <Quantidade>2</Quantidade>

            <Ingredientes>{bebidas.description}</Ingredientes>

            <Preco>
              <b>R${bebidas.price}</b>
            </Preco>
            <BotaoAdicionar onClick={() => setIsModalVisible(true)}>
              adicionar
            </BotaoAdicionar>
            {isModalVisible ? (
              <Modal>
                <p>Selecione a quantidade desejada</p>
                <SelectModal
                  type="number"
                  name="quantidadeproduto"
                  value={form.quantidadeproduto}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    0
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </SelectModal>
                <BotaoModal onClick={() => setIsModalVisible(false)}>
                  ADICIONAR AO CARRINHO
                </BotaoModal>
              </Modal>
            ) : null}
          </CardDescricaoProduto>
        </CardProduto>
      ))}
    </RestaurantPageContainer>
  );
};

export default RestaurantPage;
