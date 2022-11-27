import React from 'react';
import { useQuery } from '@apollo/client';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import { QUERY_TODO } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_TODO);
  const todos = data?.todos || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TodoForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {(
            <TodoList
              todos={todos}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
