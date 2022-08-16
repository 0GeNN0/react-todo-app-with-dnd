import React from 'react';

import { TodoContext } from '../Context';

function AddTodoInput() {
  const { addNewTodo } = React.useContext(TodoContext);

  return (
    <input
      type='text'
      id='add-todo-input'
      placeholder='Create a new todo...'
      onKeyDown={(e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
          addNewTodo(e.target.value);
          e.target.value = '';
        }
      }}
    />
  );
}

export default React.memo(AddTodoInput);