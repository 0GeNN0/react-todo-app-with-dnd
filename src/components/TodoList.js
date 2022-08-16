import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TodoListItem from './TodoListItem';
import Footer from './Footer';
import { TodoContext } from '../Context';

function TodoList() {
  const { renderFilteredTodos, isDark, filter, todoList, handleOnDragEnd } = React.useContext(TodoContext);
  const todos = renderFilteredTodos();


  const message = () => {
    if (todoList.length === 0) {
      return `Add Todo And Start Working`;
    } else {
      if (filter === 'active') {
        return `Great Work You Have Done All`;
      } else if (filter === 'completed') {
        let suffixes = todoList.length > 1 ? 's' : '';

        return `You Still Have ${todoList.length} Item${suffixes} To Do`;
      }
    }
  };


  const listStyle = {
    backgroundColor: isDark ? '#25273c' : '#fafafa',
    color: isDark ? '#cacde8' : '#4d5066'
  };

  const emptyMessageStyle = {
    borderBottomColor: isDark ? '#4d5066' : '#d2d3db',
  };

  return (
    <div className='main-todo-list' style={listStyle}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='todos'>
          {(provided) => (
            <div className='todo-list' {...provided.droppableProps} ref={provided.innerRef}>
              {
                todos.length > 0 ?
                  todos.map(
                    (todoItem, i) =>
                      <TodoListItem
                        key={todoItem.id}
                        text={todoItem.text}
                        isChecked={todoItem.isChecked}
                        id={todoItem.id}
                        index={i}
                      />
                  )

                  :

                  <p style={emptyMessageStyle} className='empty'>{message()}</p>

              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Footer />
    </div>
  );
}

export default React.memo(TodoList);