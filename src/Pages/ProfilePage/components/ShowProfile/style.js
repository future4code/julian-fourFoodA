import styled from 'styled-components';
import {
  IconButton
} from '@material-ui/core';
import {
  EditOutlined
} from '@material-ui/icons'

export const ProfileContainer = styled.div`
  margin: 0 1em;
  display: flex;
  justify-content: space-between;
  div > p {
    margin: .5em 0;
  }
`
export const ProfileIconButton = styled(IconButton)`
  align-self: flex-start;
  width: 24px;
`
export const EditIcon = styled(EditOutlined)`
`