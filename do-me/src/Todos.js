import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div
          className="collection-item"
          onClick={() => {
            deleteTodo(todo.id);
          }}
          key={todo.id}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">No more things to do...</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
