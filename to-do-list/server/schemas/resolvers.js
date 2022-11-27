const { Todo } = require('../models');

const resolvers = {

  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    todos: () => Todo.find()
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
    }
  }
}

module.exports = resolvers;
