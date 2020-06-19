import styled from "styled-components";
import { Card, Button } from "@material-ui/core";

export const ProductCardContainer = styled(Card)`
  && {
    margin: 0.5em 1em;
    position: relative;
    height: 112px;
    display: grid;
    box-shadow: none;
    grid-template-columns: 30% 1fr;
    grid-gap: 1em;
    border-radius: 8px 8px 8px 8px;
    border: solid 1px #b8b8b8;
    > div {
      max-height: 112px;
      position: relative;
      display: grid;
      grid-template-rows: 2fr 3fr 2fr;
      grid-template-columns: 1fr 3.625em 2em;
      margin: 0;
      padding: 0;
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
        font-size: 0.75em;
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
  }
`;
export const ProductImg = styled.img`
  height: 112px;
  width: 100%;
`;
export const Qty = styled.span`
  border: 1px solid #e8222e;
  color: #e8222e;
  border-radius: 0 0.5em 0 0.5em;
  grid-row: 1 / span 1;
  grid-column: 3 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddButton = styled.button`
  cursor: pointer;
  /* grid-row: 3 / span 1;
  grid-column: 2 / span 2; */
  border: 1px solid black;
  border-radius: 8px 0 8px 0;
  font-family: Roboto;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: 31px;
  width: 90px;
  gap: 0;
  outline: none;
  color: black;
  background-color: white;
  text-transform: none;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  grid-row: 3 / span 1;
  grid-column: 2 / span 2;
  border: 1px solid #e8222e;
  color: #e8222e;
  border-radius: 0.5em 0 0.5em 0;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: 31px;
  width: 90px;
  gap: 0;
  outline: none;
`;
