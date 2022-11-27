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
    _id: ID!
    text: String
    createdAt: String
  }

  type Query {
    profiles: [Profile]
    profile(name: String!): Profile
    hello(name: String): String!
    todos(name: String): [Thought]
    todo(thoughtId: ID!): Thought
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile

    createTodo(text: String!): Todo
    updateTodo(todoId: ID!): Todo
    removeTodo(profileId: ID!, todo: String!): Todo
  }
`;

module.exports = typeDefs;
