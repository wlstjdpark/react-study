import React from 'react';
import ToDoListItem from './TodoListItem';
import styled from 'styled-components';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <List>
      {todos &&
        todos.map(todo => (
          <ToDoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
    </List>
  );
};

export default TodoList;
