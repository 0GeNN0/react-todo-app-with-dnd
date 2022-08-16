import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { TodoContext } from '../Context';

function TodoListItem({ text, isChecked, id, index }) {
  const [isTodoHovered, setIsTodoHovered] = React.useState(false);
  const [isCheckerHovered, setIsCheckerHovered] = React.useState(false);
  const { isDark, handleChecking, deleteTodo } = React.useContext(TodoContext);

  const checkerStyle = {
    backgroundColor: isChecked ? '#3a7bfd' : 'transparent',
    borderColor: isDark ? isCheckerHovered ? '#777a92' : '#4d5066' : isCheckerHovered ? '#3a7bfd' : '#d2d3db'
  };

  const textStyle = {
    color: isChecked && '#9394a5'
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={`todo-list-item ${isDark ? 'dark' : ''}`}
          onMouseEnter={() => setIsTodoHovered(true)}
          onMouseLeave={() => setIsTodoHovered(false)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span
            className='todo-list-item-checker'
            style={checkerStyle}
            onMouseEnter={() => setIsCheckerHovered(true)}
            onMouseLeave={() => setIsCheckerHovered(false)}
            onClick={() => handleChecking(id)}
          >
            {

              isChecked &&

              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
            }
          </span>
          <p style={textStyle} className='todo-list-item-text'>{isChecked ? <del>{text}</del> : text}</p>
          {

            isTodoHovered &&

            <span
              className='todo-list-item-del-icon'
              onClick={() => deleteTodo(id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
            </span>
          }
        </div>
      )}
    </Draggable>
  );
}

export default React.memo(TodoListItem);