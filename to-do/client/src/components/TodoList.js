import React from 'react';

const TodoList = ({ todos, title }) => {
  if (!todos.length) {
    return <h3>No items Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {todos &&
        todos.map((todo) => (
          <div key={todo._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {todo.todoAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this todo on {todo.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{todo.todoText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
