import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $coins: Int!) {
    updateUser(id: $id, coins: $coins) {
      id
      coins
    }
  }
`;
