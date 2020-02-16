import React from 'react';
import TodoTemplate from './Chapter10/TodoTemplate';
import TodoInsert from './Chapter10/TodoInsert';
import TodoList from './Chapter10/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList></TodoList>
    </TodoTemplate>
  );
};

export default App;
