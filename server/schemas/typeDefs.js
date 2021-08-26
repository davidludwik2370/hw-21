const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
  bookId: String!
  authors: [String]
  description: String!
  image: String
  link: String
  title: String!
  }

  type Mutation {
    addBook(bookId: String!,
      authors: [String],
      description: String!,
      image: String,
      link: String,
      title: String!): Book
  }



  type Query {
    users: [User]
  }
`;

// module.exports = typeDefs;



module.exports = typeDefs;


// type Book {
//   bookId: String!
//   authors: [String]!
//   description: String!
//   image: String
//   link: String
//   title: String!
// }



// addComment(thoughtId: ID!, commentText: String!): Thought
//     removeThought(thoughtId: ID!): Thought
//     removeComment(thoughtId: ID!, commentId: ID!): Thought