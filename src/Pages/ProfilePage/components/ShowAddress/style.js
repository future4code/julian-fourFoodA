import styled from 'styled-components';
import {
  IconButton
} from '@material-ui/core';
import {
  EditOutlined
} from '@material-ui/icons'

export const AddressContainer = styled.div`
  margin: 0 1em;
  display: flex;
  justify-content: space-between;
  div > p {
    margin: .5em 0;
  }
  div > p:first-of-type {
    color: #b8b8b8;
  }
`
export const AddressIconButton = styled(IconButton)`
  align-self: flex-start;
  width: 24px;
`
export const EditIcon = styled(EditOutlined)`
`