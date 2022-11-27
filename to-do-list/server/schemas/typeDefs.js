const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    hello(name: String): String!
    todos: [Todo]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile

    createTodo(text: String!): Todo
    updateTodo(profileId: ID!, complete: Boolean!): Boolean
    removeTodo(profileId: ID!): Boolean
  }
`;

module.exports = typeDefs;
