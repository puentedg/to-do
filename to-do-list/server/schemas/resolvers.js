const { AuthenticationError } = require('apollo-server-express');
const { Todo, Profile } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {

  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    
    todos: () => Todo.find(),

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },
  Mutation: {
    createTodo: async (_, { text }) => {
      const todo = new Todo({ text, complete: false });
      
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { id, complete }) => {
   
      await Todo.findByIdAndUpdate(id, {complete});
      return true;
    },
    removeTodo: async (_, { id }) => {

      await Todo.findByIdAndRemove(id);
      return true;
    },
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    }
  }
}

module.exports = resolvers;
