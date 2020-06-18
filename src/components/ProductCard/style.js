import styled from 'styled-components';
import{
  Card
} from '@material-ui/core';

export const ProductCardContainer = styled(Card)`
  margin: .5em 1em;
  height: 7em;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 1em;
  > div {
    height: 7em;
    display: grid;
    grid-template-rows: 2fr 3fr 2fr;
    grid-template-columns: 1fr 3.625em 2em;
    p {
      margin: 0;
    }
    span:first-of-type {
      color: #e8222e;
      grid-row: 1 / span 1;
      grid-column: 1 / span 1;
      display: flex;
      align-items: flex-end;
    }
    span:nth-of-type(2) {
      font-size: .75em;
      color: #b8b8b8;
      grid-row: 2 / span 1;
      grid-column: 1 / span 2;
      display: flex;
      align-items: center;
    }
    span:nth-of-type(3) {
      grid-row: 3 / span 1;
      grid-column: 1 / span 1;
      display: flex;
      align-items: flex-start;
    }
  }
`
export const ProductImg = styled.img`
  height: 100%;
  width: 100%;
`
export const Qty = styled.span`
  border: 1px solid #e8222e;
  color: #e8222e;
  border-radius: 0 .5em 0 .5em;
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AddButton = styled.span`
  cursor: pointer;
  grid-row: 3 / span 1;
  grid-column: 2 / span 2;
  border: 1px solid black;
  border-radius: .5em 0 .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RemoveButton = styled.span`
  cursor: pointer;
  grid-row: 3 / span 1;
  grid-column: 2 / span 2;
  border: 1px solid #e8222e;
  color: #e8222e;
  border-radius: .5em 0 .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`