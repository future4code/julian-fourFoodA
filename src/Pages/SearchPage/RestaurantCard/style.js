import styled from "styled-components";
import { Card } from "@material-ui/core";

const RestCard = styled(Card)`
  && {
    margin-bottom: 8px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    box-shadow: none;
  }
`;

const NomeRest = styled.div`
  height: 18px;
  font-family: Roboto;
  margin-left: 16px;
  margin-top: 16px;
  letter-spacing: -0.39px;
  color: #e8222e;
`;

const RestInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  font-family: Roboto;
  margin: 4px 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export { RestCard, NomeRest, RestInfo };
