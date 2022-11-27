const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const todoSchema = new Schema ({
  text: {
  type: String,
  required:true,
  trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});


const Todo = model('Todo', todoSchema);

module.exports = Todo;
