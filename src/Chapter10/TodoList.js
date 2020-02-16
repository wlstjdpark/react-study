import React from 'react';
import ToDoListItem from './TodoListItem';
import styled from 'styled-components';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow: auto;
`;

const TodoList = () => {
  return (
    <List>
      <ToDoListItem></ToDoListItem>
      <ToDoListItem></ToDoListItem>
      <ToDoListItem></ToDoListItem>
    </List>
  );
};

export default TodoList;
