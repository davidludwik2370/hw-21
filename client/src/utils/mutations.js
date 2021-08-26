import { gql } from '@apollo/client';

export const ADD_BOOK = gql`
  mutation addBook($profileId: ID!, 
    bookId: String!,
    authors: [String],
    description: String!,
    image: String,
    link: String,
    title: String!) {
    addBook(profileId: $profileId,
      bookId: $bookId
      authors: $authors
      description: $description
      image: $image
      link: $link
      title: $title) {
        token
        profile {
          _id
          name
        }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($profileId: ID!, $bookId: String!) {
    deleteBook(profileId: $profileId, bookId: $bookId) {
      _id
      title
      
    }
  }
`;