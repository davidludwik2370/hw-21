import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
      savedBooks{
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
