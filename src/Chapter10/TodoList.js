import React, { memo, useCallback } from 'react';
import { List } from 'react-virtualized';
import ToDoListItem from './TodoListItem';
import styled from 'styled-components';

const MyList = styled(List)`
  min-height: 320px;
  max-height: 513px;
  overflow: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <ToDoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        ></ToDoListItem>
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <MyList
      width={512} // 전체 크기
      height={513} //  전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57}
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    >
      {todos &&
        todos.map(todo => (
          <ToDoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
    </MyList>
  );
};

export default memo(TodoList);
