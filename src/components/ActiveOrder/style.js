import styled from 'styled-components';
import {
  Schedule
} from '@material-ui/icons';

export const ActiveOrderContainer = styled.div`
  background-color: #e8222e;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 55px;
`
export const OrderContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div {
    margin-left: 1.5rem;
    p {
      margin: 0;
    }
    p:first-of-type {
      color: #eee
    }
    p:nth-of-type(2) {
      margin: .5rem 0;
    }
    p:last-of-type {
      font-weight: bold;
    }
  }
`
export const ScheduleIcon = styled(Schedule)`
  && {
    width: 2rem;
    height: auto;
    color: #eee;
  }
`