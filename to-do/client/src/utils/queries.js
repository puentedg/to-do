import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      todos {
        _id
        text
        createdAt
      }
    }
  }
`;

export const QUERY_TODOS = gql`
  query getTodos {
    todos {
      _id
      text
      createdAt
    }
  }
`;

