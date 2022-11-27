const { Schema, model } = require('mongoose');

const todoSchema = new Schema ({
  text: String,
  required:true,
  complete: Boolean
});


const Todo = model('Todo', todoSchema);

module.exports = Todo;
