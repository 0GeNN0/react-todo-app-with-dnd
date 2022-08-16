import React from 'react';

import AddTodoInput from './AddTodoInput';
import { TodoContext } from '../Context';

function AddTodo() {
  const { isDark } = React.useContext(TodoContext);

  const addTodoStyle = {
    backgroundColor: isDark ? '#25273c' : '#fafafa',
    color: isDark ? '#cacde8' : '#161722'
  };

  const circleStyle = {
    borderColor: isDark ? '#4d5066' : '#d2d3db'
  };

  return (
    <div className='add-todo' style={addTodoStyle}>
      <span style={circleStyle}></span>
      <AddTodoInput />
    </div>
  );
}

export default React.memo(AddTodo);