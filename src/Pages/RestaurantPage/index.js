import React, { useState, useEffect, useContext } from "react";
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
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { CartContext } from '../../contexts';
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
  const [restaurante, setRestaurante] = useState({});
  const [listaProdutos, setListaProdutos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToCart, setProductToCart] = useState(undefined);
  // const { form, onChange, resetForm } = useForm({
  //   quantidadeProduto: "",
  // });
  const restaurantId = match.params.restaurantId;

  const { cart, setCart, inputModal, setInputModal } = useContext(CartContext); {/* */}

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   onChange(name, value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   console.log(form);
  // };

  const carregaDetalhes = () => {
    getRestaurantDetail(restaurantId)
      .then((response) => {
        // console.log("Peguei detalhes", response);
        setRestaurante(response.restaurant);
        // setListaProdutos(response.restaurant.products);
        const newProductsList = response.restaurant.products.map(product => (
          { ...product, quantity: 0 }
        ));
        setListaProdutos(newProductsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    carregaDetalhes();
  }, []);

  const addToCart = (productToAdd) => {
    let cartList = cart ? cart.products : [];
    if (!cartList.length) {
      cartList = [].concat({ ...productToAdd, quantity: Number(inputModal) })
    } else if (cartList.findIndex(product => (product.id === productToAdd.id)) === -1) {
      cartList = [...cartList, { ...productToAdd, quantity: Number(inputModal) }]
    } else {
      cartList = (cart ? cart.products : []).map(productInCart => {
        if (productInCart.id === productToAdd.id) {
          return { ...productInCart, quantity: productInCart.quantity + Number(inputModal) };
        }
        return productInCart;
      })
    }
    setCart({ ...restaurante, products: cartList });
    let newList = listaProdutos;
    cartList.forEach(productInCart => {
      newList = listaProdutos.map(product => {
        if (productInCart.id === product.id) {
          return { ...product, quantity: productInCart.quantity };
        }
        return product;
      })
    });
    setListaProdutos(newList);
    setInputModal('');
    setIsModalVisible(false);
  }

  const showModal = (product) => {
    setProductToCart(product);
    setIsModalVisible(true);
  }

  const removeProduct = (productToRemove) => {
    const newCart = cart.products.filter(product => (
      product.id !== productToRemove.id
    ));
    setCart({ ...cart, products: newCart });
  }

  const acompanhamentos = listaProdutos.filter((acompanhamento) => {
    return acompanhamento.category === "Acompanhamento";
  });

  const bebidas = listaProdutos.filter((bebida) => {
    return bebida.category === "Bebida";
  });

  const produtos = listaProdutos.filter((produto) => {
    return (
      produto.category !== "Acompanhamento" && produto.category !== "Bebida"
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
          image={restaurante.logoUrl}
          title="Imagem Hamburger"
        />
        <Typography variant="body2" color="error" component="p">
          <b>{restaurante.name}</b>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {restaurante.category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <span>{restaurante.deliveryTime} min - </span>
          <span> Frete R${restaurante.shipping}</span>
          <p>{restaurante.address}</p>
        </Typography>
      </CardRestaurante>
      <ContainerPrincipais>
        <b>Principais</b>
      </ContainerPrincipais>
      {produtos.map(produto => (
        <ProductCard key={produto.id} product={produto} showModal={showModal} remove={removeProduct} />
      ))}
      {/* {produtos.map((produto) => (
        <CardProduto key={produto.id}>
          <ImgProduto src={produto.photoUrl} alt="imagem produto" />
          <CardDescricaoProduto>
            <NomeProduto>{produto.name}</NomeProduto>
            <Quantidade>{produto.quantity}</Quantidade> 

            <Ingredientes>{produto.description}</Ingredientes>

            <Preco>
              <b>R${produto.price}</b>
            </Preco>
            <BotaoAdicionar onClick={() => showModal(produto)}>
              adicionar
            </BotaoAdicionar>
          </CardDescricaoProduto>
        </CardProduto>
      ))} */}

      <ContainerPrincipais>
        <b>Acompanhamentos</b>
      </ContainerPrincipais>
      {acompanhamentos.map(acompanhamento => (
        <ProductCard key={acompanhamento.id} product={acompanhamento} showModal={showModal} remove={removeProduct} />
      ))}
      {/* {acompanhamentos.map((acompanhamento) => (
        <CardProduto key={acompanhamento.id}>
          <ImgProduto src={acompanhamento.photoUrl} alt="imagem produto" />
          <CardDescricaoProduto>
            <NomeProduto>{acompanhamento.name}</NomeProduto>
            <Quantidade>{acompanhamento.quantity}</Quantidade> 

            <Ingredientes>{acompanhamento.description}</Ingredientes>

            <Preco>
              <b>R${acompanhamento.price}</b>
            </Preco>
            <BotaoAdicionar onClick={() => showModal(acompanhamento)}>
              adicionar
            </BotaoAdicionar>
          </CardDescricaoProduto>
        </CardProduto>
      ))} */}
      <ContainerPrincipais>
        <b>Bebidas</b>
      </ContainerPrincipais>
      {bebidas.map(bebida => (
        <ProductCard key={bebida.id} product={bebida} showModal={showModal} remove={removeProduct} />
      ))}
      {/* {bebidas.map((bebida) => (
        <CardProduto key={bebida.id}>
          <ImgProduto src={bebida.photoUrl} alt="imagem produto" />
          <CardDescricaoProduto>
            <NomeProduto>{bebida.name}</NomeProduto>
            <Quantidade>{bebida.quantity}</Quantidade>

            <Ingredientes>{bebida.description}</Ingredientes>

            <Preco>
              <b>R${bebida.price}</b>
            </Preco>
            <BotaoAdicionar onClick={() => showModal(bebida)}>
              adicionar
            </BotaoAdicionar>
          </CardDescricaoProduto>
          
        </CardProduto>
      ))} */}
      {isModalVisible ? (
        <Modal>
          <p>Selecione a quantidade desejada</p>
          <SelectModal
            type="number"
            name="quantidadeProduto"
            // value={form.quantidadeProduto}
            // onChange={handleInputChange}
            value={inputModal} 
            onChange={event => setInputModal(event.target.value) } 
          >
            <option defaultValue="">
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
          <BotaoModal onClick={() => addToCart(productToCart)}>
            ADICIONAR AO CARRINHO
          </BotaoModal>
        </Modal>
      ) : null}
    </RestaurantPageContainer>
  );
};

export default RestaurantPage;
