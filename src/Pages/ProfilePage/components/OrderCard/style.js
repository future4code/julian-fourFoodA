import styled from 'styled-components';
import {
  Card
} from '@material-ui/core';

export const OrderContainer = styled(Card)`
  && {
    margin: .5em 0;
    padding: 1em;
  }
  p {
    margin: 0;
  }
  p:first-of-type {
    color: #e8222e;
  }
  p:nth-of-type(2) {
    margin: 1rem 0;
    font-size: .75em;
  }
  p:last-of-type {
    font-weight: bold;
  }
`