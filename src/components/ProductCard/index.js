import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  ProductCardContainer,
  ProductImg,
  Qty,
  AddButton,
  RemoveButton
} from './style';

const ProductCard = (props) => {

  const { name, description, photoUrl, quantity, price } = props.product;

  const history = useHistory();

  return (
    <ProductCardContainer>
      <ProductImg src={photoUrl} alt='imagem produto' />
      <div>
        <span>
          <p>{name}</p>
        </span>
        <span>
          <p>{description}</p>
        </span>
        <span>
          <p>{`R$${price.toFixed(2)}`}</p>
        </span>
        {quantity ? <Qty>{quantity}</Qty> : null}
        {quantity ? (
          <RemoveButton onClick={() => props.remove(props.product)}>
            remover
          </RemoveButton>
        ) : (
          <AddButton onClick={() => props.showModal(props.product)}>
            adicionar
          </AddButton>)
        }
      </div>
    </ProductCardContainer>
  )
}

export default ProductCard;